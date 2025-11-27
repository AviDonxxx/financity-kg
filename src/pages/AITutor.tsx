import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Bot,
  Send,
  Lightbulb,
  HelpCircle,
  Calculator,
  PiggyBank,
  CreditCard,
  TrendingUp,
  MessageCircle,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";

const quickQuestions = [
  { icon: PiggyBank, text: "Как начать копить деньги?" },
  { icon: Calculator, text: "Объясни бюджет простыми словами" },
  { icon: CreditCard, text: "Помоги посчитать переплату по кредиту" },
  { icon: TrendingUp, text: "Что такое инвестиции?" },
];

const faqItems = [
  "Что такое финансовая грамотность?",
  "Как вести учёт расходов?",
  "Зачем нужна подушка безопасности?",
  "Как работает банковская карта?",
];

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    role: "assistant",
    content: "Привет! 👋 Я твой ИИ-помощник по финансам. Задавай любые вопросы о деньгах, бюджете, накоплениях или инвестициях — я объясню простыми словами. Чем могу помочь?",
  },
];

export default function AITutor() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [questionsLeft] = useState(25);
  const questionsTotal = 30;

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: text,
    };

    setMessages([...messages, newMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        role: "assistant",
        content: getAIResponse(text),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const getAIResponse = (question: string): string => {
    const responses: Record<string, string> = {
      "Как начать копить деньги?": "Отличный вопрос! 🎯 Вот простой план:\n\n1. **Поставь цель** — на что хочешь накопить (игра, гаджет, подарок)\n2. **Определи сумму** — сколько нужно денег\n3. **Откладывай регулярно** — например, 10% от карманных денег\n4. **Веди учёт** — записывай, сколько уже накопил\n\nПопробуй начать с небольшой цели — так легче увидеть результат! 💪",
      "Объясни бюджет простыми словами": "Бюджет — это как план для твоих денег! 📋\n\nПредставь, что у тебя есть 1000 сом в месяц. Бюджет помогает решить:\n- 500 сом — на сладости и развлечения\n- 300 сом — откладываем на мечту\n- 200 сом — на подарки друзьям\n\nГлавное правило: расходы не должны превышать доходы! Если записывать все траты, легче понять, куда уходят деньги.",
      default: "Хороший вопрос! 🤔 Дай мне секунду подумать...\n\nФинансовая грамотность — это умение правильно обращаться с деньгами. Это включает:\n- Понимание, откуда берутся деньги\n- Умение планировать расходы\n- Навык копить на цели\n- Знание о банках и кредитах\n\nХочешь узнать подробнее о какой-то теме?",
    };

    return responses[question] || responses.default;
  };

  return (
    <Layout showFooter={false}>
      <div className="flex h-[calc(100vh-4rem)] flex-col bg-gradient-hero md:flex-row">
        {/* Sidebar */}
        <aside className="hidden w-80 shrink-0 border-r border-border/40 bg-card p-6 md:block overflow-y-auto">
          {/* Usage Indicator */}
          <div className="mb-6 rounded-xl bg-primary/10 p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium">Вопросов сегодня</span>
              <span className="text-sm font-semibold text-primary">
                {questionsLeft}/{questionsTotal}
              </span>
            </div>
            <div className="h-2 rounded-full bg-primary/20">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${(questionsLeft / questionsTotal) * 100}%` }}
              />
            </div>
          </div>

          {/* Quick Questions */}
          <div className="mb-6">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold">
              <Lightbulb className="h-4 w-4 text-warning" />
              Быстрые вопросы
            </h3>
            <div className="space-y-2">
              {quickQuestions.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(item.text)}
                  className="flex w-full items-center gap-3 rounded-lg p-3 text-left text-sm transition-colors hover:bg-secondary"
                >
                  <item.icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span>{item.text}</span>
                </button>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold">
              <HelpCircle className="h-4 w-4 text-primary" />
              Частые вопросы
            </h3>
            <div className="space-y-2">
              {faqItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(item)}
                  className="block w-full rounded-lg p-2 text-left text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Chat Area */}
        <div className="flex flex-1 flex-col">
          {/* Chat Header */}
          <div className="border-b border-border/40 bg-card/50 px-4 py-3 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary">
                <Bot className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-semibold">ИИ-помощник</h2>
                <p className="text-xs text-muted-foreground">Онлайн • Отвечает мгновенно</p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="border-b border-border/40 bg-warning/10 px-4 py-2">
            <p className="flex items-center gap-2 text-xs text-warning">
              <Info className="h-3 w-3" />
              ИИ-помощник объясняет финансовые понятия для обучения. Не является финансовой консультацией для реальных инвестиций.
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl px-4 py-3",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card shadow-card"
                  )}
                >
                  {message.role === "assistant" && (
                    <div className="mb-2 flex items-center gap-2">
                      <Bot className="h-4 w-4 text-primary" />
                      <span className="text-xs font-medium text-primary">ИИ-помощник</span>
                    </div>
                  )}
                  <p className="whitespace-pre-line text-sm">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Quick Actions */}
          <div className="border-t border-border/40 bg-card/50 p-2 md:hidden">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {quickQuestions.slice(0, 3).map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(item.text)}
                  className="shrink-0 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium"
                >
                  {item.text}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-border/40 bg-card p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="flex gap-2"
            >
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Задай вопрос о финансах..."
                className="flex-1"
              />
              <Button type="submit" variant="gradient">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
