'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { calculateTestResult, calculatePersonalityScores } from '@/lib/scoring';
import { TestResult, PersonalityDimension, City } from '@/lib/types';
import { cities } from '@/data/cities';
import { MapPin, Heart, Target, Users, Palette, Brain, Sparkles, ArrowRight, CheckCircle2, AlertCircle, TrendingUp, DollarSign, Building, Clock, Coffee, Briefcase, GraduationCap, Home, Activity, Star, Lightbulb, Compass, Award } from 'lucide-react';

export default function ResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<TestResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [personalityScores, setPersonalityScores] = useState<Record<PersonalityDimension, number> | null>(null);
  const [topCities, setTopCities] = useState<Array<{ city: City; matchScore: number }>>([]);

  useEffect(() => {
    const savedAnswers = localStorage.getItem('city-test-result');
    if (savedAnswers) {
      try {
        const answers = JSON.parse(savedAnswers);
        const testResult = calculateTestResult(answers);
        setResult(testResult);
        
        // 计算性格分数
        const scores = calculatePersonalityScores(answers);
        setPersonalityScores(scores);
        
        // 计算前5个匹配城市
        const allMatches = cities.map(city => {
          const traitDiff = Math.sqrt(
            Math.pow((scores.lifestyle - city.traits.lifestyle), 2) +
            Math.pow((scores.career - city.traits.career), 2) +
            Math.pow((scores.social - city.traits.social), 2) +
            Math.pow((scores.culture - city.traits.culture), 2) +
            Math.pow((scores.psychology - city.traits.psychology), 2)
          );
          const maxDiff = Math.sqrt(5 * 81); // 最大可能差异
          const matchScore = Math.round((1 - traitDiff / maxDiff) * 100);
          
          return { city, matchScore };
        }).sort((a, b) => b.matchScore - a.matchScore).slice(0, 5);
        
        setTopCities(allMatches);
      } catch (error) {
        console.error('解析答案失败:', error);
      }
    }
    setLoading(false);
  }, []);

  // 维度图标映射
  const dimensionIcons: Record<string, any> = {
    lifestyle: <MapPin className="w-5 h-5" />,
    career: <Target className="w-5 h-5" />,
    social: <Users className="w-5 h-5" />,
    culture: <Palette className="w-5 h-5" />,
    psychology: <Brain className="w-5 h-5" />
  };

  // 维度名称映射
  const dimensionNames: Record<string, string> = {
    lifestyle: '生活节奏',
    career: '职业倾向',
    social: '社交倾向',
    culture: '文化偏好',
    psychology: '心理需求'
  };

  // 维度颜色映射
  const dimensionColors: Record<string, string> = {
    lifestyle: 'from-blue-500 to-cyan-500',
    career: 'from-green-500 to-emerald-500',
    social: 'from-purple-500 to-violet-500',
    culture: 'from-pink-500 to-rose-500',
    psychology: 'from-amber-500 to-orange-500'
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 flex items-center justify-center">
        <div className="text-center">
          <Sparkles className="w-12 h-12 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-xl font-semibold">正在分析您的性格...</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-500" />
              未找到测试结果
            </CardTitle>
            <CardDescription>
              请先完成测试再查看结果
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => router.push('/test')} className="w-full">
              开始测试
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const recommendedCity = result.recommendedCity;
  const personalityResults = result.personalityResults;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* 头部 */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm mb-4">
            <CheckCircle2 className="w-4 h-4" />
            <span>测试完成</span>
          </div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            你的性格城市匹配结果
          </h1>
          <p className="text-muted-foreground">
            基于45道专业题目的深度分析
          </p>
        </div>

        <Tabs defaultValue="city" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto">
            <TabsTrigger value="city">推荐城市</TabsTrigger>
            <TabsTrigger value="personality">性格分析</TabsTrigger>
            <TabsTrigger value="advice">生活建议</TabsTrigger>
          </TabsList>

          {/* 推荐城市标签页 */}
          <TabsContent value="city" className="space-y-6">
            {/* 推荐城市卡片 */}
            <Card className="border-2 border-blue-200 dark:border-blue-800 overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{recommendedCity.name}</h2>
                      <p className="text-sm text-blue-100">{recommendedCity.province}</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-4xl font-bold">{result.cityMatch.matchScore}%</div>
                    <p className="text-sm text-blue-100">匹配度</p>
                  </div>
                </div>
                <p className="mt-4 text-blue-100 text-sm leading-relaxed">
                  {recommendedCity.description}
                </p>
              </div>
              <CardContent className="pt-6">
                {/* 标签 */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {recommendedCity.tags.map((tag: string, index: number) => (
                    <Badge key={index} variant="secondary" className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* 匹配度深度解读 */}
                <div className="mb-6 p-5 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                  <div className="flex gap-3">
                    <Lightbulb className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">匹配度深度解读</h4>
                      <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 whitespace-normal">
                        {result.cityMatch.reason}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 核心特征对比 */}
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-5 mb-6">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-blue-600" />
                    核心特征对比分析
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {personalityScores && Object.entries(personalityScores).map(([dim, userScore]) => {
                      const cityScore = recommendedCity.traits[dim as PersonalityDimension];
                      const diff = Math.abs(userScore - cityScore);
                      const matchLevel = diff <= 1 ? '高度匹配' : diff <= 2 ? '较好匹配' : '一般匹配';
                      const matchColor = diff <= 1 ? 'text-green-600' : diff <= 2 ? 'text-blue-600' : 'text-orange-600';
                      
                      return (
                        <div key={dim} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-sm flex items-center gap-2">
                              {dimensionIcons[dim]}
                              {dimensionNames[dim]}
                            </span>
                            <span className={`text-xs font-medium ${matchColor}`}>{matchLevel}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs mb-2">
                            <span className="text-muted-foreground">你的偏好: <strong className="text-blue-600">{userScore.toFixed(1)}</strong></span>
                            <span className="text-muted-foreground">城市特征: <strong className="text-indigo-600">{cityScore}</strong></span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className={`bg-gradient-to-r ${dimensionColors[dim]} h-2 rounded-full transition-all duration-500`}
                              style={{ width: `${(userScore / 10) * 100}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 城市详细分析 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Card className="border-blue-100 dark:border-blue-900">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        生活节奏与品质
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground leading-relaxed">{recommendedCity.lifestyle}</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-green-100 dark:border-green-900">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Target className="w-4 h-4 text-green-600" />
                        职业发展前景
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground leading-relaxed">{recommendedCity.career}</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-purple-100 dark:border-purple-900">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Users className="w-4 h-4 text-purple-600" />
                        社交环境氛围
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground leading-relaxed">{recommendedCity.social}</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-pink-100 dark:border-pink-900">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Palette className="w-4 h-4 text-pink-600" />
                        文化特色体验
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground leading-relaxed">{recommendedCity.culture}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* 优势和挑战 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-700 dark:text-green-300">
                      <CheckCircle2 className="w-5 h-5" />
                      城市核心优势
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {recommendedCity.advantages.map((adv: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 p-5 rounded-lg border border-amber-200 dark:border-amber-800">
                    <h4 className="font-semibold mb-3 flex items-center gap-2 text-amber-700 dark:text-amber-300">
                      <AlertCircle className="w-5 h-5" />
                      挑战与应对策略
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {recommendedCity.challenges.map((cha: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                          <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{cha}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 备选城市推荐 */}
            {topCities.length > 1 && (
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Compass className="w-5 h-5 text-indigo-600" />
                    其他高匹配度城市推荐
                  </CardTitle>
                  <CardDescription>
                    根据你的性格特征，以下是其他值得考虑的城市选择
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {topCities.slice(1, 5).map((item, index) => (
                      <Card key={index} className="border hover:shadow-md transition-all cursor-pointer group">
                        <CardHeader className="pb-2">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                                {index + 2}
                              </div>
                              <div>
                                <CardTitle className="text-lg">{item.city.name}</CardTitle>
                                <p className="text-xs text-muted-foreground">{item.city.province}</p>
                              </div>
                            </div>
                            <Badge variant="secondary" className="text-sm font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                              {item.matchScore}%
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-2">
                          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                            {item.city.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {item.city.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                              <Badge key={tagIndex} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Target className="w-3 h-3" />
                              职业倾向: {item.city.traits.career}/10
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              社交环境: {item.city.traits.social}/10
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* 性格分析标签页 */}
          <TabsContent value="personality" className="space-y-6">
            {/* 性格维度对比分析 */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-600" />
                  性格维度雷达图
                </CardTitle>
                <CardDescription>
                  可视化展示你的五维性格特征分布
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {personalityResults.map((item: any, index: number) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-32 flex items-center gap-2 text-sm font-medium">
                        {dimensionIcons[item.dimension]}
                        <span>{dimensionNames[item.dimension]}</span>
                      </div>
                      <div className="flex-1">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 relative overflow-hidden">
                          <div
                            className={`bg-gradient-to-r ${dimensionColors[item.dimension]} h-4 rounded-full transition-all duration-500`}
                            style={{ width: `${item.score * 10}%` }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs font-bold text-white drop-shadow-sm">{item.score}/10</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 性格深度解读 */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-500" />
                  性格深度解读
                </CardTitle>
                <CardDescription>
                  基于你的性格特征，提供更深入的分析和建议
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* 生活节奏解读 */}
                  {(() => {
                    const lifestyleResult = personalityResults.find((p: any) => p.dimension === 'lifestyle');
                    if (!lifestyleResult) return null;
                    
                    return (
                      <div className="border-l-4 border-blue-500 pl-4 py-2">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-blue-600" />
                          生活节奏偏好
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {lifestyleResult.score <= 3 
                            ? '你追求慢节奏的生活方式，注重生活品质和内心感受。建议选择生活节奏相对舒缓、环境优美的城市，这样可以更好地保持身心平衡，享受生活的美好。'
                            : lifestyleResult.score <= 6
                            ? '你的生活节奏适中，能够在效率和品质之间找到平衡。你适应性强，可以在不同节奏的城市中找到自己的生活方式，既不会感到压力过大，也不会觉得过于无聊。'
                            : lifestyleResult.score <= 8
                            ? '你适应快节奏的生活，追求效率和成就感。充满活力的城市环境会让你感到兴奋和充实，但也要注意适当放松，保持身心健康。'
                            : '你极度适应高强度快节奏的生活，渴望挑战和突破。选择发展迅速、机会密集的城市会让你如鱼得水，但要注意在忙碌中保持生活的其他方面，避免过度透支。'}
                        </p>
                      </div>
                    );
                  })()}

                  {/* 职业倾向解读 */}
                  {(() => {
                    const careerResult = personalityResults.find((p: any) => p.dimension === 'career');
                    if (!careerResult) return null;
                    
                    return (
                      <div className="border-l-4 border-green-500 pl-4 py-2">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Target className="w-4 h-4 text-green-600" />
                          职业发展倾向
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {careerResult.score <= 3
                            ? '你更看重工作的稳定性和工作生活平衡。建议选择就业环境稳定、生活压力相对较小的城市，传统行业发达的城市可能更适合你，这样可以在稳定中寻找发展的机会。'
                            : careerResult.score <= 6
                            ? '你对职业发展持平衡态度，既追求进步也重视生活品质。选择职业机会丰富但生活成本适中的城市会让你在事业和生活之间游刃有余，找到属于自己的节奏。'
                            : careerResult.score <= 8
                            ? '你有较强的职业野心，追求高薪和晋升机会。一线城市或新兴产业聚集的城市会为你提供广阔的发展平台，但要做好面对激烈竞争的心理准备。'
                            : '你有着极强的职业追求和野心，渴望成为行业精英。选择经济发达、机会密集的顶尖城市，进入竞争激烈的行业会让你快速成长，但也要注意身心调节，保持可持续发展。'}
                        </p>
                      </div>
                    );
                  })()}

                  {/* 社交倾向解读 */}
                  {(() => {
                    const socialResult = personalityResults.find((p: any) => p.dimension === 'social');
                    if (!socialResult) return null;
                    
                    return (
                      <div className="border-l-4 border-purple-500 pl-4 py-2">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Users className="w-4 h-4 text-purple-600" />
                          社交方式偏好
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {socialResult.score <= 3
                            ? '你偏向内向，更喜欢少量深交的朋友关系。建议选择人际关系相对简单、生活节奏适中的城市，这样可以在舒适的社交环境中建立稳定的人际网络，不必承受过大的社交压力。'
                            : socialResult.score <= 6
                            ? '你的社交方式平衡，既能享受独处也能融入社交场合。大多数城市都能适应，选择那些既有安静的角落也有热闹的社交场所的城市会让你感到舒适。'
                            : socialResult.score <= 8
                            ? '你性格外向，喜欢广泛的社交和热闹的氛围。选择人口密集、活动丰富的城市会让你如鱼得水，充满活力的社交环境会让你感到充实和快乐。'
                            : '你是社交达人，享受高度多元和活跃的社交环境。国际化程度高、人口流动性大的城市会为你提供无限的社交可能，让你在多元化的人际网络中找到属于自己的位置。'}
                        </p>
                      </div>
                    );
                  })()}

                  {/* 文化偏好解读 */}
                  {(() => {
                    const cultureResult = personalityResults.find((p: any) => p.dimension === 'culture');
                    if (!cultureResult) return null;
                    
                    return (
                      <div className="border-l-4 border-pink-500 pl-4 py-2">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Palette className="w-4 h-4 text-pink-600" />
                          文化体验偏好
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {cultureResult.score <= 3
                            ? '你偏爱传统文化和保守的生活方式。建议选择历史悠久、传统文化底蕴深厚的城市，在那里你可以感受到深厚的文化氛围和传统价值，找到心灵的归属感。'
                            : cultureResult.score <= 6
                            ? '你对传统和现代文化都能接受，希望在两者之间找到平衡。选择既有历史底蕴又充满现代活力的城市，会让你既能感受传统文化的魅力，又能享受现代生活的便利。'
                            : cultureResult.score <= 8
                            ? '你热爱现代文化和创新元素，追求前沿的艺术和生活方式。选择文化活动丰富、创意产业发达的城市会让你感到兴奋和满足，不断有新的发现和体验。'
                            : '你是文化先锋，极度热爱创新和多元文化。国际化大都市或创意中心会让你如鱼得水，前沿的艺术展览、多元的文化活动会让你每天都充满新鲜感和灵感。'}
                        </p>
                      </div>
                    );
                  })()}

                  {/* 心理需求解读 */}
                  {(() => {
                    const psychologyResult = personalityResults.find((p: any) => p.dimension === 'psychology');
                    if (!psychologyResult) return null;
                    
                    return (
                      <div className="border-l-4 border-amber-500 pl-4 py-2">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Brain className="w-4 h-4 text-amber-600" />
                          心理承受能力
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {psychologyResult.score <= 3
                            ? '你心理上追求稳定和安全感，需要相对可控的环境。建议选择生活节奏稳定、环境压力较小的城市，建立稳定的生活规律和支持网络，这样会让你感到安心和舒适。'
                            : psychologyResult.score <= 6
                            ? '你的心理承受能力适中，既能应对一定的挑战也需要安全感。选择发展稳定但又有一定机会的城市，在舒适区边缘适度挑战自己，会让你稳步成长。'
                            : psychologyResult.score <= 8
                            ? '你心理承受能力强，能够应对较大的压力和挑战。快节奏、高竞争的城市环境不会让你感到压力过大，反而会激发你的潜力，让你在挑战中不断成长。'
                            : '你有极强的心理承受能力，在压力下反而能发挥更好。高压、高竞争的环境会激发你的斗志和潜能，让你在极限状态下实现突破和成长。'}
                        </p>
                      </div>
                    );
                  })()}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 生活建议标签页 */}
          <TabsContent value="advice" className="space-y-6">
            {/* 行动指南 */}
            <Card className="border-2 border-green-200 dark:border-green-800 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Compass className="w-6 h-6" />
                  {recommendedCity.name}定居行动指南
                </CardTitle>
                <CardDescription className="text-green-100">
                  从准备到融入的完整行动路径
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* 前期准备 */}
                  <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-5 border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold mb-4 flex items-center gap-2 text-blue-700 dark:text-blue-300">
                      <Clock className="w-5 h-5" />
                      前期准备阶段
                    </h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">1</div>
                        <div>
                          <span className="font-medium">了解城市政策</span>
                          <p className="text-muted-foreground mt-1">研究{recommendedCity.name}的人才引进政策、落户条件、住房补贴等信息</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">2</div>
                        <div>
                          <span className="font-medium">财务规划</span>
                          <p className="text-muted-foreground mt-1">准备3-6个月的生活费用作为启动资金，了解当地的消费水平和房租情况</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">3</div>
                        <div>
                          <span className="font-medium">职业准备</span>
                          <p className="text-muted-foreground mt-1">提前投递简历，了解当地的薪资水平和行业分布，做好面试准备</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">4</div>
                        <div>
                          <span className="font-medium">人际网络</span>
                          <p className="text-muted-foreground mt-1">通过社交媒体、校友会等渠道，提前建立{recommendedCity.name}的人脉关系</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* 初期适应 */}
                  <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-5 border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold mb-4 flex items-center gap-2 text-green-700 dark:text-green-300">
                      <Home className="w-5 h-5" />
                      初期适应阶段
                    </h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">1</div>
                        <div>
                          <span className="font-medium">住房选择</span>
                          <p className="text-muted-foreground mt-1">根据工作地点和生活偏好选择合适的居住区域，考虑通勤时间和生活便利性</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">2</div>
                        <div>
                          <span className="font-medium">生活设施</span>
                          <p className="text-muted-foreground mt-1">熟悉周边的超市、医院、银行等基础设施，建立日常生活的便利网络</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">3</div>
                        <div>
                          <span className="font-medium">社交融入</span>
                          <p className="text-muted-foreground mt-1">参加兴趣小组、行业聚会等活动，逐步建立社交圈和人际网络</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">4</div>
                        <div>
                          <span className="font-medium">文化体验</span>
                          <p className="text-muted-foreground mt-1">探索城市的特色景点和文化场所，感受{recommendedCity.name}的独特魅力</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* 中期发展 */}
                  <div className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-5 border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold mb-4 flex items-center gap-2 text-purple-700 dark:text-purple-300">
                      <TrendingUp className="w-5 h-5" />
                      中期发展阶段
                    </h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">1</div>
                        <div>
                          <span className="font-medium">职业提升</span>
                          <p className="text-muted-foreground mt-1">深入了解当地的职业发展路径，寻找晋升和成长的机会</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">2</div>
                        <div>
                          <span className="font-medium">技能拓展</span>
                          <p className="text-muted-foreground mt-1">利用{recommendedCity.name}的教育资源，参加培训课程或进修项目</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">3</div>
                        <div>
                          <span className="font-medium">深度社交</span>
                          <p className="text-muted-foreground mt-1">建立稳定的朋友圈和职业人脉，参与更有深度的社交活动</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">4</div>
                        <div>
                          <span className="font-medium">生活优化</span>
                          <p className="text-muted-foreground mt-1">根据生活体验调整居住地、工作方式等，提升生活品质</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* 长期规划 */}
                  <div className="bg-amber-50 dark:bg-amber-950/20 rounded-lg p-5 border border-amber-200 dark:border-amber-800">
                    <h4 className="font-semibold mb-4 flex items-center gap-2 text-amber-700 dark:text-amber-300">
                      <Star className="w-5 h-5" />
                      长期规划阶段
                    </h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">1</div>
                        <div>
                          <span className="font-medium">事业发展</span>
                          <p className="text-muted-foreground mt-1">在{recommendedCity.name}扎根发展，成为行业专家或创业发展</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">2</div>
                        <div>
                          <span className="font-medium">家庭规划</span>
                          <p className="text-muted-foreground mt-1">考虑教育、医疗等家庭需求，做出长期的家庭生活规划</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">3</div>
                        <div>
                          <span className="font-medium">资产配置</span>
                          <p className="text-muted-foreground mt-1">根据当地的房价走势和经济环境，考虑购房或其他投资</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">4</div>
                        <div>
                          <span className="font-medium">回馈社区</span>
                          <p className="text-muted-foreground mt-1">融入当地社区，参与公益活动，为城市贡献自己的力量</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 城市专项建议 */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  {recommendedCity.name}生活指南
                </CardTitle>
                <CardDescription>
                  针对选择这座城市的详细生活建议
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-blue-100 dark:border-blue-900">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Coffee className="w-4 h-4 text-blue-600" />
                        生活方式建议
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground leading-relaxed">{recommendedCity.lifestyle}</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-green-100 dark:border-green-900">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-green-600" />
                        职业发展路径
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground leading-relaxed">{recommendedCity.career}</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-purple-100 dark:border-purple-900">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Users className="w-4 h-4 text-purple-600" />
                        社交融入技巧
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground leading-relaxed">{recommendedCity.social}</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-pink-100 dark:border-pink-900">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Palette className="w-4 h-4 text-pink-600" />
                        文化体验推荐
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground leading-relaxed">{recommendedCity.culture}</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* 实用资源推荐 */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-indigo-600" />
                  实用资源推荐
                </CardTitle>
                <CardDescription>
                  帮助你更好地适应{recommendedCity.name}的实用工具和资源
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold mb-2 flex items-center gap-2 text-blue-700 dark:text-blue-300">
                      <Building className="w-4 h-4" />
                      住房信息平台
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">推荐使用当地主流的租房买房平台</p>
                    <ul className="text-xs space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• 链家、自如、贝壳等主流平台</li>
                      <li>• 当地房管局官方网站</li>
                      <li>• 社区租房微信群和论坛</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold mb-2 flex items-center gap-2 text-green-700 dark:text-green-300">
                      <Briefcase className="w-4 h-4" />
                      求职招聘平台
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">获取{recommendedCity.name}的工作机会</p>
                    <ul className="text-xs space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• 智联招聘、前程无忧、BOSS直聘</li>
                      <li>• 猎聘网（中高端职位）</li>
                      <li>• 当地人才市场和招聘会</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold mb-2 flex items-center gap-2 text-purple-700 dark:text-purple-300">
                      <Users className="w-4 h-4" />
                      社交活动平台
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">融入当地社交圈</p>
                    <ul className="text-xs space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• 豆瓣同城、活动行</li>
                      <li>• Meetup（国际化活动）</li>
                      <li>• 微信兴趣群和公众号</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 城市推荐建议 */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-500" />
                  {recommendedCity.name}发展建议
                </CardTitle>
                <CardDescription>
                  充分发挥这座城市的优势，实现个人发展目标
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recommendedCity.recommendations.map((rec: string, index: number) => (
                    <div key={index} className="flex gap-3 p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                      <Star className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 whitespace-normal">
                        {rec}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* 操作按钮 */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <Button
            variant="outline"
            onClick={() => router.push('/test')}
            className="px-8"
          >
            重新测试
          </Button>
          <Button
            onClick={() => router.push('/')}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8"
          >
            返回首页
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* 页脚 */}
        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>测试结果仅供参考，请结合实际情况做出决策</p>
          <p className="mt-2">© 性格城市匹配测试</p>
        </div>
      </div>
    </div>
  );
}
