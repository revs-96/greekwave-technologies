'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Users, Award } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To democratize AI technology and make it accessible to businesses of all sizes, driving innovation and growth through intelligent solutions.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the leading AI technology partner that transforms industries and creates a smarter, more connected world.',
    },
    {
      icon: Users,
      title: 'Values',
      description: 'Innovation, integrity, collaboration, and excellence guide everything we do as we build the future of AI.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering solutions that exceed expectations and drive real results.',
    },
  ]

  return (
    <section id="about" className="section-padding bg-slate-800/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block bg-cyan-400/10 border border-cyan-400/30 rounded-full px-4 py-2 mb-6"
            >
              <span className="text-cyan-400 font-medium">About GreekWave</span>
            </motion.div>

            <h2 className="text-section-title mb-6">
              Pioneering the Future of
              <span className="gradient-text block">Artificial Intelligence</span>
            </h2>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Founded with a vision to harness the transformative power of AI, GreekWave Technologies 
              has emerged as a trusted partner for businesses seeking to leverage cutting-edge artificial 
              intelligence solutions. Our team of expert engineers, data scientists, and AI researchers 
              work tirelessly to create innovative applications that solve real-world problems.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              From computer vision systems that revolutionize manufacturing processes to natural language 
              processing tools that enhance customer experiences, we're committed to delivering AI solutions 
              that drive measurable business outcomes and create lasting value.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="btn-primary">
                Learn More About Us
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-cyan-400/10 rounded-lg group-hover:bg-cyan-400/20 transition-colors">
                    <value.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '5+', label: 'Years Experience' },
            { number: '100+', label: 'Projects Completed' },
            { number: '50+', label: 'Happy Clients' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About