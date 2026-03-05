import { City } from '@/lib/types';

export const cities: City[] = [
  {
    id: 'shanghai',
    name: '上海',
    province: '上海',
    tags: ['国际大都市', '金融中心', '时尚之都', '多元文化'],
    description: '中国最大的经济中心城市，国际化程度高，生活便利，机会丰富。',
    traits: {
      lifestyle: 9,    // 生活节奏快
      career: 10,      // 职业机会极多
      social: 9,       // 社交活跃
      culture: 9,      // 文化多元
      psychology: 7    // 心理压力较大
    },
    lifestyle: '生活节奏极快，24小时不打烊，地铁网络发达，外卖便利，夜生活丰富，适合喜欢热闹和高效的人。',
    career: '金融、贸易、科技、创意产业聚集，外企总部众多，晋升机会多，薪资水平全国领先，但竞争激烈。',
    social: '人口密度高，社交机会多，国际化程度高，可以接触到来自世界各地的人，但人际关系相对复杂。',
    culture: '东西方文化交融，艺术展览、音乐节、时尚活动频繁，咖啡馆文化浓厚，创意空间遍布全市。',
    advantages: [
      '国际化程度高，视野开阔',
      '职业机会多，薪资待遇好',
      '生活便利，公共服务完善',
      '文化活动丰富，娱乐选择多样'
    ],
    challenges: [
      '生活成本极高，房价压力大',
      '竞争激烈，工作压力大',
      '人口密集，交通拥堵',
      '节奏快，容易感到焦虑'
    ],
    recommendations: [
      '提前做好财务规划，控制生活成本',
      '学会工作生活平衡，定期放松',
      '利用丰富的文化资源充实自己',
      '建立稳定的社交圈，获得支持'
    ]
  },
  {
    id: 'beijing',
    name: '北京',
    province: '北京',
    tags: ['政治中心', '文化古都', '科技创新', '教育高地'],
    description: '中国的首都，政治、文化、国际交往和科技创新中心，历史底蕴深厚。',
    traits: {
      lifestyle: 8,    // 生活节奏快
      career: 10,      // 职业机会多
      social: 8,       // 社交活跃
      culture: 10,     // 文化底蕴深厚
      psychology: 7    // 压力较大
    },
    lifestyle: '生活节奏快但有序，四季分明，教育资源丰富，历史悠久，适合重视教育和文化的人。',
    career: '政治、科技、教育、文化产业聚集，央企总部、互联网大厂集中，创业氛围浓厚。',
    social: '人口素质高，知识分子聚集，社交圈层明显，政治话题讨论多，人际关系较为正式。',
    culture: '传统文化与现代科技并存，故宫、长城等历史遗迹与现代建筑共存，文化活动丰富多样。',
    advantages: [
      '文化底蕴深厚，历史资源丰富',
      '教育资源全国顶尖',
      '科技产业发达，创新氛围浓',
      '政治中心，政策信息灵通'
    ],
    challenges: [
      '生活成本高，房价压力大',
      '交通拥堵严重',
      '气候干燥，冬天寒冷',
      '政治氛围浓厚，相对严肃'
    ],
    recommendations: [
      '充分利用教育资源，提升自己',
      '适应北京的节奏和文化氛围',
      '关注政策动向，把握机遇',
      '保持开放心态，融入多元文化'
    ]
  },
  {
    id: 'shenzhen',
    name: '深圳',
    province: '广东',
    tags: ['科技之都', '创新之城', '年轻活力', '创业天堂'],
    description: '改革开放的窗口，科技产业发达，充满创新活力，年轻人聚集的城市。',
    traits: {
      lifestyle: 9,    // 生活节奏极快
      career: 10,      // 职业机会极多
      social: 8,       // 社交活跃
      culture: 7,      // 文化在发展中
      psychology: 6    // 压力大但机会多
    },
    lifestyle: '生活节奏极快，24小时奋斗氛围浓厚，年轻人口多，创新意识强，适合有梦想的年轻人。',
    career: '科技、互联网、制造业聚集，华为、腾讯等巨头总部，创业公司众多，晋升速度快。',
    social: '人口年轻化，社交圈以创业者、科技从业者为主，人际关系相对简单，重视能力。',
    culture: '创新文化浓厚，创业精神突出，文化活动以科技、创新为主题，传统元素较少。',
    advantages: [
      '科技产业发达，机会无限',
      '年轻人口多，活力四射',
      '创业氛围浓厚，创新精神',
      '气候温暖，环境优美'
    ],
    challenges: [
      '生活成本高，房价压力大',
      '工作强度极大，996普遍',
      '历史底蕴薄弱，文化相对单一',
      '教育医疗资源相对不足'
    ],
    recommendations: [
      '抓住科技发展机遇，提升技能',
      '注意身体健康，避免过度劳累',
      '关注创业生态，寻找合作机会',
      '参与创新活动，拓展视野'
    ]
  },
  {
    id: 'guangzhou',
    name: '广州',
    province: '广东',
    tags: ['商贸之城', '美食之都', '岭南文化', '包容开放'],
    description: '千年商都，岭南文化中心，美食天堂，商贸发达，生活气息浓厚。',
    traits: {
      lifestyle: 7,    // 生活节奏适中偏快
      career: 8,       // 商贸机会多
      social: 8,       // 社交活跃
      culture: 8,      // 岭南文化丰富
      psychology: 7    // 生活满意度高
    },
    lifestyle: '生活节奏适中，重视生活质量，美食文化发达，夜市文化浓厚，适合享受生活的人。',
    career: '商贸、制造业、服务业发达，广交会等展会众多，创业环境良好，但科技相对深圳略弱。',
    social: '包容性强，外地人容易融入，人际关系相对务实，重视商业合作。',
    culture: '岭南文化代表，早茶文化、粤剧、龙舟等传统保留完好，中西文化交融。',
    advantages: [
      '美食文化发达，生活质量高',
      '商贸历史悠久，商业氛围浓',
      '包容开放，外地人易融入',
      '医疗教育资源丰富'
    ],
    challenges: [
      '夏天湿热，台风较多',
      '相比一线城市，发展速度稍慢',
      '语言文化差异（粤语）',
      '交通压力较大'
    ],
    recommendations: [
      '享受美食文化，提高生活品质',
      '学习粤语，更好融入本地',
      '利用商贸优势，拓展业务',
      '适应湿热气候，做好防护'
    ]
  },
  {
    id: 'chengdu',
    name: '成都',
    province: '四川',
    tags: ['休闲之都', '美食天堂', '熊猫故乡', '文化古都'],
    description: '天府之国，生活节奏慢，美食丰富，文化底蕴深厚，幸福感高的城市。',
    traits: {
      lifestyle: 4,    // 生活节奏慢
      career: 6,       // 发展机会适中
      social: 7,       // 社交活跃
      culture: 8,      // 文化底蕴深厚
      psychology: 9    // 生活满意度极高
    },
    lifestyle: '生活节奏慢，重视享受生活，茶馆文化浓厚，火锅美食遍地，适合追求生活质量的人。',
    career: '科技、文创、服务业发展迅速，但相比一线城市机会较少，适合追求工作生活平衡的人。',
    social: '人口友善，性格温和，社交圈轻松自在，重视人情味。',
    culture: '川文化代表，蜀文化、三国文化、熊猫文化，艺术氛围浓厚，悠闲自在。',
    advantages: [
      '生活节奏慢，幸福感高',
      '美食文化发达，特别是火锅',
      '房价相对较低，生活压力小',
      '文化底蕴深厚，旅游资源丰富'
    ],
    challenges: [
      '职业机会相对较少',
      '薪资水平不如一线城市',
      '地处内陆，国际化程度较低',
      '交通不如沿海发达'
    ],
    recommendations: [
      '享受慢生活，注重生活品质',
      '发掘本地商业机会',
      '学习川文化，丰富精神生活',
      '利用旅游资源，发展相关产业'
    ]
  },
  {
    id: 'hangzhou',
    name: '杭州',
    province: '浙江',
    tags: ['互联网之都', '人间天堂', '电商之城', '江南水乡'],
    description: '电商之都，互联网产业发达，西湖美景，江南水乡，历史与现代交融。',
    traits: {
      lifestyle: 7,    // 生活节奏适中
      career: 9,       // 电商和科技机会多
      social: 7,       // 社交活跃
      culture: 9,      // 文化底蕴深厚
      psychology: 8    // 生活满意度高
    },
    lifestyle: '生活节奏适中，自然风光优美，环境质量好，适合追求品质生活的人。',
    career: '电商、互联网、金融科技发达，阿里巴巴总部，创业机会多，发展空间大。',
    social: '人口素质高，受教育程度高，社交圈以互联网从业者为主，创新氛围浓。',
    culture: '江南文化代表，西湖文化、茶文化、丝绸文化，古典与现代完美结合。',
    advantages: [
      '互联网产业发达，电商之都',
      '环境优美，生活质量高',
      '历史文化深厚，旅游资源丰富',
      '地理位置优越，紧邻上海'
    ],
    challenges: [
      '房价上涨快，生活成本增加',
      '工作压力大，加班文化普遍',
      '交通拥堵日益严重',
      '相比一线城市，国际化程度较低'
    ],
    recommendations: [
      '抓住电商发展机遇',
      '平衡工作与生活，享受美景',
      '利用地理优势，对接上海资源',
      '发展特色产业，如旅游、文创'
    ]
  },
  {
    id: 'nanjing',
    name: '南京',
    province: '江苏',
    tags: ['六朝古都', '教育高地', '科教中心', '历史名城'],
    description: '六朝古都，历史底蕴深厚，教育资源丰富，科教发达，宜居城市。',
    traits: {
      lifestyle: 6,    // 生活节奏适中
      career: 7,       // 发展机会适中
      social: 6,       // 社交适中
      culture: 10,     // 文化底蕴极深厚
      psychology: 8    // 生活满意度高
    },
    lifestyle: '生活节奏适中，重视教育，文化氛围浓厚，适合重视教育和文化的家庭。',
    career: '教育、科研、制造业发达，高校众多，人才储备丰富，但相比一线城市机会较少。',
    social: '人口素质高，知识分子聚集，社交圈以教育科研人员为主，文化氛围浓厚。',
    culture: '六朝文化代表，明文化、民国文化，历史遗迹众多，文化底蕴深厚。',
    advantages: [
      '教育资源全国顶尖',
      '历史文化底蕴深厚',
      '生活成本相对较低',
      '环境优美，宜居城市'
    ],
    challenges: [
      '经济活力不如沿海城市',
      '职业机会相对较少',
      '夏天炎热，冬季寒冷',
      '相比一线城市，国际化程度低'
    ],
    recommendations: [
      '充分利用教育资源',
      '发展文化相关产业',
      '利用地理优势，对接长三角',
      '重视历史文化保护与发展'
    ]
  },
  {
    id: 'wuhan',
    name: '武汉',
    province: '湖北',
    tags: ['九省通衢', '科教重镇', '英雄城市', '江城'],
    description: '九省通衢，交通枢纽，科教发达，高校众多，充满活力的中部中心城市。',
    traits: {
      lifestyle: 7,    // 生活节奏适中偏快
      career: 7,       // 发展机会适中
      social: 7,       // 社交活跃
      culture: 7,      // 文化多元
      psychology: 7    // 生活满意度适中
    },
    lifestyle: '生活节奏适中，交通便利，美食丰富，学生人口多，活力十足。',
    career: '科技、教育、制造业发达，高校众多，人才储备丰富，但薪资水平一般。',
    social: '人口年轻化，学生群体大，社交圈活跃，开放包容。',
    culture: '楚文化代表，江城文化，多元文化交融，艺术氛围浓厚。',
    advantages: [
      '交通枢纽，交通便利',
      '科教发达，高校众多',
      '生活成本相对较低',
      '美食丰富，过早文化独特'
    ],
    challenges: [
      '夏天炎热，火炉城市',
      '经济活力不如沿海',
      '薪资水平相对较低',
      '城市管理有待提升'
    ],
    recommendations: [
      '利用交通优势，发展物流产业',
      '发挥科教优势，吸引人才',
      '发展特色产业，如光电子',
      '改善城市管理，提升品质'
    ]
  },
  {
    id: 'xian',
    name: '西安',
    province: '陕西',
    tags: ['十三朝古都', '丝绸之路起点', '科教高地', '美食之都'],
    description: '十三朝古都，历史底蕴深厚，科教发达，美食丰富，西北中心城市。',
    traits: {
      lifestyle: 5,    // 生活节奏适中
      career: 6,       // 发展机会适中
      social: 6,       // 社交适中
      culture: 10,     // 文化底蕴极深厚
      psychology: 7    // 生活满意度较高
    },
    lifestyle: '生活节奏适中，重视历史传统，文化氛围浓厚，适合重视历史文化的人。',
    career: '教育、科研、旅游、军工产业发达，高校众多，但薪资水平一般。',
    social: '人口友善，重视传统，社交圈稳定，人情味浓。',
    culture: '秦汉文化代表，唐文化，丝绸之路文化，历史遗迹众多，文化底蕴深厚。',
    advantages: [
      '历史文化底蕴深厚',
      '旅游资源丰富',
      '科教发达，高校众多',
      '美食文化发达'
    ],
    challenges: [
      '经济活力不如沿海',
      '薪资水平相对较低',
      '地理位置相对偏远',
      '环境质量有待改善'
    ],
    recommendations: [
      '发展旅游文化产业',
      '利用历史资源，打造特色',
      '发展科教产业，吸引人才',
      '改善环境质量'
    ]
  },
  {
    id: 'xiamen',
    name: '厦门',
    province: '福建',
    tags: ['海上花园', '浪漫之城', '经济特区', '宜居城市'],
    description: '海上花园，环境优美，气候宜人，浪漫文艺，宜居城市。',
    traits: {
      lifestyle: 5,    // 生活节奏慢
      career: 6,       // 发展机会适中
      social: 6,       // 社交适中
      culture: 7,      // 文化多元
      psychology: 9    // 生活满意度极高
    },
    lifestyle: '生活节奏慢，环境优美，气候宜人，适合追求品质生活的人。',
    career: '旅游、贸易、制造业发达，但相比一线城市机会较少，适合追求生活平衡的人。',
    social: '人口友善，性格温和，社交圈轻松自在，重视人情味。',
    culture: '闽南文化代表，海洋文化，文艺气息浓厚，浪漫氛围。',
    advantages: [
      '环境优美，气候宜人',
      '生活节奏慢，幸福感高',
      '文艺氛围浓厚',
      '生活成本相对较低'
    ],
    challenges: [
      '职业机会相对较少',
      '薪资水平不如一线城市',
      '面积小，发展空间有限',
      '台风多发'
    ],
    recommendations: [
      '发展旅游产业',
      '发挥文艺优势，吸引创意人才',
      '利用区位优势，发展对台贸易',
      '保持环境优势，提升品质'
    ]
  },
  {
    id: 'suzhou',
    name: '苏州',
    province: '江苏',
    tags: ['人间天堂', '园林之城', '工业强市', '江南水乡'],
    description: '人间天堂，园林之城，工业发达，经济实力强，江南水乡。',
    traits: {
      lifestyle: 6,    // 生活节奏适中
      career: 8,       // 工业机会多
      social: 6,       // 社交适中
      culture: 9,      // 文化底蕴深厚
      psychology: 8    // 生活满意度高
    },
    lifestyle: '生活节奏适中，环境优美，园林文化浓厚，适合追求品质生活的人。',
    career: '制造业、高新技术产业发达，工业园区众多，经济实力强，但相比一线城市机会较少。',
    social: '人口素质高，受教育程度高，社交圈以制造业从业者为主，务实低调。',
    culture: '吴文化代表，园林文化、昆曲、评弹，古典与现代结合。',
    advantages: [
      '经济发达，实力强',
      '环境优美，园林之城',
      '生活成本相对较低',
      '紧邻上海，区位优势明显'
    ],
    challenges: [
      '工作压力较大',
      '相比一线城市，国际化程度低',
      '交通拥堵日益严重',
      '文化多样性不如大城市'
    ],
    recommendations: [
      '利用区位优势，对接上海',
      '发展高新技术产业',
      '保护园林文化，发展旅游',
      '提升城市品质'
    ]
  }
];

// 根据用户性格特征匹配城市
export function matchCity(userTraits: Record<string, number>): City {
  let bestMatch = cities[0];
  let highestScore = 0;

  cities.forEach(city => {
    const score = calculateMatchScore(userTraits, city.traits);
    if (score > highestScore) {
      highestScore = score;
      bestMatch = city;
    }
  });

  return bestMatch;
}

// 计算匹配分数
function calculateMatchScore(userTraits: Record<string, number>, cityTraits: Record<string, number>): number {
  const dimensions = ['lifestyle', 'career', 'social', 'culture', 'psychology'];
  let totalDifference = 0;

  dimensions.forEach(dim => {
    const userScore = userTraits[dim] || 5;
    const cityScore = cityTraits[dim] || 5;
    // 计算差异，越小越好
    const difference = Math.abs(userScore - cityScore);
    totalDifference += difference;
  });

  // 将差异转换为匹配分数（0-100）
  const maxDifference = 40; // 最大可能差异总和
  const matchScore = ((maxDifference - totalDifference) / maxDifference) * 100;
  
  return matchScore;
}

// 获取所有城市的匹配分数
export function getAllCityMatches(userTraits: Record<string, number>): Array<{ city: City; matchScore: number }> {
  return cities
    .map(city => ({
      city,
      matchScore: calculateMatchScore(userTraits, city.traits)
    }))
    .sort((a, b) => b.matchScore - a.matchScore);
}
