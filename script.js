const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const heroImages = Array.from(document.querySelectorAll(".hero-image"));
const lightbox = document.querySelector("[data-lightbox-modal]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxClose = document.querySelector("[data-lightbox-close]");
const quoteForm = document.querySelector("[data-quote-form]");
const formStatus = document.querySelector("[data-form-status]");
const langToggle = document.querySelector("[data-lang-toggle]");

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.gallery": "Gallery",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "hero.eyebrow": "Gate Manufacturers Auckland",
    "hero.title": "Quality Gates <span>Built to Last</span>",
    "hero.quote": "Get a Quote",
    "hero.services": "Our Services",
    "hero.note": "Locally operated specialists serving Auckland, Waikato and Bay of Plenty.",
    "intro.eyebrow": "Welcome to CIL",
    "intro.title": "Quality gates built around your property.",
    "intro.body1": "CIL designs, fabricates and installs gates that suit the way your entry needs to work. The team handles electric gate systems, aluminium and steel fabrication, driveway access, pedestrian gates and custom projects for residential and commercial sites.",
    "intro.body2": "Based at 5 greenmount dr, the crew works across Auckland and wider nearby regions with a focus on durable materials, practical automation and a clean finish.",
    "intro.link": "Request a free quote",
    "services.eyebrow": "Our Services",
    "services.title": "Gates, fencing, automation and more",
    "service.electric.title": "Electric Gates",
    "service.electric.body": "Automated gate systems for driveways and entries, with dependable motors, remotes and access control.",
    "service.sliding.title": "Sliding or Swing Gates",
    "service.sliding.body": "Practical gate formats matched to your site layout, slope, clearance and daily use.",
    "service.aluminium.title": "Aluminium Gates",
    "service.aluminium.body": "Lightweight, corrosion-resistant gates in louvre, slat, tongue and groove or custom profiles.",
    "service.steel.title": "Steel Gates",
    "service.steel.body": "Strong fabricated steel gates for high-use entries, security, commercial sites and long spans.",
    "service.fabrication.title": "Steel Fabrication",
    "service.fabrication.body": "Frames, posts, brackets and custom metalwork built to fit the project instead of forcing a standard part.",
    "service.custom.title": "Custom Gates",
    "service.custom.body": "Tailored designs for unusual openings, feature entries and properties that need a specific finish.",
    "service.read": "Read More",
    "why.eyebrow": "Why Choose Us",
    "why.title": "Built for Auckland properties and real daily use.",
    "why.body": "The work starts with site conditions, security needs and the look of the property. From there, CIL recommends the right material, gate movement and automation setup so the finished entry feels natural to use.",
    "why.point1.title": "Local Experience",
    "why.point1.body": "Knowledge of Auckland driveways, coastal conditions, mixed terrain and busy access points.",
    "why.point2.title": "Custom Fabrication",
    "why.point2.body": "Gates can be built to suit your measurements, preferred finish and automation requirements.",
    "why.point3.title": "Complete Service",
    "why.point3.body": "Design, manufacture, installation, automation and repairs can be handled by one team.",
    "process.eyebrow": "Our Process",
    "process.title": "Four simple steps from idea to installed gate",
    "process.step1.label": "Step 1",
    "process.step1.title": "Measure",
    "process.step1.body": "We review the opening, grade, access, clearance and power requirements.",
    "process.step2.label": "Step 2",
    "process.step2.title": "Design",
    "process.step2.body": "You choose the gate style, finish, hardware and automation options.",
    "process.step3.label": "Step 3",
    "process.step3.title": "Fabricate",
    "process.step3.body": "The gate is built in aluminium or steel with the correct frame and bracing.",
    "process.step4.label": "Step 4",
    "process.step4.title": "Install",
    "process.step4.body": "The team installs, tests and leaves the entry ready for everyday operation.",
    "gallery.eyebrow": "Our Gallery",
    "gallery.title": "Recent gate styles",
    "gallery.item1": "Horizontal Louvre Gate",
    "gallery.item2": "Vertical Louvre",
    "gallery.item3": "Open Bar Gate",
    "gallery.item4": "Vertical Slat Gate",
    "testimonials.eyebrow": "Testimonials",
    "testimonials.title": "What customers say",
    "testimonials.item1": "Fast response, practical advice and a tidy repair on our electric gate. The whole visit was easy.",
    "testimonials.item2": "Clear quote, helpful recommendations and a great finish. I would recommend the team for gate work.",
    "testimonials.item3": "Efficient service and a result we are pleased with. Clinton and the crew were easy to deal with.",
    "blog.eyebrow": "Latest Blog",
    "blog.title": "Guides for choosing the right gate",
    "blog.item1.cat": "Advice",
    "blog.item1.title": "How to choose the best gate company in Auckland",
    "blog.item1.body": "What to look for in quoting, fabrication quality, installation experience and aftercare.",
    "blog.item2.cat": "Design",
    "blog.item2.title": "The ultimate guide to choosing the perfect gate",
    "blog.item2.body": "A quick guide to materials, colours, privacy levels and driveway gate movement.",
    "blog.item3.cat": "Automation",
    "blog.item3.title": "Why automated gates can change your property",
    "blog.item3.body": "Convenience, security and safer access for busy driveways and commercial entries.",
    "quote.eyebrow": "Need More?",
    "quote.title": "Tell us about your gate project.",
    "quote.body": "Send a few details and the team can come back with practical next steps for your property.",
    "form.name": "Name",
    "form.phone": "Phone",
    "form.service": "Service",
    "form.service.placeholder": "Select a service",
    "form.service.electric": "Electric Gates",
    "form.service.aluminium": "Aluminium Gates",
    "form.service.steel": "Steel Gates",
    "form.service.custom": "Custom Gates",
    "form.service.repairs": "Repairs or Automation",
    "form.message": "Message",
    "form.submit": "Submit Quote Request",
    "footer.body": "Gate design, fabrication, automation and installation from 5 greenmount dr.",
    "footer.touch": "Get in Touch",
    "footer.location": "5 greenmount dr",
    "footer.links": "Quick Links",
    "footer.about": "About Us",
    "footer.contact": "Contact Us",
    "footer.copy": "(c) Henry 2026. All rights reserved.",
    "form.success": "Thanks. Your quote request has been prepared."
  },
  zh: {
    "nav.home": "首页",
    "nav.about": "关于我们",
    "nav.services": "服务",
    "nav.gallery": "案例图库",
    "nav.blog": "博客",
    "nav.contact": "联系",
    "hero.eyebrow": "奥克兰大门制造商",
    "hero.title": "高品质大门 <span>坚固耐用</span>",
    "hero.quote": "获取报价",
    "hero.services": "查看服务",
    "hero.note": "本地运营团队，服务奥克兰、怀卡托和丰盛湾地区。",
    "intro.eyebrow": "欢迎来到 CIL",
    "intro.title": "为您的物业量身打造大门。",
    "intro.body1": "CIL 设计、制造并安装适合不同入口需求的大门。团队可处理电动门系统、铝制与钢制加工、车道入口、人行门以及住宅和商业定制项目。",
    "intro.body2": "我们位于 5 greenmount dr，服务奥克兰及周边地区，注重耐用材料、实用自动化和整洁的完工效果。",
    "intro.link": "申请免费报价",
    "services.eyebrow": "我们的服务",
    "services.title": "大门、围栏、自动化及更多服务",
    "service.electric.title": "电动大门",
    "service.electric.body": "适用于车道和入口的自动化门系统，配备可靠电机、遥控和门禁控制。",
    "service.sliding.title": "滑动门或平开门",
    "service.sliding.body": "根据场地布局、坡度、开合空间和日常使用方式选择合适门型。",
    "service.aluminium.title": "铝制大门",
    "service.aluminium.body": "轻便、防腐蚀，可制作百叶、横条、企口板或其他定制样式。",
    "service.steel.title": "钢制大门",
    "service.steel.body": "适合高频使用入口、安防需求、商业场地和大跨度开口的坚固钢制大门。",
    "service.fabrication.title": "钢结构加工",
    "service.fabrication.body": "框架、立柱、支架和定制金属件按项目需求加工，而不是强行套用标准件。",
    "service.custom.title": "定制大门",
    "service.custom.body": "为特殊开口、特色入口和有特定外观要求的物业提供量身设计。",
    "service.read": "了解更多",
    "why.eyebrow": "为什么选择我们",
    "why.title": "为奥克兰物业和日常使用而打造。",
    "why.body": "项目会先考虑场地条件、安防需求和物业风格，再推荐合适材料、开门方式和自动化方案，让完工后的入口自然好用。",
    "why.point1.title": "本地经验",
    "why.point1.body": "熟悉奥克兰车道、沿海环境、复杂地形和高频出入场景。",
    "why.point2.title": "定制加工",
    "why.point2.body": "可按尺寸、表面颜色和自动化需求定制大门。",
    "why.point3.title": "完整服务",
    "why.point3.body": "设计、制造、安装、自动化和维修可由同一团队完成。",
    "process.eyebrow": "服务流程",
    "process.title": "从想法到安装，只需四个步骤",
    "process.step1.label": "步骤 1",
    "process.step1.title": "测量",
    "process.step1.body": "检查开口、坡度、通行方式、开合空间和供电需求。",
    "process.step2.label": "步骤 2",
    "process.step2.title": "设计",
    "process.step2.body": "选择门型、表面处理、五金和自动化配置。",
    "process.step3.label": "步骤 3",
    "process.step3.title": "制造",
    "process.step3.body": "使用铝材或钢材制作，并配置合适的框架和支撑结构。",
    "process.step4.label": "步骤 4",
    "process.step4.title": "安装",
    "process.step4.body": "团队完成安装、测试，并确保入口可投入日常使用。",
    "gallery.eyebrow": "案例图库",
    "gallery.title": "近期大门样式",
    "gallery.item1": "横向百叶大门",
    "gallery.item2": "竖向百叶大门",
    "gallery.item3": "开放式栏杆门",
    "gallery.item4": "竖条大门",
    "testimonials.eyebrow": "客户评价",
    "testimonials.title": "客户怎么说",
    "testimonials.item1": "响应很快，建议实用，电动门维修也很整洁，整个过程很省心。",
    "testimonials.item2": "报价清楚，建议有帮助，完工效果很好。我愿意推荐他们做大门项目。",
    "testimonials.item3": "服务高效，结果令人满意。Clinton 和团队沟通顺畅、很好合作。",
    "blog.eyebrow": "最新博客",
    "blog.title": "选择合适大门的实用指南",
    "blog.item1.cat": "建议",
    "blog.item1.title": "如何选择奥克兰合适的大门公司",
    "blog.item1.body": "了解报价、制造质量、安装经验和售后服务时需要注意什么。",
    "blog.item2.cat": "设计",
    "blog.item2.title": "选择理想物业大门的完整指南",
    "blog.item2.body": "快速了解材料、颜色、隐私程度和车道大门开合方式。",
    "blog.item3.cat": "自动化",
    "blog.item3.title": "为什么自动门能提升您的物业体验",
    "blog.item3.body": "为繁忙车道和商业入口带来便利性、安全性和更顺畅的通行。",
    "quote.eyebrow": "需要更多信息？",
    "quote.title": "告诉我们您的大门项目。",
    "quote.body": "发送一些基本信息，团队会根据您的物业给出可行的下一步建议。",
    "form.name": "姓名",
    "form.phone": "电话",
    "form.service": "服务类型",
    "form.service.placeholder": "请选择服务",
    "form.service.electric": "电动大门",
    "form.service.aluminium": "铝制大门",
    "form.service.steel": "钢制大门",
    "form.service.custom": "定制大门",
    "form.service.repairs": "维修或自动化",
    "form.message": "留言",
    "form.submit": "提交报价请求",
    "footer.body": "来自 5 greenmount dr 的大门设计、制造、自动化和安装服务。",
    "footer.touch": "联系我们",
    "footer.location": "5 greenmount dr",
    "footer.links": "快速链接",
    "footer.about": "关于我们",
    "footer.contact": "联系我们",
    "footer.copy": "(c) Henry 2026. 版权所有。",
    "form.success": "谢谢，您的报价请求已准备提交。"
  }
};

const requestedLang = new URLSearchParams(window.location.search).get("lang");
let currentLang = translations[requestedLang] ? requestedLang : localStorage.getItem("siteLang") || "en";

function applyLanguage(lang) {
  currentLang = translations[lang] ? lang : "en";
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  document.body.classList.toggle("lang-zh", currentLang === "zh");
  document.title = currentLang === "zh" ? "奥克兰大门 | CIL" : "Gates Auckland | CIL";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = translations[currentLang][key];
    if (value) {
      element.innerHTML = value;
    }
  });

  langToggle.textContent = currentLang === "zh" ? "EN" : "中文";
  langToggle.setAttribute("aria-label", currentLang === "zh" ? "Switch to English" : "切换到中文");
  localStorage.setItem("siteLang", currentLang);
}

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

langToggle.addEventListener("click", () => {
  applyLanguage(currentLang === "en" ? "zh" : "en");
});

let activeHero = 0;

setInterval(() => {
  heroImages[activeHero].classList.remove("is-active");
  activeHero = (activeHero + 1) % heroImages.length;
  heroImages[activeHero].classList.add("is-active");
}, 5200);

document.querySelectorAll("[data-lightbox]").forEach((button) => {
  button.addEventListener("click", () => {
    lightboxImage.src = button.dataset.lightbox;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    lightboxClose.focus();
  });
});

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.src = "";
  document.body.style.overflow = "";
}

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.hidden) {
    closeLightbox();
  }
});

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = translations[currentLang]["form.success"];
  quoteForm.reset();
});

applyLanguage(currentLang);
