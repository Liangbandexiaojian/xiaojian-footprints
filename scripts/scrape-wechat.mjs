import * as cheerio from 'cheerio';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const articles = [
  {
    url: 'https://mp.weixin.qq.com/s/4L5xxBasDPKcCbcVUrN35g',
    slug: 'quanjiao-one-day',
    category: 'travel',
    summary: '从吴敬梓故居、古桥与车站歌声里，记录一次全椒一日游。'
  },
  {
    url: 'https://mp.weixin.qq.com/s/T6Q99QoMMcfTX8tHYcO2cQ',
    slug: 'yangzhouman-ershisiqiao',
    category: 'travel',
    summary: '在二十四桥旁背诵姜夔《扬州慢》，让同样的冬天与二十岁彼此照面。'
  },
  {
    url: 'https://mp.weixin.qq.com/s/xf887pABjE_y1wNMWBiWEw',
    slug: 'xiaoshan-new-year',
    category: 'travel',
    summary: '大年初二重访萧山党山与南大房，在古建、亲友和记忆里重新理解远方。'
  },
  {
    url: 'https://mp.weixin.qq.com/s/sS-teEmH1CUX9UL1wXnWtA',
    slug: 'zhimailing-stargazing',
    category: 'travel',
    summary: '一场止马岭观星露营，把天文、童年愿望与二十岁的豁达连接起来。'
  },
  {
    url: 'https://mp.weixin.qq.com/s/Y68ztjtC6b3Reecoi9SVUg',
    slug: 'chuzhou-xijian-recitation',
    category: 'travel',
    summary: '在滁州西水关旁重读《滁州西涧》，把小学记忆和古诗现场接上。'
  },
  {
    url: 'https://mp.weixin.qq.com/s/qqVpXJ4vjHgZyl2tuQGnCQ',
    slug: 'aviation-martyrs-cemetery',
    category: 'travel',
    summary: '细雨中游览南京抗日航空烈士纪念馆，凝视年轻生命与职业理想。'
  },
  {
    url: 'https://mp.weixin.qq.com/s/XvUB44fIBvuS2UafnXS0xA',
    slug: 'nuis-last-month-birding',
    category: 'birding',
    summary: '在南信大的最后一个月，开始用观鸟重新观看校园。'
  },
  {
    url: 'https://mp.weixin.qq.com/s/c5WPJ_GiTMlZoq7ThdIvCA',
    slug: 'hangzhou-fuzhou-birding',
    category: 'birding',
    summary: '杭州与福州旅途中顺便观鸟，让城市风景多了一层生命的厚度。'
  },
  {
    url: 'https://mp.weixin.qq.com/s/3qwOzpGdJfKYFgrYPZRuBA',
    slug: 'longtermism-behind',
    category: 'education',
    summary: '复盘《在天一遇见长期主义》的写作缘起，回应普通同学也值得被看见。'
  },
  {
    url: 'https://mp.weixin.qq.com/s/JRRofEJJHxU4OVnb7__MEw',
    slug: 'tianyi-longtermism',
    category: 'education',
    summary: '发表于江苏省天一中学公众号的校友文章，讲述成长中的长期主义。',
    coverImageIndex: 2,
    removeImageIndexes: [1, 3, 4, 6, 9, 17, 20]
  },
  {
    url: 'https://mp.weixin.qq.com/s/iT5dcoXJ8FqJbhnfiKUcMw',
    slug: 'tianyi-model-student',
    category: 'education',
    summary: '初中时期刊发于无锡市天一实验学校公众号的个人报道。'
  }
];

const headers = {
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36',
  'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8'
};

function htmlDecode(value = '') {
  return value;
}

function firstMatch(html, patterns) {
  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match?.[1]) return htmlDecode(match[1]).trim();
  }
  return '';
}

function slugExtFromUrl(url, contentType) {
  const parsed = new URL(url);
  const wxFmt = parsed.searchParams.get('wx_fmt');
  if (wxFmt) return wxFmt.replace('jpeg', 'jpg').replace(/[^a-z0-9]/gi, '').toLowerCase();
  if (contentType?.includes('png')) return 'png';
  if (contentType?.includes('webp')) return 'webp';
  if (contentType?.includes('gif')) return 'gif';
  return 'jpg';
}

async function downloadImage(src, articleUrl, slug, index) {
  const absolute = src.startsWith('//') ? `https:${src}` : src;
  const res = await fetch(absolute, {
    headers: {
      ...headers,
      referer: articleUrl,
      accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
    }
  });
  if (!res.ok) throw new Error(`Image ${res.status}: ${absolute}`);
  const contentType = res.headers.get('content-type') || '';
  const ext = slugExtFromUrl(absolute, contentType);
  const dir = path.join(root, 'public', 'images', 'articles', slug);
  await mkdir(dir, { recursive: true });
  const fileName = `${String(index).padStart(2, '0')}.${ext}`;
  const buffer = Buffer.from(await res.arrayBuffer());
  await writeFile(path.join(dir, fileName), buffer);
  return `/images/articles/${slug}/${fileName}`;
}

