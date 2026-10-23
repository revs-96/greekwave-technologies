'use client'

import { motion } from 'framer-motion'
import { Layers, Workflow, Bot, Network, FileText, BarChart3, CheckCircle, ArrowRight, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { industries } from '@/data/industries'

export default function ServicesPage() {
  const services = [
    {
      icon: Layers,
      title: 'SaaS Product Development',
      description: 'End-to-end design and development of web-based SaaS products, from the first prototype to a secure, scalable platform.',
      features: ['Custom web applications', 'Multi-user & role-based access', 'Admin portals & dashboards', 'Cloud hosting & deployment'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Workflow,
      title: 'AI-Powered Workflow Automation',
      description: 'Automate repetitive, rule-based work so your team can focus on customers and decisions that matter.',
      features: ['Business process automation', 'Approvals & notifications', 'System & API integrations', 'Scheduled tasks & reports'],
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Bot,
      title: 'AI Assistants & Chatbots',
      description: 'Conversational assistants that answer customer and staff questions using your own approved information.',
      features: ['Customer support assistants', 'Internal knowledge assistants', 'Website & WhatsApp chatbots', 'Hand-off to a human when needed'],
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Network,
      title: 'Agentic AI & MCP Integrations',
      description: 'AI agents that plan tasks and act across your business tools, with controlled permissions and human approval.',
      features: ['Multi-agent workflows', 'Tool calling & API actions', 'Model Context Protocol (MCP) servers', 'Audit logs & human-in-the-loop'],
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: FileText,
      title: 'Document Intelligence',
      description: 'Turn invoices, forms and reports into structured data, and find answers across your documents in seconds.',
      features: ['OCR & data extraction', 'Document classification', 'Search across documents (RAG)', 'Source-backed answers'],
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Dashboards',
      description: 'Clear, real-time views of your operations so you can track performance and act on what the data shows.',
      features: ['Business KPI dashboards', 'Automated reports', 'Sales & operations analytics', 'Data integration'],
      color: 'from-sky-500 to-indigo-500',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We learn how your business works today and identify where software and automation will have the most impact.',
    },
    {
      step: '02',
      title: 'Planning & Design',
      description: 'We define the scope, user flows and technical architecture, and agree on a clear delivery plan.',
    },
    {
      step: '03',
      title: 'Development',
      description: 'We build in short iterations and share working versions regularly so you can give feedback early.',
    },
    {
      step: '04',
      title: 'Testing',
      description: 'Every release is tested for functionality, security and performance before it reaches your users.',
    },
    {
      step: '05',
      title: 'Launch & Training',
      description: 'We deploy the solution, integrate it with your existing tools and help your team get comfortable with it.',
    },
    {
      step: '06',
      title: 'Support & Improvement',
      description: 'Ongoing maintenance, updates and new features as your business grows.',
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
              Our Services &
              <span className="gradient-text block">Industries We Serve</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              We build SaaS products and AI-powered automation that simplify operations,
              improve productivity and help businesses grow with confidence.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {industries.map((industry) => (
                <a
                  key={industry.id}
                  href={`#${industry.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800/60 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-cyan-400 hover:text-cyan-400"
                >
                  <industry.icon className="h-4 w-4" />
                  {industry.title}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Build */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-cyan-400/10 border border-cyan-400/30 rounded-full px-4 py-2 mb-6">
              <span className="text-cyan-400 font-medium">What We Build</span>
            </div>
            <h2 className="text-section-title mb-6">
              Software & AI Services
              <span className="gradient-text block">Tailored to Your Business</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Whether you need a complete product or want to add intelligence to the tools you already use,
              we deliver solutions that fit the way you work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card h-full group hover:border-cyan-400/60 transition-colors duration-300"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-slate-800/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-cyan-400/10 border border-cyan-400/30 rounded-full px-4 py-2 mb-6">
              <span className="text-cyan-400 font-medium">Industries We Serve</span>
            </div>
            <h2 className="text-section-title mb-6">
              Solutions Built
              <span className="gradient-text block">for Your Industry</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We combine our software and AI expertise with an understanding of each industry&apos;s
              day-to-day challenges.
            </p>
          </motion.div>

          <div className="space-y-20">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                id={industry.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`scroll-mt-28 grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      width={1000}
                      height={700}
                      className="w-full h-80 object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-20`} />

                    {/* Icon Overlay */}
                    <div className="absolute top-6 left-6">
                      <div className={`p-4 bg-gradient-to-br ${industry.color} rounded-xl`}>
                        <industry.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  {industry.product && (
                    <div className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 px-3 py-1 mb-4">
                      <Sparkles className="h-4 w-4 text-cyan-400" />
                      <span className="text-sm font-medium text-cyan-400">Featured product: {industry.product}</span>
                    </div>
                  )}
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    {industry.title}
                  </h2>

                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    {industry.overview}
                  </p>

                  {/* Solutions */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-white">What We Offer</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {industry.solutions.map((solution) => (
                        <div key={solution} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                          <span className="text-gray-300">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium text-lg group"
                  >
                    <span>{industry.product ? `Request a ${industry.product} Demo` : 'Discuss Your Project'}</span>
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
              How We
              <span className="gradient-text block">Work With You</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A simple, transparent process that keeps you involved from the first conversation
              to long-term support.
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
              Don&apos;t See Your Industry Listed?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We work with businesses of all kinds. Tell us about your challenges and we&apos;ll
              show you how software and AI can help.
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
