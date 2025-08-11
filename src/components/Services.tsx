'use client'

import { motion } from 'framer-motion'
import { Eye, MessageSquare, TrendingUp, Cog, Brain, Zap } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Advanced image and video analysis solutions for object detection, facial recognition, and quality control systems.',
      features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Quality Control'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Intelligent text analysis, chatbots, and language understanding systems that enhance customer interactions.',
      features: ['Sentiment Analysis', 'Chatbots', 'Text Classification', 'Language Translation'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Data-driven insights and forecasting models that help businesses make informed decisions and optimize operations.',
      features: ['Demand Forecasting', 'Risk Assessment', 'Customer Analytics', 'Market Trends'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Cog,
      title: 'Automation Systems',
      description: 'Intelligent automation solutions that streamline workflows and increase operational efficiency across industries.',
      features: ['Process Automation', 'Workflow Optimization', 'Smart Scheduling', 'Resource Management'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Custom ML models and algorithms tailored to your specific business needs and data requirements.',
      features: ['Custom Models', 'Deep Learning', 'Neural Networks', 'Algorithm Development'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Zap,
      title: 'AI Integration',
      description: 'Seamless integration of AI capabilities into existing systems and applications for enhanced functionality.',
      features: ['API Integration', 'System Migration', 'Cloud Deployment', 'Performance Optimization'],
      color: 'from-yellow-500 to-orange-500',
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
            Comprehensive AI Solutions
            <span className="gradient-text block">for Every Business Need</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From computer vision to natural language processing, we offer a complete suite of AI services 
            designed to transform your business operations and drive innovation.
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
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center space-x-2 group-hover:underline">
                      <span>Learn More</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </button>
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