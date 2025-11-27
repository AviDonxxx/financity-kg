import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Users,
  School,
  BookOpen,
  CheckCircle,
  Bot,
  Award,
  Globe,
  Target,
  Sparkles,
  ArrowRight,
  TrendingUp,
  PiggyBank,
  Wallet,
} from "lucide-react";

const targetAudience = [
  {
    icon: GraduationCap,
    title: "Детям и подросткам",
    description: "Интерактивные уроки и игры для возраста 8-18 лет. Учим понимать деньги через практику.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Users,
    title: "Родителям",
    description: "Отслеживайте прогресс ребёнка, получайте советы и участвуйте в обучении вместе.",
    color: "bg-success/10 text-success",
  },
  {
    icon: School,
    title: "Школам",
    description: "Готовые модули для уроков, отчёты по классам и методические материалы для учителей.",
    color: "bg-warning/10 text-warning",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Выберите модуль",
    description: "Определите возрастную группу и начните с подходящего курса — от основ денег до инвестиций.",
    icon: BookOpen,
  },
  {
    step: "02",
    title: "Проходите задания",
    description: "Решайте практические задачи: ведите бюджет, копите на цели, планируйте расходы.",
    icon: Target,
  },
  {
    step: "03",
    title: "Получайте поддержку",
    description: "ИИ-помощник ответит на вопросы, а по завершении модулей вы получите сертификаты.",
    icon: Award,
  },
];

const benefits = [
  {
    icon: Globe,
    title: "Локальный контекст",
    description: "Примеры с сомами, кыргызскими банками и понятными ситуациями из жизни.",
  },
  {
    icon: Target,
    title: "Практические задания",
    description: "Не просто теория — реальные задачи по ведению бюджета и накоплениям.",
  },
  {
    icon: Bot,
    title: "ИИ-помощник",
    description: "Персональный ассистент объяснит сложное простыми словами в любое время.",
  },
  {
    icon: Sparkles,
    title: "Онлайн-доступ",
    description: "Учитесь с любого устройства — дома, в школе или в дороге.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary animate-fade-in">
              <Sparkles className="h-4 w-4" />
              Финансовая грамотность для детей Кыргызстана
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl animate-slide-up">
              Finans Akademia KG
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl animate-slide-up">
              Учим детей и подростков управлять деньгами через интерактивные уроки, практические задания и персонального ИИ-помощника
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up">
              <Button variant="gradient" size="xl" asChild>
                <Link to="/courses">
                  Начать обучение
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Узнать больше</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-success/5 blur-3xl" />
      </section>

      {/* Problem & Solution */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 md:p-8 card-hover">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10">
                <TrendingUp className="h-6 w-6 text-destructive" />
              </div>
              <h2 className="mb-3 text-xl font-semibold md:text-2xl">Проблема</h2>
              <p className="text-muted-foreground">
                В Кыргызстане нет системного обучения финансовой грамотности для детей. 
                Молодёжь не умеет планировать бюджет, копить и принимать осознанные финансовые решения. 
                Это приводит к долгам и финансовым ошибкам во взрослой жизни.
              </p>
            </div>
            <div className="rounded-2xl border border-success/20 bg-success/5 p-6 md:p-8 card-hover">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-success/10">
                <CheckCircle className="h-6 w-6 text-success" />
              </div>
              <h2 className="mb-3 text-xl font-semibold md:text-2xl">Наше решение</h2>
              <p className="text-muted-foreground">
                Интерактивная платформа с модулями для разных возрастов, практическими заданиями 
                и ИИ-помощником. Дети учатся на реальных примерах из жизни Кыргызстана — 
                от карманных денег до первых инвестиций.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Для кого платформа</h2>
            <p className="text-muted-foreground">
              Finans Akademia создана для всех, кто хочет научить детей финансовой грамотности
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {targetAudience.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl bg-card p-6 shadow-card card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Как это работает</h2>
            <p className="text-muted-foreground">
              Три простых шага к финансовой грамотности
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {howItWorks.map((item, index) => (
              <div key={item.step} className="relative text-center">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft">
                  <item.icon className="h-8 w-8" />
                </div>
                <div className="mb-2 text-sm font-medium text-primary">Шаг {item.step}</div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {index < howItWorks.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-0.5 w-full bg-border md:block" style={{ left: "60%", width: "80%" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Преимущества платформы</h2>
            <p className="text-muted-foreground">
              Почему Finans Akademia — лучший выбор для обучения финансам
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl bg-card p-6 shadow-card card-hover"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-8 text-center text-primary-foreground md:p-12">
            <div className="relative z-10">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                Готовы начать путь к финансовой грамотности?
              </h2>
              <p className="mx-auto mb-8 max-w-xl opacity-90">
                Присоединяйтесь к тысячам детей и родителей, которые уже учатся управлять деньгами с Finans Akademia
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/courses">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Смотреть курсы
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link to="/ai-tutor">
                    <Bot className="mr-2 h-5 w-5" />
                    Попробовать ИИ-помощника
                  </Link>
                </Button>
              </div>
            </div>
            <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-primary-foreground/10 blur-2xl" />
            <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-primary-foreground/10 blur-2xl" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
