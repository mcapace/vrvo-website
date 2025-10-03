'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MapPin, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import SectionTransition from '../components/SectionTransition'
import ParallaxText from '../components/ParallaxText'
import ShimmerText from '../components/ShimmerText'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative">
      {/* Hero Section */}
      <SectionTransition sectionId="hero" className="relative pt-32 pb-20 px-4 md:px-6 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2,
              type: "spring",
              stiffness: 80,
              damping: 25
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.3,
                duration: 0.8,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              className="inline-block mb-6"
            >
              <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/20 backdrop-blur-sm">
                Contact Us
              </span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight text-balance">
              <ParallaxText speed={0.5}>
                <ShimmerText>
                  Ready to Transform Your Growth?
                </ShimmerText>
              </ParallaxText>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.6,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Let's discuss your goals, challenges, and how Vrvo can help you compete—and win.
            </motion.p>
          </motion.div>
        </div>
      </SectionTransition>

      {/* Contact Form Section */}
      <SectionTransition sectionId="contact-form" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-slate-400 mb-8">
                  Ready to start your digital transformation? Let's talk about how we can help you achieve your growth goals.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-6 h-6" strokeWidth={1.5} />,
                    title: 'Email Us',
                    info: 'hello@vrvo.com',
                    description: 'Send us an email and we\'ll respond within 24 hours'
                  },
                  {
                    icon: <Phone className="w-6 h-6" strokeWidth={1.5} />,
                    title: 'Call Us',
                    info: '+1 (555) 123-4567',
                    description: 'Speak directly with our team during business hours'
                  },
                  {
                    icon: <MapPin className="w-6 h-6" strokeWidth={1.5} />,
                    title: 'Visit Us',
                    info: 'San Francisco, CA',
                    description: 'Schedule an in-person meeting at our headquarters'
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex items-start gap-4 p-4 rounded-lg"
                    style={{
                      background: 'rgba(30, 41, 59, 0.3)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(148, 163, 184, 0.2)'
                    }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">
                      {contact.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {contact.title}
                      </h3>
                      <p className="text-blue-400 font-medium mb-1">
                        {contact.info}
                      </p>
                      <p className="text-slate-400 text-sm">
                        {contact.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Send us a Message
              </h3>
              
              <form className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Company Field */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>

                {/* Challenge Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    What's your biggest marketing challenge? *
                  </label>
                  <select 
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select your challenge</option>
                    <option value="generating-leads">Generating Qualified Leads</option>
                    <option value="reducing-cac">Reducing Customer Acquisition Cost</option>
                    <option value="scaling-campaigns">Scaling Marketing Campaigns</option>
                    <option value="measuring-roi">Measuring Marketing ROI</option>
                    <option value="technology-stack">Building Marketing Technology Stack</option>
                    <option value="team-building">Building Marketing Team</option>
                    <option value="all-of-above">All of the Above</option>
                  </select>
                </div>

                {/* Budget Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    What's your monthly marketing budget?
                  </label>
                  <select className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
                    <option value="">Select budget range</option>
                    <option value="5k-15k">$5K - $15K</option>
                    <option value="15k-50k">$15K - $50K</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="100k+">$100K+</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Tell us about your goals
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="What are you looking to achieve with your marketing?"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                </motion.button>
              </form>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="flex flex-wrap justify-center gap-6">
                  {[
                    { text: 'Free consultation', icon: <CheckCircle className="w-4 h-4 text-green-400" /> },
                    { text: 'No pressure approach', icon: <CheckCircle className="w-4 h-4 text-green-400" /> },
                    { text: 'Custom roadmap included', icon: <CheckCircle className="w-4 h-4 text-green-400" /> }
                  ].map((indicator, index) => (
                    <div key={index} className="flex items-center gap-2 text-slate-400 text-sm">
                      {indicator.icon}
                      <span>{indicator.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionTransition>

      {/* CTA Section */}
      <SectionTransition sectionId="cta" className="py-20 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Not Ready to Fill Out a Form?
            </h2>
            
            <p className="text-xl text-slate-400 mb-8">
              No problem! Schedule a 30-minute consultation to discuss your goals and challenges.
            </p>
            
            <Link
              href="#"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Schedule a Call
              <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
            </Link>
          </motion.div>
        </div>
      </SectionTransition>
    </main>
  )
}
