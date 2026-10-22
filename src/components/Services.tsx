'use client'

import { motion } from 'framer-motion'
import { BookOpen, Heart, Landmark, ShoppingCart, Utensils } from 'lucide-react'
import Link from 'next/link'

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Healthcare & Medical',
      description: 'Purpose-built healthcare software to help clinics and diagnostic centers manage daily operations efficiently.',
      features: ['Clinic Management Systems', 'Diagnostic Center Workflows', 'Appointments & Patient Records', 'Healthcare Workflow Automation'],
      color: 'from-pink-500 to-rose-500',
      cta: 'Explore BioeLve',
      href: '/services#healthcare-medical',
    },
    {
      icon: BookOpen,
      title: 'Education & EdTech',
      description: 'Digital platforms that simplify educational administration and enhance learning experiences.',
      features: ['Student & Course Management', 'Learning Management Systems', 'Administrative Automation', 'AI Learning Assistants'],
      color: 'from-blue-500 to-cyan-500',
      cta: 'Learn More',
      href: '/services#education-edtech',
    },
    {
      icon: Utensils,
      title: 'Food, Restaurants & Hospitality',
      description: 'Smart software to streamline hospitality operations and improve customer service.',
      features: ['Restaurant Management', 'Reservations & Order Workflows', 'Inventory & Staff Management', 'Customer Service Automation'],
      color: 'from-orange-500 to-amber-500',
      cta: 'Learn More',
      href: '/services#food-hospitality',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce & Digital Platforms',
      description: 'Scalable digital solutions that simplify online selling and automate everyday operations.',
      features: ['E-commerce Platform Development', 'Order & Inventory Management', 'AI Customer Support', 'Sales & Business Analytics'],
      color: 'from-emerald-500 to-teal-500',
      cta: 'Learn More',
      href: '/services#ecommerce-platforms',
    },
    {
      icon: Landmark,
      title: 'Finance, Accounting & Insurance',
      description: 'Intelligent tools that simplify financial workflows, document handling, and business reporting.',
      features: ['Accounting Workflow Automation', 'Invoice & Document Processing', 'Financial Reports & Dashboards', 'Insurance Process Automation'],
      color: 'from-violet-500 to-purple-500',
      cta: 'Learn More',
      href: '/services#finance-insurance',
    },
  ]

  return (
    <section id="services" className="section-padding bg-slate-900">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block bg-cyan-400/10 border border-cyan-400/30 rounded-full px-4 py-2 mb-6"
          >
            <span className="text-cyan-400 font-medium">Our Services</span>
          </motion.div>

          <h2 className="text-section-title mb-6">
            Intelligent Solutions
            <span className="gradient-text block">for Every Industry</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From industry-focused SaaS products to AI-powered automation, we build digital solutions that simplify operations, improve efficiency, and help businesses grow.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card h-full hover:scale-105 transition-all duration-300 relative overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.div
                    className="mt-6 pt-6 border-t border-slate-700"
                    whileHover={{ x: 5 }}
                  >
                    <Link href={service.href} className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center space-x-2 group-hover:underline">
                      <span>{service.cta}</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can drive innovation and growth for your organization.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="btn-primary text-lg px-10 py-4">
                Schedule a Consultation
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
