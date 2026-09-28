const CONTACT_EMAIL = "bayes.ahmadi0@gmail.com";
const GITHUB = "https://github.com/bayesahmadi/";

const SOCIALS = [
  ["GitHub", GITHUB],
  ["LinkedIn", "https://www.linkedin.com/in/abdul-bayes-ahmadi-2736a62b1/"],
  ["Facebook", "https://www.facebook.com/a.bayes.ahmadi"],
  ["Instagram", "https://www.instagram.com/bayes_ahmadi1"],
  ["YouTube", "https://www.youtube.com/@ahmadian_8"],
  ["Email", `mailto:${CONTACT_EMAIL}`],
];

// Language-independent project data. Texts live in translations[lang].projects (same order).
const PROJECTS = [
  {
    img: "images/maskan.png",
    cats: "php business",
    tech: ["PHP", "MySQL", "JavaScript"],
  },
  {
    img: "images/project4.png",
    cats: "php education",
    tech: ["PHP", "MySQL", "JavaScript"],
  },
  {
    img: "images/cs.png",
    cats: "php education",
    tech: ["PHP", "MySQL", "JavaScript"],
  },
  {
    img: "images/barakat pro.png",
    cats: "php business",
    tech: ["PHP", "MySQL", "Tailwind"],
    live: "https://barakatalsai.com",
  },
  {
    img: "images/safa.png",
    cats: "wordpress business",
    tech: ["WordPress", "Elementor"],
    live: "https://safaonline.co.uk",
  },
];

const SKILL_TOOLS = [
  ["FE", ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]],
  ["BE", ["PHP", "MySQL", "Python"]],
  ["TP", ["Git", "GitHub", "WordPress", "Elementor", "VS Code"]],
  ["APP", ["Electron"]],
];

