'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Users, Award } from 'lucide-react'
import Link from 'next/link'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To build accessible, intelligent software and AI-powered solutions that simplify business operations and empower organizations to achieve more.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To become a trusted technology company known for creating impactful SaaS products and intelligent automations that shape a smarter digital future.',
    },
    {
      icon: Users,
      title: 'Values',
      description: 'Innovation, integrity, customer-centric thinking, collaboration, and continuous improvement guide everything we build.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We prioritize quality, reliability, security, and thoughtful design to create dependable solutions that deliver meaningful value.',
    },
  ]

  return (
    <section id="about" className="section-padding bg-slate-800/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block bg-cyan-400/10 border border-cyan-400/30 rounded-full px-4 py-2 mb-6"
            >
              <span className="text-cyan-400 font-medium">About GreekWave</span>
            </motion.div>

            <h2 className="text-section-title mb-6">
              Building the Future of
              <span className="gradient-text block">Intelligent Software</span>
            </h2>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              GreekWave Technologies is a technology company focused on building innovative SaaS products and AI-powered automation solutions that solve real-world business challenges. We turn ideas into practical, scalable software that helps businesses work smarter, operate efficiently, and grow confidently.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              From purpose-built platforms like BioeLve for clinics and diagnostic centers to intelligent automations that simplify everyday workflows, we create technology designed around real business needs. Our goal is to make powerful software and AI accessible, useful, and impactful for businesses of all sizes.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/services" className="btn-primary inline-flex items-center">
                Discover Our Products →
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-cyan-400/10 rounded-lg group-hover:bg-cyan-400/20 transition-colors">
                    <value.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
