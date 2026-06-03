import {
  BriefcaseBusiness,
  Code2,
  ServerCog,
  FlaskConical,
} from 'lucide-react'

export const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: '5+', label: 'Projects' },
  { value: '10+', label: 'Technologies' },
  { value: '1+', label: 'Internship' },
  { value: '8.12', label: 'CGPA' },
]

export const services = [
  {
    title: 'Full Stack Development',
    description:
      'Building modern web applications with scalable architectures, responsive interfaces, secure authentication, and efficient database integration.',
    icon: Code2,
    accent: 'from-indigo-500 to-cyan-500',
    glow: 'rgba(99,102,241,0.15)',
  },
  {
    title: 'Business Systems Development',
    description:
      'Designing ERP, inventory, billing, and workflow automation systems that streamline operations and improve business efficiency.',
    icon: BriefcaseBusiness,
    accent: 'from-amber-400 to-orange-500',
    glow: 'rgba(245,158,11,0.15)',
  },
  {
    title: 'API & Backend Engineering',
    description:
      'Developing secure REST APIs, authentication systems, database architectures, and backend services built for reliability and growth.',
    icon: ServerCog,
    accent: 'from-violet-500 to-purple-600',
    glow: 'rgba(139,92,246,0.15)',
  },
  {
    title: 'Research & Publication',
    description:
      'Applied statistical analysis, quantitative research methods, and academic writing to investigate workforce participation and socio-economic trends through data-driven studies.',
    icon: FlaskConical,
    accent: 'from-emerald-500 to-teal-500',
    glow: 'rgba(16,185,129,0.15)',
  },
]

export const skills = [
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 88 },
  { name: 'MongoDB', level: 84 },
  { name: 'Express', level: 85 },
  { name: 'Python', level: 82 },
  { name: 'JavaScript', level: 92 },
  { name: 'Git', level: 80 },
]

export const researchHighlight = {
  badge: 'Published Research',
  title: 'Circular Economy Workforce Participation',
  description:
    'A quantitative study connecting sociocultural perception, awareness, and workforce participation in circular economy sectors across GCC countries.',
  cta: 'Read Publication',
}
