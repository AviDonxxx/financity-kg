import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Target,
  Heart,
  Users,
  Building2,
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const teamMembers = [
  {
    name: "Алия Касымова",
    role: "Основатель и CEO",
    description: "Эксперт в финансовом образовании с 10-летним опытом",
    avatar: "АК",
  },
  {
    name: "Нурбек Жумабеков",
    role: "CTO",
    description: "Разработка образовательных платформ",
    avatar: "НЖ",
  },
  {
    name: "Айгуль Сыдыкова",
    role: "Методолог",
    description: "Создание учебных программ для детей",
    avatar: "АС",
  },
  {
    name: "Эмиль Токтогулов",
    role: "ИИ-разработчик",
    description: "Персонализация обучения через ИИ",
    avatar: "ЭТ",
  },
];

const partners = [
  { name: "Национальный банк КР", type: "Госструктура" },
  { name: "ЮНИСЕФ Кыргызстан", type: "Международная организация" },
  { name: "Министерство образования", type: "Госструктура" },
  { name: "Айыл Банк", type: "Банк-партнёр" },
];

export default function About() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Мы ответим вам в ближайшее время.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              О проекте Finans Akademia
            </h1>
            <p className="text-lg text-muted-foreground">
              Мы создаём будущее, в котором каждый ребёнок в Кыргызстане 
              умеет грамотно управлять финансами
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-card p-8 shadow-card">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="mb-4 text-xl font-semibold">Наша миссия</h2>
              <p className="text-muted-foreground">
                Обеспечить доступное и качественное финансовое образование для 
                каждого ребёнка в Кыргызстане. Мы верим, что финансовая 
                грамотность — это навык, который должен быть у каждого с детства.
              </p>
            </div>

            <div className="rounded-2xl bg-card p-8 shadow-card">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-success/10 text-success">
                <Heart className="h-6 w-6" />
              </div>
              <h2 className="mb-4 text-xl font-semibold">Наши ценности</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Доступность образования для всех</li>
                <li>• Практическое обучение через реальные примеры</li>
                <li>• Адаптация под местный контекст Кыргызстана</li>
                <li>• Вовлечение семьи в процесс обучения</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">История проекта</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Finans Akademia началась в 2023 году с простой идеи: почему бы не научить 
                детей управлять деньгами так же, как их учат читать и писать?
              </p>
              <p>
                Исследования показали, что в Кыргызстане практически нет системного 
                финансового образования для детей. При этом молодёжь сталкивается с 
                финансовыми проблемами уже в студенческие годы.
              </p>
              <p>
                Мы собрали команду из педагогов, финансистов и технологов, чтобы создать 
                платформу, которая делает обучение финансам интересным и доступным. 
                Используя ИИ и локальные примеры, мы помогаем детям понять мир денег 
                через знакомые им ситуации.
              </p>
              <p>
                Сегодня наша цель — охватить 100 000 детей в Кыргызстане к 2026 году 
                и стать частью школьной программы по всей стране.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Наша команда</h2>
            <p className="text-muted-foreground">
              Эксперты в образовании, финансах и технологиях
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="rounded-2xl bg-card p-6 text-center shadow-card card-hover">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary text-xl font-bold text-primary-foreground">
                  {member.avatar}
                </div>
                <h3 className="mb-1 font-semibold">{member.name}</h3>
                <p className="mb-2 text-sm text-primary">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Партнёры и поддержка</h2>
            <p className="text-muted-foreground">
              Нас поддерживают ведущие организации страны
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner, index) => (
              <div key={index} className="rounded-xl bg-card p-6 text-center shadow-card">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                  <Building2 className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="mb-1 font-medium">{partner.name}</h3>
                <p className="text-xs text-muted-foreground">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacts" className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">Свяжитесь с нами</h2>
              <p className="mb-8 text-muted-foreground">
                Есть вопросы или предложения? Мы всегда рады обратной связи 
                и открыты к сотрудничеству.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@finansakademia.kg" className="text-muted-foreground hover:text-primary">
                      info@finansakademia.kg
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Телефон</p>
                    <a href="tel:+996312123456" className="text-muted-foreground hover:text-primary">
                      +996 312 123 456
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-muted-foreground">г. Бишкек, ул. Примерная 123</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl bg-card p-6 shadow-card md:p-8">
              <h3 className="mb-6 text-lg font-semibold">Напишите нам</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">Ваше имя *</label>
                  <Input
                    required
                    placeholder="Как к вам обращаться?"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Email *</label>
                  <Input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Сообщение *</label>
                  <Textarea
                    required
                    placeholder="Ваш вопрос или предложение..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" variant="gradient" size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
