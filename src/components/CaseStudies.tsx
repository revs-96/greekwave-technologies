'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const featuredStudies = [
  {
    category: 'Healthcare & Medical · Featured Case Study',
    title: 'Modernizing Clinic & Diagnostic Center Operations with BioeLve',
    challenge: 'Clinics and diagnostic centers often manage appointments, patient information, administrative tasks, and daily workflows across disconnected systems.',
    solution: 'BioeLve is a SaaS solution designed to help healthcare providers centralize essential operational workflows, simplify administration, and improve day-to-day visibility.',
    capabilities: ['Digital patient and appointment workflows', 'Clinic and diagnostic center operations', 'Centralized information management', 'Opportunities for AI-powered administrative automation'],
    cta: 'Explore BioeLve', href: '/services#healthcare-medical', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&h=700&fit=crop', color: 'from-pink-500 to-rose-500',
  },
  {
    category: 'Education & EdTech · Featured Case Study',
    title: 'Building an Intelligent Education Management Platform',
    challenge: 'Educational institutions can struggle with fragmented student records, repetitive administrative work, and time-consuming communication between students, teachers, and administrators.',
    solution: 'A centralized education platform can bring student information, course administration, academic workflows, and AI-assisted support into one accessible system.',
    capabilities: ['Student and course management', 'Automated administrative workflows', 'AI-powered student support assistant', 'Intelligent search across approved learning materials'],
    cta: 'Read Case Study', href: '/case-studies', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&h=700&fit=crop', color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Finance & Accounting · Featured Case Study',
    title: 'Automating Financial Documents & Reporting Workflows',
    challenge: 'Finance teams spend considerable time handling invoices, extracting information from documents, reconciling records, and preparing recurring reports.',
    solution: 'An AI-assisted financial workflow can extract document data, classify records, flag exceptions, and prepare information for review before it enters accounting systems.',
    capabilities: ['Invoice and document data extraction', 'Intelligent classification and validation', 'Exception detection and human review', 'Automated report preparation'],
    cta: 'Read Case Study', href: '/case-studies', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1000&h=700&fit=crop', color: 'from-violet-500 to-purple-500',
  },
]

const CaseStudies = () => (
  <section id="case-studies" className="section-padding bg-slate-800/30">
    <div className="container-custom">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16 text-center">
        <div className="mb-6 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2"><span className="font-medium text-cyan-400">Featured Case Studies</span></div>
        <h2 className="text-section-title mb-6">Solution Concepts for <span className="gradient-text block">Real Business Challenges</span></h2>
        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300">Explore illustrative software and automation concepts designed around the needs of healthcare, education, and finance teams.</p>
      </motion.div>

      <div className="space-y-20">
        {featuredStudies.map((study, index) => (
          <motion.article key={study.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className={`grid items-center gap-12 lg:grid-cols-2 ${index % 2 ? 'lg:grid-flow-col-dense' : ''}`}>
            <div className={`relative overflow-hidden rounded-2xl ${index % 2 ? 'lg:col-start-2' : ''}`}>
              <Image src={study.image} alt={study.title} width={1000} height={700} className="h-80 w-full object-cover" />
              <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-20`} />
            </div>
            <div className={index % 2 ? 'lg:col-start-1 lg:row-start-1' : ''}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-cyan-400">{study.category}</p>
              <h3 className="mb-6 text-3xl font-bold text-white">{study.title}</h3>
              <div className="mb-6 space-y-2"><h4 className="font-semibold text-white">The challenge</h4><p className="leading-relaxed text-gray-400">{study.challenge}</p></div>
              <div className="mb-6 space-y-2"><h4 className="font-semibold text-white">The solution</h4><p className="leading-relaxed text-gray-400">{study.solution}</p></div>
              <div className="mb-8"><h4 className="mb-3 font-semibold text-white">Key capabilities</h4><ul className="space-y-2">{study.capabilities.map((capability) => <li key={capability} className="flex gap-2 text-sm text-gray-300"><span className="text-cyan-400">•</span>{capability}</li>)}</ul></div>
              <Link href={study.href} className="group inline-flex items-center gap-2 font-medium text-cyan-400 hover:text-cyan-300">{study.cta} <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mt-20 text-center">
        <div className="rounded-2xl border border-slate-600 bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-8 md:p-12">
          <h3 className="mb-4 text-3xl font-bold">Ready to Be Our Next Success Story?</h3>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">Let's discuss how we can help you solve business challenges with intelligent software, AI-powered automation, and tailored SaaS solutions.</p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-10 py-4 text-lg">Start Your Project <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </motion.div>
    </div>
  </section>
)

export default CaseStudies
