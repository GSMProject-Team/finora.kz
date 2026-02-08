export type Lang = "kk" | "ru" | "en";

export const texts: Record<Lang, any> = {
  kk: {
    brand: "FINORA",
    tagline: "Tech / Finance / Legal platform",
    cta: "Кеңес алуды бастау",
    start: "Өтінім қалдыру",
    back: "Артқа",
    form: {
      title: "Өтінім қалдыру",
      name: "Атыңыз",
      email: "Email",
      service: "Қызмет",
      message: "Хабарлама",
      send: "Өтінімді жіберу",
      note: "Бұл әзірге демо: жіберген соң console-ға шығады.",
      services: {
        accounting: "Бухгалтерия",
        finance: "Қаржы",
        legal: "Құқық",
      },
      alert: "Өтінім жіберілді (demo). Console қарап көр.",
    },
    langLabel: "Тіл",
  },

  ru: {
    brand: "FINORA",
    tagline: "Tech / Finance / Legal platform",
    cta: "Начать консультацию",
    start: "Оставить заявку",
    back: "Назад",
    form: {
      title: "Оставить заявку",
      name: "Имя",
      email: "Email",
      service: "Услуга",
      message: "Сообщение",
      send: "Отправить заявку",
      note: "Пока демо: после submit выводит в console.",
      services: {
        accounting: "Бухгалтерия",
        finance: "Финансы",
        legal: "Юридические услуги",
      },
      alert: "Заявка отправлена (demo). Проверь console.",
    },
    langLabel: "Язык",
  },

  en: {
    brand: "FINORA",
    tagline: "Tech / Finance / Legal platform",
    cta: "Start consultation",
    start: "Send request",
    back: "Back",
    form: {
      title: "Send request",
      name: "Name",
      email: "Email",
      service: "Service",
      message: "Message",
      send: "Send request",
      note: "Demo only: on submit it logs to console.",
      services: {
        accounting: "Accounting",
        finance: "Finance",
        legal: "Legal",
      },
      alert: "Request sent (demo). Check console.",
    },
    langLabel: "Language",
  },
};

export function getLang(raw?: string): Lang {
  const v = (raw || "").toLowerCase();
  if (v === "kk" || v === "ru" || v === "en") return v;
  return "kk"; // дефолт өзің қалайсың, мен kk қойдым
}
