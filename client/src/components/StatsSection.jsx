import { motion } from 'framer-motion'
import { stats } from '../data/portfolio'

function StatsSection() {
  return (
    <section className="px-6 py-10 md:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/40 p-6 text-center backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative z-10 font-display text-2xl font-black text-white md:text-3xl">
              {stat.value}
            </div>
            <div className="relative z-10 mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 md:text-xs">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default StatsSection
