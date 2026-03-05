'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { calculateTestResult } from '@/lib/scoring';
import { TestResult } from '@/lib/types';
import { MapPin, Heart, Target, Users, Palette, Brain, Sparkles, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function ResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<TestResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedAnswers = localStorage.getItem('city-test-result');
    if (savedAnswers) {
      try {
        const answers = JSON.parse(savedAnswers);
        const testResult = calculateTestResult(answers);
        setResult(testResult);
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
            <Card className="border-2 border-blue-200 dark:border-blue-800 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl mb-2">
                      {recommendedCity.name}
                    </CardTitle>
                    <CardDescription className="text-blue-100 text-base">
                      {recommendedCity.description}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-5xl font-bold">
                      {result.cityMatch.matchScore}%
                    </div>
                    <div className="text-sm text-blue-100">匹配度</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                {/* 标签 */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {recommendedCity.tags.map((tag: string, index: number) => (
                    <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* 匹配原因 */}
                <Alert className="mb-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                  <Sparkles className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-base">
                    {result.cityMatch.reason}
                  </AlertDescription>
                </Alert>

                {/* 城市特点 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      生活节奏
                    </h4>
                    <p className="text-sm text-muted-foreground">{recommendedCity.lifestyle}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-green-600" />
                      职业发展
                    </h4>
                    <p className="text-sm text-muted-foreground">{recommendedCity.career}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-600" />
                      社交环境
                    </h4>
                    <p className="text-sm text-muted-foreground">{recommendedCity.social}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Palette className="w-4 h-4 text-pink-600" />
                      文化特色
                    </h4>
                    <p className="text-sm text-muted-foreground">{recommendedCity.culture}</p>
                  </div>
                </div>

                {/* 优势和挑战 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2 text-green-700 dark:text-green-300">
                      <CheckCircle2 className="w-4 h-4" />
                      城市优势
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {recommendedCity.advantages.map((adv: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2 text-amber-700 dark:text-amber-300">
                      <AlertCircle className="w-4 h-4" />
                      挑战与注意
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {recommendedCity.challenges.map((cha: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-amber-600 mt-1">!</span>
                          <span>{cha}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 备选城市 */}
            {result.alternativeCities.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  其他匹配城市
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {result.alternativeCities.map((altCity: { city: any; match: any }, index: number) => (
                    <Card key={index} className="hover:shadow-lg transition-all">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg">{altCity.city.name}</CardTitle>
                          <Badge variant="outline" className="text-sm">
                            {altCity.match.matchScore}%
                          </Badge>
                        </div>
                        <CardDescription className="text-xs">
                          {altCity.city.province}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">
                          {altCity.match.reason}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {altCity.city.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          {/* 性格分析标签页 */}
          <TabsContent value="personality" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {personalityResults.map((item: any, index: number) => (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${dimensionColors[item.dimension]} text-white`}>
                        {dimensionIcons[item.dimension]}
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {item.score}
                      </div>
                    </div>
                    <CardTitle className="text-xl">
                      {dimensionNames[item.dimension]}
                    </CardTitle>
                    <CardDescription>
                      得分: {item.score}/10
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.keywords.map((keyword: string, kIndex: number) => (
                        <Badge key={kIndex} variant="secondary" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 性格雷达图说明 */}
            <Card>
              <CardHeader>
                <CardTitle>你的性格特征</CardTitle>
                <CardDescription>
                  通过5个维度的综合分析，我们为你构建了完整的性格画像
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {personalityResults.map((item: any, index: number) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium flex items-center gap-2">
                          {dimensionIcons[item.dimension]}
                          {dimensionNames[item.dimension]}
                        </span>
                        <span className="text-sm font-semibold">{item.score}/10</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                        <div
                          className={`bg-gradient-to-r ${dimensionColors[item.dimension]} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${item.score * 10}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 生活建议标签页 */}
          <TabsContent value="advice" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  个性化生活建议
                </CardTitle>
                <CardDescription>
                  基于你的性格特点和{recommendedCity.name}的城市特色，为你量身定制的建议
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {result.lifestyleAdvice.map((advice: string, index: number) => (
                    <Alert key={index} className="border-blue-200 dark:border-blue-800">
                      <CheckCircle2 className="h-4 w-4 text-blue-600" />
                      <AlertDescription className="text-base">
                        {advice}
                      </AlertDescription>
                    </Alert>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 城市专项建议 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  {recommendedCity.name}城市建议
                </CardTitle>
                <CardDescription>
                  针对选择这座城市的实用建议
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">生活规划</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {recommendedCity.lifestyle}
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">职业发展</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {recommendedCity.career}
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">社交融入</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {recommendedCity.social}
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">文化体验</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {recommendedCity.culture}
                    </p>
                  </div>
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
          <p className="mt-2">© 2024 性格城市匹配测试</p>
        </div>
      </div>
    </div>
  );
}
