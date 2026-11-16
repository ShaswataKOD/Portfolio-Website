// Paste the contents of Portfolio.jsx from the code editor here
// export default function App() {
//   return <div>Replace src/App.jsx with Portfolio.jsx</div>;
// }


import React, { useState, useEffect, useRef } from 'react';
import {
  Terminal,
  Code2,
  Cpu,
  Briefcase,
  GraduationCap,
  Award,
  Github,
  Linkedin,
  Mail,
  Phone,
  Copy,
  Check,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Layers,
  Coffee,
  MapPin,
  FolderGit2,
  Trophy,
  X,
  ChevronRight,
  Zap,
  ShieldCheck,
  BrainCircuit,
  Menu,
  Database,
  Server,
  GitCommit,
  Bell,
  Cloud,
  LineChart,
  Download,
  Loader2
} from 'lucide-react';

/**
 * ============================================================================
 * EXECUTIVE SWISS EDITORIAL PORTFOLIO CONFIGURATION
 * Curated from SWE Resume (Internship, Skills, RAG/PM Projects, Achievements)
 * & TPI CV (Twitter Sentiment Analysis NLP Pipeline)
 * ============================================================================
 */
const PROFILE_DATA = {
  brandTitle: 'SHASWATA.DEV',
  fullName: 'Shaswata Biswas',
  availability: 'Available for Software Engineering, AI & Data Science Roles',
  eyebrow: 'SOFTWARE ENGINEER  •  APPLIED AI & DATA SCIENCE',
  headlinePrefix: 'Building resilient ',
  headlineHighlight: 'full-stack systems',
  headlineSuffix: ' & intelligent AI architectures.',
  bio: 'Final-year Computer Science undergraduate bridging full-stack web engineering with applied machine learning. Specialized in scalable backend APIs, semantic vector retrieval, and reliable production pipelines.',
  email: 'shaswatabiswas707@gmail.com',
  phone: '8336099555',
  githubUrl: 'https://github.com/ShaswataKOD',
  linkedinUrl: 'https://linkedin.com/in/shaswata-biswas-1a6837230',
  leetcodeUrl: 'https://leetcode.com/u/Shaswata_01/',
  location: 'Kolkata, West Bengal',
  quickStats: [
    { label: 'LeetCode Solved', value: '400+', sub: 'DSA & Algorithms', icon: Code2 },
    { label: 'B.Tech CGPA', value: '8.19', sub: 'Out of 10.0', icon: GraduationCap },
    { label: 'AI & RAG Systems', value: '384-Dim', sub: 'MiniLM + ChromaDB', icon: Sparkles },
    { label: 'NLP Dataset', value: '30K+', sub: 'Tweets @ 78% Acc', icon: BrainCircuit },
  ],
};

const EXPERIENCE_PRIMARY = {
  role: 'Software Engineering Intern',
  company: 'Itobuz Technologies',
  period: 'SEP 2025 — JAN 2026',
  location: 'Kolkata, West Bengal',
  summary:
    'Contributed across full-stack architecture, cloud integrations, and codebase workflows for enterprise software applications.',
  pillars: [
    {
      title: 'Analytics & Real-Time UI',
      detail:
        'Built an interactive analytics dashboard with React and Tailwind CSS tracking daily sales, order frequency, and operational warehouse metrics.',
      icon: LineChart,
    },
    {
      title: 'Auth & Multi-Channel Alerts',
      detail:
        'Engineered JWT authentication with OTP user verification alongside automated email and push notification delivery channels.',
      icon: Bell,
    },
    {
      title: 'Cloud Storage & DevOps Hygiene',
      detail:
        'Integrated Amazon S3 bucket storage for application media and enforced commit quality via Husky and Commitlint pre-commit hooks.',
      icon: Cloud,
    },
    {
      title: 'Codebase Modernization & QA',
      detail:
        'Contributed to large-scale codebase refactoring and partnered with cross-functional teams to resolve production frontend issues.',
      icon: GitCommit,
    },
  ],
  tags: [
    'React.js',
    'JavaScript',
    'Node.js',
    'Tailwind CSS',
    'JWT + OTP',
    'Amazon S3',
    'Husky',
    'Commitlint',
  ],
};

