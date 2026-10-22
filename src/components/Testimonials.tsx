'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FileText, Quote, Star, TrendingUp, Users } from 'lucide-react'

const testimonials = [
  { industry: 'Healthcare', accent: 'bg-blue-500/20 text-blue-300', name: 'Dr. Priya Nair', position: 'Medical Director', company: 'Sri Sai Diagnostics', portrait: '/testimonials/priya.png', logo: '/testimonials/sri-sai.png', text: 'BioeLve has made a huge difference in our daily operations. Appointment scheduling, patient records and diagnostic workflows are now streamlined and easy to manage. The team was responsive and understood our needs from the beginning.' },
  { industry: 'Education & EdTech', accent: 'bg-blue-500/20 text-blue-300', name: 'Rohit Sharma', position: 'Principal', company: 'Green Valley Public School', portrait: '/testimonials/rohit.png', logo: '/testimonials/green-valley.png', text: 'The platform has simplified our student management and reduced a lot of manual work. Our teachers and students find it easy to use, and the support team is always helpful.' },
  { industry: 'Finance & Accounting', accent: 'bg-violet-500/20 text-violet-300', name: 'Anjali Mehta', position: 'Senior Accountant', company: 'Vardhan & Co.', portrait: '/testimonials/anjali.png', logo: '/testimonials/vardhan.png', text: 'The automation solution helped us process invoices and documents much faster. It reduced errors and saved our team a lot of time. The implementation was smooth and well structured.' },
  { industry: 'Food & Hospitality', accent: 'bg-orange-500/20 text-orange-300', name: 'Karthik Reddy', position: 'Operations Manager', company: 'Spice Route Restaurant', portrait: '/testimonials/karthik.png', logo: '/testimonials/spice-route.png', text: 'The restaurant management system has helped us handle orders, inventory and staff schedules more efficiently. It’s simple to use and fits well with our daily operations.' },
  { industry: 'E-commerce', accent: 'bg-emerald-500/20 text-emerald-300', name: 'Sneha Iyer', position: 'Founder & CEO', company: 'UrbanCart', portrait: '/testimonials/sneha.png', logo: '/testimonials/urbancart.png', text: 'The AI-powered support assistant has improved our customer response time and reduced repetitive queries. It’s been a great addition to our support team.' },
  { industry: 'Agentic AI / Automation', accent: 'bg-cyan-500/20 text-cyan-300', name: 'Arun Patel', position: 'IT Head', company: 'NextGen Manufacturing', portrait: '/testimonials/arun.png', logo: '/testimonials/nextgen.png', text: 'The agentic AI solution has helped us automate complex workflows across multiple systems. It understands our process well and takes the right actions, reducing manual effort significantly.' },
]

const Testimonials = () => (
  <section id="testimonials" className="section-padding bg-[#0B1426]">
    <div className="container-custom">
      <motion.header initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mx-auto mb-16 max-w-4xl text-center">
        <div className="mb-6 inline-block rounded-full border border-cyan-400/60 bg-cyan-400/5 px-5 py-2"><span className="font-medium text-cyan-300">Testimonials</span></div>
        <h2 className="text-section-title mb-6">What Our Clients<span className="gradient-text block">Say About Us</span></h2>
        <p className="text-xl leading-relaxed text-[#B9C8DF]">Real feedback from businesses we&apos;ve worked with. See how our SaaS products and AI-powered solutions are helping organizations achieve their goals.</p>
      </motion.header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.article key={testimonial.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: index * 0.06 }} viewport={{ once: true }} className="flex min-h-[340px] flex-col rounded-xl border border-[#164875] bg-[#0D1B31] p-6 shadow-[0_0_24px_rgba(34,211,238,0.04)] transition-colors hover:border-cyan-400/60">
            <div className="mb-4 flex items-start justify-between gap-4"><Quote aria-hidden="true" className="h-8 w-8 shrink-0 fill-cyan-400 text-cyan-400" /><span className={`rounded-full px-3 py-1 text-xs font-medium ${testimonial.accent}`}>{testimonial.industry}</span></div>
            <blockquote className="mb-5 flex-1 leading-relaxed text-[#D5E3F8]">{testimonial.text}</blockquote>
            <div className="mb-4 flex" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, star) => <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />)}</div>
            <div className="flex items-center justify-between gap-3 border-t border-[#164875] pt-4">
              <div className="flex min-w-0 items-center gap-3"><Image src={testimonial.portrait} alt={testimonial.name} width={62} height={62} className="h-[62px] w-[62px] shrink-0 rounded-full border border-cyan-400/60 object-cover" /><div className="min-w-0"><p className="font-semibold text-white">{testimonial.name}</p><p className="text-sm text-[#8EBAF4]">{testimonial.position}</p><p className="text-sm text-[#D5E3F8]">{testimonial.company}</p></div></div>
              <Image src={testimonial.logo} alt={`${testimonial.company} logo`} width={100} height={64} className="max-h-14 w-auto max-w-[92px] object-contain" />
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mt-8 grid overflow-hidden rounded-2xl border border-[#164875] bg-[#0D1B31] md:grid-cols-3">
        <div className="flex items-center gap-5 p-7 md:border-r md:border-[#164875]"><div className="rounded-xl bg-cyan-400/10 p-4"><FileText className="h-8 w-8 text-cyan-400" /></div><div><p className="text-4xl font-bold text-cyan-400">10+</p><p className="text-lg text-[#B9C8DF]">Projects Delivered</p></div></div>
        <div className="flex items-center gap-5 p-7 md:border-r md:border-[#164875]"><div className="rounded-xl bg-cyan-400/10 p-4"><Users className="h-8 w-8 text-cyan-400" /></div><div><p className="text-4xl font-bold text-cyan-400">8</p><p className="text-lg text-[#B9C8DF]">Happy Clients</p></div></div>
        <div className="flex items-center gap-5 p-7"><div className="rounded-xl bg-cyan-400/10 p-4"><TrendingUp className="h-8 w-8 text-cyan-400" /></div><p className="max-w-xs leading-relaxed text-[#B9C8DF]">Building long-term partnerships through innovation, trust and measurable results.</p></div>
      </motion.div>
    </div>
  </section>
)

export default Testimonials
