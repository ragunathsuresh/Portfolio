import { motion } from 'framer-motion'
import { services } from '../data/portfolio'

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

function ServicesSection() {
  return (
    <section id="services" className="relative px-6 py-24 md:px-8">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-indigo-500/5 blur-3xl" />
        <div className="absolute right-1/3 bottom-1/3 h-56 w-56 rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-3xl"
        >
          <span className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">
            Technical & Research Expertise
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl leading-tight">
            Engineering Solutions Through{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
              Code, Business, and Research
            </span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-zinc-400 md:text-base max-w-2xl">
            From enterprise applications and backend systems to data-driven research, I focus on
            building technology that delivers measurable impact.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-zinc-900/60 p-6 backdrop-blur-sm transition-all duration-400 hover:-translate-y-1 hover:border-white/[0.14] hover:shadow-2xl"
              >
                {/* Per-card hover glow */}
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: service.glow }}
                />

                {/* Top gradient accent bar */}
                <div
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${service.accent} opacity-0 transition-opacity duration-400 group-hover:opacity-100`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} shadow-lg transition-transform duration-400 group-hover:scale-105`}
                  >
                    <Icon size={22} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-display text-lg font-bold text-white leading-snug group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  {/* Divider */}
                  <div
                    className={`mt-3 mb-4 h-px w-10 bg-gradient-to-r ${service.accent} opacity-60 transition-all duration-400 group-hover:w-16 group-hover:opacity-100`}
                  />

                  {/* Description */}
                  <p className="text-sm leading-7 text-zinc-400">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