function textExcerpt($content) {
  const text = $content.text().replace(/\s+/g, ' ').trim();
  return text.length > 86 ? `${text.slice(0, 86)}...` : text;
}

function removeEmptyTextNodes($, rootSelection) {
  rootSelection.find('p, section').each((_, el) => {
    const $el = $(el);
    const hasMedia = $el.find('img, iframe, video').length > 0;
    if (!hasMedia && !$el.text().trim()) $el.remove();
  });
}

async function convertArticle(item) {
  console.log(`Fetching ${item.slug}`);
  const res = await fetch(item.url, { headers });
  if (!res.ok) throw new Error(`Page ${res.status}: ${item.url}`);
  const html = await res.text();
  const $ = cheerio.load(html);

  const title = $('#activity-name').text().trim()
    || firstMatch(html, [/var\s+msg_title\s*=\s*htmlDecode\("(.*?)"\)/s, /<meta property="og:title" content="([^"]*)"/s, /<title>(.*?)<\/title>/s]);
  const author = $('#js_author_name').text().trim() || '小謇';
  const account = $('#js_name').text().trim() || '小謇的足迹';
  const description = firstMatch(html, [/var\s+msg_desc\s*=\s*htmlDecode\("(.*?)"\)/s, /<meta property="og:description" content="([^"]*)"/s]);
  const ct = firstMatch(html, [/var\s+ct\s*=\s*"?(\d{10})"?/s, /ct\s*=\s*"?(\d{10})"?/s]);
  const date = ct ? new Date(Number(ct) * 1000).toLocaleDateString('sv-SE', { timeZone: 'Asia/Shanghai' }) : '';

  const $content = $('#js_content').first();
  if (!$content.length) throw new Error(`No js_content for ${item.slug}`);

  $content.find('script, style, mp-style-type, svg').remove();
  $content.find('iframe').each((_, iframe) => {
    $(iframe).replaceWith(`<p class="video-note"><a href="${item.url}">原文含视频，请到公众号原文观看</a></p>`);
  });

  let imageIndex = 0;
  let featureImage = '';
  let coverImageElement = null;
  const removeImageIndexes = new Set(item.removeImageIndexes || []);
  const removeImageElements = [];
  for (const img of $content.find('img').toArray()) {
    const $img = $(img);
    const source = $img.attr('data-src') || $img.attr('src');
    if (!source || source.startsWith('data:')) {
      $img.remove();
      continue;
    }
    imageIndex += 1;
    try {
      const localPath = await downloadImage(source, item.url, item.slug, imageIndex);
      const isConfiguredCover = item.coverImageIndex ? imageIndex === item.coverImageIndex : !featureImage;
      if (isConfiguredCover) {
        featureImage = localPath;
        coverImageElement = img;
      }
      if (removeImageIndexes.has(imageIndex)) removeImageElements.push(img);
      $img.attr({ src: localPath, alt: `${title} 图片 ${imageIndex}`, loading: 'lazy' });
    } catch (error) {
      console.warn(`  image skipped: ${error.message}`);
      $img.replaceWith(`<a class="image-fallback" href="${source}">查看原图</a>`);
    }
  }

  for (const imageElement of new Set([coverImageElement, ...removeImageElements].filter(Boolean))) {
    const $coverParent = $(imageElement).parent();
    $(imageElement).remove();
    if (!$coverParent.text().trim() && !$coverParent.find('img, iframe, video').length) $coverParent.remove();
  }

  $content.find('*').each((_, el) => {
    const $el = $(el);
    const tag = el.tagName?.toLowerCase();
    const keep = new Set();
    if (tag === 'a') keep.add('href');
    if (tag === 'img') ['src', 'alt', 'loading'].forEach((attr) => keep.add(attr));
    if (tag === 'p' && $el.hasClass('video-note')) keep.add('class');
    if (tag === 'a' && $el.hasClass('image-fallback')) keep.add('class');
    for (const attr of Object.keys(el.attribs || {})) {
      if (!keep.has(attr)) $el.removeAttr(attr);
    }
  });

  $content.find('a').each((_, a) => {
    const $a = $(a);
    const href = $a.attr('href');
    if (href && !href.startsWith('#')) {
      $a.attr('target', '_blank');
      $a.attr('rel', 'noreferrer');
    }
  });

  removeEmptyTextNodes($, $content);

  const content = $content.html()?.trim() || '';
  const plainText = $content.text().replace(/\s+/g, ' ').trim();

  return {
    title,
    slug: item.slug,
    category: item.category,
    date,
    author,
    account,
    summary: item.summary || description || textExcerpt($content),
    description: description || item.summary || textExcerpt($content),
    url: item.url,
    featureImage,
    imageCount: imageIndex - [...removeImageIndexes].filter((index) => index <= imageIndex).length,
    wordCount: plainText.length,
    content
  };
}

const generated = [];
for (const item of articles) {
  generated.push(await convertArticle(item));
}

const target = path.join(root, 'src', 'data', 'articles.generated.ts');
const source = `export const articles = ${JSON.stringify(generated, null, 2)} as const;\n\nexport type Article = (typeof articles)[number];\n`;
await writeFile(target, source, 'utf8');
console.log(`Wrote ${target}`);








