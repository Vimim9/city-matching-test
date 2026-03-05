'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { questions } from '@/data/questions';
import { UserAnswer } from '@/lib/types';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function TestPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showError, setShowError] = useState(false);

  const questionsPerPage = 5;
  const totalSteps = Math.ceil(questions.length / questionsPerPage);
  const currentQuestions = questions.slice(
    currentStep * questionsPerPage,
    (currentStep + 1) * questionsPerPage
  );

  const progress = ((currentStep + 1) / totalSteps) * 100;

  // 加载已保存的答案
  useEffect(() => {
    const saved = localStorage.getItem('city-test-answers');
    if (saved) {
      setAnswers(JSON.parse(saved));
    }
  }, []);

  // 保存答案
  const handleAnswerChange = (questionId: number, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    localStorage.setItem('city-test-answers', JSON.stringify(newAnswers));
    setShowError(false);
  };

  // 检查当前步骤是否都已回答
  const isCurrentStepComplete = () => {
    return currentQuestions.every(q => answers[q.id]);
  };

  // 下一步
  const handleNext = () => {
    if (!isCurrentStepComplete()) {
      setShowError(true);
      return;
    }

    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      handleSubmit();
    }
  };

  // 上一步
  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // 提交测试
  const handleSubmit = () => {
    if (!isCurrentStepComplete()) {
      setShowError(true);
      return;
    }

    // 构建最终答案数组
    const finalAnswers: UserAnswer[] = Object.entries(answers).map(([questionId, selectedOption]) => ({
      questionId: parseInt(questionId),
      selectedOption,
      timestamp: Date.now()
    }));

    // 保存到 localStorage
    localStorage.setItem('city-test-result', JSON.stringify(finalAnswers));

    // 跳转到结果页面
    router.push('/result');
  };

  // 重新开始
  const handleRestart = () => {
    localStorage.removeItem('city-test-answers');
    localStorage.removeItem('city-test-result');
    setAnswers({});
    setCurrentStep(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 维度名称映射
  const dimensionNames: Record<string, string> = {
    lifestyle: '生活节奏',
    career: '职业倾向',
    social: '社交倾向',
    culture: '文化偏好',
    psychology: '心理需求'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* 头部 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            性格城市匹配测试
          </h1>
          <p className="text-muted-foreground">
            第 {currentStep + 1} 步，共 {totalSteps} 步
          </p>
        </div>

        {/* 进度条 */}
        <div className="mb-8">
          <Progress value={progress} className="h-3" />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>进度: {Math.round(progress)}%</span>
            <span>{Object.keys(answers).length}/{questions.length} 题已完成</span>
          </div>
        </div>

        {/* 错误提示 */}
        {showError && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              请回答完当前页面的所有问题后再继续
            </AlertDescription>
          </Alert>
        )}

        {/* 题目卡片 */}
        <div className="space-y-6 mb-8">
          {currentQuestions.map((question, index) => (
            <Card key={question.id} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white flex items-center justify-center font-bold">
                    {currentStep * questionsPerPage + index + 1}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{question.question}</CardTitle>
                    <CardDescription>
                      维度: {dimensionNames[question.dimension]}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={answers[question.id] || ''}
                  onValueChange={(value) => handleAnswerChange(question.id, value)}
                  className="space-y-3"
                >
                  {question.options.map((option) => (
                    <div
                      key={option.value}
                      className={`flex items-start space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer hover:border-blue-500 ${
                        answers[question.id] === option.value
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20'
                          : 'border-gray-200 dark:border-gray-800'
                      }`}
                      onClick={() => handleAnswerChange(question.id, option.value)}
                    >
                      <RadioGroupItem value={option.value} id={`q${question.id}-${option.value}`} className="mt-1" />
                      <Label
                        htmlFor={`q${question.id}-${option.value}`}
                        className="flex-1 cursor-pointer text-base leading-relaxed"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 导航按钮 */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="px-6"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            上一步
          </Button>

          <div className="flex gap-3">
            <Button
              variant="ghost"
              onClick={handleRestart}
              className="text-muted-foreground"
            >
              重新开始
            </Button>

            {currentStep === totalSteps - 1 ? (
              <Button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                查看结果
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8"
              >
                下一步
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>

        {/* 返回首页 */}
        <div className="text-center mt-8">
          <Button
            variant="link"
            onClick={() => router.push('/')}
            className="text-muted-foreground"
          >
            返回首页
          </Button>
        </div>
      </div>
    </div>
  );
}
