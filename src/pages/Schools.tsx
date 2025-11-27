import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  School,
  BookOpen,
  BarChart3,
  Users,
  CheckCircle,
  Award,
  FileText,
  Send,
  GraduationCap,
  Clock,
  Target,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const features = [
  {
    icon: BookOpen,
    title: "Готовые модули по финансам",
    description: "6 тематических модулей, адаптированных под школьную программу. От основ денег до предпринимательства.",
    benefits: ["Соответствие стандартам образования", "Возрастная адаптация", "Практические задания"],
  },
  {
    icon: BarChart3,
    title: "Отчёты по классам",
    description: "Детальная аналитика успеваемости учеников. Отслеживайте прогресс всего класса и каждого ученика.",
    benefits: ["Прогресс по модулям", "Время обучения", "Результаты тестов"],
  },
  {
    icon: Target,
    title: "Интеграция в уроки",
    description: "Легко встраивайте модули в существующую программу. Используйте как дополнение к урокам или факультатив.",
    benefits: ["Методические материалы", "Планы уроков", "Презентации"],
  },
];

const licenseAdvantages = [
  { icon: Users, text: "Неограниченное количество учеников" },
  { icon: Clock, text: "Доступ на весь учебный год" },
  { icon: FileText, text: "Методические материалы для учителей" },
  { icon: BarChart3, text: "Панель аналитики для администрации" },
  { icon: Award, text: "Сертификаты для учеников" },
  { icon: GraduationCap, text: "Обучение для учителей" },
];

export default function Schools() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    schoolName: "",
    contactName: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 2 рабочих дней.",
    });
    setFormData({ schoolName: "", contactName: "", email: "", phone: "", comment: "" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <School className="h-4 w-4" />
              Для образовательных учреждений
            </div>
            <h1 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              Финансовая грамотность для вашей школы
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Готовое решение для обучения финансовой грамотности. 
              Модули для разных возрастов, отчёты для учителей, методические материалы.
            </p>
            <Button variant="gradient" size="xl" asChild>
              <a href="#application">Оставить заявку</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Возможности для школ</h2>
            <p className="text-muted-foreground">
              Всё необходимое для эффективного обучения финансовой грамотности
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="rounded-2xl bg-card p-6 shadow-card card-hover">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-semibold">{feature.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* License Info */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">Школьная лицензия</h2>
              <p className="mb-6 text-muted-foreground">
                Выгодные условия для образовательных учреждений. 
                Единая лицензия для всей школы с полным набором инструментов.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {licenseAdvantages.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-primary p-8 text-primary-foreground">
              <h3 className="mb-2 text-xl font-semibold">Специальные условия</h3>
              <p className="mb-6 opacity-90">
                Для государственных школ Кыргызстана действуют льготные тарифы. 
                Свяжитесь с нами для получения индивидуального предложения.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Скидки для госучреждений до 50%</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Бесплатный пилотный период</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Техническая поддержка 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application" className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-xl">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">Оставить заявку</h2>
              <p className="text-muted-foreground">
                Заполните форму, и мы свяжемся с вами для обсуждения сотрудничества
              </p>
            </div>

            <form onSubmit={handleSubmit} className="rounded-2xl bg-card p-6 shadow-card md:p-8">
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">Название школы *</label>
                  <Input
                    required
                    placeholder="СШ №42 г. Бишкек"
                    value={formData.schoolName}
                    onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Контактное лицо *</label>
                  <Input
                    required
                    placeholder="Иванова Анна Петровна"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">Email *</label>
                    <Input
                      type="email"
                      required
                      placeholder="school@edu.kg"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+996 XXX XXX XXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Комментарий</label>
                  <Textarea
                    placeholder="Расскажите о вашей школе и потребностях..."
                    rows={4}
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  />
                </div>

                <Button type="submit" variant="gradient" size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Отправить заявку
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
