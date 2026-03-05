import { Question, UserAnswer, PersonalityResult, PersonalityDimension, TestResult, City, CityTraits } from '@/lib/types';
import { questions } from '@/data/questions';
import { matchCity, getAllCityMatches, cities } from '@/data/cities';

// 维度中文映射
const dimensionNames: Record<PersonalityDimension, string> = {
  lifestyle: '生活节奏',
  career: '职业倾向',
  social: '社交倾向',
  culture: '文化偏好',
  psychology: '心理需求'
};

// 维度描述模板
const dimensionDescriptions: Record<PersonalityDimension, (score: number) => string> = {
  lifestyle: (score: number) => {
    if (score <= 3) return '你偏好慢节奏的生活方式，重视生活品质和工作生活平衡，希望有更多时间享受生活。';
    if (score <= 6) return '你的生活节奏适中，既能享受生活又能保持一定的效率，追求工作与生活的平衡。';
    if (score <= 8) return '你适应快节奏的生活，追求高效和成就感，喜欢充实忙碌的状态。';
    return '你极度适应快节奏和高强度的生活方式，追求极致的效率和成就，享受挑战。';
  },
  career: (score: number) => {
    if (score <= 3) return '你更看重工作的稳定性和安全感，偏好传统行业，希望工作生活平衡。';
    if (score <= 6) return '你既追求职业发展又重视工作生活平衡，希望有稳定的成长空间。';
    if (score <= 8) return '你有强烈的职业追求，看重薪资待遇和晋升机会，愿意为事业投入更多时间。';
    return '你有极强的职业野心，追求卓越和突破，希望进入顶尖行业，成为行业精英。';
  },
  social: (score: number) => {
    if (score <= 3) return '你偏向内向，更喜欢少量深交，重视质量而非数量，享受独处时光。';
    if (score <= 6) return '你的社交方式平衡，既有亲密朋友也能与陌生人交流，适度的社交让你舒适。';
    if (score <= 8) return '你性格外向，喜欢广泛的社交，享受认识新朋友和参与各种活动。';
    return '你极度外向，社交圈广泛，享受热闹和多元化的社交环境，是社交达人。';
  },
  culture: (score: number) => {
    if (score <= 3) return '你偏好传统文化和保守的生活方式，重视历史底蕴和传统价值。';
    if (score <= 6) return '你对传统文化和现代文化都能接受，希望两者平衡发展。';
    if (score <= 8) return '你热爱现代文化和创新元素，追求前沿的艺术和时尚，喜欢多元文化。';
    return '你是文化先锋，极度热爱创新和多元文化，追求最前沿的艺术和生活方式。';
  },
  psychology: (score: number) => {
    if (score <= 3) return '你心理上追求稳定和安全感，需要可控的环境，不喜欢不确定性。';
    if (score <= 6) return '你心理承受能力适中，既能接受一定的挑战也需要安全感。';
    if (score <= 8) return '你心理承受能力强，能够应对较大的压力和挑战，追求成长和突破。';
    return '你有极强的心理承受能力，在压力下反而能发挥更好，追求极致的成长和突破。';
  }
};

// 维度关键词
const dimensionKeywords: Record<PersonalityDimension, string[]> = {
  lifestyle: ['慢生活', '工作生活平衡', '效率', '成就感', '挑战'],
  career: ['稳定', '成长', '高薪', '晋升', '创业'],
  social: ['内向', '平衡', '外向', '社交达人', '多元化'],
  culture: ['传统', '现代', '创新', '多元', '前沿'],
  psychology: ['安全', '稳定', '成长', '挑战', '突破']
};

// 计算性格维度得分
export function calculatePersonalityScores(answers: UserAnswer[]): Record<PersonalityDimension, number> {
  const dimensions: PersonalityDimension[] = ['lifestyle', 'career', 'social', 'culture', 'psychology'];
  const scores: Record<PersonalityDimension, number[]> = {
    lifestyle: [],
    career: [],
    social: [],
    culture: [],
    psychology: []
  };

  // 收集每个维度的所有得分
  answers.forEach(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    if (question) {
      const selectedOption = question.options.find(opt => opt.value === answer.selectedOption);
      if (selectedOption) {
        dimensions.forEach(dim => {
          scores[dim].push(selectedOption.scores[dim]);
        });
      }
    }
  });

  // 计算每个维度的平均分（1-10）
  const finalScores: Record<PersonalityDimension, number> = {} as any;
  dimensions.forEach(dim => {
    const dimScores = scores[dim];
    const average = dimScores.length > 0 
      ? dimScores.reduce((sum, score) => sum + score, 0) / dimScores.length 
      : 5;
    finalScores[dim] = Math.round(average * 10) / 10; // 保留一位小数
  });

  return finalScores;
}

// 生成性格分析结果
export function generatePersonalityResults(scores: Record<PersonalityDimension, number>): PersonalityResult[] {
  const dimensions: PersonalityDimension[] = ['lifestyle', 'career', 'social', 'culture', 'psychology'];
  
  return dimensions.map(dim => {
    const keywordIndex = Math.min(Math.floor(scores[dim] / 2), dimensionKeywords[dim].length - 1);
    return {
      dimension: dim,
      score: scores[dim],
      description: dimensionDescriptions[dim](scores[dim]),
      keywords: [dimensionKeywords[dim][keywordIndex]]
    };
  });
}

