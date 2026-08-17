export const categories = [
  {
    id: 'travel',
    name: '旅途中的思索',
    intro: '把旅行、古建、文学现场和路上的自我追问放在一起。'
  },
  {
    id: 'birding',
    name: '小謇观鸟',
    intro: '从校园到城市，从旅途到日常，用鸟鸣重新观看世界。'
  },
  {
    id: 'education',
    name: '我的基础教育',
    intro: '关于天一、成长、普通同学的声音，以及那些被看见的时刻。'
  }
] as const;

export type CategoryId = (typeof categories)[number]['id'];

export function getCategory(id: string) {
  return categories.find((category) => category.id === id) ?? categories[0];
}