const PROJECTS = [
  {
    id: 'proj-rag',
    title: 'RAG-Based Document Chat Application',
    period: '2026',
    badge: 'GENERATIVE AI & BACKEND',
    category: 'AI & Data Science',
    oneLiner:
      'Retrieval-Augmented Generation pipeline enabling natural-language Q&A over PDFs using 384-dim MiniLM embeddings, Ollama, ChromaDB, and FastAPI.',
    description:
      'An end-to-end Retrieval-Augmented Generation (RAG) system designed so users can query complex PDF documents conversationally without repeated manual uploads or context loss.',
    architecture: [
      'Implemented PDF text extraction and recursive character chunking (1,000-character chunks with 200-character overlap) to preserve semantic boundaries.',
      'Integrated 384-dimensional MiniLM embeddings via Ollama and ChromaDB vector storage for fast cosine-similarity semantic retrieval.',
      'Built a modular Python FastAPI backend paired with MongoDB for persistent document metadata and multi-turn conversation history.',
      'Designed context-injection prompts that ground LLM responses strictly in retrieved document passages.',
    ],
    metrics: '384-Dim MiniLM • 1K-Char / 200-Overlap Chunks • FastAPI + ChromaDB',
    tags: ['Python', 'FastAPI', 'Ollama', 'ChromaDB', 'MiniLM', 'MongoDB'],
    github: 'https://github.com/ShaswataKOD',
  },
  {
    id: 'proj-twitter',
    title: 'Twitter Sentiment Analysis',
    period: 'JUL 2025 — AUG 2025',
    badge: 'NLP & MACHINE LEARNING',
    category: 'AI & Data Science',
    oneLiner:
      'Supervised NLP pipeline classifying 30,000+ tweets at 78% accuracy using TF-IDF, Word2Vec deep encoders, Stratified Sampling, and GridSearchCV.',
    description:
      'A high-throughput natural language processing and sentiment classification pipeline engineered to handle noisy social text and severe class imbalance.',
    architecture: [
      'Developed a Logistic Regression classifier in Python leveraging TF-IDF features to categorize 30K+ tweets with 78% validation accuracy.',
      'Extracted dense semantic text representations using a Word2Vec deep-learning encoder alongside custom NLTK stemming preprocessing.',
      'Applied Stratified Sampling to eliminate class imbalance bias and tuned hyperparameters systematically with GridSearchCV.',
    ],
    metrics: '78% Accuracy • 30K+ Tweets • TF-IDF + Word2Vec + GridSearchCV',
    tags: ['Python', 'Scikit-Learn', 'Word2Vec', 'NLTK', 'Pandas', 'NumPy'],
    github: 'https://github.com/ShaswataKOD',
  },
  {
    id: 'proj-pm',
    title: 'Project Management WebApp',
    period: '2025',
    badge: 'FULL-STACK MERN',
    category: 'Full-Stack',
    oneLiner:
      'Collaborative team workspace built in a 3-developer squad featuring JWT-secured REST CRUD APIs and responsive Tailwind dashboard components.',
    description:
      'A full-stack project and task orchestration platform built collaboratively by a 3-person engineering team for structured sprint execution.',
    architecture: [
      'Architected the Node.js, Express, and MongoDB backend providing full CRUD REST endpoints for projects, tasks, and status workflows.',
      'Implemented stateless JWT authentication middleware to protect workspace routes and user sessions.',
      'Engineered responsive UI primitives using HTML and Tailwind CSS, including interactive modals, dashboard task cards, and sidebar navigation.',
    ],
    metrics: '3-Engineer Team • JWT Auth • Express + MongoDB CRUD',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'HTML'],
    github: 'https://github.com/ShaswataKOD',
  },
];

const SKILL_GROUPS = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['JavaScript', 'Python', 'HTML', 'CSS', 'SQL'],
  },
  {
    title: 'Frontend & Backend',
    icon: Server,
    skills: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'FastAPI', 'REST APIs'],
  },
  {
    title: 'Generative AI & ML',
    icon: BrainCircuit,
    skills: [
      'LLMs',
      'RAG',
      'ChromaDB',
      'Ollama',
      'MiniLM',
      'Scikit-Learn',
      'Word2Vec',
      'NLTK',
      'Pandas',
      'NumPy',
    ],
  },
  {
    title: 'Databases, DevOps & CS',
    icon: Database,
    skills: ['MongoDB', 'MySQL', 'Docker', 'Git', 'GitHub', 'Amazon S3', 'DSA', 'OOP', 'OS'],
  },
];

const CERTIFICATIONS = [
  {
    title: 'Supervised Machine Learning & Advanced Machine Learning Algorithms',
    issuer: 'DeepLearning.AI',
  },
  {
    title: 'SQL for Data Science',
    issuer: 'UC Davis',
  },
  {
    title: 'Joy of Computing Using Python',
    issuer: 'NPTEL',
  },
];

/**
 * ============================================================================
 * SCROLL REVEAL HOOK & WRAPPER FOR SMOOTH SECTION ENTRANCES
 * ============================================================================
 */
const RevealSection = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  );
};

/**
 * ============================================================================
 * EXECUTIVE MONOCHROME BENTO CARD (With Precision Cursor Spotlight)
 * ============================================================================
 */
const BentoCard = ({
  children,
  className = '',
  variant = 'light',
  onClick,
  id,
}) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const isDark = variant === 'dark';

  const baseStyles = isDark
    ? 'bg-[#080808] border border-[#222222] text-[#FFFFFF] hover:border-[#3A3A3A] transition-all duration-300'
    : 'bg-[#FFFFFF] border border-[#E4E4E7] text-[#080808] hover:border-[#080808] shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_40px_-14px_rgba(0,0,0,0.1)] transition-all duration-300';

  const spotlightGradient = isDark
    ? `radial-gradient(520px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.08), transparent 45%)`
    : `radial-gradient(520px circle at ${mousePos.x}px ${mousePos.y}px, rgba(8, 8, 8, 0.035), transparent 45%)`;

  return (
    <div
      id={id}
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-2xl ${baseStyles} ${
        onClick ? 'cursor-pointer hover:-translate-y-1' : ''
      } ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: isHovered ? spotlightGradient : 'none' }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

/**
 * ============================================================================
 * REFINED SWISS SECTION HEADER (Editorial Tracking & Baseline Rhythm)
 * ============================================================================
 */