// 生成匹配原因
export function generateMatchReason(
  userTraits: Record<PersonalityDimension, number>,
  cityTraits: CityTraits,
  cityName: string
): string {
  const reasons: string[] = [];
  
  // 找出匹配度最高的3个维度
  const dimensionMatches = Object.keys(userTraits).map(dim => ({
    dimension: dim as PersonalityDimension,
    userScore: userTraits[dim as PersonalityDimension],
    cityScore: cityTraits[dim as PersonalityDimension],
    diff: Math.abs(userTraits[dim as PersonalityDimension] - cityTraits[dim as PersonalityDimension])
  })).sort((a, b) => a.diff - b.diff).slice(0, 3);

  dimensionMatches.forEach(match => {
    const dimName = dimensionNames[match.dimension];
    if (match.diff <= 1) {
      reasons.push(`${cityName}的${dimName}特点（${match.cityScore}分）与你的偏好（${match.userScore}分）高度契合`);
    } else if (match.diff <= 2) {
      reasons.push(`${cityName}的${dimName}环境（${match.cityScore}分）与你的需求（${match.userScore}分）匹配度很高`);
    }
  });

  return reasons.length > 0 
    ? reasons.join('，') 
    : `${cityName}整体环境与你的性格特点较为匹配，是一个值得考虑的选择。`;
}

// 生成生活建议
export function generateLifestyleAdvice(
  personalityResults: PersonalityResult[],
  city: City
): string[] {
  const advice: string[] = [];
  
  // 基于性格维度给出建议
  personalityResults.forEach(result => {
    switch (result.dimension) {
      case 'lifestyle':
        if (result.score <= 3) {
          advice.push('建议在城市中寻找相对安静的居住区域，避免过度繁忙的商业区，保持自己的生活节奏。');
        } else if (result.score >= 8) {
          advice.push('建议选择交通便利的中心区域，充分利用城市的高效环境，同时注意适当休息。');
        }
        break;
      case 'career':
        if (result.score >= 7) {
          advice.push('充分利用城市的职业机会，积极参与行业活动和社交网络，加速职业发展。');
        }
        break;
      case 'social':
        if (result.score <= 3) {
          advice.push('建议参加兴趣小组或专业社群，在舒适的环境中建立深度的人际关系。');
        } else if (result.score >= 8) {
          advice.push('积极参加城市的各类活动，扩展社交圈，把握更多机会。');
        }
        break;
      case 'culture':
        if (result.score >= 7) {
          advice.push('充分利用城市的文化资源，多参观博物馆、艺术展和文化活动，丰富精神生活。');
        }
        break;
      case 'psychology':
        if (result.score <= 3) {
          advice.push('建立稳定的生活规律和社交支持网络，在城市中寻找安全感和归属感。');
        } else if (result.score >= 8) {
          advice.push('保持积极心态，将压力转化为动力，在挑战中实现自我突破。');
        }
        break;
    }
  });

  // 基于城市特点给出建议
  advice.push(...city.recommendations);

  // 去重
  return [...new Set(advice)];
}

// 计算完整测试结果
export function calculateTestResult(answers: UserAnswer[]): TestResult {
  // 计算性格得分
  const personalityScores = calculatePersonalityScores(answers);
  
  // 生成性格分析结果
  const personalityResults = generatePersonalityResults(personalityScores);
  
  // 匹配最佳城市
  const recommendedCity = matchCity(personalityScores);
  
  // 生成匹配原因
  const matchReason = generateMatchReason(
    personalityScores,
    recommendedCity.traits,
    recommendedCity.name
  );
  
  // 计算所有城市的匹配度
  const allMatches = getAllCityMatches(personalityScores);
  
  // 生成备选城市（前3，不包括最佳城市）
  const alternativeCities = allMatches
    .filter(m => m.city.id !== recommendedCity.id)
    .slice(0, 3)
    .map(m => ({
      city: m.city,
      match: {
        matchScore: Math.round(m.matchScore),
        reason: generateMatchReason(personalityScores, m.city.traits, m.city.name)
      }
    }));
  
  // 生成生活建议
  const lifestyleAdvice = generateLifestyleAdvice(personalityResults, recommendedCity);
  
  return {
    answers,
    personalityResults,
    recommendedCity,
    cityMatch: {
      matchScore: Math.round(allMatches.find(m => m.city.id === recommendedCity.id)!.matchScore),
      reason: matchReason
    },
    alternativeCities,
    lifestyleAdvice,
    timestamp: Date.now()
  };
}

// 获取维度进度
export function getDimensionProgress(answers: UserAnswer[]): Record<PersonalityDimension, { completed: number; total: number }> {
  const dimensions: PersonalityDimension[] = ['lifestyle', 'career', 'social', 'culture', 'psychology'];
  const progress: Record<PersonalityDimension, { completed: number; total: number }> = {} as any;
  
  dimensions.forEach(dim => {
    const total = questions.filter(q => q.dimension === dim).length;
    const completed = answers.filter(a => {
      const question = questions.find(q => q.id === a.questionId);
      return question && question.dimension === dim;
    }).length;
    
    progress[dim] = { completed, total };
  });
  
  return progress;
}
