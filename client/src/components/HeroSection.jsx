import { motion } from 'framer-motion'
import ragunathPhoto from '../assets/ragunath.jpg'

function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-20 pt-16 md:px-8 md:pb-32 md:pt-28">
      {/* Background Decorative Elements */}
      <div className="absolute left-[-10%] top-[-10%] h-[40%] w-[40%] rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-fuchsia-500/10 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Available for New Opportunities
          </motion.div>

          <h1 className="font-display text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Ragunath Suresh <br />
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">B.Tech 
              Computer Science and Business System
            </span>
          </h1>

          <p className="mt-8 text-lg font-medium text-zinc-300 md:text-xl">
            Hi, I&apos;m <span className="text-white font-bold">Ragunath Suresh</span> , a Full Stack Developer crafting fast, scalable, and user-focused web applications. I transform ideas into reliable digital products that deliver real business value.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5 lg:justify-start">
            <a
              href="#projects"
              className="group relative flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-bold text-black transition-transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">View Projects</span>
            </a>
            <a
              href="#contact"
              className="flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 font-bold text-white backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/10"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 lg:justify-start">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">10+</span>
              <span className="text-sm text-zinc-500">Projects Completed</span>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">2+</span>
              <span className="text-sm text-zinc-500">Years Learning & Building</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[450px] lg:max-w-none"
        >
          {/* Glass Card for Photo */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900/50 p-4 backdrop-blur-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent" />
            <img
              src={ragunathPhoto}
              alt="Ragunath Suresh"
              className="h-full w-full rounded-[1.8rem] object-cover grayscale transition-all duration-500 hover:grayscale-0"
            />

            {/* Floating UI Elements */}
            

            
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