const SectionHeader = ({ index, title, subtitle, icon: Icon }) => (
  <div className="mb-10 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E4E4E7] pb-6">
    <div>
      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#71717A] mb-2.5">
        {Icon && <Icon className="w-3.5 h-3.5 text-[#080808]" />}
        <span>{index}</span>
      </div>
      <h2 className="text-2xl sm:text-4xl font-extrabold tracking-[-0.03em] text-[#080808]">
        {title}
      </h2>
    </div>
    {subtitle && (
      <p className="text-xs sm:text-sm text-[#52525B] max-w-md leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

/**
 * ============================================================================
 * PROJECT CASE STUDY MODAL (High-Contrast Monochrome Drawer)
 * ============================================================================
 */
const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#050505]/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-[#FFFFFF] border-2 border-[#080808] p-6 sm:p-9 shadow-2xl overflow-y-auto max-h-[90vh] text-[#080808] animate-modalSlide"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E4E4E7]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-[#080808] text-[#FFFFFF] font-mono text-[11px] font-semibold tracking-[0.08em]">
              {project.badge}
            </span>
            <span className="font-mono text-xs tracking-wider text-[#52525B]">
              {project.period}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-lg bg-[#F4F4F5] hover:bg-[#080808] text-[#080808] hover:text-[#FFFFFF] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#080808] tracking-[-0.025em] mb-3">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-[#3F3F46] leading-[1.7] mb-6">
          {project.description}
        </p>

        <div className="mb-7 p-4 rounded-xl bg-[#0A0A0A] text-[#FFFFFF] flex items-center gap-3 shadow-inner">
          <Zap className="w-4 h-4 text-[#FFFFFF] shrink-0" />
          <span className="font-mono text-xs sm:text-sm tracking-wide">
            {project.metrics}
          </span>
        </div>

        <div className="mb-7">
          <h4 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#71717A] mb-3.5">
            Engineering & Architecture Breakdown
          </h4>
          <ul className="space-y-3">
            {project.architecture.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-[#18181B] leading-[1.65]"
              >
                <ChevronRight className="w-4 h-4 text-[#080808] shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#71717A] mb-3">
            Core Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-[#F4F4F5] border border-[#E4E4E7] font-mono text-xs font-medium tracking-wide text-[#080808]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-[#E4E4E7]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#050505] via-[#141414] to-[#262626] text-[#FFFFFF] font-semibold text-sm tracking-tight hover:opacity-90 transition-opacity"
          >
            <Github className="w-4 h-4" />
            <span>Inspect Repository</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-[#F4F4F5] hover:bg-[#E4E4E7] text-xs font-mono font-medium tracking-wider text-[#080808] transition-colors"
          >
            ESC TO CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * ============================================================================
 * MAIN APPLICATION COMPONENT
 * ============================================================================
 */
export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedItem, setCopiedItem] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  

  // Dynamically packages the complete Vite + React + Tailwind project into a .zip for Vercel
  

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ['All', 'AI & Data Science', 'Full-Stack'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const handleCopy = (text, type) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => {});
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2200);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#080808] selection:bg-[#080808] selection:text-[#FFFFFF] antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        body {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          background-color: #FFFFFF;
          color: #080808;
          letter-spacing: -0.012em;
          overflow-x: hidden;
        }

        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        /* Subtle Swiss Architectural Grid Watermark */
        .swiss-grid-bg {
          background-image: 
            linear-gradient(to right, rgba(8, 8, 8, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(8, 8, 8, 0.03) 1px, transparent 1px);
          background-size: 64px 64px;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalSlide {
          from { opacity: 0; transform: scale(0.97) translateY(8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes pulseSlow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }

        @keyframes floatSubtle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }

        .animate-fadeUp {
          animation: fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out forwards;
        }

        .animate-modalSlide {
          animation: modalSlide 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-pulseSlow {
          animation: pulseSlow 2.4s ease-in-out infinite;
        }

        .animate-floatSubtle {
          animation: floatSubtle 4s ease-in-out infinite;
        }
      `}</style>

      {/* ====================================================================
          1. EXECUTIVE STICKY NAVBAR + SCROLL READING BAR
      ==================================================================== */}
      <header className="sticky top-0 z-40 border-b border-[#E4E4E7] bg-[#FFFFFF]/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-[#080808] flex items-center justify-center text-[#FFFFFF] group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 shadow-sm">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="font-mono text-xs font-bold tracking-[0.16em] text-[#080808]">
              {PROFILE_DATA.brandTitle}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-[0.08em] text-[#52525B]">
            <a href="#experience" className="relative py-1 hover:text-[#080808] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#080808] hover:after:w-full after:transition-all after:duration-300">
              EXPERIENCE
            </a>
            <a href="#projects" className="relative py-1 hover:text-[#080808] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#080808] hover:after:w-full after:transition-all after:duration-300">
              PROJECTS
            </a>
            <a href="#skills" className="relative py-1 hover:text-[#080808] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#080808] hover:after:w-full after:transition-all after:duration-300">
              SKILLS
            </a>
            <a href="#credentials" className="relative py-1 hover:text-[#080808] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#080808] hover:after:w-full after:transition-all after:duration-300">
              CREDENTIALS
            </a>
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#080808] text-[#FFFFFF] font-semibold text-xs tracking-wide hover:bg-[#222222] transition-colors shadow-sm"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="md:hidden p-2 rounded-lg border border-[#E4E4E7] text-[#080808]"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Ultra-thin monochrome reading progress bar */}
        <div className="h-[2px] w-full bg-transparent">
          <div
            className="h-full bg-[#080808] transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E4E4E7] bg-[#FFFFFF] px-5 py-4 space-y-1.5 font-mono text-xs tracking-wider">
            {[
              { label: '01 // EXPERIENCE', href: '#experience' },
              { label: '02 // PROJECTS', href: '#projects' },
              { label: '03 // SKILLS', href: '#skills' },
              { label: '04 // CREDENTIALS', href: '#credentials' },
              { label: '05 // CONTACT', href: '#contact' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-lg text-[#18181B] hover:bg-[#080808] hover:text-[#FFFFFF] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ====================================================================
          MAIN EDITORIAL CONTAINER (Generous Vertical Section Spacing)
      ==================================================================== */}
      <main
        id="top"
        className={`swiss-grid-bg max-w-5xl mx-auto px-5 sm:px-8 pt-14 sm:pt-24 pb-32 space-y-28 sm:space-y-36 transition-opacity duration-500 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* ==================================================================
            2. HERO & CREATIVE EXECUTIVE INTRO
        ================================================================== */}
        <section className="space-y-7 animate-fadeUp">
          <BentoCard variant="light" className="p-8 sm:p-14">
            {/* Top Status & Location Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-9">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F4F4F5] border border-[#E4E4E7]">
                <span className="h-2 w-2 rounded-full bg-[#080808] animate-pulseSlow" />
                <span className="font-mono text-[11px] font-medium tracking-wide text-[#18181B]">
                  {PROFILE_DATA.availability}
                </span>
              </div>

              <span className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider text-[#52525B]">
                <MapPin className="w-3.5 h-3.5 text-[#080808]" />
                {PROFILE_DATA.location}
              </span>
            </div>

            {/* Role Eyebrow */}
            <div className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#52525B] mb-4">
              {PROFILE_DATA.fullName} — {PROFILE_DATA.eyebrow}
            </div>

            {/* Clean Modern Sans-Serif Display Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.035em] text-[#080808] leading-[1.1] mb-6 max-w-4xl">
              {PROFILE_DATA.headlinePrefix}
              <span className="bg-gradient-to-r from-[#050505] via-[#27272A] to-[#52525B] bg-clip-text text-transparent">
                {PROFILE_DATA.headlineHighlight}
              </span>
              {PROFILE_DATA.headlineSuffix}
            </h1>

            {/* Concise, Metric-Free Narrative */}
            <p className="text-base sm:text-lg text-[#3F3F46] leading-[1.75] max-w-2xl mb-10 font-normal">
              {PROFILE_DATA.bio}
            </p>

            {/* Primary CTA & Social Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-7 border-t border-[#E4E4E7]">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#050505] via-[#141414] to-[#262626] text-[#FFFFFF] font-semibold text-xs sm:text-sm tracking-wide hover:opacity-90 transition-all shadow-sm"
                >
                  <FolderGit2 className="w-4 h-4" />
                  <span>Explore Selected Work</span>
                </a>

                <button
                  onClick={() => handleCopy(PROFILE_DATA.email, 'email')}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#F4F4F5] hover:bg-[#080808] border border-[#E4E4E7] text-[#080808] hover:text-[#FFFFFF] font-mono text-xs font-medium tracking-wide transition-colors"
                >
                  {copiedItem === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{PROFILE_DATA.email}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2.5">
                <a
                  href={PROFILE_DATA.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded-xl border border-[#E4E4E7] hover:bg-[#080808] text-[#080808] hover:text-[#FFFFFF] transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PROFILE_DATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-xl border border-[#E4E4E7] hover:bg-[#080808] text-[#080808] hover:text-[#FFFFFF] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PROFILE_DATA.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode"
                  className="inline-flex items-center gap-1.5 px-3.5 py-3 rounded-xl border border-[#E4E4E7] hover:bg-[#080808] font-mono text-xs font-bold tracking-wider text-[#080808] hover:text-[#FFFFFF] transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>LEETCODE</span>
                </a>
              </div>
            </div>
          </BentoCard>

          {/* 4-Column Rich Black Telemetry Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {PROFILE_DATA.quickStats.map((stat, idx) => {
              const StatIcon = stat.icon;
              const shades = [
                'bg-[#050505]',
                'bg-[#0C0C0C]',
                'bg-[#121212]',
                'bg-[#181818]',
              ];
              return (
                <BentoCard
                  key={stat.label}
                  variant="dark"
                  className={`p-5 sm:p-6 flex items-start justify-between ${shades[idx % shades.length]}`}
                >
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-[-0.03em] mb-1">
                      {stat.value}
                    </div>
                    <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[#E4E4E7]">
                      {stat.label}
                    </div>
                    <div className="font-mono text-[11px] text-[#8E8E93] mt-0.5">
                      {stat.sub}
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-[#1F1F22] border border-[#2E2E32] animate-floatSubtle">
                    <StatIcon className="w-4 h-4 text-[#FFFFFF]" />
                  </div>
                </BentoCard>
              );
            })}
          </div>
        </section>

        {/* ==================================================================
            3. WORK EXPERIENCE (Itobuz Technologies — Clean Light Surface)
        ================================================================== */}
        <RevealSection>
          <section id="experience" className="scroll-mt-24">
            <SectionHeader
              index="01 // INDUSTRY EXPERIENCE"
              title="Work Experience"
              subtitle="Hands-on software engineering shipping full-stack features, authentication systems, and cloud integrations."
              icon={Briefcase}
            />

            <BentoCard variant="light" className="p-8 sm:p-11">
              {/* Role Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-9 border-b border-[#E4E4E7]">
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.18em] text-[#71717A] mb-2">
                    {EXPERIENCE_PRIMARY.company} • {EXPERIENCE_PRIMARY.location}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-[-0.02em] text-[#080808]">
                    {EXPERIENCE_PRIMARY.role}
                  </h3>
                </div>

                <span className="self-start md:self-auto px-4 py-1.5 rounded-lg bg-[#080808] text-[#FFFFFF] font-mono text-xs font-bold tracking-[0.08em] shadow-sm">
                  {EXPERIENCE_PRIMARY.period}
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#3F3F46] leading-[1.75] mb-9 max-w-3xl">
                {EXPERIENCE_PRIMARY.summary}
              </p>

              {/* 2x2 Architectural Impact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-9">
                {EXPERIENCE_PRIMARY.pillars.map((pillar) => {
                  const PillarIcon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="group/item p-5 sm:p-6 rounded-xl bg-[#FAFAFA] border border-[#E4E4E7] hover:border-[#080808] hover:bg-[#FFFFFF] hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-[#080808] text-[#FFFFFF] group-hover/item:scale-110 transition-transform duration-300">
                          <PillarIcon className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-bold tracking-tight text-[#080808]">
                          {pillar.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#52525B] leading-[1.7]">
                        {pillar.detail}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Stack Tags */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-[#E4E4E7]">
                {EXPERIENCE_PRIMARY.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-md bg-[#F4F4F5] hover:bg-[#080808] border border-[#E4E4E7] font-mono text-[11px] tracking-wide text-[#18181B] hover:text-[#FFFFFF] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </BentoCard>
          </section>
        </RevealSection>

        {/* ==================================================================
            4. SELECTED PROJECTS (RAG Document Chat, Twitter NLP, PM WebApp)
        ================================================================== */}
        <RevealSection>
          <section id="projects" className="scroll-mt-24">
            <div className="mb-10 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E4E4E7] pb-6">
              <div>
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#71717A] mb-2.5">
                  <FolderGit2 className="w-3.5 h-3.5 text-[#080808]" />
                  <span>02 // SELECTED ENGINEERING WORK</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-[-0.03em] text-[#080808]">
                  Featured Projects
                </h2>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1 p-1 rounded-xl bg-[#F4F4F5] border border-[#E4E4E7] self-start sm:self-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-lg font-mono text-xs tracking-wide transition-all ${
                      selectedCategory === cat
                        ? 'bg-[#080808] text-[#FFFFFF] font-semibold shadow-sm'
                        : 'text-[#52525B] hover:text-[#080808]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <BentoCard
                  key={project.id}
                  variant="light"
                  onClick={() => setActiveProject(project)}
                  className="p-7 sm:p-8 flex flex-col justify-between animate-fadeIn"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-2.5 py-1 rounded bg-[#080808] text-[#FFFFFF] font-mono text-[10px] font-bold tracking-[0.08em]">
                        {project.badge}
                      </span>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 font-mono text-xs font-semibold tracking-wide text-[#080808] hover:underline"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    </div>

                    <h3 className="text-xl font-extrabold text-[#080808] tracking-[-0.02em] leading-snug mb-1.5">
                      {project.title}
                    </h3>
                    <div className="font-mono text-[11px] tracking-wider text-[#71717A] mb-4">
                      {project.period}
                    </div>

                    <p className="text-sm text-[#3F3F46] leading-[1.75] mb-6">
                      {project.oneLiner}
                    </p>
                  </div>

                  <div>
                    <div className="mb-4 px-3.5 py-2.5 rounded-lg bg-[#0C0C0C] text-[#FFFFFF] font-mono text-[11px] tracking-wide truncate shadow-inner">
                      {project.metrics}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-[#F4F4F5] border border-[#E4E4E7] font-mono text-[10px] tracking-wide text-[#18181B]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-[#E4E4E7] flex items-center justify-between font-mono text-xs font-semibold tracking-wide text-[#080808]">
                      <span>Inspect Architecture</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </BentoCard>
              ))}
            </div>
          </section>
        </RevealSection>

        {/* ==================================================================
            5. TECHNICAL SKILLS MATRIX
        ================================================================== */}
        <RevealSection>
          <section id="skills" className="scroll-mt-24">
            <SectionHeader
              index="03 // CAPABILITIES"
              title="Technical Stack"
              subtitle="Core languages, full-stack web frameworks, generative AI tooling, and computer science fundamentals."
              icon={Cpu}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {SKILL_GROUPS.map((group) => {
                const IconComp = group.icon;
                return (
                  <BentoCard key={group.title} variant="light" className="p-6 sm:p-7">
                    <div className="flex items-center gap-3 mb-5 pb-3.5 border-b border-[#F4F4F5]">
                      <div className="p-2 rounded-lg bg-[#080808] text-[#FFFFFF]">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-extrabold tracking-tight text-[#080808]">
                        {group.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-md bg-[#F8F8F8] hover:bg-[#080808] border border-[#E4E4E7] font-mono text-[11px] tracking-wide text-[#18181B] hover:text-[#FFFFFF] transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </BentoCard>
                );
              })}
            </div>
          </section>
        </RevealSection>

        {/* ==================================================================
            6. EDUCATION, ACHIEVEMENTS & CERTIFICATIONS
        ================================================================== */}
        <RevealSection>
          <section id="credentials" className="scroll-mt-24">
            <SectionHeader
              index="04 // ACADEMIC & MILESTONES"
              title="Education, Achievements & Certifications"
              icon={GraduationCap}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Degree + LeetCode Achievement (6 Cols) */}
              <div className="lg:col-span-6 flex flex-col justify-between gap-6">
                <BentoCard variant="light" className="p-7 sm:p-8">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-md bg-[#080808] text-[#FFFFFF] font-mono text-xs font-bold tracking-wider">
                      2022 — 2026
                    </span>
                    <span className="font-mono text-xs font-extrabold tracking-wide text-[#080808] bg-[#F4F4F5] px-3.5 py-1 rounded-md border border-[#E4E4E7]">
                      CGPA: 8.19 / 10
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold tracking-[-0.02em] text-[#080808] mb-1.5">
                    Bachelor of Technology in Computer Science
                  </h3>
                  <p className="text-sm text-[#52525B] leading-relaxed">
                    Hooghly Engineering and Technology College • West Bengal
                  </p>
                </BentoCard>

                <BentoCard variant="dark" className="p-7 sm:p-8 bg-[#0A0A0A]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#A1A1AA] mb-2.5">
                        <Trophy className="w-3.5 h-3.5 text-[#FFFFFF]" />
                        <span>ALGORITHMIC PROBLEM SOLVING</span>
                      </div>
                      <h3 className="text-xl font-extrabold tracking-[-0.02em] text-[#FFFFFF] mb-2">
                        400+ LeetCode Problems Solved
                      </h3>
                      <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-5">
                        Consistent practice across Data Structures, Dynamic Programming, Graphs, and Algorithmic Optimization.
                      </p>
                      <a
                        href={PROFILE_DATA.leetcodeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wide text-[#FFFFFF] underline underline-offset-4 hover:text-[#D4D4D8]"
                      >
                        <span>leetcode.com/u/Shaswata_01</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </BentoCard>
              </div>

              {/* Right Column: Verified Certifications (6 Cols) */}
              <BentoCard variant="light" className="lg:col-span-6 p-7 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E4E4E7]">
                    <div className="p-2 rounded-lg bg-[#080808] text-[#FFFFFF]">
                      <Award className="w-4 h-4" />
                    </div>
                    <h3 className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#080808]">
                      Verified Certifications
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {CERTIFICATIONS.map((cert, idx) => (
                      <div
                        key={idx}
                        className="flex items-start justify-between gap-4 p-4 rounded-xl bg-[#FAFAFA] hover:bg-[#F4F4F5] border border-[#E4E4E7] transition-colors"
                      >
                        <div>
                          <h4 className="text-sm font-bold tracking-tight text-[#080808] leading-snug">
                            {cert.title}
                          </h4>
                          <p className="font-mono text-xs tracking-wide text-[#52525B] mt-1.5">
                            {cert.issuer}
                          </p>
                        </div>
                        <ShieldCheck className="w-4 h-4 text-[#080808] shrink-0 mt-0.5" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#E4E4E7] font-mono text-[11px] tracking-wider text-[#71717A] flex items-center justify-between">
                  <span>MACHINE LEARNING • DATA SCIENCE • PYTHON</span>
                  <span>VERIFIED</span>
                </div>
              </BentoCard>
            </div>
          </section>
        </RevealSection>

        {/* ==================================================================
            7. EXECUTIVE CONTACT & FOOTER SLAB
        ================================================================== */}
        <RevealSection>
          <section id="contact" className="scroll-mt-24">
            <BentoCard variant="dark" className="p-9 sm:p-12 bg-[#050505]">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-9 border-b border-[#222222]">
                <div className="max-w-xl">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A1A1AA]">
                    05 // INITIATE CONVERSATION
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-[-0.03em] leading-tight mt-2.5">
                    Let&apos;s build resilient software & intelligent AI products.
                  </h2>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => handleCopy(PROFILE_DATA.email, 'email')}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FFFFFF] text-[#050505] font-mono text-xs font-bold tracking-wide hover:bg-[#E4E4E7] transition-colors shadow-sm"
                  >
                    {copiedItem === 'email' ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>EMAIL COPIED</span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4" />
                        <span>{PROFILE_DATA.email}</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => handleCopy(PROFILE_DATA.phone, 'phone')}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#141416] hover:bg-[#222225] border border-[#27272A] text-[#FFFFFF] font-mono text-xs font-semibold tracking-wide transition-colors"
                  >
                    {copiedItem === 'phone' ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>NUMBER COPIED</span>
                      </>
                    ) : (
                      <>
                        <Phone className="w-4 h-4" />
                        <span>+91 {PROFILE_DATA.phone}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs tracking-wider text-[#A1A1AA]">
                <div>
                  © {new Date().getFullYear()} {PROFILE_DATA.fullName.toUpperCase()} —{' '}
                  {PROFILE_DATA.location.toUpperCase()}
                </div>

                <div className="flex items-center gap-6">
                  <a
                    href={PROFILE_DATA.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FFFFFF] transition-colors"
                  >
                    GITHUB
                  </a>
                  <a
                    href={PROFILE_DATA.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FFFFFF] transition-colors"
                  >
                    LINKEDIN
                  </a>
                  <a
                    href={PROFILE_DATA.leetcodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FFFFFF] transition-colors"
                  >
                    LEETCODE
                  </a>
                  <a
                    href="#top"
                    className="text-[#FFFFFF] font-bold hover:underline"
                  >
                    TOP ↑
                  </a>
                </div>
              </div>
            </BentoCard>
          </section>
        </RevealSection>
      </main>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}