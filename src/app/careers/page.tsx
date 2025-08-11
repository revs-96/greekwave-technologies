'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, DollarSign, Users, Briefcase, Heart, Zap, Award, Coffee, Gamepad2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function CareersPage() {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$150k - $200k',
      description: 'Join our AI engineering team to develop cutting-edge machine learning models and AI systems that power our client solutions.',
      requirements: [
        '5+ years of experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong understanding of deep learning architectures',
        'PhD or Masters in Computer Science, AI, or related field',
      ],
      responsibilities: [
        'Design and implement AI models and algorithms',
        'Collaborate with cross-functional teams on AI projects',
        'Optimize model performance and scalability',
        'Mentor junior engineers and contribute to technical decisions',
      ],
    },
    {
      id: 2,
      title: 'Computer Vision Specialist',
      department: 'Research',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$130k - $180k',
      description: 'Lead computer vision projects and develop innovative solutions for image and video analysis applications.',
      requirements: [
        '4+ years of experience in computer vision',
        'Expertise in OpenCV, image processing, and deep learning',
        'Experience with object detection and recognition systems',
        'Strong mathematical background in linear algebra and statistics',
        'Publications in top-tier conferences preferred',
      ],
      responsibilities: [
        'Develop computer vision algorithms and models',
        'Research and implement state-of-the-art CV techniques',
        'Work on client projects involving image analysis',
        'Collaborate with the research team on innovative solutions',
      ],
    },
    {
      id: 3,
      title: 'Data Scientist',
      department: 'Data Science',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $160k',
      description: 'Analyze complex datasets and build predictive models to drive business insights and AI solutions for our clients.',
      requirements: [
        '3+ years of experience in data science',
        'Proficiency in Python, R, SQL, and statistical analysis',
        'Experience with machine learning frameworks',
        'Strong analytical and problem-solving skills',
        'Masters in Data Science, Statistics, or related field',
      ],
      responsibilities: [
        'Analyze large datasets to extract meaningful insights',
        'Build and validate predictive models',
        'Collaborate with engineering teams on data pipelines',
        'Present findings to stakeholders and clients',
      ],
    },
    {
      id: 4,
      title: 'AI Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$140k - $190k',
      description: 'Drive product strategy and roadmap for our AI solutions, working closely with engineering and business teams.',
      requirements: [
        '5+ years of product management experience',
        'Strong understanding of AI/ML technologies',
        'Experience with B2B SaaS products',
        'Excellent communication and leadership skills',
        'MBA or technical degree preferred',
      ],
      responsibilities: [
        'Define product vision and strategy for AI solutions',
        'Work with engineering teams to prioritize features',
        'Conduct market research and competitive analysis',
        'Collaborate with sales and marketing teams',
      ],
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$110k - $150k',
      description: 'Build and maintain infrastructure for AI model deployment, monitoring, and scaling across cloud platforms.',
      requirements: [
        '4+ years of DevOps/Infrastructure experience',
        'Experience with Kubernetes, Docker, and CI/CD',
        'Knowledge of cloud platforms and ML deployment',
        'Proficiency in scripting languages (Python, Bash)',
        'Experience with monitoring and logging tools',
      ],
      responsibilities: [
        'Design and maintain ML infrastructure and pipelines',
        'Implement CI/CD processes for AI model deployment',
        'Monitor system performance and reliability',
        'Collaborate with engineering teams on scalability',
      ],
    },
    {
      id: 6,
      title: 'Business Development Manager',
      department: 'Sales',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$100k - $140k + Commission',
      description: 'Drive business growth by identifying new opportunities and building relationships with potential clients in the AI space.',
      requirements: [
        '4+ years of B2B sales or business development',
        'Understanding of AI/ML technologies and applications',
        'Strong networking and relationship-building skills',
        'Experience in enterprise software sales',
        'Bachelor\'s degree in Business or related field',
      ],
      responsibilities: [
        'Identify and pursue new business opportunities',
        'Build relationships with key decision makers',
        'Collaborate with technical teams on proposals',
        'Represent the company at industry events',
      ],
    },
  ]

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance plus wellness programs',
    },
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Competitive salaries, equity packages, and performance bonuses',
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Flexible working hours and remote work options',
    },
    {
      icon: Award,
      title: 'Learning & Development',
      description: 'Conference attendance, online courses, and continuous learning budget',
    },
    {
      icon: Coffee,
      title: 'Great Perks',
      description: 'Free meals, snacks, coffee, and team building activities',
    },
    {
      icon: Gamepad2,
      title: 'Work-Life Balance',
      description: 'Unlimited PTO, sabbatical options, and mental health support',
    },
  ]

  const values = [
    {
      title: 'Innovation First',
      description: 'We encourage creative thinking and bold ideas that push the boundaries of AI.',
    },
    {
      title: 'Collaborative Culture',
      description: 'We believe in the power of teamwork and open communication.',
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and encourage lifelong learning.',
    },
    {
      title: 'Impact Driven',
      description: 'We focus on creating meaningful solutions that make a real difference.',
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
              Join Our
              <span className="gradient-text block">AI Revolution</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Be part of a team that's shaping the future of artificial intelligence. 
              Work on cutting-edge projects with brilliant minds in a culture that values innovation and growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding bg-slate-800/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-section-title mb-8">
                Our Culture &
                <span className="gradient-text block">Values</span>
              </h2>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                At GreekWave Technologies, we foster an environment where innovation thrives, 
                collaboration is key, and every team member has the opportunity to make a meaningful impact 
                on the future of AI.
              </p>

              <div className="space-y-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {value.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
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
        </div>
      </section>

      {/* Benefits Section */}
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
              Benefits &
              <span className="gradient-text block">Perks</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We believe in taking care of our team with comprehensive benefits and perks 
              that support both professional growth and personal well-being.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="p-4 bg-cyan-400/10 rounded-xl inline-block mb-6">
                  <benefit.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
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
              Open
              <span className="gradient-text block">Positions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join our growing team and help shape the future of AI. We're looking for passionate, 
              talented individuals who want to make a real impact.
            </p>
          </motion.div>

          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary mt-4 lg:mt-0"
                  >
                    Apply Now
                  </motion.button>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {job.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-2 text-gray-400">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Responsibilities</h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start space-x-2 text-gray-400">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Perfect Match CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Don't See the Perfect Role?
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                We're always looking for exceptional talent. Send us your resume and let us know 
                how you'd like to contribute to our AI revolution.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className="btn-primary text-lg px-10 py-4">
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
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
              Application
              <span className="gradient-text block">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our hiring process is designed to be thorough yet efficient, 
              ensuring the best fit for both you and our team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Application',
                description: 'Submit your resume and cover letter through our application portal.',
              },
              {
                step: '02',
                title: 'Initial Review',
                description: 'Our team reviews your application and reaches out within 1-2 weeks.',
              },
              {
                step: '03',
                title: 'Interviews',
                description: 'Technical and cultural fit interviews with team members and leadership.',
              },
              {
                step: '04',
                title: 'Decision',
                description: 'Final decision and offer discussion, typically within 1 week of interviews.',
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
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
    </div>
  )
}