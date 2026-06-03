import { motion } from 'framer-motion'
import { FileText, Tag, ArrowRight, AlertCircle } from 'lucide-react'
import { useState } from 'react'

function ResearchSection() {
  const [fileError, setFileError] = useState(false)

  const handleViewPaper = () => {
    const pdfPath = '/research/circular-economy.pdf'
    // In a real app, we might check if the file exists via a HEAD request
    // For now, we'll just try to open it and show error if it fails
    window.open(pdfPath, '_blank')
  }

  return (
    <section id="research" className="px-6 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900/40 p-8 md:p-16 backdrop-blur-md"
        >
          {/* Animated Background Mesh */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-[100px]" />
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-[100px]" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_auto]">
            <div className="flex flex-col justify-center">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">
                Published Research
              </span>
              <h2 className="font-display text-3xl font-black text-white md:text-5xl lg:text-6xl leading-tight">
                Circular Economy <br />
                <span className="text-zinc-500">Workforce Participation</span>
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
                An analytical study on how circular economy models influence labor market dynamics and workforce engagement in emerging economies.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {['Research', 'Data Analysis', 'Economics'].map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-300"
                  >
                    <Tag size={12} className="text-indigo-400" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={handleViewPaper}
                  className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95"
                >
                  View Full Paper
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
                
                {fileError && (
                  <div className="flex items-center gap-2 text-rose-400 text-sm font-medium">
                    <AlertCircle size={16} />
                    File unavailable
                  </div>
                )}
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="relative h-64 w-48 rounded-2xl border border-white/10 bg-black/40 p-4 shadow-2xl">
                <div className="h-full w-full rounded-lg border border-white/5 bg-zinc-800/50 p-4">
                  <div className="h-2 w-12 rounded bg-white/10" />
                  <div className="mt-4 h-1 w-full rounded bg-white/5" />
                  <div className="mt-2 h-1 w-full rounded bg-white/5" />
                  <div className="mt-2 h-1 w-2/3 rounded bg-white/5" />
                  <div className="mt-8 flex justify-center">
                    <FileText size={48} className="text-indigo-400 opacity-20" />
                  </div>
                </div>
                {/* Decorative glow */}
                <div className="absolute -inset-4 -z-10 bg-indigo-500/20 blur-2xl rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ResearchSection
