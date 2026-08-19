export type AestheticPhoto = {
  filename: string;
  location: string;
  dateLabel: string;
  camera: string | null;
  dimensions: string;
};

export const aestheticPhotos: AestheticPhoto[] = [
  {
    filename: '2019-xiaoshan-nandafang.jpg',
    location: '萧山 南大房',
    dateLabel: '2019年7月',
    camera: null,
    dimensions: '1067 × 800'
  },
  {
    filename: '2020-wuxi-jiachengli.jpg',
    location: '无锡 夹城里',
    dateLabel: '2020年7月',
    camera: null,
    dimensions: '1200 × 800'
  },
  {
    filename: '2020-suzhou-zhixing-mountain.jpg',
    location: '苏州 支硎山',
    dateLabel: '2020年12月',
    camera: null,
    dimensions: '1890 × 1062'
  },
  {
    filename: '2021-wuxi-nanquan.jpg',
    location: '无锡 南泉',
    dateLabel: '2021年2月',
    camera: null,
    dimensions: '1067 × 800'
  },
  {
    filename: '2023-wuxi-xicang.jpg',
    location: '无锡 西仓',
    dateLabel: '2023年1月12日 22:00',
    camera: 'SONY ILCE-7SM2',
    dimensions: '4240 × 2384'
  },
  {
    filename: '2023-yangzhou-geyuan.jpg',
    location: '扬州 个园',
    dateLabel: '2023年2月26日 21:50',
    camera: 'SONY ILCE-7SM2',
    dimensions: '4168 × 2344'
  },
  {
    filename: '2023-hangzhou-museum.jpg',
    location: '杭州博物馆',
    dateLabel: '2023年8月',
    camera: null,
    dimensions: '3283 × 2220'
  },
  {
    filename: '2026-nanjing-xiuqiu-park.jpg',
    location: '南京 绣球公园',
    dateLabel: '2026年6月2日 17:53',
    camera: 'NIKON Z5_2',
    dimensions: '4157 × 2338'
  },
  {
    filename: '2026-fuzhou.jpg',
    location: '福州',
    dateLabel: '2026年6月30日 12:39',
    camera: 'NIKON Z5_2',
    dimensions: '4292 × 3317'
  },
  {
    filename: '2026-daxigang-wetland-banded-pitta.jpg',
    location: '大溪港湿地 斑姬啄木鸟',
    dateLabel: '2026年7月17日 17:49',
    camera: 'Panasonic AG-GH4',
    dimensions: '1888 × 2517'
  }
];
