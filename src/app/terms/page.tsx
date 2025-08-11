'use client'

import { motion } from 'framer-motion'

export default function TermsPage() {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using the GreekWave Technologies website and services, you accept and agree to be bound by the terms and provision of this agreement.',
        'If you do not agree to abide by the above, please do not use this service.',
        'These terms apply to all visitors, users, and others who access or use the service.',
      ],
    },
    {
      title: 'Description of Service',
      content: [
        'GreekWave Technologies provides artificial intelligence solutions, consulting services, and related technology services to businesses and organizations.',
        'Our services include but are not limited to: computer vision systems, natural language processing solutions, predictive analytics, automation systems, and AI consulting.',
        'We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without notice.',
      ],
    },
    {
      title: 'User Accounts and Registration',
      content: [
        'Some features of our service may require you to create an account and provide certain information.',
        'You are responsible for maintaining the confidentiality of your account credentials.',
        'You agree to provide accurate, current, and complete information during registration and to update such information as necessary.',
        'You are responsible for all activities that occur under your account.',
      ],
    },
    {
      title: 'Acceptable Use Policy',
      content: [
        'You may not use our services for any unlawful purpose or to solicit others to perform unlawful acts.',
        'You may not violate any local, state, national, or international law or regulation.',
        'You may not transmit any material that is abusive, offensive, or otherwise objectionable.',
        'You may not attempt to gain unauthorized access to our systems or networks.',
        'You may not use our services to compete with us or for any commercial purpose without our written consent.',
      ],
    },
    {
      title: 'Intellectual Property Rights',
      content: [
        'The service and its original content, features, and functionality are and will remain the exclusive property of GreekWave Technologies and its licensors.',
        'The service is protected by copyright, trademark, and other laws.',
        'Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.',
        'You retain ownership of any content you provide to us, but grant us a license to use such content in connection with providing our services.',
      ],
    },
    {
      title: 'Privacy and Data Protection',
      content: [
        'Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service.',
        'We collect and process personal information in accordance with applicable data protection laws.',
        'You consent to the collection, use, and disclosure of your information as described in our Privacy Policy.',
        'We implement appropriate security measures to protect your personal information.',
      ],
    },
    {
      title: 'Service Availability and Modifications',
      content: [
        'We strive to provide reliable service but cannot guarantee uninterrupted access.',
        'We may modify, suspend, or discontinue any part of our service at any time.',
        'We may impose limits on certain features or restrict access to parts of the service.',
        'We will provide reasonable notice of material changes to our services when possible.',
      ],
    },
    {
      title: 'Payment Terms',
      content: [
        'Certain services may require payment of fees. All fees are non-refundable unless otherwise specified.',
        'You agree to pay all applicable fees and charges incurred by you or on your behalf.',
        'We may change our fees at any time with reasonable notice.',
        'Failure to pay fees may result in suspension or termination of your access to paid services.',
      ],
    },
    {
      title: 'Disclaimers and Limitation of Liability',
      content: [
        'Our services are provided "as is" and "as available" without warranties of any kind.',
        'We disclaim all warranties, express or implied, including but not limited to merchantability and fitness for a particular purpose.',
        'We shall not be liable for any indirect, incidental, special, consequential, or punitive damages.',
        'Our total liability shall not exceed the amount paid by you for the services in the twelve months preceding the claim.',
      ],
    },
    {
      title: 'Indemnification',
      content: [
        'You agree to defend, indemnify, and hold harmless GreekWave Technologies and its affiliates from any claims, damages, or expenses arising from your use of our services.',
        'This includes but is not limited to claims arising from your violation of these terms or applicable laws.',
        'We reserve the right to assume the exclusive defense and control of any matter subject to indemnification.',
      ],
    },
    {
      title: 'Termination',
      content: [
        'We may terminate or suspend your account and access to our services immediately, without prior notice, for any reason.',
        'You may terminate your account at any time by contacting us.',
        'Upon termination, your right to use the service will cease immediately.',
        'Provisions that by their nature should survive termination shall survive, including ownership provisions and liability limitations.',
      ],
    },
    {
      title: 'Governing Law and Dispute Resolution',
      content: [
        'These terms shall be governed by and construed in accordance with the laws of the State of California.',
        'Any disputes arising from these terms or your use of our services shall be resolved through binding arbitration.',
        'You waive any right to participate in class action lawsuits or class-wide arbitration.',
        'The arbitration shall be conducted in San Francisco, California.',
      ],
    },
    {
      title: 'Changes to Terms',
      content: [
        'We reserve the right to modify these terms at any time.',
        'We will provide notice of material changes by posting the updated terms on our website.',
        'Your continued use of our services after changes become effective constitutes acceptance of the new terms.',
        'It is your responsibility to review these terms periodically for changes.',
      ],
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
              Terms of
              <span className="gradient-text block">Service</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Please read these terms carefully before using our services. 
              By using our services, you agree to be bound by these terms.
            </p>
            <div className="mt-8 text-gray-400">
              <p>Last updated: December 15, 2024</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-slate-800/50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="card">
                <h2 className="text-2xl font-bold text-white mb-6">Introduction</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Welcome to GreekWave Technologies. These Terms of Service ("Terms") govern your use of our 
                    website, services, and applications (collectively, the "Service") operated by GreekWave 
                    Technologies ("us", "we", or "our").
                  </p>
                  <p>
                    These Terms constitute a legally binding agreement between you and GreekWave Technologies. 
                    By accessing or using our Service, you agree to be bound by these Terms. If you disagree 
                    with any part of these terms, then you may not access the Service.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Sections */}
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="card">
                  <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <div className="card bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border-cyan-400/30">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> legal@greekwave.tech</p>
                    <p><strong>Phone:</strong> +1 (555) 012-3456</p>
                    <p><strong>Address:</strong> 123 Innovation Drive, San Francisco, CA 94105</p>
                  </div>
                  <p>
                    We will respond to your inquiry within 5 business days.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}