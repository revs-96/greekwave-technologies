'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Clock, Eye, MessageSquare, Cog } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: 'Smart Manufacturing Quality Control System',
      client: 'TechCorp Industries',
      industry: 'Manufacturing',
      category: 'Computer Vision',
      description: 'Implemented an AI-powered quality control system that revolutionized manufacturing processes by automatically detecting defects and anomalies in real-time.',
      challenge: 'TechCorp was experiencing high defect rates and manual quality control was slow and inconsistent, leading to customer complaints and increased costs.',
      solution: 'We developed a computer vision system using advanced deep learning models to automatically inspect products on the assembly line, identifying defects with 99.2% accuracy.',
      results: [
        { icon: TrendingUp, label: 'Defect Reduction', value: '85%', description: 'Significant decrease in product defects' },
        { icon: Clock, label: 'Time Saved', value: '40%', description: 'Faster quality control process' },
        { icon: Users, label: 'ROI Increase', value: '300%', description: 'Return on investment within 6 months' },
      ],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      technologies: ['TensorFlow', 'OpenCV', 'Python', 'Docker', 'AWS'],
      timeline: '4 months',
      testimonial: {
        quote: 'GreekWave\'s solution exceeded our expectations. The AI system has transformed our quality control process and saved us millions in operational costs.',
        author: 'Sarah Johnson',
        position: 'CTO, TechCorp Industries',
      },
    },
    {
      id: 2,
      title: 'Intelligent Customer Service Chatbot',
      client: 'RetailMax Solutions',
      industry: 'Retail',
      category: 'Natural Language Processing',
      description: 'Developed an advanced NLP-powered chatbot that handles customer inquiries with human-like understanding and provides personalized responses.',
      challenge: 'RetailMax was overwhelmed with customer service requests, leading to long wait times and decreased customer satisfaction.',
      solution: 'We created an intelligent chatbot using state-of-the-art NLP models that can understand context, sentiment, and provide accurate responses to customer queries.',
      results: [
        { icon: Users, label: 'Query Resolution', value: '90%', description: 'Automated resolution rate' },
        { icon: Clock, label: 'Response Time', value: '2s', description: 'Average response time' },
        { icon: TrendingUp, label: 'Satisfaction', value: '95%', description: 'Customer satisfaction score' },
      ],
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
      technologies: ['BERT', 'GPT-3', 'Node.js', 'React', 'MongoDB'],
      timeline: '3 months',
      testimonial: {
        quote: 'The chatbot has revolutionized our customer service. We now handle 90% of inquiries automatically while maintaining excellent customer satisfaction.',
        author: 'Michael Chen',
        position: 'Head of Operations, RetailMax Solutions',
      },
    },
    {
      id: 3,
      title: 'Predictive Maintenance System',
      client: 'Energy Solutions Inc.',
      industry: 'Energy',
      category: 'Predictive Analytics',
      description: 'Built a comprehensive predictive maintenance system that prevents equipment failures and optimizes maintenance schedules using IoT data and machine learning.',
      challenge: 'Energy Solutions faced frequent unexpected equipment failures, resulting in costly downtime and emergency repairs.',
      solution: 'We developed a predictive analytics platform that analyzes sensor data to predict equipment failures before they occur, enabling proactive maintenance.',
      results: [
        { icon: Clock, label: 'Downtime Reduction', value: '60%', description: 'Significant reduction in unplanned downtime' },
        { icon: TrendingUp, label: 'Cost Savings', value: '$2M', description: 'Annual maintenance cost savings' },
        { icon: Users, label: 'Efficiency Gain', value: '45%', description: 'Overall operational efficiency improvement' },
      ],
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
      technologies: ['Python', 'Scikit-learn', 'Apache Kafka', 'InfluxDB', 'Grafana'],
      timeline: '5 months',
      testimonial: {
        quote: 'The predictive maintenance system has been a game-changer. We\'ve reduced downtime by 60% and saved over $2 million in maintenance costs.',
        author: 'Emily Rodriguez',
        position: 'VP of Engineering, Energy Solutions Inc.',
      },
    },
    {
      id: 4,
      title: 'AI-Powered Fraud Detection System',
      client: 'SecureBank Financial',
      industry: 'Financial Services',
      category: 'Machine Learning',
      description: 'Developed a sophisticated fraud detection system that identifies suspicious transactions in real-time using advanced machine learning algorithms.',
      challenge: 'SecureBank was experiencing increasing fraud losses and needed a system that could detect fraudulent activities without impacting legitimate transactions.',
      solution: 'We created a multi-layered ML system that analyzes transaction patterns, user behavior, and risk factors to identify potential fraud with high accuracy.',
      results: [
        { icon: TrendingUp, label: 'Fraud Detection', value: '98%', description: 'Fraud detection accuracy' },
        { icon: Clock, label: 'Processing Time', value: '50ms', description: 'Real-time transaction analysis' },
        { icon: Users, label: 'False Positives', value: '0.1%', description: 'Minimal impact on legitimate users' },
      ],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      technologies: ['XGBoost', 'Apache Spark', 'Kafka', 'Redis', 'PostgreSQL'],
      timeline: '6 months',
      testimonial: {
        quote: 'The fraud detection system has dramatically improved our security posture while maintaining excellent user experience.',
        author: 'David Thompson',
        position: 'Chief Risk Officer, SecureBank Financial',
      },
    },
    {
      id: 5,
      title: 'Automated Document Processing Platform',
      client: 'LegalTech Partners',
      industry: 'Legal',
      category: 'Document AI',
      description: 'Created an intelligent document processing system that automatically extracts, classifies, and analyzes legal documents using advanced NLP techniques.',
      challenge: 'LegalTech Partners needed to process thousands of legal documents daily, which was time-consuming and prone to human error.',
      solution: 'We built an AI platform that uses OCR, NLP, and machine learning to automatically process, categorize, and extract key information from legal documents.',
      results: [
        { icon: Clock, label: 'Processing Speed', value: '95%', description: 'Faster document processing' },
        { icon: TrendingUp, label: 'Accuracy', value: '99%', description: 'Information extraction accuracy' },
        { icon: Users, label: 'Cost Reduction', value: '70%', description: 'Operational cost savings' },
      ],
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
      technologies: ['spaCy', 'Tesseract', 'FastAPI', 'PostgreSQL', 'Docker'],
      timeline: '4 months',
      testimonial: {
        quote: 'This platform has transformed our document processing workflow. We can now handle 10x more documents with the same team.',
        author: 'Lisa Wang',
        position: 'Managing Partner, LegalTech Partners',
      },
    },
    {
      id: 6,
      title: 'Smart Inventory Management System',
      client: 'GlobalSupply Corp',
      industry: 'Supply Chain',
      category: 'Predictive Analytics',
      description: 'Developed an AI-driven inventory management system that optimizes stock levels, predicts demand, and reduces waste across multiple warehouses.',
      challenge: 'GlobalSupply struggled with inventory optimization, leading to stockouts, overstock situations, and increased carrying costs.',
      solution: 'We created a predictive analytics system that analyzes historical data, market trends, and external factors to optimize inventory levels and predict demand.',
      results: [
        { icon: TrendingUp, label: 'Inventory Optimization', value: '35%', description: 'Reduction in excess inventory' },
        { icon: Clock, label: 'Stockout Reduction', value: '80%', description: 'Fewer out-of-stock situations' },
        { icon: Users, label: 'Cost Savings', value: '$5M', description: 'Annual operational savings' },
      ],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
      technologies: ['Prophet', 'Pandas', 'Flask', 'MySQL', 'Tableau'],
      timeline: '5 months',
      testimonial: {
        quote: 'The inventory management system has revolutionized our supply chain operations and saved us millions in carrying costs.',
        author: 'Robert Kim',
        position: 'COO, GlobalSupply Corp',
      },
    },
  ]

  const categories = ['All', 'Computer Vision', 'Natural Language Processing', 'Predictive Analytics', 'Machine Learning', 'Document AI']
  const industries = ['All', 'Manufacturing', 'Retail', 'Energy', 'Financial Services', 'Legal', 'Supply Chain']

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-20" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-hero mb-6">
              Case Studies &
              <span className="gradient-text block">Success Stories</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Discover how we've helped businesses across industries leverage AI to solve complex challenges 
              and achieve measurable results that drive growth and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-slate-800/50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Category Filter */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">By Technology</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      index === 0
                        ? 'bg-cyan-400 text-slate-900'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-cyan-400'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Industry Filter */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">By Industry</h3>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry, index) => (
                  <motion.button
                    key={industry}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      index === 0
                        ? 'bg-cyan-400 text-slate-900'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-cyan-400'
                    }`}
                  >
                    {industry}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={study.image}
                      alt={study.title}
                      width={800}
                      height={600}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="bg-slate-900/80 backdrop-blur-sm text-cyan-400 px-4 py-2 rounded-full font-medium">
                        {study.category}
                      </span>
                    </div>

                    {/* Industry Badge */}
                    <div className="absolute top-6 right-6">
                      <span className="bg-slate-900/80 backdrop-blur-sm text-gray-300 px-4 py-2 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="mb-4">
                    <span className="text-cyan-400 font-medium">{study.client}</span>
                    <span className="text-gray-400 mx-2">•</span>
                    <span className="text-gray-400">{study.timeline}</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    {study.title}
                  </h2>

                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Challenge & Solution */}
                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Challenge</h3>
                      <p className="text-gray-400 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Solution</h3>
                      <p className="text-gray-400 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

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
                        <div className="text-sm text-gray-400 mb-1">
                          {result.label}
                        </div>
                        <div className="text-xs text-gray-500">
                          {result.description}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-8">
                    <blockquote className="text-gray-300 italic mb-4">
                      "{study.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-semibold text-white">
                          {study.testimonial.author}
                        </div>
                        <div className="text-sm text-cyan-400">
                          {study.testimonial.position}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium text-lg group"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-cyan-400/10 to-blue-500/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results with our AI solutions. 
              Every great success story starts with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className="btn-primary text-lg px-10 py-4">
                  Start Your Project
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/services" className="btn-secondary text-lg px-10 py-4">
                  Explore Services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}