const translations = {
  en: {
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
    projectsIntro:
      "Real systems and websites built for universities, businesses, and the real estate market.",
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
      "Frontend",
      "Backend",
      "Tools & Platforms",
      "Desktop / Applications",
    ],
    filters: [
      ["all", "All"],
      ["php", "PHP"],
      ["wordpress", "WordPress"],
      ["education", "Education"],
      ["business", "Business"],
    ],
    projects: [
      [
        "Real Estate · PHP / MySQL",
        "Rahnama Real Estate System",
        "A property deals platform that helps agents, buyers, and sellers list properties, track deals, and manage records.",
      ],
      [
        "Education · PHP / MySQL",
        "Badakhshan University Online Library",
        "An online library system for cataloguing books, managing members and lending, and searching resources.",
      ],
      [
        "University · PHP / MySQL",
        "Computer Science Faculty Website & Learning System",
        "A website and academic system for the Faculty of Computer Science at Badakhshan University, with RTL support.",
      ],
      [
        "Business · Multilingual",
        "Barakat Al-Sai Company Website",
        "A multilingual supermarket website with product management and online ordering through WhatsApp.",
      ],
      [
        "Business · WordPress",
        "Safa LTD Website",
        "A WordPress website for a UK business selling carpet flooring and rugs, plus mobile technology sales and repair.",
      ],
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
    country: "Afghanistan",
    projectLink: "GitHub",
    visit: "Visit Site",
  },
  fa: {
    title: "عبدالباعث احمدی | توسعه‌دهنده وب",
    meta: "عبدالباعث احمدی — فارغ‌التحصیل کمپیوتر ساینس، مدیر سیستم‌های معلوماتی، توسعه‌دهنده وب و مدرس.",
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
    projectsIntro:
      "سیستم‌ها و وب‌سایت‌های واقعی که برای دانشگاه‌ها، شرکت‌ها و بازار املاک ساخته شده‌اند.",
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
      ["12+", "پروژه تکمیل‌شده"],
      ["15+", "فناوری"],
      ["4+", "سال یادگیری"],
      ["8+", "مشتری خشنود"],
    ],
    skills: [
      "بخش کاربر",
      "بخش سرور",
      "ابزارها و پلتفرم‌ها",
      "دسکتاپ و برنامه‌ها",
    ],
    filters: [
      ["all", "همه"],
      ["php", "PHP"],
      ["wordpress", "WordPress"],
      ["education", "آموزشی"],
      ["business", "تجارتی"],
    ],
    projects: [
      [
        "املاک · PHP / MySQL",
        "سیستم رهنمای معاملات",
        "پلتفرم معاملات ملکی برای ثبت جایدادها، پیگیری معاملات و مدیریت اسناد و معلومات نمایندگان، خریداران و فروشندگان.",
      ],
      [
        "آموزشی · PHP / MySQL",
        "کتابخانه آنلاین دانشگاه بدخشان",
        "سیستم کتابخانه آنلاین برای ثبت کتاب‌ها، مدیریت اعضا و امانت‌دهی و جستجوی منابع.",
      ],
      [
        "دانشگاهی · PHP / MySQL",
        "وب‌سایت و سیستم آموزشی دانشکده کمپیوتر ساینس",
        "وب‌سایت و سیستم آموزشی دانشکده کمپیوتر ساینس دانشگاه بدخشان با پشتیبانی از راست‌به‌چپ.",
      ],
      [
        "تجارتی · چندزبانه",
        "وب‌سایت شرکت برکت السعی",
        "وب‌سایت چندزبانه سوپرمارکت با مدیریت محصولات و سفارش آنلاین از طریق واتساپ.",
      ],
      [
        "تجارتی · WordPress",
        "وب‌سایت Safa LTD",
        "وب‌سایت وردپرسی برای یک شرکت در بریتانیا که قالین و فرش می‌فروشد و در فروش و ترمیم موبایل نیز فعالیت دارد.",
      ],
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
    country: "افغانستان",
    projectLink: "گیت‌هاب",
    visit: "دیدن وب‌سایت",
  },
  ps: {
    title: "عبدالباعث احمدي | وېب پراختیاکوونکی",
    meta: "عبدالباعث احمدي — د کمپیوټر ساینس فارغ، د معلوماتي سیسټمونو مدیر، وېب پراختیاکوونکی او ښوونکی.",
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
    aboutEyebrow: "زما په اړه نور",
    aboutTitle: "ګټوره ټکنالوژي په روښانتیا او پاملرنې جوړوم.",
    aboutText1:
      "زه د کمپیوټر ساینس فارغ یم او اصلي اړتیاوې په روښانه او باوري ډیجیټل محصولاتو بدلولو ته تمرکز لرم. زما کار د وېب پراختیا، معلوماتي سیسټمونه او د کاروونکو عملي درک سره یوځای کوي.",
    aboutText2:
      "د پراختیاکوونکي او ښوونکي په توګه، زه سنجول شوو بنسټونو، د لاسرسي وړ انټرفیسونو او د شریکولو وړ پوهې ته ارزښت ورکوم. له ادارو او زده‌کوونکو سره د ټکنالوژۍ د ګټورتیا لپاره همکاري راته خوښه ده.",
    startConversation: "خبرې پیل کړو",
    skillsEyebrow: "وړتیاوې",
    skillsTitle: "د ټکنالوژۍ یو متمرکز او مخ پر ودې ټولګه.",
    skillsIntro:
      "هغه وسایل چې د عملي ډیجیټل حل لارو د پلان، جوړولو، مدیریت او ښوونې لپاره کاروم.",
    projectsEyebrow: "غوره کارونه",
    projectsTitle: "پروژې چې د اصلي اړتیاوو پر بنسټ دي.",
    projectsIntro:
      "ریښتینې سیسټمونه او وېب‌سایټونه چې د پوهنتونونو، شرکتونو او د املاکو بازار لپاره جوړ شوي.",
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
      ["12+", "بشپړې پروژې"],
      ["15+", "ټکنالوژۍ"],
      ["4+", "د زده‌کړې کلونه"],
      ["8+", "خوښ پیرودونکي"],
    ],
    skills: [
      "فرنټ اېنډ",
      "بېک اېنډ",
      "وسایل او پلاتفورمونه",
      "ډسکټاپ او اپلیکیشنونه",
    ],
    filters: [
      ["all", "ټول"],
      ["php", "PHP"],
      ["wordpress", "WordPress"],
      ["education", "تعلیمي"],
      ["business", "سوداګریز"],
    ],
    projects: [
      [
        "املاک · PHP / MySQL",
        "د رهنما د معاملاتو سیسټم",
        "د املاکو د معاملاتو پلاتفورم چې د ملکیتونو د ثبت، معاملاتو د تعقیب او د معلوماتو د مدیریت لپاره جوړ شوی.",
      ],
      [
        "تعلیمي · PHP / MySQL",
        "د بدخشان پوهنتون آنلاین کتابتون",
        "آنلاین کتابتون سیسټم د کتابونو د ثبت، غړو او امانت مدیریت او د منابعو د لټون لپاره.",
      ],
      [
        "پوهنتونی · PHP / MySQL",
        "د کمپیوټر ساینس پوهنځي وېب‌سایټ او تعلیمي سیسټم",
        "د بدخشان پوهنتون د کمپیوټر ساینس پوهنځي وېب‌سایټ او تعلیمي سیسټم د RTL ملاتړ سره.",
      ],
      [
        "سوداګریز · څوژبنی",
        "د برکت السعي شرکت وېب‌سایټ",
        "د سوپرمارکېټ څوژبنی وېب‌سایټ د محصولاتو مدیریت او د واټس‌اپ له لارې آنلاین فرمایش سره.",
      ],
      [
        "سوداګریز · WordPress",
        "د Safa LTD وېب‌سایټ",
        "د بریتانیا د یوې شرکت لپاره وردپرس وېب‌سایټ چې غالۍ او فرش پلوري او د موبایل پلور او ترمیم هم لري.",
      ],
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
        "د اصلي اړتیاوو او مخاطبینو لپاره ځواب‌ویونکي وېب‌سایټونه او عملي انټرفیسونه جوړول.",
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
        "انټرفیسونه چې په هره پرده ښکلي کار کوي.",
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
    country: "افغانستان",
    projectLink: "ګېټ‌هاب",
    visit: "وېب‌سایټ وګورئ",
  },
};

