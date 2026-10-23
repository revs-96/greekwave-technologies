'use client'

import { motion } from 'framer-motion'

export default function PrivacyPage() {
  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'Personal Information: When you contact us, subscribe to our newsletter, or use our services, we may collect personal information such as your name, email address, phone number, company name, and job title.',
        'Usage Data: We automatically collect information about how you interact with our website, including IP address, browser type, pages visited, time spent on pages, and referring websites.',
        'Cookies and Tracking: We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic.',
      ],
    },
    {
      title: 'How We Use Your Information',
      content: [
        'Service Delivery: To provide, maintain, and improve our AI services and solutions.',
        'Communication: To respond to your inquiries, send newsletters, and provide customer support.',
        'Marketing: To send you relevant marketing communications about our services (with your consent).',
        'Analytics: To analyze website usage and improve our services and user experience.',
        'Legal Compliance: To comply with applicable laws, regulations, and legal processes.',
      ],
    },
    {
      title: 'Information Sharing and Disclosure',
      content: [
        'Service Providers: We may share your information with trusted third-party service providers who assist us in operating our website and providing our services.',
        'Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.',
        'Legal Requirements: We may disclose your information if required by law or to protect our rights, property, or safety.',
        'Consent: We may share your information with your explicit consent for specific purposes.',
      ],
    },
    {
      title: 'Data Security',
      content: [
        'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
        'We use industry-standard encryption protocols for data transmission and storage.',
        'Access to personal information is restricted to authorized personnel who need it to perform their job functions.',
        'We regularly review and update our security practices to ensure the ongoing protection of your data.',
      ],
    },
    {
      title: 'Your Rights and Choices',
      content: [
        'Access: You have the right to request access to the personal information we hold about you.',
        'Correction: You can request that we correct any inaccurate or incomplete personal information.',
        'Deletion: You may request that we delete your personal information, subject to certain legal limitations.',
        'Opt-out: You can opt out of receiving marketing communications from us at any time.',
        'Data Portability: You have the right to request a copy of your personal information in a structured, machine-readable format.',
      ],
    },
    {
      title: 'Cookies and Tracking Technologies',
      content: [
        'Essential Cookies: Necessary for the website to function properly and cannot be disabled.',
        'Analytics Cookies: Help us understand how visitors interact with our website by collecting and reporting information anonymously.',
        'Marketing Cookies: Used to track visitors across websites to display relevant advertisements.',
        'You can control cookie preferences through your browser settings, but disabling certain cookies may affect website functionality.',
      ],
    },
    {
      title: 'International Data Transfers',
      content: [
        'Your information may be transferred to and processed in countries other than your country of residence.',
        'We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.',
        'For transfers outside the European Economic Area (EEA), we use standard contractual clauses or other approved mechanisms.',
      ],
    },
    {
      title: 'Data Retention',
      content: [
        'We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected.',
        'The retention period depends on the type of information and the purpose for which it was collected.',
        'We will securely delete or anonymize your personal information when it is no longer needed.',
      ],
    },
    {
      title: 'Children\'s Privacy',
      content: [
        'Our services are not intended for children under the age of 13.',
        'We do not knowingly collect personal information from children under 13.',
        'If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.',
      ],
    },
    {
      title: 'Changes to This Privacy Policy',
      content: [
        'We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws.',
        'We will notify you of any material changes by posting the updated policy on our website.',
        'Your continued use of our services after the effective date of the updated policy constitutes acceptance of the changes.',
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
              Privacy
              <span className="gradient-text block">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, 
              and protect your personal information when you use our services.
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
                    GreekWave Technologies ("we," "our," or "us") is committed to protecting your privacy and ensuring 
                    the security of your personal information. This Privacy Policy describes how we collect, use, 
                    disclose, and safeguard your information when you visit our website, use our services, or 
                    interact with us.
                  </p>
                  <p>
                    By using our website or services, you consent to the collection and use of your information 
                    as described in this Privacy Policy. If you do not agree with the terms of this Privacy Policy, 
                    please do not use our website or services.
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
                <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    If you have any questions about this Privacy Policy, your personal information, 
                    or our privacy practices, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> greekwavetech@zohomail.in</p>
                    <p><strong>Phone:</strong> +91 8977094517</p>
                    <p><strong>Address:</strong> Rajamahendravaram, India</p>
                  </div>
                  <p>
                    We will respond to your inquiry within 30 days of receipt.
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