import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  User,
  BookOpen,
  Clock,
  Award,
  Target,
  CheckCircle,
  Circle,
  Bot,
  Lightbulb,
  Calendar,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const studentData = {
  name: "Айбек",
  age: 12,
  ageGroup: "11-13 лет",
  avatar: "А",
};

const moduleProgress = [
  { id: "basics", title: "Основы денег", progress: 75, lessons: 8, completed: 6 },
  { id: "planning", title: "Планирование бюджета", progress: 30, lessons: 10, completed: 3 },
  { id: "banks", title: "Банки и счета", progress: 0, lessons: 6, completed: 0 },
];

const activeAssignments = [
  { id: 1, title: "Веди дневник расходов 7 дней", module: "Планирование", daysLeft: 4, status: "in-progress" },
  { id: 2, title: "Посчитай свои карманные деньги", module: "Основы денег", daysLeft: 2, status: "in-progress" },
  { id: 3, title: "Нарисуй путь монетки", module: "Основы денег", daysLeft: 0, status: "completed" },
];

const weeklyStats = [
  { day: "Пн", minutes: 30 },
  { day: "Вт", minutes: 45 },
  { day: "Ср", minutes: 20 },
  { day: "Чт", minutes: 60 },
  { day: "Пт", minutes: 15 },
  { day: "Сб", minutes: 0 },
  { day: "Вс", minutes: 25 },
];

const aiRecommendations = [
  "Повтори тему 'Виды денег' — прошло 2 недели с последнего урока",
  "Отлично справляешься с бюджетом! Готов к теме 'Банки и счета'",
  "Попробуй задать вопрос ИИ-помощнику о том, что такое вклад",
];

export default function Dashboard() {
  const totalMinutes = weeklyStats.reduce((sum, day) => sum + day.minutes, 0);
  const maxMinutes = Math.max(...weeklyStats.map((d) => d.minutes));

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-hero py-8">
        <div className="container">
          {/* Header */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-xl font-bold text-primary-foreground">
                {studentData.avatar}
              </div>
              <div>
                <h1 className="text-2xl font-bold">Привет, {studentData.name}! 👋</h1>
                <p className="text-muted-foreground">
                  {studentData.age} лет • Группа {studentData.ageGroup}
                </p>
              </div>
            </div>
            <Button variant="gradient" asChild>
              <Link to="/courses">
                Продолжить обучение
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Progress Cards */}
              <div>
                <h2 className="mb-4 text-lg font-semibold">Мой прогресс</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {moduleProgress.map((module) => (
                    <div key={module.id} className="rounded-2xl bg-card p-4 shadow-card card-hover">
                      <div className="mb-3 flex items-center justify-between">
                        <h3 className="font-medium">{module.title}</h3>
                        <span className="text-sm font-semibold text-primary">{module.progress}%</span>
                      </div>
                      <Progress value={module.progress} className="mb-2 h-2" />
                      <p className="text-xs text-muted-foreground">
                        {module.completed} из {module.lessons} уроков
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active Assignments */}
              <div className="rounded-2xl bg-card p-6 shadow-card">
                <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                  <Target className="h-5 w-5 text-primary" />
                  Мои задания
                </h2>
                <div className="space-y-3">
                  {activeAssignments.map((assignment) => (
                    <div
                      key={assignment.id}
                      className="flex items-center gap-4 rounded-xl bg-secondary/50 p-4"
                    >
                      {assignment.status === "completed" ? (
                        <CheckCircle className="h-5 w-5 shrink-0 text-success" />
                      ) : (
                        <Circle className="h-5 w-5 shrink-0 text-muted-foreground" />
                      )}
                      <div className="flex-1">
                        <p className="font-medium">{assignment.title}</p>
                        <p className="text-xs text-muted-foreground">{assignment.module}</p>
                      </div>
                      {assignment.status === "in-progress" && (
                        <span className="rounded-full bg-warning/10 px-2 py-1 text-xs font-medium text-warning">
                          {assignment.daysLeft} дн. осталось
                        </span>
                      )}
                      {assignment.status === "completed" && (
                        <span className="rounded-full bg-success/10 px-2 py-1 text-xs font-medium text-success">
                          Выполнено
                        </span>
                      )}
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
                  <span className="text-sm text-muted-foreground">
                    Всего: <span className="font-semibold text-foreground">{totalMinutes} мин</span>
                  </span>
                </div>
                <div className="flex items-end justify-between gap-2">
                  {weeklyStats.map((day) => (
                    <div key={day.day} className="flex flex-1 flex-col items-center gap-2">
                      <div
                        className="w-full rounded-t-lg bg-primary/20 transition-all"
                        style={{
                          height: `${Math.max((day.minutes / maxMinutes) * 100, 8)}px`,
                          minHeight: "8px",
                          backgroundColor: day.minutes > 0 ? "hsl(var(--primary))" : "hsl(var(--muted))",
                        }}
                      />
                      <span className="text-xs text-muted-foreground">{day.day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats Summary */}
              <div className="rounded-2xl bg-card p-6 shadow-card">
                <h2 className="mb-4 font-semibold">Статистика</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BookOpen className="h-4 w-4" />
                      Уроков пройдено
                    </span>
                    <span className="font-semibold">9</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      Часов обучения
                    </span>
                    <span className="font-semibold">4.5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4" />
                      Тестов пройдено
                    </span>
                    <span className="font-semibold">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Award className="h-4 w-4" />
                      Всего баллов
                    </span>
                    <span className="font-semibold text-primary">340</span>
                  </div>
                </div>
              </div>

              {/* AI Recommendations */}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Рекомендации ИИ</h3>
                    <p className="text-xs text-muted-foreground">Персональные советы</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {aiRecommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
                      {rec}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
                  <Link to="/ai-tutor">Спросить ИИ-помощника</Link>
                </Button>
              </div>

              {/* Achievement Preview */}
              <div className="rounded-2xl bg-gradient-accent p-6 text-accent-foreground">
                <Award className="mb-3 h-8 w-8" />
                <h3 className="mb-2 font-semibold">Следующее достижение</h3>
                <p className="text-sm opacity-90">
                  Пройди ещё 1 урок, чтобы получить значок "Финансовый новичок"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
