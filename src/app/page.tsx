'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import CaseStudies from '@/components/CaseStudies'
import Testimonials from '@/components/Testimonials'
import Blog from '@/components/Blog'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Blog />
      <CTA />
    </div>
  )
}