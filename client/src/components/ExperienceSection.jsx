import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award, BookOpen, Microscope, Code2 } from 'lucide-react'
import SectionHeading from './SectionHeading'

const experience = [
  {
    title: 'Software Development Intern',
    company: 'VDart Inc.',
    duration: '2025',
    type: 'Internship',
    description:
      'Built scalable REST APIs, implemented authentication systems, optimized backend performance, and worked on production-level systems.',
    link: 'https://drive.google.com/file/d/1Q-ce-QNvBVtZJU3_XyyzU7x-ZvvNnqCr/view',
  },
  {
    title: 'Freelance Full Stack Developer',
    company: 'Independent',
    duration: '2024 – Present',
    type: 'Freelance',
    description:
      'Delivering custom web applications, ERP systems, and business automation tools for clients. Projects include jewellery management systems, e-commerce platforms, and data-driven dashboards.',
  },
  {
    title: 'B.Tech Computer Science and Business Systems',
    company: 'SASTRA University',
    duration: '2023 – 2027',
    type: 'Education',
    description:
      'Currently pursuing with a CGPA of 8.12. Focused on technology and business systems integration.',
  },
  {
    title: 'Research Publication — Scopus Indexed',
    company: 'International Journal',
    duration: '2026',
    type: 'Publication',
    description:
      'Published "Sociocultural Perceptions of Circular Jobs Among Nationals" in a Scopus-indexed journal. Applied quantitative research methods and statistical analysis to investigate workforce participation and socio-economic trends in circular economy sectors.',
  },
  {
    title: 'Full Stack Development Certification',
    company: 'Online Platform',
    duration: '2024',
    type: 'Certification',
    description:
      'Comprehensive certification covering modern web technologies and full stack architecture.',
    link: 'https://drive.google.com/file/d/1UDPFgX9qI6i9ERt2ywag1HMYR6FKh-Qj/view?usp=sharing',
  },
  {
    title: 'Machine Learning',
    company: 'Self-paced Learning',
    duration: '2025 – Present',
    type: 'Learning',
    description:
      'Currently learning Machine Learning fundamentals including supervised learning, neural networks, model evaluation, and data preprocessing using Python, scikit-learn, and TensorFlow.',
  },
]

const TYPE_CONFIG = {
  Internship:   { icon: Briefcase,     badge: 'text-indigo-400', node: 'text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.25)]',  border: 'hover:border-indigo-500/30',  label: 'View Internship Letter' },
  Freelance:    { icon: Code2,         badge: 'text-cyan-400',   node: 'text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)]',     border: 'hover:border-cyan-500/30',    label: 'View Details' },
  Education:    { icon: GraduationCap, badge: 'text-emerald-400',node: 'text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)]', border: 'hover:border-emerald-500/30', label: 'View Transcript' },
  Publication:  { icon: Microscope,    badge: 'text-violet-400', node: 'text-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.25)]',  border: 'hover:border-violet-500/30',  label: 'View Publication' },
  Certification:{ icon: Award,         badge: 'text-amber-400',  node: 'text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.25)]',   border: 'hover:border-amber-500/30',   label: 'View Certificate' },
  Learning:     { icon: BookOpen,      badge: 'text-rose-400',   node: 'text-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.25)]',     border: 'hover:border-rose-500/30',    label: 'View More' },
}

function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-24 md:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="My Journey"
          title="Career & Education"
          description="A timeline of my professional experience, academic background, and certifications."
        />

        <div className="relative space-y-12 before:absolute before:inset-y-0 before:left-[19px] before:w-0.5 before:bg-white/5 md:before:left-1/2 md:before:-translate-x-1/2">
          {experience.map((item, index) => {
            const cfg = TYPE_CONFIG[item.type] ?? TYPE_CONFIG.Internship
            const Icon = cfg.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative flex flex-col md:flex-row md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div
                  className={`absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900 md:left-1/2 md:-translate-x-1/2 ${cfg.node}`}
                >
                  <Icon size={18} />
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className={`group relative rounded-2xl border border-white/5 bg-zinc-900/40 p-6 backdrop-blur-sm transition-all ${cfg.border} hover:bg-zinc-900/60`}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${cfg.badge}`}>
                        {item.type}
                      </span>
                      <span className="text-xs font-medium text-zinc-500">{item.duration}</span>
                    </div>
                    <h3 className={`text-xl font-bold text-white transition-colors group-hover:${cfg.badge.replace('text-', 'text-')}`}>
                      {item.title}
                    </h3>
                    <p className="mt-1 font-medium text-zinc-300">{item.company}</p>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                      {item.description}
                    </p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className={`mt-4 inline-flex items-center gap-1.5 text-xs font-bold hover:underline ${cfg.badge}`}
                      >
                        {cfg.label} →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
