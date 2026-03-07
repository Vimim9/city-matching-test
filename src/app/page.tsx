'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Heart, Target, Users, Palette, Brain, Sparkles } from 'lucide-react';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: '45道专业题目',
      description: '从生活节奏、职业倾向、社交倾向、文化偏好、心理需求五个维度全面分析',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: '精准城市匹配',
      description: '基于大数据分析，推荐最契合你的国内城市，并详细说明匹配原因',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: '深度性格分析',
      description: '完整的性格分析报告，帮助你更好地了解自己',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: '个性化建议',
      description: '针对性的生活方式建议，助力你规划未来',
      color: 'from-amber-500 to-orange-500'
    }
  ];

  const dimensions = [
    { name: '生活节奏', icon: <MapPin className="w-5 h-5" />, color: 'bg-blue-500' },
    { name: '职业倾向', icon: <Target className="w-5 h-5" />, color: 'bg-green-500' },
    { name: '社交倾向', icon: <Users className="w-5 h-5" />, color: 'bg-purple-500' },
    { name: '文化偏好', icon: <Palette className="w-5 h-5" />, color: 'bg-pink-500' },
    { name: '心理需求', icon: <Brain className="w-5 h-5" />, color: 'bg-amber-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
      {/* 头部 */}
      <header className="border-b bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                性格城市匹配测试
              </h1>
            </div>
            <Badge variant="outline" className="text-sm">
              专业的城市匹配分析
            </Badge>
          </div>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero 区域 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            <span>发现最适合你的城市</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            找到属于你的城市灵魂
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            通过45道精心设计的题目，从5个维度全面分析你的性格特质，精准推荐最契合的国内城市，助你找到理想的生活之地。
          </p>
          <Link href="/test">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
              开始测试
              <Sparkles className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>

        {/* 维度展示 */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
          {dimensions.map((dim, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="pt-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${dim.color} text-white mb-3`}>
                  {dim.icon}
                </div>
                <h3 className="font-semibold mb-2">{dim.name}</h3>
                <p className="text-sm text-muted-foreground">
                  全面分析你的{dim.name}特点
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 功能特点 */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            为什么选择我们的测试？
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-2 hover:border-transparent"
                style={{
                  borderColor: hoveredCard === index ? 'transparent' : '',
                  background: hoveredCard === index 
                    ? `linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))` 
                    : ''
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardHeader>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${feature.color} text-white mb-4`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* 城市展示 */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">
            涵盖国内主要城市
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            我们的分析系统涵盖北京、上海、深圳、广州、杭州、成都、西安等国内主要城市，
            为你提供最精准的城市匹配建议。
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['北京', '上海', '深圳', '广州', '杭州', '成都', '西安', '南京', '武汉', '厦门', '苏州'].map((city, index) => (
              <Badge key={index} variant="secondary" className="text-sm px-4 py-2">
                {city}
              </Badge>
            ))}
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="border-t bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>© 性格城市匹配测试. 帮助你找到理想的城市生活.</p>
        </div>
      </footer>
    </div>
  );
}
