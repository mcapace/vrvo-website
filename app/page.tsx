'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { TrendingUp, Target, Lightbulb, Eye, Zap, ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll()
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      
      {/* Scroll Progress Bar */}
          <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            vrvo
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Services', 'Approach', 'About'].map((item) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full" />
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
              className="px-5 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-lg shadow-orange-500/30"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with Gradient Background */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50">
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 80%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-8 shadow-lg"
          >
            <span className="text-sm font-medium text-gray-700">
              Digital Marketing & Business Transformation
              </span>
            </motion.div>
            
          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {['Transform', 'Your', 'Business'].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="inline-block mr-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
              >
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-r from-orange-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
            >
              Through Strategic Digital Marketing
            </motion.span>
          </motion.h1>
            
            <motion.p 
            initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-4xl mx-auto"
          >
            Vrvo combines advanced programmatic advertising, integrated marketing strategy, 
            and business transformation consulting to help ambitious SMBs build scalable, 
            data-driven growth engines.
            </motion.p>
            
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(249, 115, 22, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold rounded-xl text-lg shadow-xl shadow-orange-500/50 transition-all"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: 'rgb(107, 114, 128)' }}
                whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gray-300 hover:border-gray-400 text-gray-900 font-semibold rounded-xl text-lg bg-white/50 backdrop-blur-sm transition-all"
              >
              View Our Work
            </motion.button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-sm text-gray-500"
          >
            Trusted by 200+ growing businesses • $50M+ in ad spend managed
          </motion.p>
        </div>

        {/* Floating Elements */}
                <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-50"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
                <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full blur-3xl opacity-50"
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </section>

      {/* Platform Section - Bento Grid */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-2">PLATFORM</p>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Real-Time Visibility Into Your Marketing Performance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Track every campaign, channel, and conversion in one unified dashboard. 
              Make data-driven decisions with confidence.
            </p>
            </motion.div>
            
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* Large Feature Card */}
          <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
              className="md:col-span-3 md:row-span-2 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-200 shadow-lg relative overflow-hidden group"
            >
                <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Unified Dashboard</h3>
                <p className="text-lg text-gray-600 mb-6">
                  See all channels in one place with real-time performance metrics and actionable insights.
                </p>
                <ul className="space-y-3">
                  {['Real-time data sync', 'Custom widgets', 'Drill-down analytics'].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
                </div>
          <motion.div
                className="absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"
              />
          </motion.div>

            {/* Dashboard Mock */}
          <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="md:col-span-3 md:row-span-2 bg-white rounded-2xl p-6 border border-gray-200 shadow-lg"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="ml-4 text-xs text-gray-500">vrvo-dashboard.com</span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { value: '340%', label: 'Avg ROI' },
                  { value: '$2.4M', label: 'Revenue' },
                  { value: '94%', label: 'Retention' }
                ].map((stat, i) => (
              <motion.div
                    key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>

              <div className="h-32 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg mb-4" />

              <div className="space-y-2">
                {['Strategic Marketing Campaign', 'Programmatic Display', 'Social Media Ads'].map((campaign, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <span className="text-gray-700">{campaign}</span>
                    <span className="text-green-600 font-medium">+12%</span>
                    </div>
              ))}
              </div>
            </motion.div>
            
            {/* Small Feature Cards */}
            {[
              { icon: Zap, title: 'Custom Reporting', color: 'from-orange-50 to-red-50' },
              { icon: Target, title: 'Transparent Spend', color: 'from-green-50 to-teal-50' }
            ].map((feature, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`md:col-span-3 bg-gradient-to-br ${feature.color} rounded-2xl p-6 border border-gray-200 shadow-lg cursor-pointer`}
              >
                <feature.icon className="w-10 h-10 text-gray-900 mb-4" />
                <h4 className="text-xl font-bold text-gray-900">{feature.title}</h4>
            </motion.div>
            ))}
            </div>
        </div>
      </section>

      {/* Services Section - 3D Tilt Cards */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-3">OUR SERVICES</p>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Full-Stack Digital Growth Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end capabilities that work together to accelerate your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Strategic Marketing',
                desc: 'Integrated campaigns that build brands and drive revenue through multi-channel strategy.',
                features: ['Brand positioning', 'Multi-channel campaigns', 'Content & SEO', 'Performance analytics'],
                gradient: 'from-blue-500 to-purple-500'
              },
              {
                icon: Target,
                title: 'Programmatic Advertising',
                desc: 'Enterprise-grade audience targeting and automated bidding that maximizes reach and ROI.',
                features: ['AI-powered targeting', 'Cross-platform DSP', 'Real-time optimization', 'Advanced segmentation'],
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: Lightbulb,
                title: 'Business Transformation',
                desc: 'Build the marketing infrastructure needed to scale efficiently and make data-driven decisions.',
                features: ['MarTech optimization', 'CRM implementation', 'Analytics setup', 'Process automation'],
                gradient: 'from-orange-500 to-red-500'
              }
            ].map((service, i) => (
                <motion.div
                key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg overflow-hidden cursor-pointer"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon className="w-7 h-7 text-white" />
              </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-orange-600 mr-3">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

            <motion.div
                  className={`absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity`}
                />
                </motion.div>
            ))}
              </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
          <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.h2 
            initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Ready to Transform Your Marketing?
            </motion.h2>
            
            <motion.p 
            initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-10"
          >
            Let's discuss how Vrvo can elevate your digital marketing and business infrastructure.
            </motion.p>
            
          <motion.button
            initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(249, 115, 22, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold rounded-xl text-lg shadow-2xl shadow-orange-500/50 inline-flex items-center gap-2"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">vrvo</div>
              <p className="text-gray-400 text-sm">Strategic digital marketing for ambitious businesses</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Strategic Marketing</li>
                <li>Programmatic Advertising</li>
                <li>Business Transformation</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>About</li>
                <li>Contact</li>
                <li>Careers</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Get Started</h3>
              <button className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-lg transition-colors">
                Contact Us
                  </button>
                  </div>
                  </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            © 2025 Vrvo. All rights reserved.
                  </div>
        </div>
      </footer>

    </main>
  )
}