/*
  All site content lives in this file.
  Every text has two versions: en (English) and fa (Persian).

  To add a project, copy one block inside `projects` and change it:
    category — one of the ids in `categories`, or "" to show it only under All
    videos   — one or more videos. Each one has either
                 youtube:   the video ID (https://youtu.be/AbC123xyz → "AbC123xyz")
                 instagram: the full reel link
                 file:      a video file inside assets/video/ (plays everywhere, also in Iran)
                 drive:     a Google Drive file ID (file must be shared "Anyone with the link")
               YouTube is preferred: it looks cleaner on the site.
    vertical — true for 9:16 videos (reels, micro dramas)
    cover    — image in assets/covers/ (best size: 1200×1500, 4:5)
    stat     — optional highlight shown on the card (e.g. view count)
    note     — optional extra context shown under the details
*/

window.SITE = {
  name: { en: "Morteza Dehghani", fa: "مرتضی دهقانی" },
  title: { en: "AI Filmmaker", fa: "فیلم‌ساز هوش مصنوعی" },
  tagline: {
    en: "Micro dramas, commercials and wedding films, made with AI.",
    fa: "میکرودراما، تبلیغات و فیلم عروسی؛ ساخته‌شده با هوش مصنوعی.",
  },

  about: {
    photo: "assets/img/portrait.jpg",
    text: {
      en: "I'm Morteza Dehghani, an AI filmmaker. I take ideas from concept to final cut with generative tools: building characters and worlds, generating every shot, and shaping it all with edit, sound and color. I work across micro-drama series, commercials and personal wedding films, and I care most about the things AI can't do on its own: story, rhythm and feeling.",
      fa: "مرتضی دهقانی هستم، فیلم‌ساز هوش مصنوعی. ایده را تا خروجی نهایی با ابزارهای هوش مصنوعی می‌سازم: از ساخت کاراکتر و دنیای قصه تا تولید تک‌تک نماها، و بعد تدوین، صدا و رنگ. روی سریال‌های میکرودراما، تبلیغات و فیلم‌های عروسی کار می‌کنم و بیشتر از هر چیز به چیزهایی اهمیت می‌دهم که هوش مصنوعی به‌تنهایی از پسش برنمی‌آید: قصه، ریتم و حس.",
    },
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
      cover: "assets/covers/wedding-mia-kourosh.jpg",
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
      category: "wedding",
      title: { en: "The Proposal", fa: "خواستگاری" },
      year: 2026,
      vertical: false,
      cover: "assets/covers/proposal.jpg",
      videos: [{ file: "assets/video/proposal.mp4" }],
      summary: {
        en: "A custom film for a man who wanted to propose to his girlfriend. The two of them meet again and again across different eras, from the ancient world to the present day, until the story arrives at the proposal itself. The film was played on the night of the proposal at a villa, right before he asked the question.",
        fa: "یک فیلم اختصاصی برای مردی که می‌خواست از دوست‌دخترش خواستگاری کند. آن دو در دوره‌های مختلف تاریخ، از دنیای باستان تا امروز، بارها به هم می‌رسند تا قصه به خود شب خواستگاری برسد. فیلم شب خواستگاری در یک ویلا پخش شد، درست قبل از اینکه سؤالش را بپرسد.",
      },
      role: { en: "Creator: idea, AI production and edit", fa: "سازنده: ایده، تولید با هوش مصنوعی و تدوین" },
      did: {
        en: ["Story built around the couple", "Characters and worlds for each era", "Generated every shot", "Edit"],
        fa: ["قصه بر اساس زندگی زوج", "طراحی کاراکتر و فضای هر دوره", "ساخت همه‌ی نماها", "تدوین"],
      },
    },
    {
      category: "commercial",
      title: { en: "War Cup Campaign", fa: "کمپین وار کاپ" },
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
      tools: ["GPT Image 2", "Nano Banana Pro", "Kling 3", "Vidu"],
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
        { label: { en: "Episode 1", fa: "قسمت ۱" }, drive: "1XSJGA_0YzphfC30tzEU6HkS-cywoKmaC" },
        { label: { en: "Episode 2", fa: "قسمت ۲" }, drive: "1jCAtMOZtquDNrK7Z5pIX_L1lWN6AvkmI" },
        { label: { en: "Episode 3 · soon", fa: "قسمت ۳ · به‌زودی" } },
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
      tools: ["GPT Image 2.5", "Seedance 2.5"],
      note: {
        en: "These 2 episodes are not the final cut: the shots are assembled in order to show the direction and visuals, and the final edit is done by the editor. The series hasn't been released yet; release starts once 7 to 8 episodes are ready, then one new episode a week.",
        fa: "این ۲ قسمت تدوین نهایی نیستند؛ نماها فقط به ترتیب کنار هم چیده شده‌اند تا مسیر و فضای بصری را نشان دهند و تدوین نهایی را تدوینگر انجام می‌دهد. سریال هنوز منتشر نشده؛ انتشار وقتی شروع می‌شود که ۷ تا ۸ قسمت آماده باشد و بعد هر هفته یک قسمت.",
      },
    },
    {
      category: "micro-drama",
      title: { en: "Game Over", fa: "گیم اور" },
      year: 2026,
      vertical: true,
      cover: "assets/covers/game-over.svg",
      stat: { en: "Micro series · in production", fa: "میکروسریال · در حال تولید" },
      videos: [
        { label: { en: "Episode 1", fa: "قسمت ۱" } },
        { label: { en: "Episode 2", fa: "قسمت ۲" } },
        { label: { en: "More episodes · soon", fa: "قسمت‌های بعد · به‌زودی" } },
      ],
      summary: {
        en: "A vertical crime thriller. Hamed agrees to secretly film his friend Arash settling an old score in a car junkyard, but the fight turns deadly: a stranger on a motorcycle kills Arash and leaves Hamed unconscious in the dirt. When he wakes up, the body is gone, and a message lights up his phone: \"The game has begun.\" Photos arrive that make Hamed look like the killer, and when he reaches the police station, the stranger threatens Haniyeh, Arash's sister and the woman Hamed loves. From then on, every move is part of someone else's game.",
        fa: "یک تریلر جنایی عمودی. حامد قبول می‌کند پنهانی از دوستش آرش فیلم بگیرد که در گورستان ماشین‌های اسقاطی می‌خواهد یک حساب قدیمی را صاف کند؛ اما دعوا مرگبار می‌شود: یک موتورسوار ناشناس آرش را می‌کشد و حامد را بیهوش روی خاک رها می‌کند. وقتی به هوش می‌آید، جنازه نیست و پیامی روی گوشی‌اش روشن می‌شود: «بازی شروع شد.» عکس‌هایی می‌رسد که حامد را قاتل نشان می‌دهد و وقتی به کلانتری می‌رسد، ناشناس هانیه، خواهر آرش و کسی که حامد دوستش دارد، را تهدید می‌کند. از این به بعد هر حرکتش بخشی از بازی کس دیگری است.",
      },
      role: { en: "AI Video Creator", fa: "سازنده‌ی ویدئو با هوش مصنوعی" },
      did: {
        en: ["Generated all video", "Turned scenes filmed with real actors into AI shots with Genjutsu", "Worked alongside a director, two writers and an AI image artist"],
        fa: ["ساخت همه‌ی ویدئوها", "تبدیل صحنه‌هایی که با بازیگر واقعی فیلم‌برداری شد به نمای هوش مصنوعی با گنجوتسو", "همکاری با کارگردان، دو نویسنده و یک طراح تصویر هوش مصنوعی"],
      },
      tools: ["Seedream 5", "GPT Image 2.5", "Seedance 2.5", "Genjutsu"],
    },
    {
      category: "commercial",
      title: { en: "Promptr Mineral Water: Recreation", fa: "آب معدنی Promptr: بازسازی" },
      client: { en: "Personal practice", fa: "تمرین شخصی" },
      year: 2026,
      vertical: true,
      cover: "assets/covers/promptr.jpg",
      videos: [{ instagram: "https://www.instagram.com/reel/DaTK41cga9v/" }],
      summary: {
        en: "A personal study: I rebuilt Promptr's mineral water ad entirely with AI, matching its framing, light and pacing as closely as I could. It was made for practice, not for a client, and was never paid. All credit for the idea, direction and sound goes to Promptr; the original audio track is used unchanged.",
        fa: "یک تمرین شخصی: تبلیغ آب معدنی Promptr را کامل با هوش مصنوعی از نو ساختم و تا جای ممکن قاب‌بندی، نور و ریتمش را به نسخه‌ی اصلی نزدیک کردم. این کار برای تمرین ساخته شد، نه برای مشتری، و هیچ دستمزدی نداشت. اعتبار ایده، کارگردانی و صدا کاملاً متعلق به Promptr است و صدای اصلی تبلیغ بدون تغییر استفاده شده.",
      },
      role: { en: "AI recreation", fa: "بازسازی با هوش مصنوعی" },
      did: {
        en: ["Recreated the full ad with AI", "Matched framing, light and timing to the original"],
        fa: ["بازسازی کامل تبلیغ با هوش مصنوعی", "هماهنگ کردن قاب، نور و زمان‌بندی با نسخه‌ی اصلی"],
      },
      note: {
        en: "This exercise showed me how much great work depends on sound design and storytelling. Being AI-made doesn't carry a piece on its own; behind this ad are years of experience in ideation and storytelling, and you only truly understand that when you rebuild it shot by shot.",
        fa: "این تمرین به من نشان داد کار خوب چقدر به طراحی صدا و قصه‌گویی وابسته است. ساخته شدن با هوش مصنوعی به‌تنهایی یک کار را جلو نمی‌برد؛ پشت این تبلیغ سال‌ها تجربه در ایده‌پردازی و قصه‌گویی است و این را فقط وقتی واقعاً می‌فهمی که نما به نما بازسازی‌اش کنی.",
      },
    },
  ],
};
