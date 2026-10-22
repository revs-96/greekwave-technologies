'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  { category: 'Food & Hospitality', title: 'Smart Restaurant Operations & Customer Support', description: 'A connected workflow for order management, frequently asked questions, reservation requests, inventory alerts, and customer communications.', technologies: ['SaaS', 'Workflow Automation', 'AI Assistants'], image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&h=600&fit=crop', color: 'from-orange-500 to-amber-500' },
  { category: 'E-commerce', title: 'AI-Powered E-commerce Operations Assistant', description: 'An assistant that retrieves order information, answers product questions, summarizes customer requests, and routes eligible tasks to the appropriate workflow.', technologies: ['LLMs', 'Tool Calling', 'API Integrations'], image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&h=600&fit=crop', color: 'from-emerald-500 to-teal-500' },
  { category: 'Agentic AI', title: 'Multi-Agent Business Workflow Automation', description: 'A coordinated set of AI agents that plans tasks, retrieves relevant information, invokes approved tools, and hands sensitive or uncertain decisions to a human.', technologies: ['Agent Orchestration', 'Tool Calling', 'Human Approval'], image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop', color: 'from-blue-500 to-cyan-500' },
  { category: 'Model Context Protocol (MCP)', title: 'Connecting AI Assistants to Business Tools with MCP', description: 'A reference implementation that lets an AI assistant access approved tools and business data through MCP servers, with controlled permissions and auditable actions.', technologies: ['MCP', 'Tool Servers', 'Access Controls', 'Audit Logs'], image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=600&fit=crop', color: 'from-violet-500 to-purple-500' },
  { category: 'Small Language Models · Special Feature', title: 'Small Language Models for Private, Efficient Business AI', description: 'An exploration of using a task-specific SLM for structured document extraction, classification, and internal knowledge assistance where lower resource requirements or controlled deployment may be beneficial.', technologies: ['SLMs', 'Model Evaluation', 'Quantization', 'Local Inference'], image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&h=600&fit=crop', color: 'from-pink-500 to-rose-500' },
  { category: 'Document Intelligence', title: 'Intelligent Document Processing & Knowledge Retrieval', description: 'A document-processing pipeline that extracts key fields, indexes approved documents, retrieves relevant passages, and presents source-backed answers for human verification.', technologies: ['OCR', 'Embeddings', 'RAG', 'Structured Extraction'], image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&h=600&fit=crop', color: 'from-sky-500 to-indigo-500' },
]

export default function CaseStudiesPage() {
  return (
    <div className="bg-slate-900 pt-20">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 md:py-28">
        <div className="absolute inset-0 wave-pattern opacity-20" />
        <div className="container-custom relative z-10 mx-auto text-center">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">Insights · Case Studies</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-hero mb-6">Technical Concepts &amp;<span className="gradient-text block">Solution Demonstrations</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300 md:text-2xl">Explore illustrative use cases for modern SaaS platforms, AI automation, and applied AI systems. These concepts demonstrate what GreekWave can build—not verified client outcomes.</motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.article key={study.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.06 }} viewport={{ once: true }} className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50 transition-all hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-400/10">
              <div className="relative"><Image src={study.image} alt={study.title} width={900} height={600} className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105" /><div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-20`} /></div>
              <div className="p-6"><p className="mb-3 text-xs font-semibold uppercase tracking-wider text-cyan-400">{study.category}</p><h2 className="mb-4 text-2xl font-bold text-white">{study.title}</h2><p className="mb-6 leading-relaxed text-gray-300">{study.description}</p><div className="mb-6 flex flex-wrap gap-2">{study.technologies.map((technology) => <span key={technology} className="rounded-full bg-slate-700/70 px-3 py-1 text-xs text-gray-300">{technology}</span>)}</div><Link href="/contact" className="inline-flex items-center gap-2 font-medium text-cyan-400 hover:text-cyan-300">Discuss this solution <ArrowRight className="h-4 w-4" /></Link></div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  )
}
