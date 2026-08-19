export const academicStudies = [
  {
    slug: 'county-city-research',
    title: '县级市研究',
    eyebrow: '行政区划与地方制度',
    type: '研究手稿',
    date: '2024',
    summary: '从行政区划与行政级别的区分出发，梳理宪法第三十条中“市”的不同含义，讨论县级市、地级市及省直辖县级行政区的制度位置。',
    intro: '这是一份围绕县级市制度展开的个人研究手稿。文章从“行政区划是三级、行政级别是四级”的基本区分进入，沿着直辖市、省自治区分的市、较大的市、自治州分的市等脉络，尝试把常见的行政区划现象放回宪法和法律结构中理解。',
    keywords: ['行政区划', '行政级别', '县级市', '宪法第三十条'],
    abstract: '文章关注我国行政区划与行政级别之间并不完全重合的关系，重点分析宪法第三十条中“市”的多重含义，以及县级市在省、地、县、乡结构中的位置。全文还讨论直辖市、较大的市、自治州分的市、省直辖县级行政区、区公所等较为特殊的制度安排。',
    sections: [
      '首先要理解，我国的行政区划是三级，而行政级别是四级',
      '理解宪法第三十条，关键在于理解出现五次的“市”',
      '直辖市',
      '省、自治区分为的市',
      '较大的市',
      '自治州分为的市',
      '附录：省直辖的县级行政区、特殊的乡级行政区、区公所等'
    ],
    files: [
      { label: '阅读 PDF 全文', path: '/academic/county-city-research.pdf', kind: 'primary' },
      { label: '下载 Markdown 原稿', path: '/academic/county-city-research.md', kind: 'secondary' }
    ]
  },
  {
    slug: 'amateur-radio-administration',
    title: '基层业余无线电行政管理制度完善研究',
    eyebrow: '法学辅修毕业论文',
    type: '本科毕业论文',
    date: '2025',
    summary: '以基层业余无线电行政管理制度为研究对象，分析历史沿革、现实困境与比较法经验，并提出执法资源、设备监管、频率协调和立法完善等建议。',
    intro: '这是一篇法学辅修毕业论文，试图把一个具体的技术爱好领域放进公共管理与行政法的框架中观察。文章既关注频谱干扰、行政管理差异等实践问题，也关注管理主体、法律规范和执法机制之间的制度衔接。',
    keywords: ['业余无线电管理', '频谱资源', '无线电法律规制', '行政执法'],
    abstract: '近几年，我国业余无线电台数量快速增长，与之相伴的是台站管理和法律规制方面的问题。本文从历史沿革、当前政策和现存问题等角度展开分析，并借鉴美国、日本、英国等国家的无线电管理经验，提出整合无线电执法资源、加强设备监管、规范频率协调机制以及完善相关法律法规等建议，以构建标准化、科学化的无线电管理框架。',
    sections: [
      '一、导论',
      '二、我国内地对业余无线电领域的规制',
      '三、国内业余无线电领域存在的问题',
      '四、其他法域对业余无线电的法律规制',
      '五、我国基层业余无线电管理制度的完善',
      '参考文献',
      '致谢'
    ],
    files: [
      { label: '阅读 PDF 全文', path: '/academic/amateur-radio-administration.pdf', kind: 'primary' },
      { label: '下载 Word 原稿', path: '/academic/amateur-radio-administration.docx', kind: 'secondary' }
    ]
  }
] as const;

export type AcademicStudy = (typeof academicStudies)[number];

export function getAcademicStudy(slug: string) {
  return academicStudies.find((study) => study.slug === slug);
}