let activeLanguage = "en";
let activeFilter = "all";
try {
  activeLanguage = localStorage.getItem("portfolio-language") || "en";
} catch (e) {}

const byId = (id) => document.getElementById(id);
const arrow =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const esc = (s) => String(s).replace(/"/g, "&quot;");
const localDigits = (s) =>
  activeLanguage === "en"
    ? String(s)
    : String(s).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
const socialLinks = () =>
  SOCIALS.map(([name, url]) => {
    const ext = url.startsWith("http")
      ? ' target="_blank" rel="noopener noreferrer"'
      : "";
    return `<a href="${url}"${ext} aria-label="${name}">${name}</a>`;
  }).join("");

function projectCard(p, [category, title, description], t) {
  const links =
    (p.live
      ? `<a class="btn-mini primary" href="${p.live}" target="_blank" rel="noopener noreferrer">${t.visit}${arrow}</a>`
      : "") +
    `<a class="btn-mini" href="${GITHUB}" target="_blank" rel="noopener noreferrer">${t.projectLink}${arrow}</a>`;
  return `<article class="project-card reveal" data-categories="${p.cats}">
    <div class="project-media"><img src="${encodeURI(p.img)}" alt="${esc(title)}" loading="lazy" onerror="this.remove()" /><span class="project-badge">${category}</span></div>
    <div class="project-body"><h3>${title}</h3><p>${description}</p>
      <div class="tech-inline">${p.tech.map((x) => `<span>${x}</span>`).join("")}</div>
      <div class="project-links">${links}</div></div></article>`;
}

function renderDynamicContent(t) {
  byId("social-row").innerHTML = socialLinks();
  byId("stats").innerHTML = t.stats
    .map(
      ([n, label]) =>
        `<article class="stat-card"><span class="stat-number" data-count="${n}">0</span><span class="stat-label">${label}</span></article>`,
    )
    .join("");
  byId("skills-grid").innerHTML = SKILL_TOOLS.map(
    ([icon, tools], i) =>
      `<article class="skill-card reveal"><span class="skill-icon">${icon}</span><h3>${t.skills[i]}</h3><div class="tech-list">${tools.map((x) => `<span>${x}</span>`).join("")}</div></article>`,
  ).join("");
  byId("project-filters").innerHTML = t.filters
    .map(
      ([id, label]) =>
        `<button class="filter-button ${id === activeFilter ? "active" : ""}" type="button" data-filter="${id}">${label}</button>`,
    )
    .join("");
  byId("projects-grid").innerHTML = PROJECTS.map((p, i) =>
    projectCard(p, t.projects[i], t),
  ).join("");
  byId("timeline").innerHTML = t.timeline
    .map(
      ([date, title, text]) =>
        `<article class="timeline-item reveal"><div class="timeline-content"><span class="timeline-date">${date}</span><h3>${title}</h3><p>${text}</p></div></article>`,
    )
    .join("");
  byId("services-grid").innerHTML = t.services
    .map(
      ([n, title, text]) =>
        `<article class="service-card reveal"><span class="service-icon">${n}</span><h3>${title}</h3><p>${text}</p></article>`,
    )
    .join("");
  byId("cv-points").innerHTML = t.cv
    .map(
      ([title, text]) =>
        `<div class="cv-point"><span>${title}</span><p>${text}</p></div>`,
    )
    .join("");
  byId("contact-details").innerHTML = `<p>${t.contact}</p>
    <div class="contact-list">
      <div class="contact-item"><i>@</i><div><span>${t.email}</span><a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></div></div>
      <div class="contact-item"><i>◉</i><div><span>${t.location}</span><strong>${t.country}</strong></div></div>
    </div>
    <div class="contact-socials">${socialLinks()}</div>`;
  applyFilter();
}

function setLanguage(lang) {
  activeLanguage = translations[lang] ? lang : "en";
  const t = translations[activeLanguage];
  const rtl = activeLanguage !== "en";
  document.documentElement.lang = activeLanguage;
  document.documentElement.dir = rtl ? "rtl" : "ltr";
  document.body.dir = rtl ? "rtl" : "ltr";
  document.title = t.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", t.meta);
  document
    .querySelector('meta[property="og:title"]')
    .setAttribute("content", t.title);
  document
    .querySelector('meta[property="og:description"]')
    .setAttribute("content", t.meta);
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = t[node.dataset.i18n];
    if (value) node.innerHTML = value;
  });
  document
    .querySelectorAll(".lang-btn")
    .forEach((b) =>
      b.classList.toggle("active", b.dataset.lang === activeLanguage),
    );
  renderDynamicContent(t);
  setupReveals();
  try {
    localStorage.setItem("portfolio-language", activeLanguage);
  } catch (e) {}
}

