import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Coins,
  Calculator,
  Building2,
  CreditCard,
  TrendingUp,
  Lightbulb,
  ArrowRight,
  Clock,
  BookOpen,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ageGroups = [
  { id: "8-10", label: "8-10 лет", description: "Основы" },
  { id: "11-13", label: "11-13 лет", description: "Начальный" },
  { id: "13-15", label: "13-15 лет", description: "Средний" },
  { id: "14-16", label: "14-16 лет", description: "Продвинутый" },
  { id: "15-17", label: "15-17 лет", description: "Углублённый" },
  { id: "16-18", label: "16-18 лет", description: "Эксперт" },
];

const modules = [
  {
    id: "basics",
    icon: Coins,
    title: "Основы денег",
    description: "Что такое деньги, откуда они берутся и как их считать",
    lessons: 8,
    duration: "2 часа",
    tasks: ["Посчитай свои карманные деньги за неделю", "Нарисуй путь монетки"],
    color: "bg-primary/10 text-primary",
  },
  {
    id: "planning",
    icon: Calculator,
    title: "Планирование бюджета",
    description: "Как записывать доходы и расходы, ставить финансовые цели",
    lessons: 10,
    duration: "3 часа",
    tasks: ["Веди дневник расходов 7 дней", "Составь план накоплений на подарок"],
    color: "bg-success/10 text-success",
  },
  {
    id: "banks",
    icon: Building2,
    title: "Банки и счета",
    description: "Как работают банки, что такое вклады и карты",
    lessons: 6,
    duration: "1.5 часа",
    tasks: ["Сравни условия детских карт", "Посчитай проценты по вкладу"],
    color: "bg-warning/10 text-warning",
  },
  {
    id: "credit",
    icon: CreditCard,
    title: "Кредиты и долги",
    description: "Что такое кредит, когда он нужен и как избежать долгов",
    lessons: 8,
    duration: "2 часа",
    tasks: ["Рассчитай переплату по кредиту", "Составь план погашения долга"],
    color: "bg-destructive/10 text-destructive",
  },
  {
    id: "invest",
    icon: TrendingUp,
    title: "Инвестиции",
    description: "Как деньги могут работать и приносить доход",
    lessons: 12,
    duration: "4 часа",
    tasks: ["Создай виртуальный портфель", "Отследи акции за месяц"],
    color: "bg-primary/10 text-primary",
  },
  {
    id: "business",
    icon: Lightbulb,
    title: "Предпринимательство",
    description: "Как создать свой проект и зарабатывать на идеях",
    lessons: 10,
    duration: "3 часа",
    tasks: ["Придумай бизнес-идею", "Составь простой бизнес-план"],
    color: "bg-success/10 text-success",
  },
];

export default function Courses() {
  const [selectedAge, setSelectedAge] = useState("11-13");

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-hero">
        <div className="container py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold md:text-4xl">Курсы и модули</h1>
            <p className="text-muted-foreground">
              Выберите возрастную группу и начните обучение
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Sidebar - Age Filter */}
            <aside className="w-full shrink-0 lg:w-64">
              <div className="rounded-2xl bg-card p-4 shadow-card">
                <h2 className="mb-4 font-semibold">Возрастная группа</h2>
                <div className="space-y-2">
                  {ageGroups.map((group) => (
                    <button
                      key={group.id}
                      onClick={() => setSelectedAge(group.id)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-all",
                        selectedAge === group.id
                          ? "bg-primary text-primary-foreground shadow-soft"
                          : "hover:bg-secondary"
                      )}
                    >
                      <span className="font-medium">{group.label}</span>
                      <span
                        className={cn(
                          "text-xs",
                          selectedAge === group.id ? "opacity-80" : "text-muted-foreground"
                        )}
                      >
                        {group.description}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Content - Modules */}
            <div className="flex-1">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Показаны модули для возраста <span className="font-medium text-foreground">{selectedAge} лет</span>
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {modules.map((module, index) => (
                  <div
                    key={module.id}
                    className="rounded-2xl bg-card p-6 shadow-card card-hover"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <div className={cn("inline-flex h-12 w-12 items-center justify-center rounded-xl", module.color)}>
                        <module.icon className="h-6 w-6" />
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <BookOpen className="h-3 w-3" />
                          {module.lessons} уроков
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {module.duration}
                        </span>
                      </div>
                    </div>

                    <h3 className="mb-2 text-lg font-semibold">{module.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{module.description}</p>

                    <div className="mb-4">
                      <p className="mb-2 text-xs font-medium text-muted-foreground">Практические задания:</p>
                      <ul className="space-y-1">
                        {module.tasks.map((task, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-success" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="outline" className="w-full" asChild>
                      <Link to={`/courses/${module.id}`}>
                        Перейти к модулю
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
