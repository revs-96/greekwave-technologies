'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Calendar, Phone } from 'lucide-react'
import Link from 'next/link'

const CTA = () => {
  const ctaOptions = [
    {
      icon: MessageCircle,
      title: 'Free Consultation',
      description: 'Get expert advice on your AI project',
      action: 'Schedule Now',
      href: '/contact',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Calendar,
      title: 'Book a Demo',
      description: 'See our AI solutions in action',
      action: 'Book Demo',
      href: '/demo',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our AI experts',
      action: 'Call Now',
      href: 'tel:+918977094517',
      color: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 wave-pattern opacity-20" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

      <div className="container-custom relative z-10">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block bg-cyan-400/10 border border-cyan-400/30 rounded-full px-6 py-3 mb-8"
          >
            <span className="text-cyan-400 font-medium text-lg">Ready to Get Started?</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Business
            <span className="gradient-text block">with AI Today</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join the AI revolution and unlock your business potential. Our expert team is ready 
            to help you implement cutting-edge AI solutions that drive real results.
          </p>

          {/* Primary CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center space-x-2 text-xl px-12 py-5"
              >
                <span>Start Your AI Journey</span>
                <ArrowRight className="h-6 w-6" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/services"
                className="btn-secondary inline-flex items-center space-x-2 text-xl px-12 py-5"
              >
                <span>Explore Services</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CTA Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ctaOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={option.href}>
                <div className="card text-center hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${option.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <option.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                      {option.title}
                    </h3>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {option.description}
                    </p>

                    {/* Action Button */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium group-hover:underline"
                    >
                      <span>{option.action}</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Have Questions? We're Here to Help
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team of AI experts is available to discuss your project requirements 
              and help you find the perfect solution for your business needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-cyan-400 font-semibold mb-2">Email Us</div>
                <a 
                  href="mailto:greekwavetech@zohomail.in" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  greekwavetech@zohomail.in
                </a>
              </div>
              <div>
                <div className="text-cyan-400 font-semibold mb-2">Call Us</div>
                <a 
                  href="tel:+918977094517" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  +91 8977094517
                </a>
              </div>
              <div>
                <div className="text-cyan-400 font-semibold mb-2">Office Hours</div>
                <div className="text-gray-300">
                  Mon-Fri: 9AM-6PM IST
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 mt-16 opacity-60"
        >
          <div className="text-sm text-gray-400">Trusted by 50+ companies worldwide</div>
          <div className="text-sm text-gray-400">•</div>
          <div className="text-sm text-gray-400">ISO 27001 Certified</div>
          <div className="text-sm text-gray-400">•</div>
          <div className="text-sm text-gray-400">GDPR Compliant</div>
          <div className="text-sm text-gray-400">•</div>
          <div className="text-sm text-gray-400">24/7 Support</div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA