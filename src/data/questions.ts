import { Question } from '@/lib/types';

export const questions: Question[] = [
  // 生活节奏维度 (1-9题)
  {
    id: 1,
    dimension: 'lifestyle',
    question: '周末你更倾向于哪种度过方式？',
    options: [
      {
        value: 'A',
        label: '在咖啡馆读书、逛艺术展，享受慢节奏时光',
        scores: { lifestyle: 2, career: 3, social: 4, culture: 8, psychology: 7 }
      },
      {
        value: 'B',
        label: '安排健身、参加社交活动，充实而忙碌',
        scores: { lifestyle: 7, career: 6, social: 8, culture: 5, psychology: 6 }
      },
      {
        value: 'C',
        label: '灵活安排，有时安静有时热闹',
        scores: { lifestyle: 5, career: 5, social: 6, culture: 6, psychology: 5 }
      },
      {
        value: 'D',
        label: '加班学习、参加行业活动，追求高效',
        scores: { lifestyle: 9, career: 9, social: 7, culture: 4, psychology: 8 }
      }
    ]
  },
  {
    id: 2,
    dimension: 'lifestyle',
    question: '你对上下班通勤时间的容忍度？',
    options: [
      {
        value: 'A',
        label: '30分钟以内，越短越好',
        scores: { lifestyle: 3, career: 5, social: 5, culture: 4, psychology: 5 }
      },
      {
        value: 'B',
        label: '1小时以内可以接受',
        scores: { lifestyle: 6, career: 6, social: 6, culture: 5, psychology: 6 }
      },
      {
        value: 'C',
        label: '1-2小时，可以接受但会尽量优化',
        scores: { lifestyle: 8, career: 8, social: 6, culture: 5, psychology: 7 }
      },
      {
        value: 'D',
        label: '不介意，路上可以学习或休息',
        scores: { lifestyle: 7, career: 7, social: 5, culture: 6, psychology: 6 }
      }
    ]
  },
  {
    id: 3,
    dimension: 'lifestyle',
    question: '你理想的工作节奏是怎样的？',
    options: [
      {
        value: 'A',
        label: '朝九晚五，工作生活平衡',
        scores: { lifestyle: 3, career: 4, social: 5, culture: 6, psychology: 7 }
      },
      {
        value: 'B',
        label: '弹性工作，偶尔加班',
        scores: { lifestyle: 5, career: 6, social: 6, culture: 6, psychology: 6 }
      },
      {
        value: 'C',
        label: '快节奏高强度，追求成就',
        scores: { lifestyle: 9, career: 9, social: 7, culture: 4, psychology: 8 }
      },
      {
        value: 'D',
        label: '自由职业，自己掌控节奏',
        scores: { lifestyle: 6, career: 7, social: 5, culture: 7, psychology: 8 }
      }
    ]
  },
  {
    id: 4,
    dimension: 'lifestyle',
    question: '你对城市夜生活的态度？',
    options: [
      {
        value: 'A',
        label: '不需要，喜欢安静平和',
        scores: { lifestyle: 2, career: 3, social: 3, culture: 5, psychology: 6 }
      },
      {
        value: 'B',
        label: '偶尔享受，但有节制',
        scores: { lifestyle: 5, career: 5, social: 6, culture: 6, psychology: 6 }
      },
      {
        value: 'C',
        label: '喜欢热闹，经常参与',
        scores: { lifestyle: 8, career: 6, social: 9, culture: 7, psychology: 7 }
      },
      {
        value: 'D',
        label: '不热衷，但希望有更多选择',
        scores: { lifestyle: 6, career: 5, social: 7, culture: 7, psychology: 6 }
      }
    ]
  },
  {
    id: 5,
    dimension: 'lifestyle',
    question: '你对房价和生活成本的重视程度？',
    options: [
      {
        value: 'A',
        label: '非常重视，希望生活压力小',
        scores: { lifestyle: 3, career: 4, social: 4, culture: 4, psychology: 6 }
      },
      {
        value: 'B',
        label: '比较重视，但愿意为发展妥协',
        scores: { lifestyle: 6, career: 7, social: 6, culture: 5, psychology: 6 }
      },
      {
        value: 'C',
        label: '不太在意，优先考虑机会',
        scores: { lifestyle: 9, career: 9, social: 7, culture: 5, psychology: 8 }
      },
      {
        value: 'D',
        label: '希望平衡，既要有机会也要可控',
        scores: { lifestyle: 5, career: 6, social: 5, culture: 6, psychology: 6 }
      }
    ]
  },
  {
    id: 6,
    dimension: 'lifestyle',
    question: '你对户外活动和自然环境的偏好？',
    options: [
      {
        value: 'A',
        label: '非常喜欢，希望经常接触自然',
        scores: { lifestyle: 4, career: 5, social: 5, culture: 6, psychology: 7 }
      },
      {
        value: 'B',
        label: '偶尔需要，城市便利更重要',
        scores: { lifestyle: 7, career: 7, social: 7, culture: 6, psychology: 6 }
      },
      {
        value: 'C',
        label: '不太需要，更喜欢城市生活',
        scores: { lifestyle: 8, career: 8, social: 7, culture: 5, psychology: 5 }
      },
      {
        value: 'D',
        label: '希望有平衡，两者都要',
        scores: { lifestyle: 5, career: 6, social: 6, culture: 7, psychology: 7 }
      }
    ]
  },
  {
    id: 7,
    dimension: 'lifestyle',
    question: '你更喜欢哪种居住环境？',
    options: [
      {
        value: 'A',
        label: '安静的小区，远离喧嚣',
        scores: { lifestyle: 2, career: 4, social: 4, culture: 5, psychology: 7 }
      },
      {
        value: 'B',
        label: '繁华地段，交通便利',
        scores: { lifestyle: 8, career: 8, social: 8, culture: 6, psychology: 6 }
      },
      {
        value: 'C',
        label: '城市边缘，性价比高',
        scores: { lifestyle: 5, career: 6, social: 5, culture: 5, psychology: 5 }
      },
      {
        value: 'D',
        label: '特色街区，有生活气息',
        scores: { lifestyle: 6, career: 6, social: 7, culture: 8, psychology: 7 }
      }
    ]
  },
  {
    id: 8,
    dimension: 'lifestyle',
    question: '你对城市"卷文化"（过度竞争）的态度？',
    options: [
      {
        value: 'A',
        label: '非常反感，希望轻松生活',
        scores: { lifestyle: 2, career: 3, social: 4, culture: 5, psychology: 6 }
      },
      {
        value: 'B',
        label: '可以接受，但要有度',
        scores: { lifestyle: 5, career: 6, social: 6, culture: 6, psychology: 6 }
      },
      {
        value: 'C',
        label: '不介意，喜欢竞争和挑战',
        scores: { lifestyle: 9, career: 9, social: 7, culture: 4, psychology: 8 }
      },
      {
        value: 'D',
        label: '视情况而定，平衡竞争与生活',
        scores: { lifestyle: 5, career: 6, social: 5, culture: 6, psychology: 6 }
      }
    ]
  },
  {
    id: 9,
    dimension: 'lifestyle',
    question: '你对四季变化的敏感度？',
    options: [
      {
        value: 'A',
        label: '喜欢明显的四季变化',
        scores: { lifestyle: 5, career: 5, social: 5, culture: 7, psychology: 7 }
      },
      {
        value: 'B',
        label: '偏好温暖，不喜欢极端气候',
        scores: { lifestyle: 6, career: 6, social: 6, culture: 5, psychology: 5 }
      },
      {
        value: 'C',
        label: '不太在意，适应能力强',
        scores: { lifestyle: 7, career: 7, social: 6, culture: 6, psychology: 6 }
      },
      {
        value: 'D',
        label: '希望气候舒适，适合户外活动',
        scores: { lifestyle: 5, career: 5, social: 6, culture: 7, psychology: 7 }
      }
    ]
  },
  // 职业倾向维度 (10-18题)
  {
    id: 10,
    dimension: 'career',
    question: '你更看重工作的哪个方面？',
    options: [
      {
        value: 'A',
        label: '稳定性和福利保障',
        scores: { lifestyle: 4, career: 5, social: 4, culture: 4, psychology: 7 }
      },
      {
        value: 'B',
        label: '薪资待遇和晋升空间',
        scores: { lifestyle: 7, career: 9, social: 6, culture: 5, psychology: 7 }
      },
      {
        value: 'C',
        label: '个人成长和技能提升',
        scores: { lifestyle: 6, career: 8, social: 5, culture: 6, psychology: 7 }
      },
      {
        value: 'D',
        label: '工作意义和社会价值',
        scores: { lifestyle: 5, career: 6, social: 7, culture: 8, psychology: 8 }
      }
    ]
  },
  {
    id: 11,
    dimension: 'career',
    question: '你理想的工作行业是什么？',
    options: [
      {
        value: 'A',
        label: '传统行业，如制造、教育、医疗',
        scores: { lifestyle: 4, career: 5, social: 5, culture: 5, psychology: 6 }
      },
      {
        value: 'B',
        label: '互联网和科技行业',
        scores: { lifestyle: 8, career: 9, social: 7, culture: 6, psychology: 7 }
      },
      {
        value: 'C',
        label: '金融和商业服务',
        scores: { lifestyle: 9, career: 9, social: 8, culture: 5, psychology: 7 }
      },
      {
        value: 'D',
        label: '文化创意、艺术、媒体',
        scores: { lifestyle: 6, career: 6, social: 7, culture: 9, psychology: 8 }
      }
    ]
  },
  {
    id: 12,
    dimension: 'career',
    question: '你对创业的态度？',
    options: [
      {
        value: 'A',
        label: '不感兴趣，喜欢稳定',
        scores: { lifestyle: 3, career: 3, social: 4, culture: 4, psychology: 5 }
      },
      {
        value: 'B',
        label: '观望中，有机会可能尝试',
        scores: { lifestyle: 6, career: 7, social: 6, culture: 6, psychology: 7 }
      },
      {
        value: 'C',
        label: '有强烈兴趣，正在规划',
        scores: { lifestyle: 9, career: 9, social: 8, culture: 6, psychology: 8 }
      },
      {
        value: 'D',
        label: '已经在创业或有明确计划',
        scores: { lifestyle: 9, career: 9, social: 9, culture: 7, psychology: 9 }
      }
    ]
  },
  {
    id: 13,
    dimension: 'career',
    question: '你希望工作地有怎样的人才环境？',
    options: [
      {
        value: 'A',
        label: '人才密度适中，竞争压力小',
        scores: { lifestyle: 4, career: 5, social: 5, culture: 5, psychology: 6 }
      },
      {
        value: 'B',
        label: '人才聚集，可以学习交流',
        scores: { lifestyle: 7, career: 8, social: 7, culture: 7, psychology: 7 }
      },
      {
        value: 'C',
        label: '顶尖人才汇聚，竞争激烈',
        scores: { lifestyle: 9, career: 9, social: 8, culture: 6, psychology: 8 }
      },
      {
        value: 'D',
        label: '多元人才，跨界融合',
        scores: { lifestyle: 7, career: 7, social: 8, culture: 9, psychology: 8 }
      }
    ]
  },
  {
    id: 14,
    dimension: 'career',
    question: '你对远程办公或数字游民的接受度？',
    options: [
      {
        value: 'A',
        label: '不接受，需要固定工作场所',
        scores: { lifestyle: 5, career: 5, social: 5, culture: 4, psychology: 5 }
      },
      {
        value: 'B',
        label: '偶尔可以，但大部分时间需要线下',
        scores: { lifestyle: 6, career: 6, social: 6, culture: 6, psychology: 6 }
      },
      {
        value: 'C',
        label: '非常接受，希望完全远程',
        scores: { lifestyle: 6, career: 7, social: 5, culture: 7, psychology: 7 }
      },
      {
        value: 'D',
        label: '混合模式最好，灵活选择',
        scores: { lifestyle: 6, career: 7, social: 6, culture: 7, psychology: 7 }
      }
    ]
  },
  {
    id: 15,
    dimension: 'career',
    question: '你更倾向于哪种公司文化？',
    options: [
      {
        value: 'A',
        label: '传统稳定，层级分明',
        scores: { lifestyle: 4, career: 5, social: 4, culture: 4, psychology: 5 }
      },
      {
        value: 'B',
        label: '高效务实，结果导向',
        scores: { lifestyle: 8, career: 9, social: 7, culture: 5, psychology: 7 }
      },
      {
        value: 'C',
        label: '创新开放，鼓励冒险',
        scores: { lifestyle: 8, career: 9, social: 8, culture: 7, psychology: 8 }
      },
      {
        value: 'D',
        label: '人文关怀，注重平衡',
        scores: { lifestyle: 5, career: 6, social: 6, culture: 7, psychology: 8 }
      }
    ]
  },
  {
    id: 16,
    dimension: 'career',
    question: '你对职业转换的频率？',
    options: [
      {
        value: 'A',
        label: '希望稳定，长期在一个领域',
        scores: { lifestyle: 4, career: 4, social: 4, culture: 4, psychology: 5 }
      },
      {
        value: 'B',
        label: '每3-5年转换一次',
        scores: { lifestyle: 6, career: 7, social: 6, culture: 6, psychology: 6 }
      },
      {
        value: 'C',
        label: '经常转换，探索不同可能',
        scores: { lifestyle: 8, career: 8, social: 7, culture: 7, psychology: 8 }
      },
      {
        value: 'D',
        label: '跨界转型，打造复合能力',
        scores: { lifestyle: 7, career: 8, social: 7, culture: 8, psychology: 8 }
      }
    ]
  },
  {
    id: 17,
    dimension: 'career',
    question: '你对行业前沿技术和趋势的关注度？',
    options: [
      {
        value: 'A',
        label: '不太关注，专注于本职工作',
        scores: { lifestyle: 5, career: 5, social: 5, culture: 4, psychology: 5 }
      },
      {
        value: 'B',
        label: '偶尔关注，了解基本动态',
        scores: { lifestyle: 6, career: 7, social: 6, culture: 6, psychology: 6 }
      },
      {
        value: 'C',
        label: '非常关注，紧跟前沿',
        scores: { lifestyle: 8, career: 9, social: 7, culture: 7, psychology: 7 }
      },
      {
        value: 'D',
        label: '深度研究，希望成为专家',
        scores: { lifestyle: 7, career: 9, social: 6, culture: 8, psychology: 8 }
      }
    ]
  },
  {
    id: 18,
    dimension: 'career',
    question: '你希望工作地有怎样的产业集群？',
    options: [
      {
        value: 'A',
        label: '传统制造业和服务业',
        scores: { lifestyle: 4, career: 5, social: 5, culture: 4, psychology: 5 }
      },
      {
        value: 'B',
        label: '互联网和科技创新',
        scores: { lifestyle: 8, career: 9, social: 7, culture: 6, psychology: 7 }
      },
      {
        value: 'C',
        label: '金融和商业中心',
        scores: { lifestyle: 9, career: 9, social: 8, culture: 5, psychology: 7 }
      },
      {
        value: 'D',
        label: '文化创意和多元产业',
        scores: { lifestyle: 6, career: 7, social: 7, culture: 9, psychology: 8 }
      }
    ]
  },
  // 社交倾向维度 (19-27题)
  {
    id: 19,
    dimension: 'social',
    question: '你更倾向于哪种社交方式？',
    options: [
      {
        value: 'A',
        label: '少量深交，几个亲密朋友',
        scores: { lifestyle: 4, career: 5, social: 3, culture: 5, psychology: 6 }
      },
      {
        value: 'B',
        label: '适度社交，既有深交也有泛交',
        scores: { lifestyle: 6, career: 6, social: 6, culture: 6, psychology: 6 }
      },
      {
        value: 'C',
        label: '广泛社交，认识很多人',
        scores: { lifestyle: 8, career: 8, social: 9, culture: 7, psychology: 7 }
      },
      {
        value: 'D',
        label: '选择性社交，重视质量而非数量',
        scores: { lifestyle: 5, career: 6, social: 5, culture: 7, psychology: 7 }
      }
    ]
  },
  {
    id: 20,
    dimension: 'social',
    question: '你对陌生人社交的态度？',
    options: [
      {
        value: 'A',
        label: '比较内向，不擅长',
        scores: { lifestyle: 4, career: 5, social: 3, culture: 4, psychology: 5 }
      },
      {
        value: 'B',
        label: '可以接受，但需要时间适应',
        scores: { lifestyle: 6, career: 6, social: 5, culture: 6, psychology: 6 }
      },
      {
        value: 'C',
        label: '非常开放，喜欢认识新朋友',
        scores: { lifestyle: 8, career: 8, social: 9, culture: 7, psychology: 7 }
      },
      {
        value: 'D',
        label: '看情况，有共同话题愿意交流',
        scores: { lifestyle: 6, career: 6, social: 6, culture: 7, psychology: 6 }
      }
    ]
  },
  {
    id: 21,
    dimension: 'social',
    question: '你对城市开放程度和包容性的要求？',
    options: [
      {
        value: 'A',
        label: '一般要求，传统保守也可以',
        scores: { lifestyle: 5, career: 5, social: 5, culture: 4, psychology: 5 }
      },
      {
        value: 'B',
        label: '比较重视，希望有一定开放度',
        scores: { lifestyle: 7, career: 7, social: 7, culture: 7, psychology: 6 }
      },
      {
        value: 'C',
        label: '非常重视，需要高度开放包容',
        scores: { lifestyle: 8, career: 8, social: 9, culture: 9, psychology: 8 }
      },
      {
        value: 'D',
        label: '希望平衡，既包容又有特色',
        scores: { lifestyle: 6, career: 6, social: 7, culture: 8, psychology: 7 }
      }
    ]
  },
  {
    id: 22,
    dimension: 'social',
    question: '你对城市人口规模的偏好？',
    options: [
      {
        value: 'A',
        label: '中小城市，人口适中',
        scores: { lifestyle: 3, career: 4, social: 4, culture: 4, psychology: 5 }
      },
      {
        value: 'B',
        label: '大城市，人口稠密',
        scores: { lifestyle: 8, career: 8, social: 8, culture: 7, psychology: 7 }
      },
      {
        value: 'C',
        label: '超大城市，人口密集',
        scores: { lifestyle: 9, career: 9, social: 9, culture: 6, psychology: 6 }
      },
      {
        value: 'D',
        label: '规模适中，不太拥挤也不过小',
        scores: { lifestyle: 5, career: 6, social: 6, culture: 6, psychology: 6 }
      }
    ]
  },
  {
    id: 23,
    dimension: 'social',
    question: '你对城市国际化程度的偏好？',
    options: [
      {
        value: 'A',
        label: '不太在意，本土文化更重要',
        scores: { lifestyle: 5, career: 5, social: 5, culture: 4, psychology: 5 }
      },
      {
        value: 'B',
        label: '比较喜欢，希望有国际视野',
        scores: { lifestyle: 7, career: 7, social: 7, culture: 7, psychology: 6 }
      },
      {
        value: 'C',
        label: '非常需要，高度国际化',
        scores: { lifestyle: 8, career: 8, social: 8, culture: 9, psychology: 7 }
      },
      {
        value: 'D',
        label: '希望有国际化但保留本土特色',
        scores: { lifestyle: 6, career: 6, social: 6, culture: 8, psychology: 7 }
      }
    ]
  },
  {
    id: 24,
    dimension: 'social',
    question: '你对社区氛围的重视程度？',
    options: [
      {
        value: 'A',
        label: '非常重视，希望有良好社区关系',
        scores: { lifestyle: 4, career: 4, social: 6, culture: 5, psychology: 7 }
      },
      {
        value: 'B',
        label: '比较重视，但不强求',
        scores: { lifestyle: 6, career: 5, social: 6, culture: 6, psychology: 6 }
      },
      {
        value: 'C',
        label: '不太在意，更关注个人发展',
        scores: { lifestyle: 8, career: 8, social: 5, culture: 5, psychology: 5 }
      },
      {
        value: 'D',
        label: '希望有选择，有的社区好有的无所谓',
        scores: { lifestyle: 6, career: 6, social: 6, culture: 6, psychology: 6 }
      }
    ]
  },
  {
    id: 25,
    dimension: 'social',
    question: '你对城市多样性（文化、人群）的态度？',
    options: [
      {
        value: 'A',
        label: '偏好单一，熟悉的环境更舒适',
        scores: { lifestyle: 4, career: 4, social: 4, culture: 4, psychology: 5 }
      },
      {
        value: 'B',
        label: '喜欢多样，但不要太复杂',
        scores: { lifestyle: 6, career: 6, social: 6, culture: 6, psychology: 6 }
      },
      {
        value: 'C',
        label: '热爱多样，不同文化和人群',
        scores: { lifestyle: 8, career: 8, social: 9, culture: 9, psychology: 7 }
      },
      {
        value: 'D',
        label: '希望平衡，既有共性又有个性',
        scores: { lifestyle: 6, career: 6, social: 6, culture: 8, psychology: 6 }
      }
    ]
  },
  {
    id: 26,
    dimension: 'social',
    question: '你对城市活动的参与意愿？',
    options: [
      {
        value: 'A',
        label: '很少参与，更喜欢独处',
        scores: { lifestyle: 3, career: 4, social: 3, culture: 4, psychology: 5 }
      },
      {
        value: 'B',
        label: '偶尔参与，感兴趣的会去',
        scores: { lifestyle: 6, career: 5, social: 5, culture: 6, psychology: 6 }
      },
      {
        value: 'C',
        label: '积极参与，经常参加各类活动',
        scores: { lifestyle: 8, career: 7, social: 9, culture: 7, psychology: 7 }
      },
      {
        value: 'D',
        label: '选择性参与，质量高于数量',
        scores: { lifestyle: 5, career: 6, social: 6, culture: 7, psychology: 6 }
      }
    ]
  },
  {
    id: 27,
    dimension: 'social',
    question: '你对城市交通便利性对社交的影响？',
    options: [
      {
        value: 'A',
        label: '影响不大，社交圈固定',
        scores: { lifestyle: 5, career: 5, social: 5, culture: 4, psychology: 5 }
      },
      {
        value: 'B',
        label: '有一定影响，希望方便见面',
        scores: { lifestyle: 7, career: 7, social: 7, culture: 6, psychology: 6 }
      },
      {
        value: 'C',
        label: '影响很大，需要高效出行',
        scores: { lifestyle: 9, career: 8, social: 8, culture: 5, psychology: 6 }
      },
      {
        value: 'D',
        label: '希望平衡，既方便又不拥挤',
        scores: { lifestyle: 6, career: 6, social: 6, culture: 6, psychology: 6 }
      }
    ]
  },
  // 文化偏好维度 (28-36题)
  {
    id: 28,
    dimension: 'culture',
    question: '你最感兴趣的文化类型？',
    options: [
      {
        value: 'A',
        label: '传统文化和历史底蕴',
        scores: { lifestyle: 5, career: 5, social: 5, culture: 8, psychology: 7 }
      },
      {
        value: 'B',
        label: '现代文化和流行趋势',
        scores: { lifestyle: 7, career: 8, social: 7, culture: 7, psychology: 6 }
      },
      {
        value: 'C',
        label: '创新文化和前沿艺术',
        scores: { lifestyle: 8, career: 9, social: 8, culture: 9, psychology: 7 }
      },
      {
        value: 'D',
        label: '多元文化，兼收并蓄',
        scores: { lifestyle: 6, career: 6, social: 7, culture: 9, psychology: 7 }
      }
    ]
  },
  {
    id: 29,
    dimension: 'culture',
    question: '你对艺术和娱乐活动的偏好？',
    options: [
      {
        value: 'A',
        label: '传统戏曲、博物馆、历史遗迹',
        scores: { lifestyle: 4, career: 4, social: 5, culture: 8, psychology: 7 }
      },
      {
        value: 'B',
        label: '音乐会、话剧、艺术展',
        scores: { lifestyle: 7, career: 6, social: 7, culture: 8, psychology: 7 }
      },
      {
        value: 'C',
        label: '电音、潮玩、先锋艺术',
        scores: { lifestyle: 8, career: 8, social: 8, culture: 9, psychology: 7 }
      },
      {
        value: 'D',
        label: '多样选择，根据心情选择',
        scores: { lifestyle: 6, career: 6, social: 6, culture: 8, psychology: 6 }
      }
    ]
  },
  {
    id: 30,
    dimension: 'culture',
    question: '你对城市历史文化的重视程度？',
    options: [
      {
        value: 'A',
        label: '非常重视，希望有深厚历史底蕴',
        scores: { lifestyle: 4, career: 4, social: 5, culture: 9, psychology: 7 }
      },
      {
        value: 'B',
        label: '比较重视，但不能牺牲发展',
        scores: { lifestyle: 6, career: 6, social: 6, culture: 7, psychology: 6 }
      },
      {
        value: 'C',
        label: '不太在意，现代化更重要',
        scores: { lifestyle: 8, career: 8, social: 6, culture: 4, psychology: 5 }
      },
      {
        value: 'D',
        label: '希望平衡，传统与现代并存',
        scores: { lifestyle: 5, career: 5, social: 6, culture: 8, psychology: 6 }
      }
    ]
  },
  {
    id: 31,
    dimension: 'culture',
    question: '你对城市文化活动的期待？',
    options: [
      {
        value: 'A',
        label: '传统节日、民俗活动',
        scores: { lifestyle: 4, career: 4, social: 5, culture: 7, psychology: 7 }
      },
      {
        value: 'B',
        label: '音乐节、艺术展、设计周',
        scores: { lifestyle: 7, career: 7, social: 8, culture: 8, psychology: 7 }
      },
      {
        value: 'C',
        label: '科技创新展、创业活动',
        scores: { lifestyle: 8, career: 9, social: 7, culture: 7, psychology: 7 }
      },
      {
        value: 'D',
        label: '丰富多元，各类活动都有',
        scores: { lifestyle: 6, career: 6, social: 7, culture: 9, psychology: 7 }
      }
    ]
  },
  {
    id: 32,
    dimension: 'culture',
    question: '你对美食文化的重视程度？',
    options: [
      {
        value: 'A',
        label: '非常重要，是生活品质的一部分',
        scores: { lifestyle: 5, career: 5, social: 6, culture: 8, psychology: 7 }
      },
      {
        value: 'B',
        label: '比较重视，但不是决定因素',
        scores: { lifestyle: 6, career: 6, social: 6, culture: 6, psychology: 6 }
      },
      {
        value: 'C',
        label: '一般，更看重其他方面',
        scores: { lifestyle: 7, career: 7, social: 5, culture: 4, psychology: 5 }
      },
      {
        value: 'D',
        label: '希望有特色美食，但不强求',
        scores: { lifestyle: 5, career: 5, social: 5, culture: 7, psychology: 6 }
      }
    ]
  },
  {
    id: 33,
    dimension: 'culture',
    question: '你对城市时尚度的要求？',
    options: [
      {
        value: 'A',
        label: '不太在意，实用为主',
        scores: { lifestyle: 5, career: 5, social: 5, culture: 4, psychology: 5 }
      },
      {
        value: 'B',
        label: '比较在意，希望有时尚元素',
        scores: { lifestyle: 7, career: 7, social: 7, culture: 7, psychology: 6 }
      },
      {
        value: 'C',
        label: '非常在意，需要引领潮流',
        scores: { lifestyle: 8, career: 8, social: 8, culture: 9, psychology: 7 }
      },
      {
        value: 'D',
        label: '希望有品质但不一定追潮',
        scores: { lifestyle: 6, career: 6, social: 6, culture: 7, psychology: 6 }
      }
    ]
  },
  {
    id: 34,
    dimension: 'culture',
    question: '你对文化创意产业的兴趣？',
    options: [
      {
        value: 'A',
        label: '不太感兴趣',
        scores: { lifestyle: 5, career: 5, social: 5, culture: 4, psychology: 5 }
      },
      {
        value: 'B',
        label: '比较感兴趣，希望了解',
        scores: { lifestyle: 6, career: 6, social: 6, culture: 6, psychology: 6 }
      },
      {
        value: 'C',
        label: '非常感兴趣，希望深入参与',
        scores: { lifestyle: 7, career: 8, social: 8, culture: 9, psychology: 7 }
      },
      {
        value: 'D',
        label: '本身就是从业者或想进入',
        scores: { lifestyle: 7, career: 9, social: 7, culture: 9, psychology: 8 }
      }
    ]
  },
  {
    id: 35,
    dimension: 'culture',
    question: '你对城市阅读和学习氛围的期望？',
    options: [
      {
        value: 'A',
        label: '希望有浓厚的读书和学习氛围',
        scores: { lifestyle: 5, career: 6, social: 5, culture: 8, psychology: 7 }
      },
      {
        value: 'B',
        label: '适度即可，不强求',
        scores: { lifestyle: 6, career: 6, social: 6, culture: 6, psychology: 6 }
      },
      {
        value: 'C',
        label: '更看重实践和经验学习',
        scores: { lifestyle: 8, career: 8, social: 7, culture: 5, psychology: 6 }
      },
      {
        value: 'D',
        label: '希望多样，既有学术也有实践',
        scores: { lifestyle: 6, career: 7, social: 6, culture: 7, psychology: 6 }
      }
    ]
  },
  {
    id: 36,
    dimension: 'culture',
    question: '你对城市建筑风格和城市景观的偏好？',
    options: [
      {
        value: 'A',
        label: '喜欢传统风格和历史建筑',
        scores: { lifestyle: 4, career: 4, social: 5, culture: 8, psychology: 7 }
      },
      {
        value: 'B',
        label: '喜欢现代风格和摩天大楼',
        scores: { lifestyle: 8, career: 8, social: 7, culture: 6, psychology: 6 }
      },
      {
        value: 'C',
        label: '喜欢创新设计和独特景观',
        scores: { lifestyle: 8, career: 8, social: 8, culture: 9, psychology: 7 }
      },
      {
        value: 'D',
        label: '希望风格多样，各有特色',
        scores: { lifestyle: 6, career: 6, social: 6, culture: 8, psychology: 6 }
      }
    ]
  },
  // 心理需求维度 (37-45题)
  {
    id: 37,
    dimension: 'psychology',
    question: '你在城市中最重要的心理需求是什么？',
    options: [
      {
        value: 'A',
        label: '安全感，稳定可预测',
        scores: { lifestyle: 4, career: 5, social: 4, culture: 4, psychology: 9 }
      },
      {
        value: 'B',
        label: '成就感，获得认可',
        scores: { lifestyle: 7, career: 9, social: 7, culture: 6, psychology: 8 }
      },
      {
        value: 'C',
        label: '归属感，找到社群',
        scores: { lifestyle: 6, career: 6, social: 8, culture: 6, psychology: 9 }
      },
      {
        value: 'D',
        label: '成长感，不断突破',
        scores: { lifestyle: 8, career: 9, social: 6, culture: 7, psychology: 9 }
      }
    ]
  },
  {
    id: 38,
    dimension: 'psychology',
    question: '你对城市压力的承受能力？',
    options: [
      {
        value: 'A',
        label: '较弱，希望压力小',
        scores: { lifestyle: 3, career: 4, social: 4, culture: 4, psychology: 5 }
      },
      {
        value: 'B',
        label: '一般，可以适度压力',
        scores: { lifestyle: 6, career: 6, social: 6, culture: 6, psychology: 6 }
      },
      {
        value: 'C',
        label: '较强，喜欢挑战',
        scores: { lifestyle: 9, career: 9, social: 7, culture: 5, psychology: 8 }
      },
      {
        value: 'D',
        label: '看情况，可控即可',
        scores: { lifestyle: 5, career: 6, social: 5, culture: 6, psychology: 6 }
      }
    ]
  },
  {
    id: 39,
    dimension: 'psychology',
    question: '你对孤独感的敏感度？',
    options: [
      {
        value: 'A',
        label: '很敏感，需要经常社交',
        scores: { lifestyle: 6, career: 6, social: 9, culture: 6, psychology: 7 }
      },
      {
        value: 'B',
        label: '一般，可以接受独处',
        scores: { lifestyle: 5, career: 5, social: 5, culture: 5, psychology: 6 }
      },
      {
        value: 'C',
        label: '不敏感，享受独处',
        scores: { lifestyle: 4, career: 5, social: 3, culture: 5, psychology: 5 }
      },
      {
        value: 'D',
        label: '看情况，有时需要独处有时需要社交',
        scores: { lifestyle: 5, career: 5, social: 6, culture: 6, psychology: 6 }
      }
    ]
  },
  {
    id: 40,
    dimension: 'psychology',
    question: '你对城市身份认同的重视程度？',
    options: [
      {
        value: 'A',
        label: '非常重视，希望有归属感',
        scores: { lifestyle: 5, career: 5, social: 7, culture: 7, psychology: 9 }
      },
      {
        value: 'B',
        label: '比较重视，但不强求',
        scores: { lifestyle: 6, career: 6, social: 6, culture: 6, psychology: 6 }
      },
      {
        value: 'C',
        label: '不太在意，是过客也可以',
        scores: { lifestyle: 7, career: 8, social: 5, culture: 5, psychology: 5 }
      },
      {
        value: 'D',
        label: '希望有选择，可以融入也可以独立',
        scores: { lifestyle: 6, career: 6, social: 6, culture: 6, psychology: 7 }
      }
    ]
  },
  {
    id: 41,
    dimension: 'psychology',
    question: '你对城市生活满意度的期望？',
    options: [
      {
        value: 'A',
        label: '希望稳定提升，不需要大起大落',
        scores: { lifestyle: 5, career: 5, social: 5, culture: 5, psychology: 7 }
      },
      {
        value: 'B',
        label: '希望快速成长，接受短期痛苦',
        scores: { lifestyle: 9, career: 9, social: 7, culture: 5, psychology: 7 }
      },
      {
        value: 'C',
        label: '希望平衡发展，稳步前进',
        scores: { lifestyle: 6, career: 7, social: 6, culture: 6, psychology: 7 }
      },
      {
        value: 'D',
        label: '希望自由探索，不受限制',
        scores: { lifestyle: 7, career: 7, social: 7, culture: 7, psychology: 8 }
      }
    ]
  },
  {
    id: 42,
    dimension: 'psychology',
    question: '你对城市公共服务（医疗、教育等）的期望？',
    options: [
      {
        value: 'A',
        label: '非常重要，需要优质服务',
        scores: { lifestyle: 5, career: 5, social: 6, culture: 5, psychology: 9 }
      },
      {
        value: 'B',
        label: '比较重要，但可以接受一般水平',
        scores: { lifestyle: 6, career: 6, social: 5, culture: 5, psychology: 6 }
      },
      {
        value: 'C',
        label: '一般，可以自费解决',
        scores: { lifestyle: 7, career: 7, social: 5, culture: 4, psychology: 5 }
      },
      {
        value: 'D',
        label: '希望有选择，既要有公共也要有市场',
        scores: { lifestyle: 6, career: 6, social: 5, culture: 6, psychology: 7 }
      }
    ]
  },
  {
    id: 43,
    dimension: 'psychology',
    question: '你对城市安全感的需求？',
    options: [
      {
        value: 'A',
        label: '非常高，需要绝对安全',
        scores: { lifestyle: 4, career: 4, social: 5, culture: 4, psychology: 9 }
      },
      {
        value: 'B',
        label: '比较高，但要保证基本安全',
        scores: { lifestyle: 6, career: 6, social: 6, culture: 5, psychology: 7 }
      },
      {
        value: 'C',
        label: '一般，可以接受一定风险',
        scores: { lifestyle: 8, career: 8, social: 6, culture: 5, psychology: 5 }
      },
      {
        value: 'D',
        label: '希望平衡，既安全又不过度管控',
        scores: { lifestyle: 5, career: 5, social: 5, culture: 6, psychology: 7 }
      }
    ]
  },
  {
    id: 44,
    dimension: 'psychology',
    question: '你对城市未来发展的期待？',
    options: [
      {
        value: 'A',
        label: '希望稳定，不要太动荡',
        scores: { lifestyle: 5, career: 5, social: 5, culture: 5, psychology: 7 }
      },
      {
        value: 'B',
        label: '希望快速发展，抓住机遇',
        scores: { lifestyle: 9, career: 9, social: 7, culture: 6, psychology: 7 }
      },
      {
        value: 'C',
        label: '希望可持续发展，兼顾长远',
        scores: { lifestyle: 6, career: 7, social: 6, culture: 7, psychology: 7 }
      },
      {
        value: 'D',
        label: '希望有潜力，愿意早期投入',
        scores: { lifestyle: 8, career: 9, social: 7, culture: 7, psychology: 8 }
      }
    ]
  },
  {
    id: 45,
    dimension: 'psychology',
    question: '你对城市"幸福感"的定义？',
    options: [
      {
        value: 'A',
        label: '安稳踏实，生活无忧',
        scores: { lifestyle: 3, career: 4, social: 5, culture: 5, psychology: 8 }
      },
      {
        value: 'B',
        label: '充实忙碌，有成就感',
        scores: { lifestyle: 8, career: 9, social: 7, culture: 6, psychology: 8 }
      },
      {
        value: 'C',
        label: '自由自在，不受约束',
        scores: { lifestyle: 7, career: 7, social: 7, culture: 7, psychology: 8 }
      },
      {
        value: 'D',
        label: '丰富多样，每天都有新体验',
        scores: { lifestyle: 6, career: 6, social: 8, culture: 9, psychology: 8 }
      }
    ]
  }
];
