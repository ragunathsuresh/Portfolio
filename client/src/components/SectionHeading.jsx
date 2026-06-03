import { motion } from 'framer-motion'

function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className={`mb-10 max-w-2xl ${alignment}`}
    >
      <span className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-7 text-zinc-400 md:text-base">
          {description}
        </p>
      ) : null}
    </motion.div>
  )
}

export default SectionHeading
