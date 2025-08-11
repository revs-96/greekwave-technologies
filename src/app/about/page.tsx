'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Users, Award, Lightbulb, Shield, Zap, Heart } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with AI, constantly exploring new technologies and methodologies.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We build trust through transparency, ethical practices, and honest communication with our clients.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork, both within our organization and with our valued clients.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering solutions that exceed expectations.',
    },
    {
      icon: Zap,
      title: 'Agility',
      description: 'We adapt quickly to changing needs and emerging technologies to stay ahead of the curve.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We are passionate about AI and its potential to transform businesses and improve lives.',
    },
  ]

  const team = [
    {
      name: 'Dr. Alexandra Petrov',
      position: 'CEO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: 'Former AI researcher at MIT with 15+ years of experience in machine learning and computer vision.',
      linkedin: '#',
    },
    {
      name: 'Michael Chen',
      position: 'CTO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Ex-Google AI engineer specializing in natural language processing and deep learning architectures.',
      linkedin: '#',
    },
    {
      name: 'Dr. Sarah Kim',
      position: 'Head of Research',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'PhD in Computer Science from Stanford, expert in predictive analytics and AI ethics.',
      linkedin: '#',
    },
    {
      name: 'David Rodriguez',
      position: 'VP of Engineering',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Full-stack engineer with expertise in AI system architecture and cloud deployment.',
      linkedin: '#',
    },
    {
      name: 'Emily Johnson',
      position: 'Head of Business Development',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face',
      bio: 'MBA from Wharton, specializes in AI strategy and business transformation.',
      linkedin: '#',
    },
    {
      name: 'Dr. Robert Wang',
      position: 'Senior Data Scientist',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
      bio: 'PhD in Statistics, expert in machine learning algorithms and data analysis.',
      linkedin: '#',
    },
  ]

  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'GreekWave Technologies was established with a vision to democratize AI.',
    },
    {
      year: '2020',
      title: 'First Major Client',
      description: 'Secured our first enterprise client and delivered our first AI solution.',
    },
    {
      year: '2021',
      title: 'Series A Funding',
      description: 'Raised $5M in Series A funding to expand our team and capabilities.',
    },
    {
      year: '2022',
      title: '50+ Projects',
      description: 'Successfully delivered over 50 AI projects across various industries.',
    },
    {
      year: '2023',
      title: 'International Expansion',
      description: 'Expanded operations to serve clients across North America and Europe.',
    },
    {
      year: '2024',
      title: 'AI Innovation Award',
      description: 'Recognized as the "Most Innovative AI Company" by TechCrunch.',
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
              About
              <span className="gradient-text block">GreekWave Technologies</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              We are a team of passionate AI experts dedicated to transforming businesses 
              through innovative artificial intelligence solutions that drive real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-slate-800/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-section-title mb-8">
                Our Mission &
                <span className="gradient-text block">Vision</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-cyan-400/10 rounded-lg">
                    <Target className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Mission</h3>
                    <p className="text-gray-400 leading-relaxed">
                      To democratize AI technology and make it accessible to businesses of all sizes, 
                      driving innovation and growth through intelligent solutions that solve real-world problems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-cyan-400/10 rounded-lg">
                    <Eye className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Vision</h3>
                    <p className="text-gray-400 leading-relaxed">
                      To be the leading AI technology partner that transforms industries and creates 
                      a smarter, more connected world where artificial intelligence enhances human potential.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                width={600}
                height={400}
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl" />
            </motion.div>
          </div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-section-title mb-6">
              Our Core
              <span className="gradient-text block">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="p-4 bg-cyan-400/10 rounded-xl inline-block mb-6">
                  <value.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our
              <span className="gradient-text block">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our diverse team of AI experts, engineers, and researchers brings together 
              decades of experience from leading tech companies and research institutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="relative mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full ring-4 ring-cyan-400/30" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {member.name}
                </h3>
                <p className="text-cyan-400 font-medium mb-4">
                  {member.position}
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {member.bio}
                </p>
                <a
                  href={member.linkedin}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Connect on LinkedIn →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our
              <span className="gradient-text block">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From a small startup to a leading AI technology company, 
              here are the key milestones in our journey.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="card">
                      <div className="text-2xl font-bold gradient-text mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-white">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900" />
                  </div>
                  
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
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
              Ready to Work with Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the growing list of companies that trust GreekWave Technologies 
              to transform their business with AI.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="btn-primary text-lg px-10 py-4">
                Get Started Today
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}