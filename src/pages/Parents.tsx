import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import {
  User,
  TrendingUp,
  Clock,
  BookOpen,
  AlertCircle,
  CheckCircle,
  Calendar,
  Bell,
  Shield,
  MessageSquare,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const childData = {
  name: "Айбек",
  age: 12,
  ageGroup: "11-13 лет",
  avatar: "А",
  totalProgress: 42,
};

const moduleProgress = [
  { title: "Основы денег", progress: 75, status: "good" },
  { title: "Планирование бюджета", progress: 30, status: "needs-attention" },
  { title: "Банки и счета", progress: 0, status: "not-started" },
];

const weeklyActivity = [
  { day: "Пн", lessons: 2, minutes: 30 },
  { day: "Вт", lessons: 3, minutes: 45 },
  { day: "Ср", lessons: 1, minutes: 20 },
  { day: "Чт", lessons: 4, minutes: 60 },
  { day: "Пт", lessons: 1, minutes: 15 },
  { day: "Сб", lessons: 0, minutes: 0 },
  { day: "Вс", lessons: 2, minutes: 25 },
];

const parentTips = [
  {
    title: "Обсуждайте финансы за ужином",
    description: "Спросите ребёнка, что нового он узнал о деньгах. Это закрепит знания и покажет вашу заинтересованность.",
  },
  {
    title: "Дайте практический опыт",
    description: "Позвольте ребёнку самому расплачиваться в магазине или планировать небольшие покупки.",
  },
  {
    title: "Показывайте личный пример",
    description: "Рассказывайте о семейном бюджете в доступной форме — это лучший способ научить финансовой грамотности.",
  },
];

export default function Parents() {
  const [notifications, setNotifications] = useState(true);
  const [timeLimit, setTimeLimit] = useState(true);
  const [aiHistory, setAiHistory] = useState(false);

  const totalLessons = weeklyActivity.reduce((sum, day) => sum + day.lessons, 0);
  const totalMinutes = weeklyActivity.reduce((sum, day) => sum + day.minutes, 0);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-hero py-8">
        <div className="container">
          {/* Header */}
          <div className="mb-8">
            <h1 className="mb-2 text-2xl font-bold md:text-3xl">Панель родителя</h1>
            <p className="text-muted-foreground">
              Отслеживайте прогресс ребёнка и управляйте настройками обучения
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Child Overview */}
              <div className="rounded-2xl bg-card p-6 shadow-card">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary text-2xl font-bold text-primary-foreground">
                    {childData.avatar}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold">{childData.name}</h2>
                    <p className="text-muted-foreground">
                      {childData.age} лет • Группа {childData.ageGroup}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{childData.totalProgress}%</p>
                    <p className="text-xs text-muted-foreground">общий прогресс</p>
                  </div>
                </div>

                <h3 className="mb-4 font-semibold">Прогресс по модулям</h3>
                <div className="space-y-4">
                  {moduleProgress.map((module) => (
                    <div key={module.title} className="flex items-center gap-4">
                      <div className="w-40 shrink-0">
                        <p className="text-sm font-medium">{module.title}</p>
                      </div>
                      <div className="flex-1">
                        <Progress value={module.progress} className="h-2" />
                      </div>
                      <div className="w-24 text-right">
                        {module.status === "good" && (
                          <span className="flex items-center justify-end gap-1 text-xs text-success">
                            <CheckCircle className="h-3 w-3" />
                            Хорошо
                          </span>
                        )}
                        {module.status === "needs-attention" && (
                          <span className="flex items-center justify-end gap-1 text-xs text-warning">
                            <AlertCircle className="h-3 w-3" />
                            Внимание
                          </span>
                        )}
                        {module.status === "not-started" && (
                          <span className="text-xs text-muted-foreground">Не начат</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Activity */}
              <div className="rounded-2xl bg-card p-6 shadow-card">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="flex items-center gap-2 text-lg font-semibold">
                    <Calendar className="h-5 w-5 text-primary" />
                    Активность за неделю
                  </h2>
                  <div className="flex gap-4 text-sm">
                    <span className="text-muted-foreground">
                      Уроков: <span className="font-semibold text-foreground">{totalLessons}</span>
                    </span>
                    <span className="text-muted-foreground">
                      Время: <span className="font-semibold text-foreground">{totalMinutes} мин</span>
                    </span>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="pb-2 text-left font-medium text-muted-foreground">День</th>
                        {weeklyActivity.map((day) => (
                          <th key={day.day} className="pb-2 text-center font-medium text-muted-foreground">
                            {day.day}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-3 text-muted-foreground">Уроков</td>
                        {weeklyActivity.map((day) => (
                          <td key={day.day} className="py-3 text-center font-medium">
                            {day.lessons || "—"}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="py-3 text-muted-foreground">Минут</td>
                        {weeklyActivity.map((day) => (
                          <td key={day.day} className="py-3 text-center font-medium">
                            {day.minutes || "—"}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Parent Tips */}
              <div className="rounded-2xl bg-card p-6 shadow-card">
                <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                  <Lightbulb className="h-5 w-5 text-warning" />
                  Советы родителям
                </h2>
                <div className="grid gap-4 md:grid-cols-3">
                  {parentTips.map((tip, index) => (
                    <div key={index} className="rounded-xl bg-secondary/50 p-4">
                      <h3 className="mb-2 font-medium">{tip.title}</h3>
                      <p className="text-sm text-muted-foreground">{tip.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="rounded-2xl bg-card p-6 shadow-card">
                <h2 className="mb-4 font-semibold">Быстрая статистика</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BookOpen className="h-4 w-4" />
                      Всего уроков
                    </span>
                    <span className="font-semibold">9 / 24</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      Время за месяц
                    </span>
                    <span className="font-semibold">4.5 ч</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4" />
                      Тестов пройдено
                    </span>
                    <span className="font-semibold">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MessageSquare className="h-4 w-4" />
                      Вопросов к ИИ
                    </span>
                    <span className="font-semibold">47</span>
                  </div>
                </div>
              </div>

              {/* Settings */}
              <div className="rounded-2xl bg-card p-6 shadow-card">
                <h2 className="mb-4 flex items-center gap-2 font-semibold">
                  <Shield className="h-5 w-5 text-primary" />
                  Настройки
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Уведомления</p>
                      <p className="text-xs text-muted-foreground">О прогрессе ребёнка</p>
                    </div>
                    <Switch checked={notifications} onCheckedChange={setNotifications} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Лимит времени</p>
                      <p className="text-xs text-muted-foreground">60 мин в день</p>
                    </div>
                    <Switch checked={timeLimit} onCheckedChange={setTimeLimit} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">История ИИ</p>
                      <p className="text-xs text-muted-foreground">Просмотр вопросов</p>
                    </div>
                    <Switch checked={aiHistory} onCheckedChange={setAiHistory} />
                  </div>
                </div>
              </div>

              {/* Attention Block */}
              <div className="rounded-2xl border border-warning/20 bg-warning/5 p-6">
                <div className="mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-warning" />
                  <h3 className="font-semibold">Требует внимания</h3>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  Модуль "Планирование бюджета" идёт медленнее обычного. 
                  Возможно, ребёнку нужна помощь с практическими заданиями.
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/courses/planning">
                    Посмотреть модуль
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
