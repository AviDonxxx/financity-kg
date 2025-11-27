import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  Play,
  CheckCircle,
  Circle,
  Bot,
  Clock,
  BookOpen,
  Award,
  Lightbulb,
} from "lucide-react";
import { cn } from "@/lib/utils";

const moduleData = {
  basics: {
    title: "Основы денег",
    description: "Что такое деньги, откуда они берутся и как их считать",
    progress: 35,
    lessons: [
      { id: 1, title: "Что такое деньги?", duration: "15 мин", completed: true },
      { id: 2, title: "История денег в Кыргызстане", duration: "12 мин", completed: true },
      { id: 3, title: "Виды денег: наличные и безналичные", duration: "18 мин", completed: true },
      { id: 4, title: "Как появляется зарплата", duration: "15 мин", completed: false, current: true },
      { id: 5, title: "Карманные деньги и их учёт", duration: "20 мин", completed: false },
      { id: 6, title: "Цены и стоимость вещей", duration: "15 мин", completed: false },
      { id: 7, title: "Сдача и расчёты", duration: "12 мин", completed: false },
      { id: 8, title: "Итоговый тест", duration: "10 мин", completed: false },
    ],
  },
};

export default function CourseModule() {
  const { moduleId } = useParams();
  const data = moduleData.basics; // Using basics as default for demo

  const completedLessons = data.lessons.filter((l) => l.completed).length;
  const currentLesson = data.lessons.find((l) => l.current);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-hero">
        <div className="container py-8">
          {/* Back Button */}
          <Link
            to="/courses"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Назад к курсам
          </Link>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Module Header */}
              <div className="rounded-2xl bg-card p-6 shadow-card">
                <h1 className="mb-2 text-2xl font-bold md:text-3xl">{data.title}</h1>
                <p className="mb-6 text-muted-foreground">{data.description}</p>

                <div className="mb-4 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    Пройдено {completedLessons} из {data.lessons.length} уроков
                  </span>
                  <span className="font-medium text-primary">{data.progress}%</span>
                </div>
                <Progress value={data.progress} className="h-2" />

                <div className="mt-6">
                  <Button variant="gradient" size="lg">
                    <Play className="mr-2 h-5 w-5" />
                    Продолжить обучение
                  </Button>
                </div>
              </div>

              {/* Lessons List */}
              <div className="rounded-2xl bg-card p-6 shadow-card">
                <h2 className="mb-4 text-lg font-semibold">Список уроков</h2>
                <div className="space-y-2">
                  {data.lessons.map((lesson, index) => (
                    <div
                      key={lesson.id}
                      className={cn(
                        "flex items-center gap-4 rounded-xl p-4 transition-colors",
                        lesson.current
                          ? "bg-primary/10 border border-primary/20"
                          : lesson.completed
                          ? "bg-success/5"
                          : "hover:bg-secondary"
                      )}
                    >
                      <div
                        className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                          lesson.completed
                            ? "bg-success text-success-foreground"
                            : lesson.current
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-muted-foreground"
                        )}
                      >
                        {lesson.completed ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <span className="text-sm font-medium">{index + 1}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <p
                          className={cn(
                            "font-medium",
                            lesson.completed && "text-muted-foreground"
                          )}
                        >
                          {lesson.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          <Clock className="mr-1 inline h-3 w-3" />
                          {lesson.duration}
                        </p>
                      </div>
                      {lesson.current && (
                        <Button size="sm" variant="gradient">
                          Начать
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* AI Hint */}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Подсказка от ИИ</h3>
                    <p className="text-xs text-muted-foreground">Персональный совет</p>
                  </div>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  Отличный прогресс! Чтобы лучше понять тему "Как появляется зарплата", 
                  попробуй спросить родителей о том, как устроена их работа. 
                  Это поможет связать теорию с реальной жизнью.
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/ai-tutor">
                    <Lightbulb className="mr-2 h-4 w-4" />
                    Задать вопрос ИИ
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="rounded-2xl bg-card p-6 shadow-card">
                <h3 className="mb-4 font-semibold">Ваша статистика</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BookOpen className="h-4 w-4" />
                      Уроков пройдено
                    </span>
                    <span className="font-semibold">{completedLessons}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      Время обучения
                    </span>
                    <span className="font-semibold">45 мин</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Award className="h-4 w-4" />
                      Баллы за модуль
                    </span>
                    <span className="font-semibold text-primary">120</span>
                  </div>
                </div>
              </div>

              {/* Certificate Preview */}
              <div className="rounded-2xl bg-gradient-primary p-6 text-primary-foreground">
                <Award className="mb-3 h-8 w-8" />
                <h3 className="mb-2 font-semibold">Сертификат</h3>
                <p className="text-sm opacity-90">
                  Пройдите все уроки модуля, чтобы получить сертификат о завершении
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
