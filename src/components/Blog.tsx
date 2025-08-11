'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Manufacturing: Trends to Watch in 2025',
      excerpt: 'Explore the latest AI trends transforming manufacturing industries, from predictive maintenance to autonomous quality control systems.',
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=400&fit=crop',
      author: 'Dr. Alex Petrov',
      date: '2024-12-15',
      readTime: '8 min read',
      category: 'AI Trends',
      tags: ['Manufacturing', 'AI', 'Industry 4.0'],
    },
    {
      id: 2,
      title: 'Building Ethical AI: A Framework for Responsible Development',
      excerpt: 'Learn about the principles and practices that guide ethical AI development and how to implement them in your organization.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      author: 'Maria Gonzalez',
      date: '2024-12-10',
      readTime: '6 min read',
      category: 'Ethics',
      tags: ['Ethics', 'AI Development', 'Best Practices'],
    },
    {
      id: 3,
      title: 'Computer Vision in Healthcare: Revolutionizing Medical Diagnosis',
      excerpt: 'Discover how computer vision technology is transforming healthcare by enabling faster, more accurate medical diagnoses.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      author: 'Dr. Sarah Kim',
      date: '2024-12-05',
      readTime: '10 min read',
      category: 'Healthcare',
      tags: ['Computer Vision', 'Healthcare', 'Medical AI'],
    },
  ]

  const categories = ['All', 'AI Trends', 'Ethics', 'Healthcare', 'Technology', 'Case Studies']

  return (
    <section id="blog" className="section-padding bg-slate-800/30">
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
            <span className="text-cyan-400 font-medium">Latest Insights</span>
          </motion.div>

          <h2 className="text-section-title mb-6">
            AI Insights &
            <span className="gradient-text block">Thought Leadership</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with our latest articles on AI trends, best practices, 
            and industry insights from our team of experts.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                index === 0
                  ? 'bg-cyan-400 text-slate-900'
                  : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-cyan-400'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card h-full hover:scale-105 transition-all duration-300 overflow-hidden">
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  {/* Meta Info */}
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 mb-6 leading-relaxed flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <Link
                    href={`/blog/${post.id}`}
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium group-hover:underline mt-auto"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            Stay Updated with AI Insights
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest AI trends, insights, and updates 
            delivered directly to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-3"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>

        {/* View All Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium text-lg group"
          >
            <span>View All Posts</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog