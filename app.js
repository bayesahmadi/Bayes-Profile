const CONTACT_EMAIL = "bayes.ahmadi0@gmail.com";

const translations = {
  en: {
    locale: "en-US",
    title: "Abdul Bayes Ahmadi | Web Developer",
    meta: "Abdul Bayes Ahmadi — Computer Science Graduate, Information Systems Manager, Web Developer, and Instructor.",
    skip: "Skip to content",
    navHome: "Home",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navExperience: "Experience",
    navServices: "Services",
    navContact: "Contact",
    available: "Available for selected projects",
    heroRole:
      "Computer Science Graduate <b>·</b> Information Systems Manager <b>·</b> Web Developer <b>·</b> Instructor",
    heroIntro:
      "I build modern, responsive and practical digital experiences using modern web technologies, programming, and creative problem solving.",
    viewWork: "View My Work",
    downloadCV: "Download CV",
    contactMe: "Contact Me",
    email: "Email",
    profilePrompt: "Your professional photo belongs here",
    scroll: "Scroll to explore",
    aboutEyebrow: "A little more about me",
    aboutTitle: "Building useful technology with clarity and care.",
    aboutText1:
      "I am a Computer Science graduate focused on turning real requirements into clear, reliable digital products. My work brings together web development, information systems, and a practical understanding of the people who use them.",
    aboutText2:
      "As a developer and instructor, I value thoughtful foundations, accessible interfaces, and knowledge that can be shared. I enjoy collaborating with organizations and learners to make technology genuinely useful.",
    startConversation: "Start a conversation",
    skillsEyebrow: "Capabilities",
    skillsTitle: "A focused, evolving technology toolkit.",
    skillsIntro:
      "Tools I use to plan, build, manage, and teach practical digital solutions.",
    projectsEyebrow: "Selected work",
    projectsTitle: "Projects shaped around real needs.",
    experienceEyebrow: "Journey",
    experienceTitle: "Learning, building, and sharing knowledge.",
    experienceIntro:
      "A multidisciplinary path across computer science, systems, web development, and education.",
    servicesEyebrow: "How I can help",
    servicesTitle: "Practical digital services for ambitious ideas.",
    resumeEyebrow: "Resume",
    resumeTitle: "A clear snapshot of my professional profile.",
    resumeText:
      "Explore my education, technical strengths, experience, certifications, and languages in one concise CV.",
    contactEyebrow: "Let’s connect",
    contactTitle: "Have a project in mind?",
    contactIntro:
      "I’m always open to discussing a thoughtful idea, a web project, or a new learning opportunity.",
    fieldName: "Name",
    fieldEmail: "Email",
    fieldSubject: "Subject",
    fieldMessage: "Message",
    sendMessage: "Send Message",
    rights: "Made with purpose.",
    formSuccess: "Your email client is ready with your message.",
    formError: "Please complete all fields with a valid email.",
    stats: [
      ["12+", "Projects Completed"],
      ["15+", "Technologies"],
      ["4+", "Years of Learning"],
      ["8+", "Happy Clients"],
    ],
    skills: [
      [
        "FE",
        "Frontend",
        ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      ],
      ["BE", "Backend", ["PHP", "MySQL", "Python"]],
      [
        "TP",
        "Tools & Platforms",
        ["Git", "GitHub", "WordPress", "Elementor", "VS Code"],
      ],
      ["APP", "Desktop / Applications", ["Electron"]],
    ],
    filters: [
      ["all", "All"],
      ["web", "Web"],
      ["php", "PHP"],
      ["react", "React"],
      ["wordpress", "WordPress"],
      ["other", "Other"],
    ],
    projects: [
      {
        type: "faculty",
        cats: ["web", "php"],
        category: "Web · PHP / MySQL",
        title: "Faculty of Computer Science Website",
        description:
          "A dynamic academic website with a responsive interface and considered RTL support.",
        tech: ["PHP", "MySQL", "JavaScript"],
        art: "faculty",
      },
      {
        type: "business",
        cats: ["web", "php"],
        category: "Web · Business",
        title: "Barakat Al Sai Website",
        description:
          "A multilingual business website with product management and online ordering integration.",
        tech: ["PHP", "MySQL", "Tailwind"],
        art: "business",
      },
      {
        type: "lab",
        cats: ["web", "react", "wordpress", "other"],
        category: "Web · In progress",
        title: "Personal & Other Web Projects",
        description:
          "A flexible showcase card ready for your next portfolio, learning, or client project.",
        tech: ["React", "WordPress", "Web"],
        art: "lab",
      },
    ],
    timeline: [
      [
        "Education",
        "Computer Science Education",
        "Building a strong foundation in programming, systems, databases, and software development.",
      ],
      [
        "Web",
        "Web Development Experience",
        "Creating responsive websites and practical interfaces for real audiences and needs.",
      ],
      [
        "Systems",
        "Information Systems Work",
        "Applying structured thinking to information, processes, and digital operations.",
      ],
      [
        "Teach",
        "Teaching & Instructor Experience",
        "Sharing technical knowledge through clear explanations and hands-on learning.",
      ],
      [
        "Freelance",
        "Freelance Projects",
        "Collaborating with clients to turn ideas into focused and useful web products.",
      ],
    ],
    services: [
      [
        "01",
        "Website Development",
        "Clear, fast websites designed around your goals.",
      ],
      [
        "02",
        "Responsive Web Design",
        "Interfaces that work beautifully on every screen.",
      ],
      [
        "03",
        "PHP & MySQL Development",
        "Dynamic functionality and structured data solutions.",
      ],
      [
        "04",
        "React Development",
        "Modern, component-based front-end experiences.",
      ],
      [
        "05",
        "WordPress & Elementor",
        "Flexible, easy-to-manage website builds.",
      ],
      [
        "06",
        "Business Websites",
        "Digital foundations built for credibility and growth.",
      ],
      [
        "07",
        "Website Maintenance",
        "Ongoing improvements, care, and technical support.",
      ],
      [
        "08",
        "Technical Consulting",
        "Practical guidance for your digital next step.",
      ],
    ],
    cv: [
      ["Education", "Computer Science"],
      ["Skills", "Web, systems & tools"],
      ["Experience", "Development & instruction"],
      ["Certifications", "Add your credentials"],
      ["Languages", "Dari · Pashto · English"],
    ],
    contact:
      "Prefer email or a social message? I’ll be glad to hear about your project.",
    location: "Location",
    github: "GitHub",
    linkedin: "LinkedIn",
    afghanistan: "Afghanistan",
    gitPlaceholder: "Add your profile URL",
    linkedPlaceholder: "Add your profile URL",
    projectLink: "GitHub",
    liveDemo: "Live Demo",
  },
  fa: {
    locale: "fa-AF",
    title: "عبدالبایس احمدی | توسعه‌دهنده وب",
    meta: "عبدالبایس احمدی — فارغ‌التحصیل  کمپیوتر ساینس، مدیر سیستم‌های معلوماتی، توسعه‌دهنده وب و مدرس.",
    skip: "رفتن به محتوا",
    navHome: "خانه",
    navAbout: "درباره من",
    navSkills: "مهارت‌ها",
    navProjects: "پروژه‌ها",
    navExperience: "تجربه",
    navServices: "خدمات",
    navContact: "تماس",
    available: "آماده همکاری در پروژه‌های منتخب",
    heroRole:
      "فارغ‌التحصیل کمپیوتر ساینس <b>·</b> مدیر سیستم‌های معلوماتی <b>·</b> توسعه‌دهنده وب <b>·</b> مدرس",
    heroIntro:
      "من تجربه‌های دیجیتال مدرن، واکنش‌گرا و کاربردی را با استفاده از فناوری‌های نوین وب، برنامه‌نویسی و حل خلاقانه مسئله می‌سازم.",
    viewWork: "دیدن کارها",
    downloadCV: "دریافت رزومه",
    contactMe: "تماس با من",
    email: "ایمیل",
    profilePrompt: "جای عکس حرفه‌ای شما",
    scroll: "برای دیدن بیشتر",
    aboutEyebrow: "بیشتر درباره من",
    aboutTitle: "ساختن فناوری مفید، با وضوح و دقت.",
    aboutText1:
      "من فارغ‌التحصیل کمپیوتر ساینس هستم و بر تبدیل نیازهای واقعی به محصولات دیجیتال شفاف و قابل اعتماد تمرکز دارم. کار من توسعه وب، سیستم‌های معلوماتی و درک عملی از کاربران را کنار هم می‌آورد.",
    aboutText2:
      "به‌عنوان توسعه‌دهنده و مدرس، برای پایه‌های سنجیده، رابط‌های دسترس‌پذیر و دانشی که قابل انتقال باشد ارزش قائلم. از همکاری با سازمان‌ها و فراگیران برای مفیدتر کردن فناوری لذت می‌برم.",
    startConversation: "گفتگو را آغاز کنیم",
    skillsEyebrow: "توانمندی‌ها",
    skillsTitle: "یک مجموعه فناوری متمرکز و رو به رشد.",
    skillsIntro:
      "ابزارهایی که برای برنامه‌ریزی، ساخت، مدیریت و آموزش راه‌حل‌های دیجیتال کاربردی به کار می‌گیرم.",
    projectsEyebrow: "کارهای برگزیده",
    projectsTitle: "پروژه‌هایی بر پایه نیازهای واقعی.",
    experienceEyebrow: "مسیر حرفه‌ای",
    experienceTitle: "یادگیری، ساختن و اشتراک دانش.",
    experienceIntro:
      "مسیری چندجانبه در علوم کمپیوتر، سیستم‌ها، توسعه وب و آموزش.",
    servicesEyebrow: "چگونه کمک می‌کنم",
    servicesTitle: "خدمات دیجیتال کاربردی برای ایده‌های بلندپروازانه.",
    resumeEyebrow: "رزومه",
    resumeTitle: "نگاهی روشن به نمایه حرفه‌ای من.",
    resumeText:
      "تحصیلات، توانایی‌های فنی، تجربه، گواهی‌نامه‌ها و زبان‌ها را در یک رزومه مختصر ببینید.",
    contactEyebrow: "بیایید در تماس باشیم",
    contactTitle: "پروژه‌ای در ذهن دارید؟",
    contactIntro:
      "همیشه آماده گفتگو درباره یک ایده سنجیده، پروژه وب یا فرصت تازه یادگیری هستم.",
    fieldName: "نام",
    fieldEmail: "ایمیل",
    fieldSubject: "موضوع",
    fieldMessage: "پیام",
    sendMessage: "ارسال پیام",
    rights: "با هدف ساخته شده است.",
    formSuccess: "برنامه ایمیل شما با پیام آماده باز شد.",
    formError: "لطفاً همه بخش‌ها را با یک ایمیل معتبر تکمیل کنید.",
    stats: [
      ["۱۲+", "پروژه تکمیل‌شده"],
      ["۱۵+", "فناوری"],
      ["۴+", "سال یادگیری"],
      ["۸+", "مشتری خشنود"],
    ],
    skills: [
      [
        "FE",
        "بخش کاربر",
        ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      ],
      ["BE", "بخش سرور", ["PHP", "MySQL", "Python"]],
      [
        "TP",
        "ابزارها و پلتفرم‌ها",
        ["Git", "GitHub", "WordPress", "Elementor", "VS Code"],
      ],
      ["APP", "دسکتاپ و برنامه‌ها", ["Electron"]],
    ],
    filters: [
      ["all", "همه"],
      ["web", "وب"],
      ["php", "PHP"],
      ["react", "React"],
      ["wordpress", "WordPress"],
      ["other", "دیگر"],
    ],
    projects: [
      {
        type: "faculty",
        cats: ["web", "php"],
        category: "وب · PHP / MySQL",
        title: "وب‌سایت پوهنځی  کمپیوتر ساینس",
        description:
          "یک وب‌سایت پویای دانشگاهی با رابط واکنش‌گرا و پشتیبانی دقیق از راست‌به‌چپ.",
        tech: ["PHP", "MySQL", "JavaScript"],
        art: "faculty",
      },
      {
        type: "business",
        cats: ["web", "php"],
        category: "وب · تجارتی",
        title: "وب‌سایت برکت السعی",
        description:
          "وب‌سایت چندزبانه تجارتی با مدیریت محصولات و یکپارچه‌سازی سفارش آنلاین.",
        tech: ["PHP", "MySQL", "Tailwind"],
        art: "business",
      },
      {
        type: "lab",
        cats: ["web", "react", "wordpress", "other"],
        category: "وب · در حال توسعه",
        title: "پروژه‌های شخصی و دیگر وب",
        description:
          "کارت نمایشی انعطاف‌پذیر برای پروژه بعدی، یادگیری یا کار مشتری شما.",
        tech: ["React", "WordPress", "Web"],
        art: "lab",
      },
    ],
    timeline: [
      [
        "تحصیلات",
        "تحصیلات کمپیوتر ساینس",
        "ساختن پایه‌ای قوی در برنامه‌نویسی، سیستم‌ها، دیتابیس و توسعه نرم‌افزار.",
      ],
      [
        "وب",
        "تجربه توسعه وب",
        "ساخت وب‌سایت‌های واکنش‌گرا و رابط‌های کاربردی برای مخاطبان و نیازهای واقعی.",
      ],
      [
        "سیستم‌ها",
        "کار با سیستم‌های معلوماتی",
        "به‌کارگیری تفکر ساختاریافته برای اطلاعات، فرایندها و عملیات دیجیتال.",
      ],
      [
        "آموزش",
        "تجربه تدریس و مدرسی",
        "انتقال دانش فنی با توضیح روشن و یادگیری عملی.",
      ],
      [
        "آزاد",
        "پروژه‌های فریلنس",
        "همکاری با مشتریان برای تبدیل ایده‌ها به محصولات وب متمرکز و مفید.",
      ],
    ],
    services: [
      ["۰۱", "توسعه وب‌سایت", "وب‌سایت‌های شفاف و سریع، متناسب با هدف شما."],
      [
        "۰۲",
        "طراحی واکنش‌گرا",
        "رابط‌هایی که در هر صفحه‌نمایش زیبا کار می‌کنند.",
      ],
      [
        "۰۳",
        "توسعه PHP و MySQL",
        "قابلیت‌های پویا و راه‌حل‌های داده ساختاریافته.",
      ],
      ["۰۴", "توسعه React", "تجربه‌های مدرن و مبتنی بر کامپوننت در بخش کاربر."],
      [
        "۰۵",
        "WordPress و Elementor",
        "وب‌سایت‌های انعطاف‌پذیر و آسان برای مدیریت.",
      ],
      ["۰۶", "وب‌سایت تجارتی", "زیرساخت دیجیتال برای اعتبار و رشد کسب‌وکار."],
      ["۰۷", "نگهداری وب‌سایت", "بهبود مداوم، مراقبت و پشتیبانی فنی."],
      ["۰۸", "مشاوره فنی", "راهنمایی کاربردی برای گام دیجیتال بعدی شما."],
    ],
    cv: [
      ["تحصیلات", "کمپیوتر ساینس"],
      ["مهارت‌ها", "وب، سیستم‌ها و ابزارها"],
      ["تجربه", "توسعه و تدریس"],
      ["گواهی‌نامه‌ها", "مدارک خود را بیفزایید"],
      ["زبان‌ها", "دری · پشتو · انگلیسی"],
    ],
    contact:
      "ایمیل یا پیام در شبکه‌های اجتماعی را ترجیح می‌دهید؟ خوشحال می‌شوم درباره پروژه شما بشنوم.",
    location: "موقعیت",
    github: "گیت‌هاب",
    linkedin: "لینکدین",
    afghanistan: "افغانستان",
    gitPlaceholder: "پیوند پروفایل خود را بیفزایید",
    linkedPlaceholder: "پیوند پروفایل خود را بیفزایید",
    projectLink: "گیت‌هاب",
    liveDemo: "نمایش زنده",
  },
  ps: {
    locale: "ps-AF",
    title: "عبدالبایس احمدي | وېب پراختیاکوونکی",
    meta: "عبدالبایس احمدي — د کمپیوټر ساینس فارغ، د معلوماتي سیسټمونو مدیر، وېب پراختیاکوونکی او ښوونکی.",
    skip: "منځپانګې ته لاړ شئ",
    navHome: "کور",
    navAbout: "زما په اړه",
    navSkills: "مهارتونه",
    navProjects: "پروژې",
    navExperience: "تجربه",
    navServices: "خدمتونه",
    navContact: "اړیکه",
    available: "د غوره پروژو لپاره چمتو یم",
    heroRole:
      "د کمپیوټر ساینس فارغ <b>·</b> د معلوماتي سیسټمونو مدیر <b>·</b> وېب پراختیاکوونکی <b>·</b> ښوونکی",
    heroIntro:
      "زه د عصري وېب ټکنالوژیو، پروګرامنګ او نوښتګرې ستونزې حل لارې په وسیله عصري، ځواب‌ویونکې او عملي ډیجیټل تجربې جوړوم.",
    viewWork: "زما کارونه وګورئ",
    downloadCV: "سي وي ترلاسه کړئ",
    contactMe: "اړیکه ونیسئ",
    email: "برېښنالیک",
    profilePrompt: "ستاسو مسلکي عکس دلته ځای لري",
    scroll: "د لیدلو لپاره ښکته شئ",
    aboutEyebrow: "زما په اړه نور",
    aboutTitle: "ګټوره ټکنالوژي په روښانتیا او پاملرنې جوړوم.",
    aboutText1:
      "زه د کمپیوټر ساینس فارغ یم او اصلي اړتیاوې په روښانه او باوري ډیجیټل محصولاتو بدلولو ته تمرکز لرم. زما کار د وېب پراختیا، معلوماتي سیسټمونه او د کاروونکو عملي درک سره یوځای کوي.",
    aboutText2:
      "د پراختیاکوونکي او ښوونکي په توګه، زه سنجول شوو بنسټونو، د لاسرسي وړ انٹرفیسونو او د شریکولو وړ پوهې ته ارزښت ورکوم. له ادارو او زده‌کوونکو سره د ټکنالوژۍ د ګټورتیا لپاره همکاري راته خوښه ده.",
    startConversation: "خبرې پیل کړو",
    skillsEyebrow: "وړتیاوې",
    skillsTitle: "د ټکنالوژۍ یو متمرکز او مخ پر ودې ټولګه.",
    skillsIntro:
      "هغه وسایل چې د عملي ډیجیټل حل لارو د پلان، جوړولو، مدیریت او ښوونې لپاره کاروم.",
    projectsEyebrow: "غوره کارونه",
    projectsTitle: "پروژې چې د اصلي اړتیاوو پر بنسټ دي.",
    experienceEyebrow: "زما لاره",
    experienceTitle: "زده کړه، جوړونه او د پوهې شریکول.",
    experienceIntro:
      "په کمپیوټر ساینس، سیسټمونو، وېب پراختیا او زده‌کړه کې یو څو اړخیز مسیر.",
    servicesEyebrow: "څنګه مرسته کولی شم",
    servicesTitle: "د لوړو هیلو لرونکو نظرونو لپاره عملي ډیجیټل خدمتونه.",
    resumeEyebrow: "رزومه",
    resumeTitle: "زما د مسلکي پېژندنې روښانه لنډیز.",
    resumeText:
      "زده‌کړه، تخنیکي وړتیاوې، تجربه، تصدیقونه او ژبې په یوه لنډه سي وي کې وګورئ.",
    contactEyebrow: "راځئ اړیکه ونیسو",
    contactTitle: "یوه پروژه په فکر کې لرئ؟",
    contactIntro:
      "زه تل د یوه فکر لرونکي نظر، وېب پروژې یا د زده‌کړې نوې فرصت په اړه خبرو ته چمتو یم.",
    fieldName: "نوم",
    fieldEmail: "برېښنالیک",
    fieldSubject: "موضوع",
    fieldMessage: "پیغام",
    sendMessage: "پیغام ولېږئ",
    rights: "په موخه جوړ شوی.",
    formSuccess: "ستاسو برېښنالیک پروګرام له پیغام سره چمتو شو.",
    formError: "مهرباني وکړئ ټول ځایونه د سم برېښنالیک سره ډک کړئ.",
    stats: [
      ["۱۲+", "بشپړې پروژې"],
      ["۱۵+", "ټکنالوژۍ"],
      ["۴+", "د زده‌کړې کلونه"],
      ["۸+", "خوښ پیرودونکي"],
    ],
    skills: [
      [
        "FE",
        "فرنټ اېنډ",
        ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      ],
      ["BE", "بېک اېنډ", ["PHP", "MySQL", "Python"]],
      [
        "TP",
        "وسایل او پلاتفورمونه",
        ["Git", "GitHub", "WordPress", "Elementor", "VS Code"],
      ],
      ["APP", "ډسکټاپ او اپلیکیشنونه", ["Electron"]],
    ],
    filters: [
      ["all", "ټول"],
      ["web", "وېب"],
      ["php", "PHP"],
      ["react", "React"],
      ["wordpress", "WordPress"],
      ["other", "نور"],
    ],
    projects: [
      {
        type: "faculty",
        cats: ["web", "php"],
        category: "وېب · PHP / MySQL",
        title: "د کمپیوټر ساینس پوهنځي وېب‌سایټ",
        description:
          "یو متحرک اکاډمیک وېب‌سایټ له ځواب‌ویونکي انٹرفیس او د RTL پاملرنې سره.",
        tech: ["PHP", "MySQL", "JavaScript"],
        art: "faculty",
      },
      {
        type: "business",
        cats: ["web", "php"],
        category: "وېب · سوداګري",
        title: "د برکت السعي وېب‌سایټ",
        description:
          "یو څوژبنی سوداګریز وېب‌سایټ له محصول مدیریت او آنلاین فرمایش یوځای کولو سره.",
        tech: ["PHP", "MySQL", "Tailwind"],
        art: "business",
      },
      {
        type: "lab",
        cats: ["web", "react", "wordpress", "other"],
        category: "وېب · د پراختیا په حال کې",
        title: "شخصي او نورې وېب پروژې",
        description:
          "ستاسو د راتلونکې پورټفولیو، زده‌کړې یا د پیرودونکي پروژې لپاره انعطاف‌منه نمایشي کارت.",
        tech: ["React", "WordPress", "Web"],
        art: "lab",
      },
    ],
    timeline: [
      [
        "زده‌کړه",
        "د کمپیوټر ساینس زده‌کړه",
        "په پروګرامنګ، سیسټمونو، ډیټابیس او سافټویر پراختیا کې پیاوړی بنسټ جوړول.",
      ],
      [
        "وېب",
        "د وېب پراختیا تجربه",
        "د اصلي اړتیاوو او مخاطبینو لپاره ځواب‌ویونکي وېب‌سایټونه او عملي انٹرفیسونه جوړول.",
      ],
      [
        "سیسټمونه",
        "د معلوماتي سیسټمونو کار",
        "د معلوماتو، بهیرونو او ډیجیټل عملیاتو لپاره جوړښتي فکر کارول.",
      ],
      [
        "ښوونه",
        "د ښوونې تجربه",
        "تخنیکي پوهه په روښانه تشریح او عملي زده‌کړه شریکول.",
      ],
      [
        "آزاد",
        "فریلانس پروژې",
        "له پیرودونکو سره د نظرونو په ګټورو او متمرکزو وېب محصولاتو بدلولو کې همکاري.",
      ],
    ],
    services: [
      [
        "۰۱",
        "د وېب‌سایټ پراختیا",
        "روښانه او چټک وېب‌سایټونه ستاسې د موخو لپاره.",
      ],
      [
        "۰۲",
        "ځواب‌ویونکی وېب ډیزاین",
        "انٹرفیسونه چې په هره پرده ښکلي کار کوي.",
      ],
      ["۰۳", "PHP او MySQL پراختیا", "متحرک فعالیت او منظم ډیټا حل لارې."],
      ["۰۴", "React پراختیا", "عصري، کامپوننټ-بنسټه فرنټ اېنډ تجربې."],
      ["۰۵", "WordPress او Elementor", "انعطاف‌من او د مدیریت وړ وېب‌سایټونه."],
      ["۰۶", "سوداګریز وېب‌سایټ", "د اعتبار او ودې لپاره ډیجیټل بنسټ."],
      ["۰۷", "د وېب‌سایټ ساتنه", "پرله‌پسې ښه والی، پاملرنه او تخنیکي مرسته."],
      ["۰۸", "تخنیکي مشوره", "ستاسو راتلونکی ډیجیټل ګام لپاره عملي لارښوونه."],
    ],
    cv: [
      ["زده‌کړه", "کمپیوټر ساینس"],
      ["مهارتونه", "وېب، سیسټمونه او وسایل"],
      ["تجربه", "پراختیا او ښوونه"],
      ["تصدیقونه", "خپل اسناد ورزیات کړئ"],
      ["ژبې", "دري · پښتو · انګلیسي"],
    ],
    contact:
      "برېښنالیک یا په ټولنیزو شبکو کې پیغام غوره ګڼئ؟ ستاسو د پروژې په اړه به په خوښۍ واورم.",
    location: "ځای",
    github: "ګېټ‌هاب",
    linkedin: "لېنکډېن",
    afghanistan: "افغانستان",
    gitPlaceholder: "خپل پروفایل لینک ورزیات کړئ",
    linkedPlaceholder: "خپل پروفایل لینک ورزیات کړئ",
    projectLink: "ګېټ‌هاب",
    liveDemo: "ژوندۍ بېلګه",
  },
};

