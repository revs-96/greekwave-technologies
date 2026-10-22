'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Briefcase } from 'lucide-react'

const insightOptions = [
  {
    title: 'Case Studies',
    description: 'Explore the products and AI solutions we have delivered, the challenges they solved, and the measurable results they achieved.',
    href: '/case-studies',
    icon: Briefcase,
    action: 'Explore Case Studies',
  },
  {
    title: 'Blog',
    description: 'Read practical perspectives, product thinking, and the latest updates from the GreekWave Technologies team.',
    href: '/blog',
    icon: BookOpen,
    action: 'Read Our Blog',
  },
]

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 md:py-28">
        <div className="absolute inset-0 wave-pattern opacity-20" />
        <div className="container-custom relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400"
          >
            GreekWave Insights
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-hero mb-6"
          >
            Ideas, Outcomes &amp;
            <span className="gradient-text block">Innovation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300 md:text-2xl"
          >
            Choose what you would like to explore: real-world results from our work or fresh perspectives from our team.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid gap-8 md:grid-cols-2">
          {insightOptions.map((option, index) => {
            const Icon = option.icon

            return (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={option.href}
                  className="group flex h-full flex-col rounded-2xl border border-slate-700 bg-slate-800/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-400/10"
                >
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="mb-4 text-3xl font-bold text-white">{option.title}</h2>
                  <p className="mb-8 flex-1 text-lg leading-relaxed text-gray-300">{option.description}</p>
                  <span className="inline-flex items-center gap-2 font-semibold text-cyan-400 transition-colors group-hover:text-cyan-300">
                    {option.action}
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
