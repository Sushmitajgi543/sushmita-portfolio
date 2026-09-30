import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Mail,
  Moon,
  Sun,
  Download,
  Sparkles,
  Code2,
  BrainCircuit,
  Smartphone,
  ExternalLink,
  Menu,
  X,
  CheckCircle2,
  Cloud,
  Database,
  Layers,
  Briefcase,
  GraduationCap,
  ChevronDown,
  Server,
} from "lucide-react";
import "./styles.css";

const GithubIcon = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
  </svg>
);

const LinkedinIcon = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
);

const projects = [
  {
    name: "ChargeSafe",
    tag: "EV Infrastructure · Product Engineering",
    desc: "A field-assessment platform for EV sites with mobile surveying, admin workflows, customer portals and automated report review.",
    tech: ["React Native", "Expo", "Next.js", "Supabase", "AWS", "AI"],
    impact: "Production platform",
    accent: "lime",
    image: "/chargesafe-icon.png",
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.safercharging.chargesafe",
      ios: "https://apps.apple.com/in/app/chargesafe-surveyor/id6791573848",
    },
  },
  {
    name: "YouSmart AI",
    tag: "AI Product · Career Intelligence",
    desc: "Cross-platform Chrome extension and dashboard enabling students, job seekers and professionals to build resumes, check ATS scores and run AI-powered mock interviews with OpenAI and Python integrations. Led Phase 3 as Team Lead, directing advanced AI features for mock interviews and ATS optimization through to production rollout.",
    tech: ["React", "Node.js", "MongoDB", "OpenAI", "Python", "Chrome Extension"],
    impact: "Team Lead · Phase 3",
    accent: "violet",
    image: "/yousmart-logo.png",
    links: {
      chrome:
        "https://chromewebstore.google.com/detail/dnkngomonbiblcjdgcopibalibcbfobe?utm_source=item-share-cb",
    },
  },
  {
    name: "Nexiun",
    tag: "Social · AI · Mobile",
    desc: "AI-driven social and dating platform that blends real-world image editing with social discovery. Led end-to-end development as Team Lead — architecture, backend performance optimization, third-party integrations (CometChat, Mailgun, Banuba editor), code reviews and release management.",
    tech: ["React Native", "Node.js", "MongoDB", "CometChat", "Banuba", "Mailgun"],
    impact: "Team Lead · 20K+ users",
    accent: "cyan",
    image: "/nexiun-logo.png",
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.nexiunplatforms.nexiun&pcampaignid=web_share",
      ios: "https://apps.apple.com/in/app/nexiun-dating-app-friends/id6740975219",
    },
  },
  {
    name: "Kisan Grow",
    tag: "AgriTech · Full Stack",
    desc: "Full-stack mobile app and admin panel built with React Native and Node.js, giving farmers access to agricultural content across 9 Indian languages to improve rural accessibility and engagement.",
    tech: ["React Native", "Node.js", "Admin Panel", "i18n"],
    impact: "9+ languages",
    accent: "orange",
    image: "/kisangrow-icon.png",
    links: {
      android:
        "https://play.google.com/store/apps/details?id=ai.rfis.content&pcampaignid=web_share",
    },
  },
  {
    name: "Machli",
    tag: "Weather · Accessibility",
    desc: "Weather forecasting app for fishermen — resolved API integration issues and optimized real-time updates across 9 Indian languages for safer, more reliable sea navigation.",
    tech: ["React Native", "JavaScript", "Weather APIs", "i18n"],
    impact: "9 languages",
    accent: "lime",
    image: "/machli-icon.png",
    links: {
      android: "https://play.google.com/store/search?q=machli&c=apps&hl=en_IN",
    },
    caseStudy: [
      {
        challenge: "Legacy code slowed down development",
        solution: "Rewrote modules with updated libraries",
        result: "50% faster builds and no blockers",
      },
      {
        challenge: "No reliable sea distress alerts",
        solution: "Integrated INCOIS real-time safety data",
        result: "Fishermen receive 90% accurate warnings",
      },
      {
        challenge: "UI too complex for low-tech users",
        solution: "Designed ultra-minimal, icon-first interface",
        result: "95% task success across user tests",
      },
      {
        challenge: "Limited language and audio support",
        solution: "Enabled multi-language with text-to-speech",
        result: "60% boost in rural user retention",
      },
    ],
  },
  {
    name: "ThreeOH",
    tag: "Backend · Media",
    desc: "Backend services integrating Spotify and YouTube data scraping to enrich the user experience, with MySQL-backed data management via Sequelize ORM.",
    tech: ["Node.js", "Express.js", "Sequelize", "MySQL"],
    impact: "Backend Developer",
    accent: "violet",
  },
  {
    name: "Doctor Alliance",
    tag: "HealthTech · Compliance",
    desc: "WAVE (Workflow Automation Visualization & Enhancement) is an analytics and process automation tool built for Doctor Alliance, a Texas-based healthcare SaaS provider — a HIPAA-compliant platform integrating NPI registry data retrieval, engineered for compliance and scalability.",
    tech: ["React.js", "Node.js", "NPI Registry", "HIPAA", "Cron Jobs"],
    impact: "6-month engagement · Team of 2",
    accent: "cyan",
    image: "/doctoralliance-logo.png",
    meta: {
      Client: "Doctor Alliance",
      Location: "Dallas, Texas",
      Industry: "Healthcare",
      Duration: "6 months",
      "Team Size": "2",
    },
    video:
      "https://new-website-onelab.s3.ap-south-1.amazonaws.com/videos/Doctor_Alliance_PRO.mp4",
    caseStudy: [
      {
        challenge: "No visibility across internal workflows",
        solution: "Built end-to-end dashboards for ops teams",
        result: "Reduced manual dependency and task delays",
      },
      {
        challenge: "Lacked clear UX and product structure",
        solution: "Designed scalable architecture and clean UI",
        result: "Faster onboarding and improved service delivery",
      },
      {
        challenge: "Real-time sync needed across systems",
        solution: "Used cron jobs and registry bots",
        result: "Enabled higher volume handling efficiently",
      },
      {
        challenge: "Constant logic and scope changes",
        solution: "Held weekly syncs to align builds",
        result: "Delivered adaptable features with stakeholder trust",
      },
    ],
  },
  {
    name: "Runway",
    tag: "PWA · Admin Tools",
    desc: "Full-stack Progressive Web App with an AdminJS-powered admin panel that streamlines data operations and user management.",
    tech: ["React.js", "MongoDB", "AdminJS", "PWA"],
    impact: "Full Stack",
    accent: "orange",
    image: "/runway-logo.png",
    links: {
      web: "https://runway.org.in/",
    },
  },
  {
    name: "SuperBetter",
    tag: "Mental Health · Gaming",
    desc: "Mental health gaming web app — contributed to the interface and core functionality to support user engagement and wellbeing.",
    tech: ["React.js", "JavaScript"],
    impact: "Contributor",
    accent: "lime",
    image: "/superbetter-logo.png",
    links: {
      web: "https://superbetter.com/",
    },
  },
  {
    name: "Novelty Wealth",
    tag: "FinTech · Wealth Management",
    desc: "AI-powered portfolio and wealth management platform designed to simplify complex financial decisions for Indian professionals and families. Converted the existing React.js web app into a full mobile app using React Native (Expo) — solo, in one month.",
    tech: ["React Native", "Expo", "React.js", "AI"],
    impact: "Solo · 1 month",
    accent: "violet",
    image: "/noveltywealth-logo.png",
    links: {
      android:
        "https://play.google.com/store/apps/details?id=in.noveltywealth.app&pcampaignid=web_share",
    },
  },
];
const skillGroups = [
  {
    label: "Frontend & Languages",
    icon: Code2,
    items: [
      { name: "React", level: "Advanced" },
      { name: "Redux Toolkit", level: "Advanced" },
      { name: "JavaScript / TypeScript", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Chakra UI", level: "Intermediate" },
      { name: "HTML / CSS", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
    ],
  },
  {
    label: "Backend & APIs",
    icon: Database,
    items: [
      { name: "Node.js / Express.js", level: "Advanced" },
      { name: "NestJS", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "REST APIs", level: "Advanced" },
      { name: "PostgreSQL / MySQL", level: "Intermediate" },
      { name: "FastAPI", level: "Intermediate" },
      { name: "Redis", level: "Intermediate" },
      { name: "Microservices", level: "Intermediate" },
    ],
  },
  {
    label: "GenAI & Mobile",
    icon: BrainCircuit,
    items: [
      { name: "LangChain / RAG Pipeline", level: "Advanced" },
      { name: "OpenAI / Gemini APIs", level: "Advanced" },
      { name: "Vector Databases", level: "Intermediate" },
      { name: "Prompt Engineering", level: "Advanced" },
      { name: "React Native", level: "Advanced" },
      { name: "PaddleOCR / Groq", level: "Intermediate" },
      { name: "n8n Automation", level: "Intermediate" },
      { name: "ElevenLabs", level: "Intermediate" },
    ],
  },
  {
    label: "Cloud, DevOps & Core",
    icon: Cloud,
    items: [
      { name: "AWS (EC2, S3, RDS, Cognito)", level: "Advanced" },
      { name: "Docker", level: "Advanced" },
      { name: "Kubernetes", level: "Intermediate" },
      { name: "CI/CD", level: "Intermediate" },
      { name: "Git / GitHub", level: "Advanced" },
      { name: "System Design", level: "Advanced" },
      { name: "Agile / Scrum", level: "Advanced" },
      { name: "Postman", level: "Advanced" },
    ],
  },
];

const education = [
  {
    school: "ITM University, Gwalior",
    degree: "MCA (Gold Medalist)",
    score: "91.1%",
    period: "2020 — 2022",
  },
  {
    school: "Jain College, Jamshedpur",
    degree: "BCA",
    score: "84.87%",
    period: "2016 — 2019",
  },
];

const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    desc: "End-to-end web and mobile products with React, React Native, Node.js and TypeScript.",
    tagline:
      "4 years of experience building scalable, production-grade web and mobile applications.",
    points: [
      "End-to-end web & mobile application development",
      "Scalable REST APIs & microservices architecture",
      "Secure authentication (JWT/OAuth2) & payment integrations",
      "Progressive Web Apps (PWA) with offline capabilities",
    ],
  },
  {
    icon: Server,
    title: "Cloud & DevOps",
    desc: "AWS-native deployments, Docker/Kubernetes, CI/CD pipelines and secure infrastructure.",
    tagline: "Cloud-native deployments and infrastructure management on AWS.",
    points: [
      "AWS infrastructure (EC2, EKS, S3, CloudFront, ECS, ALB)",
      "Docker & Kubernetes containerized deployments",
      "CI/CD pipelines & production release management",
      "Observability with Grafana, Prometheus & Firebase Crashlytics",
    ],
  },
  {
    icon: BrainCircuit,
    title: "GenAI & Integrations",
    desc: "RAG pipelines, LLM integrations, OCR-to-LLM document intelligence and AI workflow automation.",
    tagline: "AI-powered features and third-party service integrations.",
    points: [
      "RAG pipelines with LLM & vector database integration",
      "OpenAI API integration with streaming responses",
      "Payment gateway (Cashfree) & WhatsApp Business API",
      "Event-driven processing with Redis queues & BullMQ",
    ],
  },
];