let activeLanguage = localStorage.getItem("portfolio-language") || "en";
let activeFilter = "all";

const byId = (id) => document.getElementById(id);
const arrow =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

function renderDynamicContent(t) {
  byId("stats").innerHTML = t.stats
    .map(
      ([number, label]) =>
        `<article class="stat-card"><span class="stat-number" data-count="${number}">0</span><span class="stat-label">${label}</span></article>`,
    )
    .join("");
  byId("skills-grid").innerHTML = t.skills
    .map(
      ([icon, title, tools]) =>
        `<article class="skill-card reveal"><span class="skill-icon">${icon}</span><h3>${title}</h3><div class="tech-list">${tools.map((tool) => `<span>${tool}</span>`).join("")}</div></article>`,
    )
    .join("");
  byId("project-filters").innerHTML = t.filters
    .map(
      ([id, label]) =>
        `<button class="filter-button ${id === activeFilter ? "active" : ""}" type="button" data-filter="${id}">${label}</button>`,
    )
    .join("");
  byId("projects-grid").innerHTML = t.projects
    .map(
      (p) =>
        `<article class="project-card reveal" data-categories="${p.cats.join(" ")}"><div class="project-art ${p.art}"><div class="browser-art"><div class="browser-top"></div><div class="browser-body"></div></div></div><div class="project-body"><span class="project-category">${p.category}</span><h3>${p.title}</h3><p>${p.description}</p><div class="project-footer"><div class="tech-inline">${p.tech.map((tech) => `<span>${tech}</span>`).join("<span>·</span>")}</div><div class="project-links"><a href="https://github.com/bayesahmadi/" target="_blank" rel="noopener noreferrer">${t.projectLink}${arrow}</a><a href="#contact">${t.liveDemo}${arrow}</a></div></div></div></article>`,
    )
    .join("");
  byId("timeline").innerHTML = t.timeline
    .map(
      ([date, title, text]) =>
        `<article class="timeline-item reveal"><div class="timeline-content"><span class="timeline-date">${date}</span><h3>${title}</h3><p>${text}</p></div></article>`,
    )
    .join("");
  byId("services-grid").innerHTML = t.services
    .map(
      ([number, title, text]) =>
        `<article class="service-card reveal"><span class="service-icon">${number}</span><h3>${title}</h3><p>${text}</p></article>`,
    )
    .join("");
  byId("cv-points").innerHTML = t.cv
    .map(
      ([title, text]) =>
        `<div class="cv-point"><span>${title}</span><p>${text}</p></div>`,
    )
    .join("");
  byId("contact-details").innerHTML =
    `<p>${t.contact}</p><div class="contact-list"><div class="contact-item"><i>@</i><div><span>${t.email}</span><a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></div></div><div class="contact-item"><i>⌘</i><div><span>${t.github}</span><a href="https://github.com/bayesahmadi/" target="_blank" rel="noopener noreferrer">bayesahmadi</a></div></div><div class="contact-item"><i>in</i><div><span>${t.linkedin}</span><a href="https://www.linkedin.com/in/abdul-bayes-ahmadi-2736a62b1/" target="_blank" rel="noopener noreferrer">abdul-bayes-ahmadi</a></div></div><div class="contact-item"><i>◉</i><div><span>${t.location}</span><strong>${t.afghanistan}</strong></div></div></div><div class="contact-socials"><a href="https://github.com/bayesahmadi/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GH</a><a href="https://www.facebook.com/a.bayes.ahmadi" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a><a href="https://www.linkedin.com/in/abdul-bayes-ahmadi-2736a62b1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a><a href="https://www.instagram.com/bayes_ahmadi1" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a><a href="https://www.youtube.com/@ahmadian_8" target="_blank" rel="noopener noreferrer" aria-label="YouTube">YT</a><a href="mailto:${CONTACT_EMAIL}" aria-label="Email">@</a></div>`;
  applyFilter();
}

function setLanguage(lang) {
  activeLanguage = translations[lang] ? lang : "en";
  const t = translations[activeLanguage];
  const isRTL = activeLanguage !== "en";
  document.documentElement.lang = activeLanguage;
  document.documentElement.dir = isRTL ? "rtl" : "ltr";
  document.body.dir = isRTL ? "rtl" : "ltr";
  document.title = t.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", t.meta);
  document
    .querySelector('meta[property="og:description"]')
    .setAttribute("content", t.meta);
  document
    .querySelector('meta[property="og:title"]')
    .setAttribute("content", t.title);
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = t[node.dataset.i18n];
    if (value) node.innerHTML = value;
  });
  document
    .querySelectorAll(".lang-btn")
    .forEach((button) =>
      button.classList.toggle("active", button.dataset.lang === activeLanguage),
    );
  renderDynamicContent(t);
  setupReveals();
  localStorage.setItem("portfolio-language", activeLanguage);
}

function applyFilter() {
  document
    .querySelectorAll(".project-card")
    .forEach((card) =>
      card.classList.toggle(
        "hidden",
        activeFilter !== "all" &&
          !card.dataset.categories.includes(activeFilter),
      ),
    );
}

function animateNumber(element) {
  const target = element.dataset.count;
  const numeric = Number.parseInt(target, 10);
  if (!Number.isFinite(numeric)) {
    element.textContent = target;
    return;
  }
  const suffix = target.replace(/[0-9۰-۹]/g, "");
  const start = performance.now();
  const duration = 850;
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    element.textContent = `${Math.round(numeric * (1 - (1 - progress) ** 3))}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

let revealObserver;
function setupReveals() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          if (entry.target.id === "stats")
            entry.target
              .querySelectorAll("[data-count]")
              .forEach(animateNumber);
          revealObserver.unobserve(entry.target);
        }
      }),
    { threshold: 0.12 },
  );
  document
    .querySelectorAll(".reveal, #stats")
    .forEach((item) => revealObserver.observe(item));
}

function setTheme(theme) {
  const selected = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = selected;
  document
    .querySelector(".theme-toggle")
    .setAttribute(
      "aria-label",
      selected === "dark" ? "Switch to light mode" : "Switch to dark mode",
    );
  localStorage.setItem("portfolio-theme", selected);
}

document.addEventListener("click", (event) => {
  const language = event.target.closest(".lang-btn");
  if (language) setLanguage(language.dataset.lang);
  const filter = event.target.closest("[data-filter]");
  if (filter) {
    activeFilter = filter.dataset.filter;
    document
      .querySelectorAll("[data-filter]")
      .forEach((button) =>
        button.classList.toggle("active", button === filter),
      );
    applyFilter();
  }
});

document
  .querySelector(".theme-toggle")
  .addEventListener("click", () =>
    setTheme(
      document.documentElement.dataset.theme === "dark" ? "light" : "dark",
    ),
  );
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.classList.toggle("open", open);
  menu.setAttribute("aria-expanded", String(open));
});
nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("open");
    menu.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  }
});
window.addEventListener(
  "scroll",
  () =>
    document
      .querySelector(".site-header")
      .classList.toggle("scrolled", window.scrollY > 12),
  { passive: true },
);

byId("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = form.querySelector(".form-message");
  if (!form.checkValidity()) {
    message.textContent = translations[activeLanguage].formError;
    form.reportValidity();
    return;
  }
  const data = new FormData(form);
  const subject = encodeURIComponent(data.get("subject"));
  const body = encodeURIComponent(
    `${data.get("message")}\n\n— ${data.get("name")}\n${data.get("email")}`,
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  message.textContent = translations[activeLanguage].formSuccess;
});

byId("year").textContent = new Date().getFullYear();
setTheme(
  localStorage.getItem("portfolio-theme") ||
    (window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark"),
);
setLanguage(activeLanguage);
