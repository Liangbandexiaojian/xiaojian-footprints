export const articleCoverOverrides = {
  'zhimailing-stargazing': {
    type: 'image',
    src: '/images/articles/zhimailing-stargazing/cover.jpg'
  },
  'chuzhou-xijian-recitation': {
    type: 'image',
    src: '/images/articles/chuzhou-xijian-recitation/cover.jpg'
  },
  'longtermism-behind': {
    type: 'image',
    src: '/images/articles/longtermism-behind/cover.jpg'
  },
  'tianyi-model-student': {
    type: 'image',
    src: '/images/articles/tianyi-model-student/cover.png'
  }
} as const;

export function getArticleCover(article: { slug: string; featureImage: string }) {
  const override = articleCoverOverrides[article.slug as keyof typeof articleCoverOverrides];
  if (override) return override;
  if (article.featureImage) return { type: 'image', src: article.featureImage } as const;
  return { type: 'quote', label: '小謇的足迹', quote: '行走、文学、观鸟与自我记录。' } as const;
}

