import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'
import toast from 'react-hot-toast'
import { sendMessage } from '../services/api'

const initialState = {
  name: '',
  email: '',
  message: '',
}

function ContactSection() {
  const [formData, setFormData] = useState(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address.')
      return
    }

    try {
      setIsSubmitting(true)
      await sendMessage(formData)
      setIsSuccess(true)
      setFormData(initialState)
      toast.success('Message sent!')
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to send message.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="px-6 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
            Contact
          </span>
          <h2 className="mt-4 font-display text-4xl font-black text-white md:text-5xl lg:text-6xl leading-tight">
            Let&apos;s talk about <br />
            <span className="text-zinc-500">your next project.</span>
          </h2>
          <p className="mt-8 text-lg text-zinc-400">
            I&apos;m currently available for freelance work and new opportunities. If you have a project or just want to say hi, feel free to reach out!
          </p>

          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/5 bg-zinc-900/50 text-indigo-400">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Email</div>
                <a href="mailto:ragusuresh291@gmail.com" className="text-lg font-bold text-white hover:text-indigo-400 transition-colors">
                  ragusuresh291@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/5 bg-zinc-900/50 text-indigo-400">
                <MapPin size={24} />
              </div>
              <div>
                <div className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Location</div>
                <div className="text-lg font-bold text-white">Tamil Nadu, India</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[2.5rem] border border-white/5 bg-zinc-900/30 p-8 md:p-12 backdrop-blur-md"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-white uppercase tracking-widest mb-3">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-2xl border border-white/5 bg-white/5 px-6 py-4 text-white outline-none transition-all focus:border-indigo-500/50 focus:bg-white/10"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-white uppercase tracking-widest mb-3">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
                className="w-full rounded-2xl border border-white/5 bg-white/5 px-6 py-4 text-white outline-none transition-all focus:border-indigo-500/50 focus:bg-white/10"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-white uppercase tracking-widest mb-3">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full rounded-2xl border border-white/5 bg-white/5 px-6 py-4 text-white outline-none transition-all focus:border-indigo-500/50 focus:bg-white/10 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="relative w-full overflow-hidden rounded-2xl bg-white px-8 py-4 font-black text-black transition-transform hover:scale-[1.02] active:scale-95 disabled:opacity-50"
            >
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 size={20} /> Sent Successfully
                  </motion.div>
                ) : (
                  <motion.div
                    key="normal"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
