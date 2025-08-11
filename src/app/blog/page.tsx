'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, User, Search, Tag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Manufacturing: Trends to Watch in 2025',
      excerpt: 'Explore the latest AI trends transforming manufacturing industries, from predictive maintenance to autonomous quality control systems that are revolutionizing production lines.',
      content: 'Manufacturing is undergoing a digital transformation powered by artificial intelligence...',
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&h=600&fit=crop',
      author: 'Dr. Alex Petrov',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      date: '2024-12-15',
      readTime: '8 min read',
      category: 'AI Trends',
      tags: ['Manufacturing', 'AI', 'Industry 4.0', 'Predictive Maintenance'],
      featured: true,
    },
    {
      id: 2,
      title: 'Building Ethical AI: A Framework for Responsible Development',
      excerpt: 'Learn about the principles and practices that guide ethical AI development and how to implement them in your organization for sustainable growth.',
      content: 'As AI becomes more prevalent in our daily lives, the importance of ethical considerations...',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      author: 'Maria Gonzalez',
      authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      date: '2024-12-10',
      readTime: '6 min read',
      category: 'Ethics',
      tags: ['Ethics', 'AI Development', 'Best Practices', 'Responsible AI'],
      featured: false,
    },
    {
      id: 3,
      title: 'Computer Vision in Healthcare: Revolutionizing Medical Diagnosis',
      excerpt: 'Discover how computer vision technology is transforming healthcare by enabling faster, more accurate medical diagnoses and improving patient outcomes.',
      content: 'Computer vision is making significant strides in healthcare applications...',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      author: 'Dr. Sarah Kim',
      authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      date: '2024-12-05',
      readTime: '10 min read',
      category: 'Healthcare',
      tags: ['Computer Vision', 'Healthcare', 'Medical AI', 'Diagnostics'],
      featured: true,
    },
    {
      id: 4,
      title: 'Natural Language Processing: Breaking Down Language Barriers',
      excerpt: 'Explore how NLP is revolutionizing communication, from real-time translation to sentiment analysis and conversational AI systems.',
      content: 'Natural Language Processing has evolved dramatically in recent years...',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
      author: 'David Rodriguez',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      date: '2024-11-28',
      readTime: '7 min read',
      category: 'Technology',
      tags: ['NLP', 'Language Models', 'Communication', 'AI'],
      featured: false,
    },
    {
      id: 5,
      title: 'The ROI of AI Implementation: Measuring Success',
      excerpt: 'Learn how to measure the return on investment of AI projects and establish KPIs that demonstrate real business value.',
      content: 'Measuring the success of AI implementations requires a strategic approach...',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      author: 'Emily Johnson',
      authorImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
      date: '2024-11-20',
      readTime: '9 min read',
      category: 'Business',
      tags: ['ROI', 'Business Value', 'KPIs', 'AI Strategy'],
      featured: false,
    },
    {
      id: 6,
      title: 'Securing AI Systems: Best Practices for AI Security',
      excerpt: 'Understand the unique security challenges of AI systems and learn best practices for protecting your AI infrastructure and data.',
      content: 'AI security is becoming increasingly important as organizations deploy more AI systems...',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      author: 'Robert Wang',
      authorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
      date: '2024-11-15',
      readTime: '11 min read',
      category: 'Security',
      tags: ['AI Security', 'Cybersecurity', 'Data Protection', 'Privacy'],
      featured: false,
    },
    {
      id: 7,
      title: 'Edge AI: Bringing Intelligence to the Edge',
      excerpt: 'Explore the benefits and challenges of deploying AI models at the edge, from reduced latency to improved privacy and offline capabilities.',
      content: 'Edge AI is transforming how we think about AI deployment and processing...',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
      author: 'Lisa Chen',
      authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      date: '2024-11-08',
      readTime: '8 min read',
      category: 'Technology',
      tags: ['Edge AI', 'IoT', 'Real-time Processing', 'Distributed AI'],
      featured: false,
    },
    {
      id: 8,
      title: 'AI in Finance: Transforming Financial Services',
      excerpt: 'Discover how AI is revolutionizing financial services, from fraud detection to algorithmic trading and personalized banking experiences.',
      content: 'The financial services industry is being transformed by AI technologies...',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop',
      author: 'Michael Thompson',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      date: '2024-11-01',
      readTime: '12 min read',
      category: 'Finance',
      tags: ['FinTech', 'Fraud Detection', 'Algorithmic Trading', 'Banking'],
      featured: true,
    },
  ]

  const categories = ['All', 'AI Trends', 'Technology', 'Healthcare', 'Business', 'Ethics', 'Security', 'Finance']
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
              AI Insights &
              <span className="gradient-text block">Thought Leadership</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Stay ahead of the curve with our latest articles on AI trends, best practices, 
              and industry insights from our team of experts and thought leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-slate-800/50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-400 text-slate-900'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-cyan-400'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'All' && !searchTerm && (
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
                Featured
                <span className="gradient-text block">Articles</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={`/blog/${post.id}`}>
                    <div className="card h-full hover:scale-105 transition-all duration-300 overflow-hidden">
                      {/* Image */}
                      <div className="relative overflow-hidden rounded-lg mb-6">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={800}
                          height={600}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col">
                        {/* Meta Info */}
                        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center space-x-2">
                            <Image
                              src={post.authorImage}
                              alt={post.author}
                              width={24}
                              height={24}
                              className="rounded-full"
                            />
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
                        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-gray-400 mb-6 leading-relaxed flex-1">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="bg-slate-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Read More */}
                        <div className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium group-hover:underline mt-auto">
                          <span>Read More</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="section-padding bg-slate-800/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-section-title mb-6">
              {searchTerm || selectedCategory !== 'All' ? 'Search Results' : 'Latest'} 
              <span className="gradient-text block">Articles</span>
            </h2>
            {filteredPosts.length === 0 && (
              <p className="text-gray-400">No articles found matching your criteria.</p>
            )}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/blog/${post.id}`}>
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
                        <span className="bg-slate-900/80 backdrop-blur-sm text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      {/* Meta Info */}
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center space-x-2">
                          <Image
                            src={post.authorImage}
                            alt={post.author}
                            width={20}
                            height={20}
                            className="rounded-full"
                          />
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
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="bg-slate-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More */}
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-sm text-gray-400">{post.readTime}</span>
                        <div className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium group-hover:underline">
                          <span>Read More</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
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
              Stay Updated with AI Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest AI trends, insights, and updates 
              delivered directly to your inbox every week.
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

            <p className="text-sm text-gray-400 mt-4">
              Join 10,000+ AI professionals who trust our insights
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}