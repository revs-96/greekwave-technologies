'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CTO',
      company: 'TechCorp Industries',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: 'GreekWave Technologies transformed our manufacturing process with their AI-powered quality control system. The results exceeded our expectations, reducing defects by 85% and saving us millions in operational costs.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Head of Operations',
      company: 'RetailMax Solutions',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'The chatbot solution they developed has revolutionized our customer service. We now handle 90% of inquiries automatically while maintaining a 95% customer satisfaction rate. Absolutely incredible work!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'VP of Engineering',
      company: 'Energy Solutions Inc.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'Their predictive maintenance system has been a game-changer for our operations. We\'ve reduced equipment downtime by 60% and saved over $2 million in maintenance costs. The ROI has been phenomenal.',
      rating: 5,
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'CEO',
      company: 'InnovateTech',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: 'Working with GreekWave has been an exceptional experience. Their team\'s expertise in AI and machine learning is unmatched, and they delivered a solution that perfectly aligned with our business goals.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Lisa Wang',
      position: 'Director of Innovation',
      company: 'FutureCorp',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      content: 'The AI integration they provided has streamlined our entire workflow. The team was professional, responsive, and delivered exactly what they promised. I highly recommend their services.',
      rating: 5,
    },
    {
      id: 6,
      name: 'Robert Kim',
      position: 'Chief Data Officer',
      company: 'DataDriven Inc.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
      content: 'GreekWave\'s predictive analytics solution has given us insights we never thought possible. Their approach to machine learning is sophisticated yet practical, delivering real business value.',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="section-padding bg-slate-900">
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
            <span className="text-cyan-400 font-medium">Testimonials</span>
          </motion.div>

          <h2 className="text-section-title mb-6">
            What Our Clients
            <span className="gradient-text block">Say About Us</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders have to say about 
            their experience working with GreekWave Technologies.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card h-full hover:scale-105 transition-all duration-300 relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="h-12 w-12 text-cyan-400" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-300 mb-6 leading-relaxed relative z-10">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div className="absolute inset-0 rounded-full ring-2 ring-cyan-400/30 group-hover:ring-cyan-400/60 transition-all" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.position}
                    </div>
                    <div className="text-sm text-cyan-400">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { number: '98%', label: 'Client Satisfaction' },
            { number: '50+', label: 'Happy Clients' },
            { number: '100+', label: 'Projects Delivered' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700 hover:border-cyan-400/30 transition-colors"
            >
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

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
              Join Our Growing List of Satisfied Clients
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the same level of excellence and innovation that our clients rave about.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="btn-primary text-lg px-10 py-4">
                Get Your Free Consultation
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials