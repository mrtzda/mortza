/*
  All site content lives in this file.
  Every text has two versions: en (English) and fa (Persian).

  To add a project, copy one block inside `projects` and change it:
    category — one of the ids in `categories`, or "" to show it only under All
    videos   — one or more videos. Each one has either
                 youtube:   the video ID (https://youtu.be/AbC123xyz → "AbC123xyz")
                 instagram: the full reel link
               YouTube is preferred: it looks cleaner on the site.
    vertical — true for 9:16 videos (reels, micro dramas)
    cover    — image in assets/covers/ (best size: 1200×1500, 4:5)
    stat     — optional highlight shown on the card (e.g. view count)
    note     — optional extra context shown under the details
*/

window.SITE = {
  name: { en: "Morteza", fa: "مرتضی" },
  title: { en: "AI Artist", fa: "هنرمند هوش مصنوعی" },
  tagline: {
    en: "Micro dramas, commercials and wedding films, made with AI from idea to final cut.",
    fa: "میکرودراما، تبلیغات و فیلم عروسی؛ ساخته‌شده با هوش مصنوعی، از ایده تا خروجی نهایی.",
  },

  about: {
    photo: "assets/img/portrait.svg",
    text: {
      en: "I'm Morteza, an AI artist. I take ideas from concept to final cut with generative tools: building characters and worlds, generating every shot, and shaping it all with edit, sound and color. One of my wedding films reached 1.7 million views and turned into a steady stream of custom projects. I've made campaign films for Al Jazeera through a partner agency, and I'm currently producing a 35-episode cyberpunk micro-drama series.",
      fa: "مرتضی هستم، هنرمند هوش مصنوعی. ایده را تا خروجی نهایی با ابزارهای هوش مصنوعی می‌سازم: از ساخت کاراکتر و دنیای قصه تا تولید تک‌تک نماها، و بعد تدوین، صدا و رنگ. یکی از فیلم‌های عروسی‌ام ۱.۷ میلیون بار دیده شد و به سفارش‌های پشت‌سرهم تبدیل شد. برای الجزیره از طریق یک آژانس همکار فیلم کمپین ساخته‌ام و الان در حال تولید یک سریال میکرودرامای سایبرپانک ۳۵ قسمتی هستم.",
    },
    tools: ["Seedance 2.5", "Kling 3", "Nano Banana Pro", "Google Flow", "GPT Image", "Vidu", "MiniMax", "Higgsfield"],
  },

  contact: {
    email: "morteza58382@gmail.com",
    instagram: "mrtz_da", // username only, without @
  },

  categories: [
    { id: "micro-drama", label: { en: "Micro Drama", fa: "میکرودراما" } },
    { id: "wedding", label: { en: "Wedding", fa: "عروسی" } },
    { id: "commercial", label: { en: "Commercial", fa: "تبلیغاتی" } },
  ],

  projects: [
    {
      category: "wedding",
      title: { en: "AI Wedding Film", fa: "فیلم عروسی با هوش مصنوعی" },
      year: 2026,
      vertical: true,
      cover: "assets/covers/wedding-1.svg",
      stat: { en: "1.7M views", fa: "۱.۷ میلیون بازدید" },
      videos: [
        { instagram: "https://www.instagram.com/reel/DcRhpV-NnUO/" },
        { instagram: "https://www.instagram.com/reel/DdhSYEkRDl1/" },
      ],
      summary: {
        en: "I saw a few videos in this style on my Explore page and made one for an Iranian audience. It went far beyond what I expected: that one video brought in around 10 custom projects. One was played at a real wedding, and the guests' reaction video brought in even more orders. Some couples sent me voice messages in tears to thank me.",
        fa: "چند ویدئو با این سبک در اکسپلورم دیدم و تصمیم گرفتم یکی برای مخاطب ایرانی بسازم. خیلی بیشتر از انتظارم دیده شد: همین یک ویدئو حدود ۱۰ سفارش اختصاصی برایم آورد. یکی از آن‌ها در یک عروسی واقعی پخش شد و وقتی ویدئوی واکنش مهمان‌ها را منتشر کردم، سفارش‌ها بیشتر هم شد. بعضی از زوج‌ها با گریه برایم ویس فرستادند و تشکر کردند.",
      },
      role: { en: "Creator: idea, AI production and edit", fa: "سازنده: ایده، تولید با هوش مصنوعی و تدوین" },
      did: {
        en: ["Concept for an Iranian audience", "Generated every shot", "Animated policy-blocked shots locally", "Edit and delivery on tight deadlines"],
        fa: ["ایده برای مخاطب ایرانی", "ساخت همه‌ی نماها", "ساخت نماهای ممنوع‌شده در پلتفرم‌ها روی سیستم شخصی", "تدوین و تحویل در زمان‌های فشرده"],
      },
      tools: ["Google Flow", "Omni 1.1 Flash", "Nano Banana Pro", "MiniMax H3"],
      note: {
        en: "These projects come with very tight deadlines (a partner's birthday in three days, a wedding next week) and personal budgets, so I deliberately put speed ahead of maximum quality. Where continuity isn't perfect, that comes from those constraints, not from the limit of what I can do.",
        fa: "این پروژه‌ها زمان خیلی کوتاهی دارند (تولد همسر تا سه روز دیگر، عروسی هفته‌ی بعد) و بودجه‌شان شخصی است؛ برای همین آگاهانه سرعت را به بالاترین کیفیت ترجیح دادم. اگر جایی پیوستگی یا دقت صددرصد نیست، به‌خاطر همین محدودیت‌هاست، نه سقف توانایی من.",
      },
    },
    {
      category: "commercial",
      title: { en: "War Cup", fa: "وار کاپ" },
      client: { en: "Al Jazeera", fa: "الجزیره" },
      year: 2026,
      vertical: true,
      cover: "assets/covers/commercial-1.svg",
      videos: [
        { instagram: "https://www.instagram.com/reel/DZfpPH8uj8B/" },
        { instagram: "https://www.instagram.com/reel/DaC_e77EtjT/" },
        { instagram: "https://www.instagram.com/reel/DZenI8EMI5G/" },
      ],
      summary: {
        en: "A World Cup video campaign produced for Al Jazeera through a partner agency. The name plays on \"World Cup\", and the campaign responds to FIFA president Gianni Infantino awarding the FIFA Peace Prize to Donald Trump. We were a team of four: we pitched around 20 scenarios, 12 were approved, and each of us produced 3 films in one month.",
        fa: "یک کمپین ویدئویی جام جهانی که از طریق یک آژانس همکار برای الجزیره ساخته شد. اسمش بازی‌ای با «ورلد کاپ» است و کمپین واکنشی است به اهدای جایزه‌ی صلح فیفا به دونالد ترامپ از طرف جیانی اینفانتینو. تیم چهارنفره بودیم: حدود ۲۰ سناریو پیشنهاد دادیم، ۱۲ تا تأیید شد و هر کدام از ما در یک ماه ۳ فیلم ساختیم.",
      },
      role: { en: "Concept team · full production of my 3 films", fa: "تیم ایده‌پردازی · تولید کامل ۳ فیلم خودم" },
      did: {
        en: ["Concept and scenario development", "AI image and video generation", "Edit", "Sound design", "Color grading"],
        fa: ["ایده‌پردازی و نوشتن سناریو", "ساخت تصویر و ویدئو با هوش مصنوعی", "تدوین", "طراحی صدا", "اصلاح رنگ"],
      },
      tools: ["Nano Banana Pro", "Kling 3", "Vidu"],
    },
    {
      category: "micro-drama",
      title: { en: "Floor Zero", fa: "طبقه‌ی صفر" },
      client: { en: "MicroDrama app", fa: "اپلیکیشن میکرودراما" },
      year: 2026,
      vertical: true,
      cover: "assets/covers/micro-drama-1.svg",
      stat: { en: "In production · 35 episodes", fa: "در حال تولید · ۳۵ قسمت" },
      videos: [
        { label: { en: "Episode 1", fa: "قسمت ۱" } },
        { label: { en: "Episode 2", fa: "قسمت ۲" } },
      ],
      summary: {
        en: "A vertical cyberpunk micro-drama series: 35 main episodes (up to 40 with side episodes), each 1 to 3 minutes long. The heir to a mega-corporation is framed for his father's murder and flees into the undercity of Neopolis, a vertical megacity layered by class. There he falls for Nora, an implant mechanic and street hacker, and is forced to choose between reclaiming his family's empire and saving the person he truly cares about. The upper city is clean, cold blue and white light; the undercity is broken neon in warm reds and purples.",
        fa: "یک سریال میکرودرامای سایبرپانک عمودی: ۳۵ قسمت اصلی (تا ۴۰ قسمت با قسمت‌های فرعی)، هر قسمت ۱ تا ۳ دقیقه. وارث یک امپراتوری بزرگ به قتل پدرش متهم می‌شود و به زیرشهرِ نئوپولیس فرار می‌کند؛ شهری عمودی که طبقه‌به‌طبقه بر اساس طبقه‌ی اجتماعی ساخته شده. آنجا عاشق نورا می‌شود، مکانیک ایمپلنت و هکر خیابانی، و آخر مجبور است بین پس گرفتن امپراتوری خانواده و نجات کسی که واقعاً دوستش دارد یکی را انتخاب کند. شهر بالا نور تمیز و سرد آبی و سفید است و زیرشهر نئون‌های شکسته‌ی قرمز و بنفش گرم.",
      },
      role: { en: "Story & concept with the production team · full AI production", fa: "قصه و ایده همراه تیم تولید · تولید کامل با هوش مصنوعی" },
      did: {
        en: ["Story and concept development", "Built all visual assets", "Generated all video", "Assembled shots on a timeline for the editor"],
        fa: ["پرورش قصه و ایده", "ساخت همه‌ی دارایی‌های بصری", "ساخت همه‌ی ویدئوها", "چیدن نماها روی تایم‌لاین برای تدوینگر"],
      },
      tools: ["GPT Image", "Seedance 2.5", "Higgsfield"],
      note: {
        en: "These 2 episodes are not the final cut: the shots are assembled in order to show the direction and visuals, and the final edit is done by the editor. The series hasn't been released yet; release starts once 7 to 8 episodes are ready, then one new episode a week.",
        fa: "این ۲ قسمت تدوین نهایی نیستند؛ نماها فقط به ترتیب کنار هم چیده شده‌اند تا مسیر و فضای بصری را نشان دهند و تدوین نهایی را تدوینگر انجام می‌دهد. سریال هنوز منتشر نشده؛ انتشار وقتی شروع می‌شود که ۷ تا ۸ قسمت آماده باشد و بعد هر هفته یک قسمت.",
      },
    },
    {
      category: "commercial",
      title: { en: "Promptr Mineral Water: Recreation", fa: "آب معدنی Promptr: بازسازی" },
      client: { en: "Personal practice", fa: "تمرین شخصی" },
      year: 2026,
      vertical: true,
      cover: "assets/covers/commercial-2.svg",
      videos: [{ instagram: "https://www.instagram.com/reel/DaTK41cga9v/" }],
      summary: {
        en: "A shot-for-shot recreation of Promptr's mineral water ad, made as a personal, non-commercial practice piece. The idea, direction and sound belong entirely to Promptr; the original audio is used as-is.",
        fa: "بازسازی نما‌به‌نمای تبلیغ آب معدنی Promptr، به‌عنوان یک تمرین شخصی و غیرتجاری. ایده، کارگردانی و صدا کاملاً متعلق به Promptr است و صدای اصلی تبلیغ بدون تغییر استفاده شده.",
      },
      role: { en: "AI recreation", fa: "بازسازی با هوش مصنوعی" },
      did: {
        en: ["Broke the original down shot by shot", "Rebuilt every shot with AI"],
        fa: ["شکستن تبلیغ اصلی نما به نما", "بازسازی همه‌ی نماها با هوش مصنوعی"],
      },
      note: {
        en: "This exercise showed me how much great work depends on sound design and storytelling. Being AI-made doesn't carry a piece on its own; behind this ad are years of experience in ideation and storytelling, and you only truly understand that when you rebuild it shot by shot.",
        fa: "این تمرین به من نشان داد کار خوب چقدر به طراحی صدا و قصه‌گویی وابسته است. ساخته شدن با هوش مصنوعی به‌تنهایی یک کار را جلو نمی‌برد؛ پشت این تبلیغ سال‌ها تجربه در ایده‌پردازی و قصه‌گویی است و این را فقط وقتی واقعاً می‌فهمی که نما به نما بازسازی‌اش کنی.",
      },
    },
  ],
};
