'use client'

import { motion } from 'framer-motion'
import { Eye, MessageSquare, TrendingUp, Cog, Brain, Zap, CheckCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Advanced image and video analysis solutions that enable machines to see, understand, and interpret visual data with human-like accuracy.',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop',
      features: [
        'Object Detection & Recognition',
        'Facial Recognition Systems',
        'Quality Control Automation',
        'Medical Image Analysis',
        'Autonomous Vehicle Vision',
        'Augmented Reality Integration',
      ],
      useCases: [
        'Manufacturing quality control',
        'Security and surveillance',
        'Healthcare diagnostics',
        'Retail analytics',
      ],
      technologies: ['OpenCV', 'TensorFlow', 'PyTorch', 'YOLO', 'ResNet'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Intelligent text analysis and language understanding systems that enable machines to comprehend, interpret, and generate human language.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop',
      features: [
        'Sentiment Analysis',
        'Chatbots & Virtual Assistants',
        'Text Classification',
        'Language Translation',
        'Document Processing',
        'Voice Recognition',
      ],
      useCases: [
        'Customer service automation',
        'Content moderation',
        'Document analysis',
        'Voice assistants',
      ],
      technologies: ['BERT', 'GPT', 'spaCy', 'NLTK', 'Transformers'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Data-driven insights and forecasting models that help businesses make informed decisions and optimize operations for better outcomes.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      features: [
        'Demand Forecasting',
        'Risk Assessment',
        'Customer Analytics',
        'Market Trend Analysis',
        'Predictive Maintenance',
        'Financial Modeling',
      ],
      useCases: [
        'Supply chain optimization',
        'Financial risk management',
        'Customer behavior prediction',
        'Equipment maintenance',
      ],
      technologies: ['Scikit-learn', 'XGBoost', 'Prophet', 'Apache Spark', 'R'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Cog,
      title: 'Automation Systems',
      description: 'Intelligent automation solutions that streamline workflows, reduce manual tasks, and increase operational efficiency across industries.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
      features: [
        'Process Automation',
        'Workflow Optimization',
        'Smart Scheduling',
        'Resource Management',
        'Robotic Process Automation',
        'IoT Integration',
      ],
      useCases: [
        'Manufacturing automation',
        'Business process optimization',
        'Smart building management',
        'Supply chain automation',
      ],
      technologies: ['UiPath', 'Blue Prism', 'Automation Anywhere', 'Python', 'Node.js'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Custom ML models and algorithms tailored to your specific business needs, enabling data-driven decision making and intelligent automation.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      features: [
        'Custom Model Development',
        'Deep Learning Solutions',
        'Neural Network Design',
        'Algorithm Optimization',
        'Model Training & Deployment',
        'Performance Monitoring',
      ],
      useCases: [
        'Recommendation systems',
        'Fraud detection',
        'Image classification',
        'Time series analysis',
      ],
      technologies: ['TensorFlow', 'PyTorch', 'Keras', 'MLflow', 'Kubeflow'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Zap,
      title: 'AI Integration',
      description: 'Seamless integration of AI capabilities into existing systems and applications, ensuring smooth deployment and optimal performance.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      features: [
        'API Development',
        'System Integration',
        'Cloud Deployment',
        'Performance Optimization',
        'Legacy System Modernization',
        'Scalability Solutions',
      ],
      useCases: [
        'Enterprise system integration',
        'Cloud migration',
        'API development',
        'Performance optimization',
      ],
      technologies: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP'],
      color: 'from-yellow-500 to-orange-500',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs, data, and objectives to design the perfect AI solution.',
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'We create a comprehensive roadmap and technical architecture for your AI implementation.',
    },
    {
      step: '03',
      title: 'Development & Training',
      description: 'Our experts develop and train custom AI models using your data and requirements.',
    },
    {
      step: '04',
      title: 'Testing & Validation',
      description: 'Rigorous testing ensures your AI solution meets performance and accuracy standards.',
    },
    {
      step: '05',
      title: 'Deployment & Integration',
      description: 'We seamlessly integrate the AI solution into your existing systems and workflows.',
    },
    {
      step: '06',
      title: 'Monitoring & Support',
      description: 'Ongoing monitoring and support ensure optimal performance and continuous improvement.',
    },
  ]

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
              AI Services &
              <span className="gradient-text block">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Comprehensive AI solutions designed to transform your business operations, 
              enhance decision-making, and drive sustainable growth across all industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-slate-800/50">
        <div className="container-custom">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
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
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`} />
                    
                    {/* Icon Overlay */}
                    <div className="absolute top-6 left-6">
                      <div className={`p-4 bg-gradient-to-br ${service.color} rounded-xl`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    {service.title}
                  </h2>

                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-white">Key Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-white">Use Cases</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase) => (
                        <span
                          key={useCase}
                          className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-white">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`bg-gradient-to-r ${service.color} text-white px-3 py-1 rounded-full text-sm font-medium`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium text-lg group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-section-title mb-6">
              Our AI Development
              <span className="gradient-text block">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We follow a proven methodology to ensure successful AI implementation 
              that delivers measurable results for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:scale-105 transition-transform duration-300 relative"
              >
                <div className="text-4xl font-bold gradient-text mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
                
                {/* Connection Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
                )}
              </motion.div>
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
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can address your specific challenges 
              and drive measurable results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className="btn-primary text-lg px-10 py-4">
                  Get Started Today
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/case-studies" className="btn-secondary text-lg px-10 py-4">
                  View Case Studies
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}