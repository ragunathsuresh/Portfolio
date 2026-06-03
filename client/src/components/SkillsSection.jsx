import { motion } from 'framer-motion'
import {
  Monitor,
  Server,
  Database,
  Wrench,
  BookOpen,
  Code2,
  TrendingUp,
  BarChart3,
  Settings,
  DollarSign,
  Users,
  Cpu,
  Network,
  GitBranch,
} from 'lucide-react'
import SectionHeading from './SectionHeading'

/* ─────────────── DATA ─────────────── */

const techCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: Monitor,
    gradient: 'from-cyan-500 to-blue-600',
    glow: 'rgba(6,182,212,0.18)',
    accent: 'text-cyan-400',
    border: 'border-cyan-500/20',
    bg: 'bg-cyan-500/8',
    skills: ['React.js', 'Next.js', 'JavaScript', 'Tailwind CSS'],
    span: 'md:col-span-1',
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: Server,
    gradient: 'from-violet-500 to-purple-700',
    glow: 'rgba(139,92,246,0.18)',
    accent: 'text-violet-400',
    border: 'border-violet-500/20',
    bg: 'bg-violet-500/8',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication'],
    span: 'md:col-span-1',
  },
  {
    id: 'database',
    label: 'Database',
    icon: Database,
    gradient: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16,185,129,0.18)',
    accent: 'text-emerald-400',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/8',
    skills: ['MongoDB', 'MySQL'],
    span: 'md:col-span-1',
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    icon: Wrench,
    gradient: 'from-orange-500 to-rose-600',
    glow: 'rgba(249,115,22,0.18)',
    accent: 'text-orange-400',
    border: 'border-orange-500/20',
    bg: 'bg-orange-500/8',
    skills: ['Git', 'Postman', 'Vercel', 'Netlify'],
    span: 'md:col-span-1',
  },
  {
    id: 'learning',
    label: 'Currently Learning',
    icon: BookOpen,
    gradient: 'from-amber-400 to-yellow-500',
    glow: 'rgba(245,158,11,0.18)',
    accent: 'text-amber-400',
    border: 'border-amber-500/20',
    bg: 'bg-amber-500/8',
    skills: ['AWS', 'System Design', 'Docker'],
    span: 'md:col-span-2',
    isLearning: true,
  },
]

const languages = [
  { name: 'JavaScript', color: 'from-yellow-400 to-amber-500' },
  { name: 'Python', color: 'from-blue-400 to-sky-500' },
  { name: 'C', color: 'from-slate-400 to-zinc-500' },
  { name: 'C++', color: 'from-indigo-400 to-blue-600' },
]

const csFoundations = [
  { name: 'Data Structures & Algorithms', icon: GitBranch, color: 'text-cyan-400' },
  { name: 'Object Oriented Programming', icon: Cpu, color: 'text-violet-400' },
  { name: 'Computer Networks', icon: Network, color: 'text-emerald-400' },
  { name: 'Operating Systems', icon: Settings, color: 'text-orange-400' },
  { name: 'Compiler Design', icon: Code2, color: 'text-rose-400' },
  { name: 'DBMS', icon: Database, color: 'text-teal-400' },
]

const businessDomains = [
  {
    id: 'analytics',
    emoji: '📊',
    label: 'Business Analytics',
    gradient: 'from-blue-500 to-cyan-600',
    glow: 'rgba(59,130,246,0.15)',
    skills: ['Data Analysis', 'KPI Tracking', 'Business Reporting', 'Decision Making'],
  },
  {
    id: 'systems',
    emoji: '💼',
    label: 'Business Systems',
    gradient: 'from-violet-500 to-purple-600',
    glow: 'rgba(139,92,246,0.15)',
    skills: ['ERP Concepts', 'Inventory Management', 'Billing & Accounting Workflows', 'Business Process Automation'],
  },
  {
    id: 'marketing',
    emoji: '📈',
    label: 'Marketing & Strategy',
    gradient: 'from-pink-500 to-rose-600',
    glow: 'rgba(236,72,153,0.15)',
    skills: ['Digital Marketing Basics', 'Market Research', 'Customer Segmentation', 'Product Positioning'],
  },
  {
    id: 'finance',
    emoji: '💰',
    label: 'Finance Fundamentals',
    gradient: 'from-amber-400 to-orange-500',
    glow: 'rgba(245,158,11,0.15)',
    skills: ['Financial Statements', 'Cost Analysis', 'Revenue Tracking', 'Investment Basics'],
  },
  {
    id: 'pm',
    emoji: '🤝',
    label: 'Project Management',
    gradient: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16,185,129,0.15)',
    skills: ['Agile Development', 'Requirement Gathering', 'Stakeholder Communication', 'Documentation'],
  },
]

