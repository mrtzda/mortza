/*
  All site content lives in this file.
  Every text has two versions: en (English) and fa (Persian).

  To add a project, copy one block inside `projects` and change it:
    youtube  — the video ID from the YouTube link
               (https://youtu.be/AbC123xyz  →  "AbC123xyz")
    vertical — true for 9:16 videos (reels, micro dramas)
    cover    — image in assets/covers/ (best size: 1200×1500, 4:5)
    links    — extra places the video lives (Instagram, Vimeo, …)
*/

window.SITE = {
  name: { en: "Morteza", fa: "مرتضی" },
  title: { en: "AI Artist", fa: "هنرمند هوش مصنوعی" },
  tagline: {
    en: "Films, love stories and campaigns, imagined and directed with AI.",
    fa: "فیلم، قصه‌های عاشقانه و تبلیغات؛ تخیل و کارگردانی‌شده با هوش مصنوعی.",
  },

  about: {
    photo: "assets/img/portrait.svg",
    text: {
      en: "I'm an AI artist who builds short films, wedding stories and commercials from the ground up — writing, designing characters, generating every shot and cutting it all into one piece. This is a sample bio; replace it with your own.",
      fa: "هنرمند هوش مصنوعی هستم و فیلم کوتاه، قصه‌ی عروسی و تیزر تبلیغاتی را از صفر می‌سازم؛ از نوشتن و طراحی کاراکتر تا ساخت تک‌تک نماها و تدوین نهایی. این یک متن نمونه است؛ متن خودت را جایش بگذار.",
    },
    tools: ["Midjourney", "Kling", "Runway", "Sora", "ElevenLabs", "Premiere Pro"],
  },

  contact: {
    email: "hello@example.com",
    instagram: "example", // username only, without @
  },

  categories: [
    { id: "micro-drama", label: { en: "Micro Drama", fa: "میکرودراما" } },
    { id: "wedding", label: { en: "Wedding", fa: "عروسی" } },
    { id: "commercial", label: { en: "Commercial", fa: "تبلیغاتی" } },
  ],

  projects: [
    {
      category: "micro-drama",
      title: { en: "The Last Letter", fa: "آخرین نامه" },
      year: 2026,
      youtube: "",
      vertical: true,
      cover: "assets/covers/micro-drama-1.svg",
      summary: {
        en: "A five-episode vertical drama about a letter that arrives twenty years too late.",
        fa: "یک درام عمودی پنج‌قسمتی درباره‌ی نامه‌ای که بیست سال دیر می‌رسد.",
      },
      role: { en: "Writer & AI Director", fa: "نویسنده و کارگردان هوش مصنوعی" },
      did: {
        en: ["Wrote the script", "Designed consistent characters", "Generated all shots", "Edit, sound and color"],
        fa: ["نوشتن فیلمنامه", "طراحی کاراکترهای ثابت", "ساخت همه‌ی نماها", "تدوین، صدا و رنگ"],
      },
      links: [{ label: "Instagram", url: "https://instagram.com/" }],
    },
    {
      category: "micro-drama",
      title: { en: "Night Shift", fa: "شیفت شب" },
      year: 2026,
      youtube: "",
      vertical: true,
      cover: "assets/covers/micro-drama-2.svg",
      summary: {
        en: "A nurse, a quiet hospital and one patient who knows too much.",
        fa: "یک پرستار، بیمارستانی ساکت و بیماری که زیادی می‌داند.",
      },
      role: { en: "AI Director", fa: "کارگردان هوش مصنوعی" },
      did: {
        en: ["Storyboard", "Image and video generation", "Voice acting with AI", "Final edit"],
        fa: ["استوری‌بورد", "ساخت تصویر و ویدئو", "صداگذاری با هوش مصنوعی", "تدوین نهایی"],
      },
      links: [],
    },
    {
      category: "wedding",
      title: { en: "Sara & Ali", fa: "سارا و علی" },
      year: 2026,
      youtube: "",
      vertical: false,
      cover: "assets/covers/wedding-1.svg",
      summary: {
        en: "Their love story retold as a short film, from the first meeting to the wedding day.",
        fa: "قصه‌ی آشنایی‌شان به شکل یک فیلم کوتاه، از اولین دیدار تا روز عروسی.",
      },
      role: { en: "AI Artist", fa: "هنرمند هوش مصنوعی" },
      did: {
        en: ["Turned real photos into scenes", "Generated the film", "Music and edit"],
        fa: ["تبدیل عکس‌های واقعی به صحنه", "ساخت فیلم", "موسیقی و تدوین"],
      },
      links: [],
    },
    {
      category: "wedding",
      title: { en: "Golden Hour", fa: "ساعت طلایی" },
      year: 2025,
      youtube: "",
      vertical: false,
      cover: "assets/covers/wedding-2.svg",
      summary: {
        en: "A dreamy wedding invitation film set in an imagined Persian garden.",
        fa: "یک کارت دعوت ویدئویی رویایی در یک باغ ایرانی خیالی.",
      },
      role: { en: "AI Director & Editor", fa: "کارگردان و تدوینگر" },
      did: {
        en: ["Concept", "Scene generation", "Edit"],
        fa: ["ایده", "ساخت صحنه‌ها", "تدوین"],
      },
      links: [],
    },
    {
      category: "commercial",
      title: { en: "Aqua — Spring Campaign", fa: "آکوا — کمپین بهار" },
      year: 2026,
      youtube: "",
      vertical: false,
      cover: "assets/covers/commercial-1.svg",
      summary: {
        en: "A 30-second product film for a skincare brand, made without a single camera.",
        fa: "یک تیزر ۳۰ ثانیه‌ای برای یک برند مراقبت پوست، بدون حتی یک دوربین.",
      },
      role: { en: "AI Director", fa: "کارگردان هوش مصنوعی" },
      did: {
        en: ["Creative concept", "Product shots", "Motion and edit"],
        fa: ["ایده‌ی خلاقانه", "نماهای محصول", "موشن و تدوین"],
      },
      links: [],
    },
    {
      category: "commercial",
      title: { en: "Neon Run", fa: "دوی نئون" },
      year: 2025,
      youtube: "",
      vertical: true,
      cover: "assets/covers/commercial-2.svg",
      summary: {
        en: "A vertical sneaker ad for Instagram Reels.",
        fa: "یک تبلیغ عمودی کفش برای ریلز اینستاگرام.",
      },
      role: { en: "AI Artist", fa: "هنرمند هوش مصنوعی" },
      did: {
        en: ["Character and world design", "Video generation", "Sound design"],
        fa: ["طراحی کاراکتر و فضا", "ساخت ویدئو", "طراحی صدا"],
      },
      links: [],
    },
  ],
};
