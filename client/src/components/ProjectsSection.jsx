import { motion } from 'framer-motion'
import { ArrowUpRight, ShoppingCart, Leaf, Map, Gem, Crown, Code, ExternalLink } from 'lucide-react'
import SectionHeading from './SectionHeading'

const projects = [
  {
    id: 1,
    title: 'Time2Cart',
    subtitle: 'E-Commerce Platform',
    description:
      'A modern e-commerce platform for browsing products, managing carts, and placing orders through a responsive and user-friendly interface. Built with a focus on performance and scalability.',
    techStack: ['React.js', 'Next.js', 'Tailwind CSS', 'Node.js'],
    github: 'https://github.com/ragunathsuresh/Time2cart',
    live: '',
    status: 'Completed',
    icon: ShoppingCart,
    gradient: 'from-orange-500 via-pink-500 to-rose-600',
    glowColor: 'rgba(249, 115, 22, 0.25)',
    accentColor: 'text-orange-400',
    badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    dotColor: 'bg-emerald-400',
    bgPattern: 'from-orange-950/40 to-rose-950/20',
  },
  {
    id: 2,
    title: 'FloraVision',
    subtitle: 'AI Plant Identification App',
    description:
      'An AI-powered plant recognition application that identifies plant species from images and provides detailed information, helping users learn about plants effortlessly.',
    techStack: ['Python', 'React.js', 'TensorFlow', 'Computer Vision'],
    github: 'https://github.com/ragunathsuresh/FloraVision',
    live: '',
    status: 'Completed',
    icon: Leaf,
    gradient: 'from-emerald-500 via-green-400 to-teal-500',
    glowColor: 'rgba(16, 185, 129, 0.25)',
    accentColor: 'text-emerald-400',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    dotColor: 'bg-emerald-400',
    bgPattern: 'from-emerald-950/40 to-teal-950/20',
  },
  {
    id: 3,
    title: 'TripMate',
    subtitle: 'Travel Planning Application',
    description:
      'A travel planning platform that helps users create, organize, and manage travel itineraries efficiently through an intuitive and responsive interface.',
    techStack: ['React.js', 'Next.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/ragunathsuresh/Tripmate',
    live: '',
    status: 'Completed',
    icon: Map,
    gradient: 'from-blue-500 via-cyan-400 to-sky-500',
    glowColor: 'rgba(59, 130, 246, 0.25)',
    accentColor: 'text-blue-400',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    dotColor: 'bg-emerald-400',
    bgPattern: 'from-blue-950/40 to-sky-950/20',
  },
  {
    id: 4,
    title: 'Sri Vaishnavi Jewellers',
    subtitle: 'Business Management System',
    description:
      'A comprehensive jewellery management app featuring billing, barcode scanning, inventory tracking, chit fund management, and role-based administration for daily business operations.',
    techStack: ['React Native', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/ragunathsuresh/Sri-Vaishnavi-Jewellers',
    live: '',
    status: 'Completed',
    icon: Gem,
    gradient: 'from-yellow-400 via-amber-500 to-orange-500',
    glowColor: 'rgba(245, 158, 11, 0.25)',
    accentColor: 'text-amber-400',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    dotColor: 'bg-emerald-400',
    bgPattern: 'from-amber-950/40 to-yellow-950/20',
  },
  {
    id: 5,
    title: 'Sri Lakshmi Vinayaka Golden Jewellery',
    subtitle: 'Jewellery ERP System',
    description:
      'An ongoing ERP solution covering billing, inventory management, barcode tracking, reporting, and business analytics to fully streamline jewellery shop operations.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: '',
    live: '',
    status: 'In Progress',
    icon: Crown,
    gradient: 'from-violet-500 via-purple-500 to-indigo-600',
    glowColor: 'rgba(139, 92, 246, 0.25)',
    accentColor: 'text-violet-400',
    badgeColor: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    dotColor: 'bg-amber-400',
    bgPattern: 'from-violet-950/40 to-indigo-950/20',
  },
]

function FloatingOrbs({ gradient }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      <div
        className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${gradient} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40`}
      />
      <div
        className={`absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-gradient-to-br ${gradient} opacity-10 blur-xl transition-opacity duration-500 group-hover:opacity-30`}
      />
    </div>
  )
}

function GridPattern() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.04]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  )
}

function ProjectCard({ project, index }) {
  const Icon = project.icon
  const isOngoing = project.status === 'In Progress'

  const handleCardClick = () => {
    if (project.github) {
      window.open(project.github, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={project.github ? handleCardClick : undefined}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-zinc-900/60 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.12] hover:shadow-2xl ${project.github ? 'cursor-pointer' : 'cursor-default'}`}
      style={{ '--glow': project.glowColor }}
    >
      {/* Grid texture */}
      <GridPattern />

      {/* Floating orbs */}
      <FloatingOrbs gradient={project.gradient} />

      {/* Glow shadow on hover */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: project.glowColor }}
      />

      {/* Card header banner */}
      <div className={`relative flex h-36 items-center justify-between overflow-hidden bg-gradient-to-br ${project.bgPattern} px-7 pt-6`}>
        {/* Large decorative icon background */}
        <div
          className={`absolute -right-6 -top-6 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br ${project.gradient} opacity-10 transition-all duration-500 group-hover:opacity-20 group-hover:scale-110`}
        />
        <div
          className={`absolute right-6 top-1/2 -translate-y-1/2 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient} opacity-[0.12] transition-all duration-500 group-hover:opacity-[0.22]`}
        />

        {/* Icon with gradient background pill */}
        <div className="flex items-center gap-4">
          <div
            className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg transition-transform duration-500 group-hover:scale-105 group-hover:shadow-xl`}
          >
            <Icon size={26} className="text-white drop-shadow-sm" />
          </div>
          <div>
            <p className={`text-[10px] font-bold uppercase tracking-widest ${project.accentColor}`}>
              {project.subtitle}
            </p>
            <h3 className="mt-0.5 font-display text-lg font-bold leading-tight text-white transition-colors duration-300 group-hover:text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Status badge */}
        <div className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full border border-white/10 bg-zinc-900/70 px-3 py-1 backdrop-blur-md">
          <span className={`h-1.5 w-1.5 rounded-full ${project.dotColor} ${isOngoing ? 'animate-pulse' : ''}`} />
          <span className="text-[10px] font-semibold text-zinc-300">{project.status}</span>
        </div>
      </div>

      {/* Divider */}
      <div className={`h-px w-full bg-gradient-to-r ${project.gradient} opacity-20`} />

      {/* Content */}
      <div className="flex flex-1 flex-col p-7">
        <p className="flex-1 text-sm leading-relaxed text-zinc-400 line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className={`rounded-md border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${project.badgeColor}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-5">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`inline-flex items-center gap-2 text-sm font-bold ${project.accentColor} transition-all duration-200 hover:gap-3`}
            >
              View on GitHub <ArrowUpRight size={15} />
            </a>
          ) : (
            <span className="text-sm font-medium text-zinc-600 italic">Private / Coming Soon</span>
          )}

          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 bg-white/5 text-zinc-400 transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <Code size={16} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 bg-white/5 text-zinc-400 transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectsSection() {
  return (
    <section id="projects" className="relative px-6 py-24 md:px-8">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/3 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="My Work"
          title="Featured Projects"
          description="A selection of my recent work — from AI-powered applications and e-commerce platforms to full-scale jewellery ERP systems."
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 flex justify-center"
        >
          <a
            href="https://github.com/ragunathsuresh"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-white/5"
          >
            <Code size={18} />
            View all repositories on GitHub
            <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