/* ─────────────── SUB COMPONENTS ─────────────── */

function TechCard({ cat, index }) {
  const Icon = cat.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-zinc-900/60 p-6 backdrop-blur-sm transition-all duration-400 hover:-translate-y-0.5 hover:border-white/[0.14] hover:shadow-xl ${cat.span}`}
    >
      {/* Glow blob */}
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{ background: cat.glow }}
      />

      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${cat.gradient} shadow-lg`}>
          <Icon size={20} className="text-white" />
        </div>
        <div>
          <p className={`text-xs font-bold uppercase tracking-widest ${cat.accent}`}>{cat.label}</p>
        </div>
        {cat.isLearning && (
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
            Active
          </span>
        )}
      </div>

      {/* Skill chips */}
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((s) => (
          <span
            key={s}
            className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${cat.border} ${cat.bg} ${cat.accent}`}
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function BusinessCard({ domain, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-zinc-900/60 p-6 backdrop-blur-sm transition-all duration-400 hover:-translate-y-0.5 hover:border-white/[0.14] hover:shadow-xl"
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: domain.glow }}
      />
      {/* Top gradient bar */}
      <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${domain.gradient} opacity-60`} />

      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <span className="text-2xl">{domain.emoji}</span>
        <h4 className="text-sm font-bold text-white">{domain.label}</h4>
      </div>

      {/* Skills */}
      <ul className="space-y-2">
        {domain.skills.map((s) => (
          <li key={s} className="flex items-center gap-2 text-xs text-zinc-400">
            <span className={`h-1 w-1 flex-shrink-0 rounded-full bg-gradient-to-br ${domain.gradient}`} />
            {s}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

/* ─────────────── MAIN COMPONENT ─────────────── */

function SkillsSection() {
  return (
    <section id="skills" className="relative px-6 py-24 md:px-8">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-1/4 h-80 w-80 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl space-y-20">

        {/* ── 1. TECH STACK ── */}
        <div>
          <SectionHeading
            eyebrow="My Stack"
            title="Technologies & Tools"
            description="Building modern, scalable web products using the MERN stack and beyond."
          />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {techCategories.map((cat, i) => (
              <TechCard key={cat.id} cat={cat} index={i} />
            ))}
          </div>
        </div>

        {/* ── 2. PROGRAMMING LANGUAGES ── */}
        <div>
          <SectionHeading
            eyebrow="Languages"
            title="Programming Languages"
            description="Core languages I use to write, build, and think."
          />
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
            {languages.map((lang, i) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/[0.07] bg-zinc-900/60 py-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:shadow-xl"
              >
                <div
                  className={`mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${lang.color} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <Code2 size={26} className="text-white" />
                </div>
                <span className="text-sm font-bold text-white">{lang.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── 3. CS FOUNDATIONS ── */}
        <div>
          <SectionHeading
            eyebrow="CS Fundamentals"
            title="Core Computer Science"
            description="Strong theoretical foundation from B.Tech CSBS at SASTRA University."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {csFoundations.map((cs, i) => {
              const Icon = cs.icon
              return (
                <motion.div
                  key={cs.name}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="flex items-center gap-4 rounded-xl border border-white/[0.07] bg-zinc-900/60 px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.14] hover:bg-zinc-900/80"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/5">
                    <Icon size={18} className={cs.color} />
                  </div>
                  <span className="text-sm font-semibold text-zinc-200">{cs.name}</span>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* ── 4. BUSINESS DOMAINS (CSBS) ── */}
        <div>
          <SectionHeading
            eyebrow="CSBS Knowledge"
            title="Business & Management Skills"
            description="As a Computer Science & Business Systems student, I blend technical expertise with real business understanding."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {businessDomains.map((domain, i) => (
              <BusinessCard key={domain.id} domain={domain} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default SkillsSection