function App() {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const [qualTab, setQualTab] = useState("experience");
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);
  useEffect(() => {
    const on = () => {
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.88)
          el.classList.add("visible");
      });
    };
    window.addEventListener("scroll", on);
    on();
    return () => window.removeEventListener("scroll", on);
  }, []);
  const nav = ["About", "Skills", "Services", "Work", "Journey", "Contact"];
  return (
    <div className="site">
      <header className="nav">
        <a className="brand" href="#top">
          SK<span>.</span>
        </a>
        <nav>
          {nav.map((n) => (
            <a key={n} href={"#" + n.toLowerCase()}>
              {n}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="mini-cta" href="#contact">
            Let's talk <ArrowUpRight size={15} />
          </a>
          <button className="menu-btn" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      {open && (
        <div className="mobile-nav">
          {nav.map((n) => (
            <a
              key={n}
              onClick={() => setOpen(false)}
              href={"#" + n.toLowerCase()}
            >
              {n}
            </a>
          ))}
        </div>
      )}
      <main id="top">
        <section className="hero">
          <div className="hero-rail" data-reveal>
            <a
              href="https://www.linkedin.com/in/sushmita-kumari543"
              target="_blank"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={17} />
            </a>
            <a
              href="https://github.com/Sushmitajgi543"
              target="_blank"
              aria-label="GitHub"
            >
              <GithubIcon size={17} />
            </a>
            <a href="mailto:sushmitajgi543@gmail.com" aria-label="Email">
              <Mail size={17} />
            </a>
            <a href="tel:+919060988413" aria-label="Phone">
              <Smartphone size={17} />
            </a>
          </div>
          <div className="hero-copy" data-reveal>
            <div className="eyebrow">
              <span className="pulse"></span> Available for new opportunities ·
              India
            </div>
            <h1>
              SUSHMITA KUMARI <span className="wave">👋</span>
            </h1>
            <div className="role-line">
              <i></i> Full Stack &amp; GenAI Engineer
            </div>
            <p className="hero-text">
              Full Stack Engineer with 4+ years of experience delivering
              production-grade applications and LLM systems. Expert in RAG,
              prompt engineering, OCR-to-LLM document intelligence and scalable
              backend architectures across web, mobile and AWS cloud-native
              platforms.
            </p>
            <div className="hero-actions">
              <a className="say-hello" href="#contact">
                Say Hello <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="hero-art" data-reveal>
            <div className="orb orb-a"></div>
            <div className="orb orb-b"></div>
            <div className="blob-photo">
              <img src="/cv-image.png" alt="Sushmita Kumari" />
            </div>
          </div>
        </section>
        <a className="scroll-down" href="#about">
          <ChevronDown size={15} /> Scroll Down
        </a>
        <section className="marquee">
          <div>
            FULL STACK <span>✦</span> AI PRODUCTS <span>✦</span> MOBILE{" "}
            <span>✦</span> PRODUCT THINKING <span>✦</span> FULL STACK{" "}
            <span>✦</span> AI PRODUCTS <span>✦</span>
          </div>
        </section>
        <section id="about" className="section about">
          <div className="section-head" data-reveal>
            <div>
              <span className="kicker">01 / ABOUT ME</span>
              <h2>
                Engineer by craft. <em>Builder by instinct.</em>
              </h2>
            </div>
          </div>
          <div className="about-card" data-reveal>
            <div className="portrait">
              <img
                src="/about-photo.jpg"
                alt="Sushmita Kumari"
                className="portrait-img"
              />
              <span>CURIOUS BY DEFAULT</span>
            </div>
            <div className="about-copy">
              <div className="about-stats">
                <div>
                  <Briefcase size={18} />
                  <strong>4+ Years</strong>
                  <span>Working</span>
                </div>
                <div>
                  <CheckCircle2 size={18} />
                  <strong>20K+ Users</strong>
                  <span>Served</span>
                </div>
                <div>
                  <Sparkles size={18} />
                  <strong>Online</strong>
                  <span>24/7 Support</span>
                </div>
              </div>
              <p>
                I like sitting at the intersection of engineering, product and
                AI. I care about the details users notice — and the
                architecture they don't.
              </p>
              <p>
                My current focus is building AI-native products where
                thoughtful UX, strong engineering and automation work together
                instead of living in separate worlds.
              </p>
              <a
                className="say-hello outline"
                href="/Sushmita-Kumari-Resume.pdf"
                download="Sushmita-Kumari-Resume.pdf"
              >
                Download Resume <Download size={16} />
              </a>
            </div>
          </div>
        </section>
        <section id="skills" className="section skills-section">
          <div className="section-head" data-reveal>
            <div>
              <span className="kicker">02 / TOOLKIT</span>
              <h2>
                My stack is a <em>means, not the goal.</em>
              </h2>
            </div>
            <p>
              I choose technology around the problem — with a bias toward
              maintainability, speed and a great user experience.
            </p>
          </div>
          <div className="skill-groups" data-reveal>
            {skillGroups.map((g) => {
              const Icon = g.icon || Layers;
              return (
                <div className="skill-group" key={g.label}>
                  <div className="skill-group-head">
                    <span className="skill-group-icon">
                      <Icon size={16} />
                    </span>
                    <h4>{g.label}</h4>
                  </div>
                  <div className="skill-list">
                    {g.items.map((s) => (
                      <div className="skill-item" key={s.name}>
                        <CheckCircle2 size={14} />
                        <div>
                          <b>{s.name}</b>
                          <span>{s.level}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="focus-bar" data-reveal>
            <Sparkles size={15} />
            <span>Currently focused on GenAI product engineering</span>
            <b>OpenAI · Gemini · Groq · LangChain · RAG · n8n</b>
          </div>
        </section>
        <section id="services" className="section">
          <div className="section-head" data-reveal>
            <div>
              <span className="kicker">03 / SERVICES</span>
              <h2>
                What I <em>offer.</em>
              </h2>
            </div>
          </div>
          <div className="services-grid" data-reveal>
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div className="service-card" key={s.title}>
                  <span className="service-icon">
                    <Icon size={20} />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <button onClick={() => setActiveService(s)}>
                    View More <ArrowUpRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        </section>
        <section id="work" className="section">
          <div className="section-head" data-reveal>
            <div>
              <span className="kicker">04 / SELECTED WORK</span>
              <h2>
                Products I've helped <em>bring to life.</em>
              </h2>
            </div>
            <p>
              From mobile apps to AI workflows, I enjoy owning the journey from
              idea to shipped product.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => (
              <article
                className={"project " + p.accent}
                data-reveal
                key={p.name}
                onClick={() => setActive(p)}
              >
                <div className="project-visual">
                  <div className="visual-label">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.name}
                      className="visual-image"
                    />
                  ) : (
                    <div className="visual-window">
                      <div className="fake-top">
                        <b></b>
                        <b></b>
                        <b></b>
                      </div>
                      <div className="fake-body">
                        <div className="fake-side"></div>
                        <div className="fake-main">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="visual-glow"></div>
                </div>
                <div className="project-info">
                  <span>{p.tag}</span>
                  <h3>
                    {p.name} <ArrowUpRight size={20} />
                  </h3>
                  <p>{p.desc}</p>
                  <div className="tags">
                    {p.tech.map((t) => (
                      <i key={t}>{t}</i>
                    ))}
                  </div>
                  <small>
                    <CheckCircle2 size={14} />
                    {p.impact}
                  </small>
                  {p.links && (
                    <div className="store-links">
                      {p.links.android && (
                        <a
                          href={p.links.android}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Play Store <ExternalLink size={12} />
                        </a>
                      )}
                      {p.links.ios && (
                        <a
                          href={p.links.ios}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          App Store <ExternalLink size={12} />
                        </a>
                      )}
                      {p.links.chrome && (
                        <a
                          href={p.links.chrome}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Chrome Extension <ExternalLink size={12} />
                        </a>
                      )}
                      {p.links.web && (
                        <a
                          href={p.links.web}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Visit Site <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="journey" className="section experience">
          <div className="section-head" data-reveal>
            <div>
              <span className="kicker">05 / QUALIFICATION</span>
              <h2>
                My personal <em>journey.</em>
              </h2>
            </div>
          </div>
          <div className="qual-tabs" data-reveal>
            <button
              className={qualTab === "experience" ? "active" : ""}
              onClick={() => setQualTab("experience")}
            >
              <Briefcase size={15} /> Experience
            </button>
            <button
              className={qualTab === "education" ? "active" : ""}
              onClick={() => setQualTab("education")}
            >
              <GraduationCap size={15} /> Education
            </button>
          </div>
          {qualTab === "experience" ? (
            <div className="timeline" data-reveal>
              <div className="role">
                <div className="role-dot"></div>
                <div className="role-main">
                  <div className="role-top">
                    <div>
                      <h3>SDE II · OneLab Ventures</h3>
                      <span>Jan 2023 — Present · Pune, India</span>
                    </div>
                    <b>GenAI Full Stack Engineer</b>
                  </div>
                  <p>
                    Designed scalable full-stack applications with React.js,
                    React Native, Node.js and TypeScript for thousands of
                    active users; built RESTful APIs with Express.js and
                    NestJS (~30% faster response times). Shipped ATS resume
                    scoring and mock-interview AI features with OpenAI and
                    Gemini APIs, an OCR-to-LLM document intelligence pipeline
                    (PaddleOCR + Groq-hosted LLMs), n8n workflow automations
                    and ElevenLabs voice features. Deployed on AWS (EC2, S3,
                    RDS, SES, Cognito, Amplify) with Docker, including payment
                    gateway integration and Secrets Manager credential
                    management.
                  </p>
                  <div className="role-points">
                    <span>React / React Native</span>
                    <span>Node / TypeScript</span>
                    <span>AWS / Docker</span>
                    <span>RAG / OCR / LLMs</span>
                  </div>
                </div>
              </div>
              <div className="role">
                <div className="role-dot"></div>
                <div className="role-main">
                  <div className="role-top">
                    <div>
                      <h3>Software Developer · HIE-HQ</h3>
                      <span>Oct 2022 — Dec 2022 · Noida, India</span>
                    </div>
                    <b>Web · React.js</b>
                  </div>
                  <p>
                    Built performance-focused web applications with React.js,
                    ensuring high responsiveness and smooth interactions, and
                    engineered reusable, modular UI components that
                    accelerated the team's development velocity.
                  </p>
                </div>
              </div>
              <div className="role">
                <div className="role-dot"></div>
                <div className="role-main">
                  <div className="role-top">
                    <div>
                      <h3>Junior Web Developer · Logion Solutions</h3>
                      <span>May 2022 — Sep 2022 · Ahmedabad, India</span>
                    </div>
                    <b>Web · Client Delivery</b>
                  </div>
                  <p>
                    Delivered 7+ client projects including React.js
                    applications and fully responsive web platforms on
                    schedule, applying modern frontend practices to elevate UX
                    and interface quality.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="timeline" data-reveal>
              {education.map((e) => (
                <div className="role" key={e.school}>
                  <div className="role-dot"></div>
                  <div className="role-main">
                    <div className="role-top">
                      <div>
                        <h3>{e.degree}</h3>
                        <span>{e.period}</span>
                      </div>
                      <b>{e.score}</b>
                    </div>
                    <p>{e.school}</p>
                  </div>
                </div>
              ))}
              <div className="role">
                <div className="role-dot"></div>
                <div className="role-main">
                  <div className="role-top">
                    <div>
                      <h3>Product Management with Gen &amp; Agentic AI</h3>
                      <span>Pursuing</span>
                    </div>
                    <b>BITSOM</b>
                  </div>
                  <p>
                    Certifications: Python for Machine Learning (Great
                    Learning), Python Basic (HackerRank).
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>
        <section id="contact" className="contact">
          <div className="contact-inner" data-reveal>
            <span className="kicker">06 / CONTACT</span>
            <h2>
              Have a product in mind?
              <br />
              <em>Let's build it.</em>
            </h2>
            <p>
              I'm open to Full Stack, AI Engineer, React / React Native and
              product-focused opportunities.
            </p>
            <div className="contact-methods">
              <a
                className="contact-card"
                href="mailto:sushmitajgi543@gmail.com"
              >
                <Mail size={18} />
                <span>Email</span>
                <strong>sushmitajgi543@gmail.com</strong>
              </a>
              <a className="contact-card" href="tel:+919060988413">
                <Smartphone size={18} />
                <span>Phone</span>
                <strong>+91-9060988413</strong>
              </a>
              <a
                className="contact-card"
                href="https://www.linkedin.com/in/sushmita-kumari543"
                target="_blank"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
                <strong>sushmita-kumari543</strong>
              </a>
              <a
                className="contact-card"
                href="https://github.com/Sushmitajgi543"
                target="_blank"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
                <strong>Sushmitajgi543</strong>
              </a>
            </div>
            <div className="contact-bottom">
              <span>© 2026 Sushmita Kumari</span>
              <span>Designed & built with curiosity ✦</span>
            </div>
          </div>
        </section>
      </main>
      {active && (
        <div className="modal" onClick={() => setActive(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActive(null)} className="close">
              <X />
            </button>
            <span className="kicker">PROJECT</span>
            <h2>{active.name}</h2>
            <p>{active.desc}</p>
            {active.meta && (
              <div className="modal-meta">
                {Object.entries(active.meta).map(([k, v]) => (
                  <div key={k}>
                    <span>{k}</span>
                    <b>{v}</b>
                  </div>
                ))}
              </div>
            )}
            <div className="tags">
              {active.tech.map((t) => (
                <i key={t}>{t}</i>
              ))}
            </div>
            {active.caseStudy && (
              <div className="case-study">
                <h4>Challenges → Solutions → Results</h4>
                {active.caseStudy.map((c, i) => (
                  <div className="case-row" key={i}>
                    <div>
                      <span>Challenge {String(i + 1).padStart(2, "0")}</span>
                      <p>{c.challenge}</p>
                    </div>
                    <div>
                      <span>Solution</span>
                      <p>{c.solution}</p>
                    </div>
                    <div>
                      <span>Result</span>
                      <p>{c.result}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {active.video && (
              <video
                className="modal-video"
                src={active.video}
                controls
                preload="none"
              />
            )}
            {active.links && (
              <div className="modal-links">
                {active.links.android && (
                  <a
                    className="secondary"
                    href={active.links.android}
                    target="_blank"
                  >
                    Play Store <ExternalLink size={15} />
                  </a>
                )}
                {active.links.ios && (
                  <a
                    className="secondary"
                    href={active.links.ios}
                    target="_blank"
                  >
                    App Store <ExternalLink size={15} />
                  </a>
                )}
                {active.links.chrome && (
                  <a
                    className="secondary"
                    href={active.links.chrome}
                    target="_blank"
                  >
                    Chrome Extension <ExternalLink size={15} />
                  </a>
                )}
                {active.links.web && (
                  <a
                    className="secondary"
                    href={active.links.web}
                    target="_blank"
                  >
                    Visit Site <ExternalLink size={15} />
                  </a>
                )}
              </div>
            )}
            <a
              className="primary"
              href="#contact"
              onClick={() => setActive(null)}
            >
              Discuss a similar project <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      )}
      {activeService && (
        <div className="modal" onClick={() => setActiveService(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveService(null)}
              className="close"
            >
              <X />
            </button>
            <span className="kicker">SERVICE</span>
            <h2>{activeService.title}</h2>
            <p>{activeService.tagline}</p>
            <ul className="modal-points">
              {activeService.points.map((pt) => (
                <li key={pt}>
                  <CheckCircle2 size={15} />
                  {pt}
                </li>
              ))}
            </ul>
            <a
              className="primary"
              href="#contact"
              onClick={() => setActiveService(null)}
            >
              Discuss a project <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
