'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Clock } from 'lucide-react'
import Image from 'next/image'

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Smart Manufacturing Quality Control',
      client: 'TechCorp Industries',
      category: 'Computer Vision',
      description: 'Implemented an AI-powered quality control system that reduced defect rates by 85% and increased production efficiency.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      results: [
        { icon: TrendingUp, label: 'Defect Reduction', value: '85%' },
        { icon: Clock, label: 'Time Saved', value: '40%' },
        { icon: Users, label: 'ROI Increase', value: '300%' },
      ],
      tags: ['Computer Vision', 'Manufacturing', 'Quality Control'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Customer Service Chatbot',
      client: 'RetailMax Solutions',
      category: 'Natural Language Processing',
      description: 'Developed an intelligent chatbot that handles 90% of customer inquiries automatically, improving response times.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop',
      results: [
        { icon: Users, label: 'Query Resolution', value: '90%' },
        { icon: Clock, label: 'Response Time', value: '2s' },
        { icon: TrendingUp, label: 'Satisfaction', value: '95%' },
      ],
      tags: ['NLP', 'Chatbot', 'Customer Service'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Predictive Maintenance System',
      client: 'Energy Solutions Inc.',
      category: 'Predictive Analytics',
      description: 'Built a predictive maintenance system that prevents equipment failures and reduces downtime by 60%.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
      results: [
        { icon: Clock, label: 'Downtime Reduction', value: '60%' },
        { icon: TrendingUp, label: 'Cost Savings', value: '$2M' },
        { icon: Users, label: 'Efficiency Gain', value: '45%' },
      ],
      tags: ['Predictive Analytics', 'Maintenance', 'IoT'],
      color: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section id="case-studies" className="section-padding bg-slate-800/30">
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
            <span className="text-cyan-400 font-medium">Case Studies</span>
          </motion.div>

          <h2 className="text-section-title mb-6">
            Real Results from
            <span className="gradient-text block">Real Clients</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses across industries leverage AI to solve complex challenges 
            and achieve measurable results.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <motion.div
                className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={study.image}
                    alt={study.title}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-20`} />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-slate-900/80 backdrop-blur-sm text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {study.category}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4">
                    <span className="text-cyan-400 font-medium">{study.client}</span>
                  </div>

                  <h3 className="text-3xl font-bold mb-6 text-white">
                    {study.title}
                  </h3>

                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {study.results.map((result, resultIndex) => (
                      <motion.div
                        key={result.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + resultIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center"
                      >
                        <div className="flex justify-center mb-2">
                          <result.icon className="h-6 w-6 text-cyan-400" />
                        </div>
                        <div className="text-2xl font-bold gradient-text mb-1">
                          {result.value}
                        </div>
                        <div className="text-sm text-gray-400">
                          {result.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium group"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.div>
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
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Be Our Next Success Story?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results with our AI solutions.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="btn-primary text-lg px-10 py-4">
                Start Your Project
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudies