export type AestheticPhoto = {
  slug: string;
  filename: string;
  location: string;
  dateLabel: string;
  equipment: string | null;
  dimensions: string;
  quote: string;
};

export const aestheticPhotos: AestheticPhoto[] = [
  {
    slug: 'xiaoshan-nandafang',
    filename: '2019-xiaoshan-nandafang.jpg',
    location: '萧山 南大房',
    dateLabel: '2019年7月',
    equipment: 'Smartisan Nut Pro 2（坚果 Pro 2）',
    dimensions: '1067 × 800',
    quote: '2019年7月和姨夫的浙北文化之旅，是人生中最温暖的回忆之一。'
  },
  {
    slug: 'wuxi-jiachengli',
    filename: '2020-wuxi-jiachengli.jpg',
    location: '无锡 夹城里',
    dateLabel: '2020年7月',
    equipment: null,
    dimensions: '1200 × 800',
    quote: '用镜头记录下龟背壳中，最后一片旧时的记忆。'
  },
  {
    slug: 'suzhou-zhixing-mountain',
    filename: '2020-suzhou-zhixing-mountain.jpg',
    location: '苏州 支硎山',
    dateLabel: '2020年12月',
    equipment: 'Sony NEX-5N + Sigma 30mm F1.4 DC DN Contemporary',
    dimensions: '1890 × 1062',
    quote: '小光头中蕴含着高二的，思考、快乐和苦楚。'
  },
  {
    slug: 'wuxi-nanquan',
    filename: '2021-wuxi-nanquan.jpg',
    location: '无锡 南泉',
    dateLabel: '2021年2月',
    equipment: 'Smartisan Nut R1（坚果 R1）',
    dimensions: '1067 × 800',
    quote: '用罗永浩时代锤子科技的最后一部坚果旗舰机拍下。'
  },
  {
    slug: 'wuxi-xicang',
    filename: '2023-wuxi-xicang.jpg',
    location: '无锡 西仓',
    dateLabel: '2023年1月12日 22:00',
    equipment: 'Sony A7S II + Nikon AI-S Nikkor 105mm f/2.5',
    dimensions: '4240 × 2384',
    quote: '是明代斑驳的墙根。'
  },
  {
    slug: 'yangzhou-geyuan',
    filename: '2023-yangzhou-geyuan.jpg',
    location: '扬州 个园',
    dateLabel: '2023年2月26日 21:50',
    equipment: 'Sony A7S II + Nikon AI-S Nikkor 105mm f/2.5',
    dimensions: '4168 × 2344',
    quote: '充满大师与欢笑的城市，图为船巷。'
  },
  {
    slug: 'hangzhou-museum',
    filename: '2023-hangzhou-museum.jpg',
    location: '杭州博物馆',
    dateLabel: '2023年8月',
    equipment: 'Contax G1 + Carl Zeiss Biogon T* 28mm f/2.8（原装广角镜头）',
    dimensions: '3283 × 2220',
    quote: '镜头的虚实变化，仿佛就是流淌过的历史。'
  },
  {
    slug: 'nanjing-xiuqiu-park',
    filename: '2026-nanjing-xiuqiu-park.jpg',
    location: '南京 绣球公园',
    dateLabel: '2026年6月2日 17:53',
    equipment: 'Nikon Z 5 + NIKKOR Z 24-200mm f/4-6.3 VR',
    dimensions: '4157 × 2338',
    quote: '这是我第一次拍到鹊鸲。'
  },
  {
    slug: 'fuzhou',
    filename: '2026-fuzhou.jpg',
    location: '福州 马尾',
    dateLabel: '2026年6月30日 12:39',
    equipment: 'Nikon Z 5 + NIKKOR Z 24-200mm f/4-6.3 VR',
    dimensions: '4292 × 3317',
    quote: '合唱团来了！'
  },
  {
    slug: 'daxigang-wetland-banded-pitta',
    filename: '2026-daxigang-wetland-banded-pitta.jpg',
    location: '大溪港湿地 斑姬啄木鸟',
    dateLabel: '2026年7月17日 17:49',
    equipment: 'Panasonic Lumix DMC-GH4 + Panasonic Lumix G Vario 100-300mm f/4-5.6 II POWER O.I.S.',
    dimensions: '1888 × 2517',
    quote: '那天最惊喜的一张。'
  }
];
