import { City } from '@/lib/types';

export const cities: City[] = [
  // 直辖市
  {
    id: 'beijing',
    name: '北京',
    province: '北京',
    tags: ['政治中心', '文化古都', '科技创新', '教育高地'],
    description: '中国的首都，政治、文化、国际交往和科技创新中心，历史底蕴深厚。',
    traits: { lifestyle: 8, career: 10, social: 8, culture: 10, psychology: 7 },
    lifestyle: '生活节奏快但有序，四季分明，教育资源丰富，历史悠久，适合重视教育和文化的人。',
    career: '政治、科技、教育、文化产业聚集，央企总部、互联网大厂集中，创业氛围浓厚。',
    social: '人口素质高，知识分子聚集，社交圈层明显，政治话题讨论多，人际关系较为正式。',
    culture: '传统文化与现代科技并存，故宫、长城等历史遗迹与现代建筑共存，文化活动丰富多样。',
    advantages: ['文化底蕴深厚，历史资源丰富', '教育资源全国顶尖', '科技产业发达，创新氛围浓', '政治中心，政策信息灵通'],
    challenges: ['生活成本高，房价压力大', '交通拥堵严重', '气候干燥，冬天寒冷', '政治氛围浓厚，相对严肃'],
    recommendations: ['充分利用教育资源，提升自己', '适应北京的节奏和文化氛围', '关注政策动向，把握机遇', '保持开放心态，融入多元文化']
  },
  {
    id: 'shanghai',
    name: '上海',
    province: '上海',
    tags: ['国际大都市', '金融中心', '时尚之都', '多元文化'],
    description: '中国最大的经济中心城市，国际化程度高，生活便利，机会丰富。',
    traits: { lifestyle: 9, career: 10, social: 9, culture: 9, psychology: 7 },
    lifestyle: '生活节奏极快，24小时不打烊，地铁网络发达，外卖便利，夜生活丰富，适合喜欢热闹和高效的人。',
    career: '金融、贸易、科技、创意产业聚集，外企总部众多，晋升机会多，薪资水平全国领先，但竞争激烈。',
    social: '人口密度高，社交机会多，国际化程度高，可以接触到来自世界各地的人，但人际关系相对复杂。',
    culture: '东西方文化交融，艺术展览、音乐节、时尚活动频繁，咖啡馆文化浓厚，创意空间遍布全市。',
    advantages: ['国际化程度高，视野开阔', '职业机会多，薪资待遇好', '生活便利，公共服务完善', '文化活动丰富，娱乐选择多样'],
    challenges: ['生活成本极高，房价压力大', '竞争激烈，工作压力大', '人口密集，交通拥堵', '节奏快，容易感到焦虑'],
    recommendations: ['提前做好财务规划，控制生活成本', '学会工作生活平衡，定期放松', '利用丰富的文化资源充实自己', '建立稳定的社交圈，获得支持']
  },
  {
    id: 'tianjin',
    name: '天津',
    province: '天津',
    tags: ['北方经济中心', '港口城市', '文化名城', '幽默之都'],
    description: '北方重要港口城市，工业基础雄厚，历史文化底蕴深厚，生活节奏相对舒缓。',
    traits: { lifestyle: 6, career: 7, social: 7, culture: 7, psychology: 6 },
    lifestyle: '生活节奏适中，物价相对北京低，重视生活品质，适合追求安稳生活的人。',
    career: '制造业、港口物流、航空航天发达，外企投资多，但相比一线城市机会较少。',
    social: '人口性格开朗幽默，人际关系轻松，重视人情味，社交氛围轻松愉快。',
    culture: '中西文化交融，欧式建筑群、相声文化、小吃文化独特，文化气息浓厚。',
    advantages: ['生活成本相对较低', '历史文化底蕴深厚', '地理位置优越，临近北京', '性格开朗，生活轻松'],
    challenges: ['经济发展相对缓慢', '薪资水平一般', '空气质量有待改善', '相比一线城市，机会较少'],
    recommendations: ['利用地理位置，对接北京资源', '发展特色文化产业', '改善环境质量', '发挥港口优势，发展物流']
  },
  {
    id: 'chongqing',
    name: '重庆',
    province: '重庆',
    tags: ['山城', '火锅之都', '网红城市', '西部中心'],
    description: '西部重要中心城市，山城地形独特，火锅文化闻名，经济发展迅速。',
    traits: { lifestyle: 8, career: 8, social: 8, culture: 7, psychology: 7 },
    lifestyle: '生活节奏快，地形独特，气候湿热，火锅文化浓厚，适合能吃苦、追求机会的人。',
    career: '制造业、电子信息、汽车产业发达，西部中心，政策支持多，发展空间大。',
    social: '人口性格直爽热情，重视人际关系，社交圈以本地人为主，人情味浓。',
    culture: '巴渝文化、火锅文化、网红文化，3D城市景观独特，文化气息浓郁。',
    advantages: ['经济发展迅速，机会多', '生活成本相对较低', '文化独特，网红城市', '政策支持力度大'],
    challenges: ['气候湿热，夏天炎热', '地形复杂，交通不便', '薪资水平有待提升', '空气质量需要改善'],
    recommendations: ['适应湿热气候，做好防护', '利用政策优势，发展产业', '发挥网红效应，发展旅游业', '改善交通和环境']
  },
  // 广东省
  {
    id: 'guangzhou',
    name: '广州',
    province: '广东',
    tags: ['商贸之城', '美食之都', '岭南文化', '包容开放'],
    description: '千年商都，岭南文化中心，美食天堂，商贸发达，生活气息浓厚。',
    traits: { lifestyle: 7, career: 8, social: 8, culture: 8, psychology: 7 },
    lifestyle: '生活节奏适中偏快，重视生活质量，美食文化发达，夜市文化浓厚，适合享受生活的人。',
    career: '商贸、制造业、服务业发达，广交会等展会众多，创业环境良好，但科技相对深圳略弱。',
    social: '包容性强，外地人容易融入，人际关系相对务实，重视商业合作。',
    culture: '岭南文化代表，早茶文化、粤剧、龙舟等传统保留完好，中西文化交融。',
    advantages: ['美食文化发达，生活质量高', '商贸历史悠久，商业氛围浓', '包容开放，外地人易融入', '医疗教育资源丰富'],
    challenges: ['夏天湿热，台风较多', '相比一线城市，发展速度稍慢', '语言文化差异（粤语）', '交通压力较大'],
    recommendations: ['享受美食文化，提高生活品质', '学习粤语，更好融入本地', '利用商贸优势，拓展业务', '适应湿热气候，做好防护']
  },
  {
    id: 'shenzhen',
    name: '深圳',
    province: '广东',
    tags: ['科技之都', '创新之城', '年轻活力', '创业天堂'],
    description: '改革开放的窗口，科技产业发达，充满创新活力，年轻人聚集的城市。',
    traits: { lifestyle: 9, career: 10, social: 8, culture: 7, psychology: 6 },
    lifestyle: '生活节奏极快，24小时奋斗氛围浓厚，年轻人口多，创新意识强，适合有梦想的年轻人。',
    career: '科技、互联网、制造业聚集，华为、腾讯等巨头总部，创业公司众多，晋升速度快。',
    social: '人口年轻化，社交圈以创业者、科技从业者为主，人际关系相对简单，重视能力。',
    culture: '创新文化浓厚，创业精神突出，文化活动以科技、创新为主题，传统元素较少。',
    advantages: ['科技产业发达，机会无限', '年轻人口多，活力四射', '创业氛围浓厚，创新精神', '气候温暖，环境优美'],
    challenges: ['生活成本高，房价压力大', '工作强度极大，996普遍', '历史底蕴薄弱，文化相对单一', '教育医疗资源相对不足'],
    recommendations: ['抓住科技发展机遇，提升技能', '注意身体健康，避免过度劳累', '关注创业生态，寻找合作机会', '参与创新活动，拓展视野']
  },
  {
    id: 'foshan',
    name: '佛山',
    province: '广东',
    tags: ['制造业重镇', '武术之乡', '美食之城', '广佛同城'],
    description: '制造业强市，陶瓷、家具闻名，广佛一体化，传统文化深厚。',
    traits: { lifestyle: 6, career: 7, social: 6, culture: 7, psychology: 7 },
    lifestyle: '生活节奏适中，生活成本低，传统文化氛围浓厚，适合重视传统文化的人。',
    career: '制造业、陶瓷、家具产业发达，民营经济活跃，但科技产业相对薄弱。',
    social: '重视传统，人际关系稳定，重视家庭，社交圈以本地人为主。',
    culture: '岭南文化、武术文化、陶瓷文化，传统手工艺发达，文化底蕴深厚。',
    advantages: ['制造业发达，就业稳定', '生活成本低', '传统文化深厚', '与广州一体化发展'],
    challenges: ['经济转型压力大', '科技产业相对薄弱', '年轻人吸引力不足', '城市形象有待提升'],
    recommendations: ['推动产业升级', '发展文化产业', '对接广州资源', '改善城市形象']
  },
  {
    id: 'dongguan',
    name: '东莞',
    province: '广东',
    tags: ['世界工厂', '制造业名城', '创新之城', '活力城市'],
    description: '全球制造业基地，电子信息产业发达，创新活力强劲。',
    traits: { lifestyle: 7, career: 8, social: 6, culture: 6, psychology: 6 },
    lifestyle: '生活节奏适中偏快，生活成本较低，适合追求事业但希望控制成本的人。',
    career: '制造业、电子信息产业发达，产业链完整，创业环境好，但高端产业相对较少。',
    social: '人口多元，外来人口多，重视商业合作，人际关系务实。',
    culture: '工业文化、移民文化，多元文化交融，但传统文化相对薄弱。',
    advantages: ['制造业发达，产业链完整', '生活成本低', '创新活力强', '地理位置优越'],
    challenges: ['产业转型压力大', '文化底蕴薄弱', '教育医疗资源不足', '城市形象有待提升'],
    recommendations: ['推动产业升级转型', '发展文化产业', '改善公共服务', '提升城市品质']
  },
  {
    id: 'zhuhai',
    name: '珠海',
    province: '广东',
    tags: ['浪漫之城', '海滨城市', '宜居城市', '创新城市'],
    description: '海滨城市，环境优美，经济特区，生活质量高。',
    traits: { lifestyle: 5, career: 6, social: 6, culture: 6, psychology: 8 },
    lifestyle: '生活节奏慢，环境优美，空气质量好，适合追求品质生活的人。',
    career: '高新技术产业、旅游业发达，但就业机会相对较少，适合远程办公和创业者。',
    social: '人口素质高，重视生活品质，社交圈轻松愉快。',
    culture: '海洋文化、浪漫文化，文艺气息浓厚，适合文艺青年。',
    advantages: ['环境优美，空气质量好', '生活节奏慢，幸福感高', '生活成本低', '与澳门相邻'],
    challenges: ['经济规模较小', '就业机会有限', '发展空间受限', '产业相对单一'],
    recommendations: ['发展高新技术产业', '发展旅游和养老产业', '对接澳门资源', '保持环境优势']
  },
  {
    id: 'zhongshan',
    name: '中山',
    province: '广东',
    tags: ['伟人故里', '宜居城市', '制造业名城', '美食之城'],
    description: '孙中山故里，制造业发达，生活节奏慢，宜居宜业。',
    traits: { lifestyle: 5, career: 6, social: 6, culture: 7, psychology: 8 },
    lifestyle: '生活节奏慢，生活成本低，传统文化氛围浓厚，适合追求安稳生活的人。',
    career: '制造业、家电产业发达，民营经济活跃，但就业机会相对较少。',
    social: '重视传统，人际关系稳定，重视家庭，社交圈轻松愉快。',
    culture: '岭南文化、侨乡文化，传统手工艺发达，文化底蕴深厚。',
    advantages: ['生活成本低', '传统文化深厚', '宜居宜业', '制造业发达'],
    challenges: ['经济规模较小', '年轻人吸引力不足', '产业转型升级压力大', '城市影响力有限'],
    recommendations: ['推动产业升级', '发展文化产业', '改善城市形象', '对接广深资源']
  },
  {
    id: 'huizhou',
    name: '惠州',
    province: '广东',
    tags: ['生态之城', '制造业名城', '旅游胜地', '宜居城市'],
    description: '生态环境优美，制造业发达，旅游资源丰富。',
    traits: { lifestyle: 5, career: 6, social: 5, culture: 6, psychology: 8 },
    lifestyle: '生活节奏慢，环境优美，生活成本低，适合追求自然生活的人。',
    career: '制造业、电子信息产业发达，但高端就业机会较少。',
    social: '重视自然生活，人际关系简单，社交圈轻松愉快。',
    culture: '客家文化、海洋文化，传统文化与现代交融。',
    advantages: ['环境优美', '生活成本低', '旅游资源丰富', '地理位置优越'],
    challenges: ['经济规模有限', '就业机会较少', '城市影响力不足', '产业相对单一'],
    recommendations: ['发展旅游和生态产业', '推动产业升级', '对接深圳资源', '改善城市形象']
  },
  {
    id: 'shantou',
    name: '汕头',
    province: '广东',
    tags: ['侨乡', '美食之城', '港口城市', '经济特区'],
    description: '著名侨乡，港口城市，美食文化发达，经济特区。',
    traits: { lifestyle: 6, career: 6, social: 7, culture: 7, psychology: 7 },
    lifestyle: '生活节奏适中，生活成本低，美食文化发达，适合重视传统生活的人。',
    career: '制造业、港口贸易发达，但经济转型压力大，机会相对较少。',
    social: '重视家族传统，人际关系稳定，重视人情。',
    culture: '潮汕文化、侨乡文化，美食文化、传统手工艺发达。',
    advantages: ['美食文化发达', '生活成本低', '侨乡资源丰富', '港口城市'],
    challenges: ['经济转型压力大', '年轻人流失严重', '城市发展缓慢', '产业升级困难'],
    recommendations: ['发展特色产业', '利用侨乡资源', '改善城市形象', '推动产业升级']
  },
  // 江苏省
  {
    id: 'nanjing',
    name: '南京',
    province: '江苏',
    tags: ['六朝古都', '教育高地', '科教中心', '历史名城'],
    description: '六朝古都，历史底蕴深厚，教育资源丰富，科教发达，宜居城市。',
    traits: { lifestyle: 6, career: 7, social: 6, culture: 10, psychology: 8 },
    lifestyle: '生活节奏适中，重视教育，文化氛围浓厚，适合重视教育和文化的家庭。',
    career: '教育、科研、制造业发达，高校众多，人才储备丰富，但相比一线城市机会较少。',
    social: '人口素质高，知识分子聚集，社交圈以教育科研人员为主，文化氛围浓厚。',
    culture: '六朝文化代表，明文化、民国文化，历史遗迹众多，文化底蕴深厚。',
    advantages: ['教育资源全国顶尖', '历史文化底蕴深厚', '生活成本相对较低', '环境优美，宜居城市'],
    challenges: ['经济活力不如沿海城市', '职业机会相对较少', '夏天炎热，冬季寒冷', '相比一线城市，国际化程度低'],
    recommendations: ['充分利用教育资源', '发展文化相关产业', '利用地理优势，对接长三角', '重视历史文化保护与发展']
  },
  {
    id: 'suzhou',
    name: '苏州',
    province: '江苏',
    tags: ['人间天堂', '园林之城', '工业强市', '江南水乡'],
    description: '人间天堂，园林之城，工业发达，经济实力强，江南水乡。',
    traits: { lifestyle: 6, career: 8, social: 6, culture: 9, psychology: 8 },
    lifestyle: '生活节奏适中，环境优美，园林文化浓厚，适合追求品质生活的人。',
    career: '制造业、高新技术产业发达，工业园区众多，经济实力强，但相比一线城市机会较少。',
    social: '人口素质高，受教育程度高，社交圈以制造业从业者为主，务实低调。',
    culture: '吴文化代表，园林文化、昆曲、评弹，古典与现代结合。',
    advantages: ['经济发达，实力强', '环境优美，园林之城', '生活成本相对较低', '紧邻上海，区位优势明显'],
    challenges: ['工作压力较大', '相比一线城市，国际化程度低', '交通拥堵日益严重', '文化多样性不如大城市'],
    recommendations: ['利用区位优势，对接上海', '发展高新技术产业', '保护园林文化，发展旅游', '提升城市品质']
  },
  {
    id: 'wuxi',
    name: '无锡',
    province: '江苏',
    tags: ['太湖明珠', '制造业名城', '物联网之都', '宜居城市'],
    description: '太湖明珠，制造业发达，物联网产业领先，环境优美。',
    traits: { lifestyle: 6, career: 8, social: 6, culture: 7, psychology: 8 },
    lifestyle: '生活节奏适中，环境优美，太湖风光秀丽，适合追求品质生活的人。',
    career: '制造业、物联网、集成电路产业发达，民营经济活跃，就业机会多。',
    social: '人口素质高，重视商业合作，人际关系务实。',
    culture: '吴文化、太湖文化，传统文化与现代科技交融。',
    advantages: ['经济发达', '环境优美', '物联网产业领先', '生活成本相对较低'],
    challenges: ['城市影响力有限', '文化多样性不足', '年轻人吸引力有限', '产业升级压力大'],
    recommendations: ['发展物联网等新兴产业', '发展文化产业', '对接上海苏州资源', '提升城市形象']
  },
  {
    id: 'changzhou',
    name: '常州',
    province: '江苏',
    tags: ['龙城', '制造业名城', '宜居城市', '科教之城'],
    description: '龙城，制造业发达，科教实力强，宜居宜业。',
    traits: { lifestyle: 6, career: 7, social: 6, culture: 7, psychology: 7 },
    lifestyle: '生活节奏适中，生活成本低，环境优美，适合追求安稳生活的人。',
    career: '制造业、装备制造业发达，民营经济活跃，但高端就业机会较少。',
    social: '重视传统，人际关系稳定，重视家庭。',
    culture: '吴文化、龙城文化，传统文化底蕴深厚。',
    advantages: ['制造业发达', '生活成本低', '环境优美', '科教实力强'],
    challenges: ['经济规模有限', '就业机会较少', '城市影响力不足', '产业升级压力大'],
    recommendations: ['推动产业升级', '发展新兴产业', '对接苏锡资源', '改善城市形象']
  },
  {
    id: 'nantong',
    name: '南通',
    province: '江苏',
    tags: ['江海明珠', '建筑之乡', '纺织之城', '教育名城'],
    description: '江海明珠，建筑业发达，教育实力强，与上海隔江相望。',
    traits: { lifestyle: 5, career: 6, social: 5, culture: 6, psychology: 7 },
    lifestyle: '生活节奏慢，生活成本低，环境优美，适合追求安稳生活的人。',
    career: '建筑业、纺织业发达，民营经济活跃，但高端就业机会较少。',
    social: '重视传统，人际关系稳定，重视教育。',
    culture: '江海文化、吴文化，传统文化与现代交融。',
    advantages: ['生活成本低', '环境优美', '教育实力强', '紧邻上海'],
    challenges: ['经济规模有限', '就业机会较少', '城市影响力不足', '产业升级压力大'],
    recommendations: ['对接上海资源', '发展特色产业', '改善交通', '提升城市形象']
  },
  {
    id: 'yangzhou',
    name: '扬州',
    province: '江苏',
    tags: ['运河之城', '园林之城', '美食之都', '宜居城市'],
    description: '运河之城，园林文化发达，美食闻名，生活节奏慢。',
    traits: { lifestyle: 4, career: 5, social: 5, culture: 8, psychology: 9 },
    lifestyle: '生活节奏慢，重视生活品质，园林文化浓厚，适合养老和享受生活。',
    career: '旅游业、制造业发展平稳，但就业机会相对较少。',
    social: '重视生活品质，人际关系轻松，重视文化享受。',
    culture: '运河文化、园林文化、淮扬菜文化，传统文化底蕴深厚。',
    advantages: ['生活节奏慢，幸福感高', '文化底蕴深厚', '美食发达', '环境优美'],
    challenges: ['经济发展相对缓慢', '就业机会有限', '年轻人吸引力不足', '产业升级困难'],
    recommendations: ['发展文化旅游业', '发挥美食优势', '对接南京上海资源', '保持文化特色']
  },
  {
    id: 'xuzhou',
    name: '徐州',
    province: '江苏',
    tags: ['五省通衢', '工业重镇', '历史名城', '交通枢纽'],
    description: '五省通衢，交通枢纽，工业基础雄厚，历史文化悠久。',
    traits: { lifestyle: 6, career: 7, social: 6, culture: 6, psychology: 6 },
    lifestyle: '生活节奏适中，生活成本低，重视实用，适合务实的人。',
    career: '工业、装备制造业发达，但就业机会相对较少。',
    social: '重视传统，人际关系稳定，重视家庭。',
    culture: '汉文化、彭祖文化，历史底蕴深厚。',
    advantages: ['交通枢纽', '工业基础雄厚', '生活成本低', '历史底蕴深厚'],
    challenges: ['经济转型压力大', '就业机会有限', '城市影响力不足', '产业升级困难'],
    recommendations: ['推动产业升级', '发展现代服务业', '利用交通优势', '改善城市形象']
  },
  // 浙江省
  {
    id: 'hangzhou',
    name: '杭州',
    province: '浙江',
    tags: ['互联网之都', '人间天堂', '电商之城', '江南水乡'],
    description: '电商之都，互联网产业发达，西湖美景，江南水乡，历史与现代交融。',
    traits: { lifestyle: 7, career: 9, social: 7, culture: 9, psychology: 8 },
    lifestyle: '生活节奏适中，自然风光优美，环境质量好，适合追求品质生活的人。',
    career: '电商、互联网、金融科技发达，阿里巴巴总部，创业机会多，发展空间大。',
    social: '人口素质高，受教育程度高，社交圈以互联网从业者为主，创新氛围浓。',
    culture: '江南文化代表，西湖文化、茶文化、丝绸文化，古典与现代完美结合。',
    advantages: ['互联网产业发达，电商之都', '环境优美，生活质量高', '历史文化深厚，旅游资源丰富', '地理位置优越，紧邻上海'],
    challenges: ['房价上涨快，生活成本增加', '工作压力大，加班文化普遍', '交通拥堵日益严重', '相比一线城市，国际化程度较低'],
    recommendations: ['抓住电商发展机遇', '平衡工作与生活，享受美景', '利用地理优势，对接上海资源', '发展特色产业，如旅游、文创']
  },
  {
    id: 'ningbo',
    name: '宁波',
    province: '浙江',
    tags: ['港口之城', '制造业名城', '商帮故里', '宜居城市'],
    description: '重要港口城市，制造业发达，商业传统悠久，经济实力强。',
    traits: { lifestyle: 6, career: 8, social: 6, culture: 7, psychology: 7 },
    lifestyle: '生活节奏适中，生活成本相对较低，适合务实创业的人。',
    career: '制造业、港口贸易、金融业发达，民营经济活跃，创业环境好。',
    social: '重视商业合作，人际关系务实，重视家族传统。',
    culture: '商帮文化、海洋文化，商业传统悠久。',
    advantages: ['港口城市，贸易发达', '制造业发达', '商业氛围浓', '生活成本相对较低'],
    challenges: ['城市影响力有限', '相比杭州，科技产业较弱', '文化多样性不足', '产业升级压力大'],
    recommendations: ['发展港口经济', '推动产业升级', '对接上海杭州资源', '提升城市形象']
  },
  {
    id: 'wenzhou',
    name: '温州',
    province: '浙江',
    tags: ['商都', '民营经济', '创业之城', '敢为天下先'],
    description: '民营经济发达，商业氛围浓厚，创业精神突出。',
    traits: { lifestyle: 7, career: 8, social: 7, culture: 6, psychology: 7 },
    lifestyle: '生活节奏适中偏快，重视商业，适合创业和经商的人。',
    career: '民营经济发达，制造业、轻工业突出，创业环境好，但高端产业相对薄弱。',
    social: '重视商业关系，人际关系务实，重视家族和商帮网络。',
    culture: '商业文化、移民文化，创业精神突出，敢为天下先。',
    advantages: ['民营经济发达', '创业氛围浓', '商业网络广', '敢闯敢干'],
    challenges: ['产业升级压力大', '城市形象有待提升', '年轻人流失', '教育医疗资源不足'],
    recommendations: ['推动产业升级', '发展新兴产业', '改善城市形象', '吸引年轻人回流']
  },
  {
    id: 'shaoxing',
    name: '绍兴',
    province: '浙江',
    tags: ['水乡', '文化名城', '纺织之都', '鲁迅故里'],
    description: '江南水乡，文化底蕴深厚，纺织业发达，名人辈出。',
    traits: { lifestyle: 5, career: 6, social: 5, culture: 9, psychology: 8 },
    lifestyle: '生活节奏慢，文化氛围浓厚，适合追求文化生活的家庭。',
    career: '纺织业、制造业发达，民营经济活跃，但就业机会相对较少。',
    social: '重视传统文化，人际关系稳定，重视教育。',
    culture: '水乡文化、名人文化，传统文化底蕴深厚。',
    advantages: ['文化底蕴深厚', '生活成本低', '纺织业发达', '环境优美'],
    challenges: ['经济发展相对缓慢', '就业机会有限', '年轻人吸引力不足', '产业升级困难'],
    recommendations: ['发展文化旅游业', '推动纺织产业升级', '对接杭州资源', '保护文化特色']
  },
  {
    id: 'jinhua',
    name: '金华',
    province: '浙江',
    tags: ['小商品之都', '电商之城', '宜居城市', '金华火腿'],
    description: '小商品之都，电商发达，金华火腿闻名，交通便利。',
    traits: { lifestyle: 6, career: 7, social: 6, culture: 6, psychology: 7 },
    lifestyle: '生活节奏适中，生活成本低，适合创业和生活的人。',
    career: '小商品贸易、电商产业发达，创业环境好，但高端产业相对薄弱。',
    social: '重视商业合作，人际关系务实。',
    culture: '商业文化、饮食文化，传统与现代交融。',
    advantages: ['小商品贸易发达', '电商产业强', '生活成本低', '交通便利'],
    challenges: ['城市影响力有限', '产业升级压力大', '年轻人吸引力不足', '文化底蕴有待挖掘'],
    recommendations: ['发展电商和物流业', '推动产业升级', '对接杭州资源', '发展特色产业']
  },
  // 山东省
  {
    id: 'jinan',
    name: '济南',
    province: '山东',
    tags: ['泉城', '省会', '文化名城', '交通枢纽'],
    description: '山东省会，泉城，历史文化悠久，交通便利。',
    traits: { lifestyle: 6, career: 7, social: 6, culture: 7, psychology: 7 },
    lifestyle: '生活节奏适中，生活成本低，泉水文化浓厚，适合追求安稳生活的人。',
    career: '服务业、制造业发达，但就业机会相对较少。',
    social: '重视传统，人际关系稳定，重视人情味。',
    culture: '泉文化、儒家文化，传统文化底蕴深厚。',
    advantages: ['生活成本低', '泉水文化独特', '交通便利', '教育资源丰富'],
    challenges: ['经济活力有限', '就业机会较少', '城市影响力不足', '产业升级困难'],
    recommendations: ['发挥泉水特色', '发展文化旅游业', '对接青岛资源', '提升城市形象']
  },
  {
    id: 'qingdao',
    name: '青岛',
    province: '山东',
    tags: ['海滨城市', '帆船之都', '啤酒之城', '制造业名城'],
    description: '海滨城市，环境优美，制造业发达，啤酒文化独特。',
    traits: { lifestyle: 6, career: 8, social: 7, culture: 7, psychology: 8 },
    lifestyle: '生活节奏适中，环境优美，海洋文化浓厚，适合追求品质生活的人。',
    career: '制造业、海洋产业、旅游业发达，经济实力强，就业机会多。',
    social: '重视生活品质，人际关系轻松，重视海洋文化。',
    culture: '海洋文化、啤酒文化，中西文化交融。',
    advantages: ['环境优美', '制造业发达', '海洋文化独特', '生活成本相对较低'],
    challenges: ['城市影响力有限', '相比一线城市，机会较少', '冬天较冷', '产业升级压力大'],
    recommendations: ['发展海洋经济', '推动制造业升级', '发挥海滨优势', '发展旅游业']
  },
  {
    id: 'yantai',
    name: '烟台',
    province: '山东',
    tags: ['海滨城市', '葡萄酒城', '水果之乡', '宜居城市'],
    description: '海滨城市，环境优美，水果和葡萄酒闻名，宜居宜业。',
    traits: { lifestyle: 5, career: 6, social: 5, culture: 6, psychology: 8 },
    lifestyle: '生活节奏慢，环境优美，适合养老和享受生活。',
    career: '制造业、海洋产业、农业发达，但就业机会相对较少。',
    social: '重视生活品质，人际关系轻松，重视家庭。',
    culture: '海洋文化、葡萄酒文化，传统文化与现代交融。',
    advantages: ['环境优美', '生活成本低', '水果和葡萄酒著名', '宜居城市'],
    challenges: ['经济发展相对缓慢', '就业机会有限', '年轻人吸引力不足', '产业升级困难'],
    recommendations: ['发展旅游业和农业', '发挥葡萄酒优势', '对接青岛资源', '改善城市形象']
  },
  {
    id: 'weihai',
    name: '威海',
    province: '山东',
    tags: ['宜居城市', '海滨城市', '卫生城市', '旅游胜地'],
    description: '最宜居城市之一，环境优美，空气质量全国领先。',
    traits: { lifestyle: 4, career: 5, social: 5, culture: 6, psychology: 9 },
    lifestyle: '生活节奏慢，环境优美，空气质量好，适合养老和享受生活。',
    career: '旅游业、制造业发展平稳，但就业机会相对较少。',
    social: '重视生活品质，人际关系轻松。',
    culture: '海洋文化、养生文化，适合慢生活。',
    advantages: ['环境优美，空气质量好', '生活节奏慢', '宜居城市', '生活成本低'],
    challenges: ['经济规模有限', '就业机会较少', '年轻人吸引力不足', '产业单一'],
    recommendations: ['发展旅游和养老产业', '保持环境优势', '对接青岛烟台资源', '发展特色产业']
  },
  {
    id: 'weifang',
    name: '潍坊',
    province: '山东',
    tags: ['风筝之都', '制造业名城', '蔬菜之乡', '文化名城'],
    description: '风筝之都，制造业发达，蔬菜产业著名，文化底蕴深厚。',
    traits: { lifestyle: 6, career: 7, social: 6, culture: 7, psychology: 7 },
    lifestyle: '生活节奏适中，生活成本低，适合务实创业的人。',
    career: '制造业、农业、化工业发达，民营经济活跃。',
    social: '重视传统，人际关系稳定，重视家庭。',
    culture: '风筝文化、农耕文化，传统文化底蕴深厚。',
    advantages: ['制造业发达', '蔬菜产业著名', '风筝文化独特', '生活成本低'],
    challenges: ['经济活力有限', '就业机会较少', '城市影响力不足', '产业升级困难'],
    recommendations: ['发挥风筝文化优势', '发展现代农业', '推动产业升级', '改善城市形象']
  },
  // 四川省
  {
    id: 'chengdu',
    name: '成都',
    province: '四川',
    tags: ['休闲之都', '美食天堂', '熊猫故乡', '文化古都'],
    description: '天府之国，生活节奏慢，美食丰富，文化底蕴深厚，幸福感高的城市。',
    traits: { lifestyle: 4, career: 6, social: 7, culture: 8, psychology: 9 },
    lifestyle: '生活节奏慢，重视享受生活，茶馆文化浓厚，火锅美食遍地，适合追求生活质量的人。',
    career: '科技、文创、服务业发展迅速，但相比一线城市机会较少，适合追求工作生活平衡的人。',
    social: '人口友善，性格温和，社交圈轻松自在，重视人情味。',
    culture: '川文化代表，蜀文化、三国文化、熊猫文化，艺术氛围浓厚，悠闲自在。',
    advantages: ['生活节奏慢，幸福感高', '美食文化发达，特别是火锅', '房价相对较低，生活压力小', '文化底蕴深厚，旅游资源丰富'],
    challenges: ['职业机会相对较少', '薪资水平不如一线城市', '地处内陆，国际化程度较低', '交通不如沿海发达'],
    recommendations: ['享受慢生活，注重生活品质', '发掘本地商业机会', '学习川文化，丰富精神生活', '利用旅游资源，发展相关产业']
  },
  {
    id: 'mianyang',
    name: '绵阳',
    province: '四川',
    tags: ['科技城', '李白故里', '宜居城市', '教育名城'],
    description: '中国科技城，李白故里，科技实力强，生活环境好。',
    traits: { lifestyle: 5, career: 6, social: 5, culture: 7, psychology: 8 },
    lifestyle: '生活节奏适中，生活成本低，环境优美，适合追求安稳生活的人。',
    career: '科技、军工产业发达，但就业机会相对较少。',
    social: '重视教育和科技，人际关系简单。',
    culture: '科技文化、李白文化，传统文化与现代科技交融。',
    advantages: ['科技实力强', '生活成本低', '环境优美', '教育资源丰富'],
    challenges: ['经济规模有限', '就业机会较少', '城市影响力不足', '年轻人吸引力有限'],
    recommendations: ['发挥科技优势', '发展相关产业', '对接成都资源', '改善城市形象']
  },
  // 湖北省
  {
    id: 'wuhan',
    name: '武汉',
    province: '湖北',
    tags: ['九省通衢', '科教重镇', '英雄城市', '江城'],
    description: '九省通衢，交通枢纽，科教发达，高校众多，充满活力的中部中心城市。',
    traits: { lifestyle: 7, career: 7, social: 7, culture: 7, psychology: 7 },
    lifestyle: '生活节奏适中偏快，交通便利，美食丰富，学生人口多，活力十足。',
    career: '科技、教育、制造业发达，高校众多，人才储备丰富，但薪资水平一般。',
    social: '人口年轻化，学生群体大，社交圈活跃，开放包容。',
    culture: '楚文化代表，江城文化，多元文化交融，艺术氛围浓厚。',
    advantages: ['交通枢纽，交通便利', '科教发达，高校众多', '生活成本相对较低', '美食丰富，过早文化独特'],
    challenges: ['夏天炎热，火炉城市', '经济活力不如沿海', '薪资水平相对较低', '城市管理有待提升'],
    recommendations: ['利用交通优势，发展物流产业', '发挥科教优势，吸引人才', '发展特色产业，如光电子', '改善城市管理，提升品质']
  },
  {
    id: 'xiangyang',
    name: '襄阳',
    province: '湖北',
    tags: ['历史文化名城', '交通枢纽', '制造业名城', '宜居城市'],
    description: '历史文化名城，三国故事发源地，交通便利，制造业发达。',
    traits: { lifestyle: 5, career: 6, social: 5, culture: 8, psychology: 7 },
    lifestyle: '生活节奏适中，生活成本低，传统文化氛围浓厚。',
    career: '制造业、交通物流发达，但就业机会相对较少。',
    social: '重视传统，人际关系稳定，重视家庭。',
    culture: '三国文化、汉水文化，历史底蕴深厚。',
    advantages: ['历史文化深厚', '交通枢纽', '制造业发达', '生活成本低'],
    challenges: ['经济活力有限', '就业机会较少', '城市影响力不足', '产业升级困难'],
    recommendations: ['发挥三国文化优势', '发展文化旅游业', '推动产业升级', '对接武汉资源']
  },
  // 湖南省
  {
    id: 'changsha',
    name: '长沙',
    province: '湖南',
    tags: ['娱乐之都', '美食之城', '网红城市', '活力之城'],
    description: '娱乐之都，美食文化发达，网红城市，充满活力。',
    traits: { lifestyle: 7, career: 7, social: 8, culture: 8, psychology: 7 },
    lifestyle: '生活节奏适中偏快，娱乐文化发达，夜生活丰富，适合喜欢热闹的人。',
    career: '娱乐、传媒、制造业发达，网红经济突出，但相比一线城市机会较少。',
    social: '人口性格活泼，社交圈活跃，重视娱乐和生活品质。',
    culture: '湘文化、娱乐文化，美食文化、夜文化发达。',
    advantages: ['娱乐文化发达', '美食丰富', '网红城市', '生活成本相对较低'],
    challenges: ['经济规模有限', '就业机会较少', '产业结构单一', '发展后劲不足'],
    recommendations: ['发挥娱乐和网红优势', '发展相关产业', '对接武汉广州资源', '推动产业升级']
  },
  // 河南省
  {
    id: 'zhengzhou',
    name: '郑州',
    province: '河南',
    tags: ['中原之城', '交通枢纽', '制造业名城', '古都新貌'],
    description: '河南省会，交通枢纽，制造业发达，历史文化悠久。',
    traits: { lifestyle: 7, career: 7, social: 6, culture: 7, psychology: 6 },
    lifestyle: '生活节奏适中偏快，生活成本低，适合务实创业的人。',
    career: '制造业、交通物流业发达，经济实力强，但高端就业机会较少。',
    social: '重视传统，人际关系稳定，重视家庭。',
    culture: '中原文化，历史底蕴深厚。',
    advantages: ['交通枢纽', '制造业发达', '生活成本低', '历史底蕴深厚'],
    challenges: ['经济活力有限', '就业机会较少', '城市影响力不足', '产业升级困难'],
    recommendations: ['发挥交通优势', '发展物流产业', '推动产业升级', '对接武汉西安资源']
  },
  {
    id: 'luoyang',
    name: '洛阳',
    province: '河南',
    tags: ['十三朝古都', '牡丹花城', '工业重镇', '文化名城'],
    description: '十三朝古都，牡丹花城，工业基础雄厚，文化底蕴深厚。',
    traits: { lifestyle: 5, career: 6, social: 5, culture: 10, psychology: 7 },
    lifestyle: '生活节奏适中，生活成本低，传统文化氛围浓厚，适合重视文化的人。',
    career: '工业、旅游业发达，但就业机会相对较少。',
    social: '重视传统，人际关系稳定，重视文化传承。',
    culture: '古都文化、牡丹文化，历史底蕴深厚。',
    advantages: ['文化底蕴深厚', '牡丹文化独特', '工业基础雄厚', '生活成本低'],
    challenges: ['经济转型压力大', '就业机会较少', '年轻人吸引力不足', '产业升级困难'],
    recommendations: ['发挥古都和牡丹优势', '发展文化旅游业', '推动产业升级', '对接郑州西安资源']
  },
  // 福建省
  {
    id: 'xiamen',
    name: '厦门',
    province: '福建',
    tags: ['海上花园', '浪漫之城', '经济特区', '宜居城市'],
    description: '海上花园，环境优美，气候宜人，浪漫文艺，宜居城市。',
    traits: { lifestyle: 5, career: 6, social: 6, culture: 7, psychology: 9 },
    lifestyle: '生活节奏慢，环境优美，气候宜人，适合追求品质生活的人。',
    career: '旅游、贸易、制造业发达，但相比一线城市机会较少，适合追求生活平衡的人。',
    social: '人口友善，性格温和，社交圈轻松自在，重视人情味。',
    culture: '闽南文化代表，海洋文化，文艺气息浓厚，浪漫氛围。',
    advantages: ['环境优美，气候宜人', '生活节奏慢，幸福感高', '文艺氛围浓厚', '生活成本相对较低'],
    challenges: ['职业机会相对较少', '薪资水平不如一线城市', '面积小，发展空间有限', '台风多发'],
    recommendations: ['发展旅游产业', '发挥文艺优势，吸引创意人才', '利用区位优势，发展对台贸易', '保持环境优势']
  },
  {
    id: 'fuzhou',
    name: '福州',
    province: '福建',
    tags: ['榕城', '省会', '文化名城', '温泉之城'],
    description: '福建省会，榕城，历史文化悠久，温泉资源丰富。',
    traits: { lifestyle: 6, career: 6, social: 6, culture: 7, psychology: 7 },
    lifestyle: '生活节奏适中，生活成本低，传统文化氛围浓厚，适合重视传统的人。',
    career: '服务业、制造业发达，但就业机会相对较少。',
    social: '重视传统，人际关系稳定，重视家庭。',
    culture: '闽文化、海洋文化，传统文化底蕴深厚。',
    advantages: ['生活成本低', '历史文化深厚', '温泉资源丰富', '环境优美'],
    challenges: ['经济活力有限', '就业机会较少', '城市影响力不足', '相比厦门，知名度较低'],
    recommendations: ['发挥温泉和文化优势', '发展文化旅游业', '对接厦门泉州资源', '提升城市形象']
  },
  {
    id: 'quanzhou',
    name: '泉州',
    province: '福建',
    tags: ['海上丝绸之路起点', '古城', '制造业名城', '侨乡'],
    description: '海上丝绸之路起点，古城文化深厚，制造业发达，侨乡资源丰富。',
    traits: { lifestyle: 6, career: 7, social: 6, culture: 9, psychology: 7 },
    lifestyle: '生活节奏适中，生活成本低，传统文化氛围浓厚，适合重视传统的人。',
    career: '制造业、贸易业发达，民营经济活跃，但高端就业机会较少。',
    social: '重视传统，人际关系稳定，重视家族和商帮网络。',
    culture: '古城文化、侨乡文化，历史底蕴深厚。',
    advantages: ['文化底蕴深厚', '制造业发达', '侨乡资源丰富', '生活成本低'],
    challenges: ['经济转型压力大', '就业机会有限', '城市形象有待提升', '年轻人吸引力不足'],
    recommendations: ['发挥古城和侨乡优势', '发展文化旅游业', '推动产业升级', '对接厦门福州资源']
  },
  // 辽宁省
  {
    id: 'shenyang',
    name: '沈阳',
    province: '辽宁',
    tags: ['东北中心', '工业基地', '历史名城', '冰雪之城'],
    description: '东北地区中心城市，工业基地雄厚，历史文化悠久。',
    traits: { lifestyle: 6, career: 6, social: 6, culture: 7, psychology: 6 },
    lifestyle: '生活节奏适中，生活成本低，适合务实生活的人。',
    career: '制造业、装备工业发达，但经济转型压力大，就业机会有限。',
    social: '重视人情关系，性格豪爽，社交圈稳定。',
    culture: '工业文化、满族文化，历史底蕴深厚。',
    advantages: ['工业基础雄厚', '生活成本低', '文化底蕴深厚', '东北中心'],
    challenges: ['经济转型压力大', '年轻人流失', '气候寒冷', '就业机会有限'],
    recommendations: ['推动产业升级', '发展现代服务业', '发挥区位优势', '改善城市形象']
  },
  {
    id: 'dalian',
    name: '大连',
    province: '辽宁',
    tags: ['海滨城市', '浪漫之都', '制造业名城', '北方明珠'],
    description: '北方重要港口城市，海滨风光优美，制造业发达。',
    traits: { lifestyle: 6, career: 7, social: 7, culture: 7, psychology: 7 },
    lifestyle: '生活节奏适中，环境优美，海洋文化浓厚，适合追求品质生活的人。',
    career: '制造业、软件产业、港口贸易发达，就业机会相对较多。',
    social: '重视生活品质，人际关系轻松，重视海洋文化。',
    culture: '海洋文化、俄式文化，中西文化交融。',
    advantages: ['环境优美', '制造业发达', '海洋文化独特', '生活成本相对较低'],
    challenges: ['经济活力有限', '冬天寒冷', '相比南方，吸引力不足', '产业升级压力大'],
    recommendations: ['发展海洋经济', '推动产业升级', '发挥海滨优势', '发展旅游业']
  },
  // 陕西省
  {
    id: 'xian',
    name: '西安',
    province: '陕西',
    tags: ['十三朝古都', '丝绸之路起点', '科教高地', '美食之都'],
    description: '十三朝古都，历史底蕴深厚，科教发达，美食丰富，西北中心城市。',
    traits: { lifestyle: 5, career: 6, social: 6, culture: 10, psychology: 7 },
    lifestyle: '生活节奏适中，重视历史传统，文化氛围浓厚，适合重视历史文化的人。',
    career: '教育、科研、旅游、军工产业发达，高校众多，但薪资水平一般。',
    social: '人口友善，重视传统，社交圈稳定，人情味浓。',
    culture: '秦汉文化代表，唐文化，丝绸之路文化，历史遗迹众多，文化底蕴深厚。',
    advantages: ['历史文化底蕴深厚', '旅游资源丰富', '科教发达，高校众多', '美食文化发达'],
    challenges: ['经济活力不如沿海', '薪资水平相对较低', '地理位置相对偏远', '环境质量有待改善'],
    recommendations: ['发展旅游文化产业', '利用历史资源，打造特色', '发展科教产业，吸引人才', '改善环境质量']
  },
  // 云南省
  {
    id: 'kunming',
    name: '昆明',
    province: '云南',
    tags: ['春城', '旅游胜地', '花都', '宜居城市'],
    description: '春城，四季如春，旅游资源丰富，环境优美。',
    traits: { lifestyle: 5, career: 5, social: 6, culture: 7, psychology: 9 },
    lifestyle: '生活节奏慢，气候宜人，环境优美，适合养老和享受生活。',
    career: '旅游、服务业、花卉产业发达，但就业机会相对较少。',
    social: '重视生活品质，人际关系轻松，重视自然生活。',
    culture: '民族文化、春城文化，多元文化交融。',
    advantages: ['气候宜人', '环境优美', '旅游资源丰富', '生活成本低'],
    challenges: ['经济规模有限', '就业机会较少', '地处西南，交通不便', '产业单一'],
    recommendations: ['发展旅游和花卉产业', '发挥气候优势', '发展养老产业', '改善交通']
  },
  // 安徽省
  {
    id: 'hefei',
    name: '合肥',
    province: '安徽',
    tags: ['科教之城', '创新之都', '大湖名城', '宜居城市'],
    description: '安徽省会，科教实力强，发展迅速，环境优美。',
    traits: { lifestyle: 6, career: 7, social: 6, culture: 6, psychology: 7 },
    lifestyle: '生活节奏适中，生活成本低，环境优美，适合追求安稳生活的人。',
    career: '科技、教育、制造业发展迅速，但就业机会相对较少。',
    social: '重视教育和科技，人际关系简单。',
    culture: '徽文化、科技文化，传统文化与现代科技交融。',
    advantages: ['科教实力强', '生活成本低', '环境优美', '发展迅速'],
    challenges: ['经济规模有限', '就业机会较少', '城市影响力不足', '相比长三角，吸引力有限'],
    recommendations: ['发挥科教优势', '发展科技产业', '对接长三角资源', '提升城市形象']
  },
  // 江西省
  {
    id: 'nanchang',
    name: '南昌',
    province: '江西',
    tags: ['英雄城', '赣鄱大地', '制造业名城', '宜居城市'],
    description: '江西省会，英雄城，制造业发达，环境优美。',
    traits: { lifestyle: 6, career: 6, social: 6, culture: 7, psychology: 7 },
    lifestyle: '生活节奏适中，生活成本低，适合追求安稳生活的人。',
    career: '制造业、航空产业发达，但就业机会相对较少。',
    social: '重视传统，人际关系稳定，重视家庭。',
    culture: '赣文化、英雄文化，传统文化底蕴深厚。',
    advantages: ['生活成本低', '制造业发达', '环境优美', '交通便利'],
    challenges: ['经济活力有限', '就业机会较少', '城市影响力不足', '年轻人吸引力不足'],
    recommendations: ['发挥制造业优势', '发展相关产业', '对接长三角资源', '改善城市形象']
  },
  // 山西省
  {
    id: 'taiyuan',
    name: '太原',
    province: '山西',
    tags: ['龙城', '能源基地', '历史名城', '宜居城市'],
    description: '山西省会，能源基地，历史文化悠久，环境不断改善。',
    traits: { lifestyle: 6, career: 6, social: 5, culture: 7, psychology: 6 },
    lifestyle: '生活节奏适中，生活成本低，适合务实生活的人。',
    career: '能源、制造业、旅游业发展，但经济转型压力大。',
    social: '重视传统，人际关系稳定。',
    culture: '晋文化，历史底蕴深厚。',
    advantages: ['生活成本低', '历史底蕴深厚', '交通便利', '环境不断改善'],
    challenges: ['经济转型压力大', '就业机会有限', '城市影响力不足', '环境质量仍需改善'],
    recommendations: ['推动产业转型', '发展文化旅游业', '改善环境质量', '对接京津冀资源']
  },
  // 贵州省
  {
    id: 'guiyang',
    name: '贵阳',
    province: '贵州',
    tags: ['林城', '避暑之都', '大数据之都', '生态之城'],
    description: '贵州省会，避暑胜地，大数据产业发达，生态环境优良。',
    traits: { lifestyle: 6, career: 6, social: 6, culture: 6, psychology: 8 },
    lifestyle: '生活节奏适中，气候宜人，环境优美，适合追求自然生活的人。',
    career: '大数据、旅游业、服务业发展，但就业机会相对较少。',
    social: '重视生活品质，人际关系轻松。',
    culture: '民族文化、大数据文化，多元文化交融。',
    advantages: ['气候宜人', '环境优美', '大数据产业发达', '生活成本低'],
    challenges: ['经济规模有限', '就业机会较少', '地处西南', '产业基础薄弱'],
    recommendations: ['发挥大数据优势', '发展旅游和生态产业', '对接成渝资源', '改善交通']
  },
  // 广西壮族自治区
  {
    id: 'nanning',
    name: '南宁',
    province: '广西',
    tags: ['绿城', '东盟门户', '宜居城市', '水果之乡'],
    description: '广西首府，东盟门户，环境优美，水果丰富。',
    traits: { lifestyle: 6, career: 6, social: 6, culture: 6, psychology: 7 },
    lifestyle: '生活节奏适中，气候温暖，环境优美，适合追求自然生活的人。',
    career: '服务业、制造业、旅游业发展，但就业机会相对较少。',
    social: '重视生活品质，人际关系轻松，重视家庭。',
    culture: '壮族文化、东盟文化，多元文化交融。',
    advantages: ['环境优美', '东盟门户', '水果丰富', '生活成本低'],
    challenges: ['经济规模有限', '就业机会较少', '城市影响力不足', '相比粤港澳，吸引力有限'],
    recommendations: ['发挥东盟门户优势', '发展相关产业', '对接粤港澳资源', '提升城市形象']
  },
  // 内蒙古自治区
  {
    id: 'hohhot',
    name: '呼和浩特',
    province: '内蒙古',
    tags: ['青城', '草原之城', '乳都', '宜居城市'],
    description: '内蒙古首府，草原文化独特，乳业发达，环境优美。',
    traits: { lifestyle: 5, career: 5, social: 5, culture: 7, psychology: 7 },
    lifestyle: '生活节奏慢，环境优美，适合追求自然生活的人。',
    career: '乳业、服务业、旅游业发展，但就业机会相对较少。',
    social: '重视传统，人际关系稳定，重视草原文化。',
    culture: '草原文化、蒙古族文化，民族特色鲜明。',
    advantages: ['环境优美', '草原文化独特', '乳业发达', '生活成本低'],
    challenges: ['经济规模有限', '就业机会较少', '地处北部', '气候寒冷'],
    recommendations: ['发挥草原文化优势', '发展旅游和乳业', '对接京津冀资源', '改善城市形象']
  },
  // 新疆维吾尔自治区
  {
    id: 'urumqi',
    name: '乌鲁木齐',
    province: '新疆',
    tags: ['西域明珠', '丝路明珠', '美食之都', '多元文化'],
    description: '新疆首府，丝绸之路重镇，多元文化交融，美食丰富。',
    traits: { lifestyle: 6, career: 6, social: 6, culture: 8, psychology: 6 },
    lifestyle: '生活节奏适中，气候干燥，适合能适应环境的人。',
    career: '贸易、服务业、旅游业发展，但就业机会相对较少。',
    social: '多元文化交融，重视民族特色。',
    culture: '丝绸之路文化、多元民族文化，文化特色鲜明。',
    advantages: ['多元文化交融', '美食丰富', '丝绸之路重镇', '贸易发达'],
    challenges: ['地处西北，交通不便', '气候干燥', '经济规模有限', '就业机会较少'],
    recommendations: ['发挥丝绸之路优势', '发展贸易和旅游业', '改善交通', '发挥多元文化特色']
  },
  // 海南省
  {
    id: 'haikou',
    name: '海口',
    province: '海南',
    tags: ['椰城', '热带海滨', '宜居城市', '旅游胜地'],
    description: '海南省会，热带海滨城市，环境优美，气候宜人。',
    traits: { lifestyle: 5, career: 5, social: 5, culture: 6, psychology: 9 },
    lifestyle: '生活节奏慢，环境优美，气候宜人，适合养老和享受生活。',
    career: '旅游、服务业、热带农业发展，但就业机会相对较少。',
    social: '重视生活品质，人际关系轻松，重视自然生活。',
    culture: '热带文化、海洋文化，适合慢生活。',
    advantages: ['环境优美', '气候宜人', '生活节奏慢', '旅游资源丰富'],
    challenges: ['经济规模有限', '就业机会较少', '生活成本较高', '产业单一'],
    recommendations: ['发展旅游和热带农业', '发挥气候优势', '发展养老产业', '对接粤港澳资源']
  },
  {
    id: 'sanya',
    name: '三亚',
    province: '海南',
    tags: ['热带天堂', '度假胜地', '东方夏威夷', '海滨城市'],
    description: '国际旅游城市，热带海滨风光优美，度假胜地。',
    traits: { lifestyle: 4, career: 5, social: 5, culture: 6, psychology: 9 },
    lifestyle: '生活节奏慢，环境优美，气候宜人，适合度假和养老。',
    career: '旅游业、服务业发达，但就业机会相对较少，工作机会有限。',
    social: '重视生活品质，人际关系轻松，重视享受生活。',
    culture: '热带文化、度假文化，适合休闲度假。',
    advantages: ['环境优美', '气候宜人', '国际旅游城市', '度假胜地'],
    challenges: ['生活成本高', '就业机会有限', '工作机会少', '产业单一'],
    recommendations: ['发展高端旅游业', '发挥热带优势', '发展养老产业', '提升服务质量']
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
