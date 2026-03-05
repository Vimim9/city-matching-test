// 性格维度类型
export type PersonalityDimension = 
  | 'lifestyle'      // 生活节奏
  | 'career'         // 职业倾向
  | 'social'         // 社交倾向
  | 'culture'        // 文化偏好
  | 'psychology';    // 心理需求

// 答案选项
export interface AnswerOption {
  value: string;
  label: string;
  scores: Record<PersonalityDimension, number>;
}

// 测试题目
export interface Question {
  id: number;
  dimension: PersonalityDimension;
  question: string;
  options: AnswerOption[];
}

// 城市特征
export interface CityTraits {
  lifestyle: number;      // 生活节奏（1-10，1最慢，10最快）
  career: number;         // 职业机会（1-10）
  social: number;         // 社交活跃度（1-10）
  culture: number;        // 文化多样性（1-10）
  psychology: number;     // 心理契合度（1-10）
  [key: string]: number;  // 索引签名，允许作为 Record<string, number> 使用
}

// 城市信息
export interface City {
  id: string;
  name: string;
  province: string;
  tags: string[];
  description: string;
  traits: CityTraits;
  lifestyle: string;      // 详细描述
  career: string;         // 详细描述
  social: string;         // 详细描述
  culture: string;        // 详细描述
  advantages: string[];   // 优势
  challenges: string[];   // 挑战
  recommendations: string[];  // 生活建议
}

// 用户答题记录
export interface UserAnswer {
  questionId: number;
  selectedOption: string;
  timestamp: number;
}

// 性格分析结果
export interface PersonalityResult {
  dimension: PersonalityDimension;
  score: number;          // 1-10分
  description: string;
  keywords: string[];
}

// 匹配结果
export interface MatchResult {
  matchScore: number;     // 匹配度 0-100
  reason: string;         // 匹配原因
}

// 最终结果
export interface TestResult {
  answers: UserAnswer[];
  personalityResults: PersonalityResult[];
  recommendedCity: City;
  cityMatch: MatchResult;
  alternativeCities: Array<{
    city: City;
    match: MatchResult;
  }>;
  lifestyleAdvice: string[];
  timestamp: number;
}