function applyFilter() {
  document.querySelectorAll(".project-card").forEach((card) => {
    const show =
      activeFilter === "all" ||
      card.dataset.categories.split(" ").includes(activeFilter);
    card.classList.toggle("hidden", !show);
  });
}

function animateNumber(el) {
  const target = el.dataset.count;
  const num = parseInt(target, 10);
  const suffix = target.replace(/\d/g, "");
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / 850, 1);
    el.textContent = localDigits(Math.round(num * (1 - (1 - p) ** 3))) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

let revealObserver;
function setupReveals() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        if (entry.target.id === "stats")
          entry.target.querySelectorAll("[data-count]").forEach(animateNumber);
        revealObserver.unobserve(entry.target);
      }),
    { threshold: 0.1 },
  );
  document
    .querySelectorAll(".reveal, #stats")
    .forEach((el) => revealObserver.observe(el));
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
  try {
    localStorage.setItem("portfolio-theme", selected);
  } catch (e) {}
}

const languageToggle = document.querySelector(".language-toggle");
const languageMenu = document.querySelector(".language-menu");
const closeLanguageMenu = () => {
  languageMenu.hidden = true;
  languageToggle.setAttribute("aria-expanded", "false");
};

document.addEventListener("click", (event) => {
  const lang = event.target.closest(".lang-btn");
  if (lang) {
    setLanguage(lang.dataset.lang);
    closeLanguageMenu();
  } else if (event.target.closest(".language-toggle")) {
    const open = languageMenu.hidden;
    languageMenu.hidden = !open;
    languageToggle.setAttribute("aria-expanded", String(open));
  } else if (!event.target.closest(".language-picker")) {
    closeLanguageMenu();
  }
  const filter = event.target.closest("[data-filter]");
  if (filter) {
    activeFilter = filter.dataset.filter;
    document
      .querySelectorAll("[data-filter]")
      .forEach((b) => b.classList.toggle("active", b === filter));
    applyFilter();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || languageMenu.hidden) return;
  closeLanguageMenu();
  languageToggle.focus();
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
const closeMenu = () => {
  nav.classList.remove("open");
  menu.classList.remove("open");
  menu.setAttribute("aria-expanded", "false");
};
menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.classList.toggle("open", open);
  menu.setAttribute("aria-expanded", String(open));
});
nav.addEventListener("click", (e) => {
  if (e.target.matches("a")) closeMenu();
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 900) closeMenu();
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
  const d = new FormData(form);
  const subject = encodeURIComponent(d.get("subject"));
  const body = encodeURIComponent(
    `${d.get("message")}\n\n— ${d.get("name")}\n${d.get("email")}`,
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  message.textContent = translations[activeLanguage].formSuccess;
});

byId("year").textContent = new Date().getFullYear();
let savedTheme = null;
try {
  savedTheme = localStorage.getItem("portfolio-theme");
} catch (e) {}
setTheme(
  savedTheme ||
    (window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark"),
);
setLanguage(activeLanguage);
