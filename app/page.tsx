'use client'

import { motion, useScroll, useTransform, useMotionValue, useSpring, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { TrendingUp, Target, Lightbulb, ArrowRight, Eye, Zap, Handshake, BarChart3, Users, DollarSign, CheckCircle } from 'lucide-react'
import Link from 'next/link'

// Custom hook for counter animation
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const startCount = 0

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))
      
      if (progress < 1) {
        requestAnimationFrame(updateCount)
      }
    }

    requestAnimationFrame(updateCount)
  }, [isInView, end, duration])

  return { count, setIsInView }
}

// Custom cursor component
const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorPosition = useMotionValue({ x: 0, y: 0 })
  const cursorSpring = useSpring(cursorPosition, { stiffness: 150, damping: 20 })

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      cursorPosition.set({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateCursor)
    return () => window.removeEventListener('mousemove', updateCursor)
  }, [cursorPosition])

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{
        x: cursorSpring.x,
        y: cursorSpring.y,
        translateX: '-50%',
        translateY: '-50%'
      }}
    />
  )
}

// Magnetic button component
const MagneticButton = ({ children, className, ...props }: any) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const position = useMotionValue({ x: 0, y: 0 })
  const springPosition = useSpring(position, { stiffness: 150, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return
    
    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distanceX = (e.clientX - centerX) * 0.1
    const distanceY = (e.clientY - centerY) * 0.1
    
    position.set({ x: distanceX, y: distanceY })
  }

  const handleMouseLeave = () => {
    position.set({ x: 0, y: 0 })
  }

  return (
    <motion.button
      ref={buttonRef}
      className={className}
      style={{ x: springPosition.x, y: springPosition.y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </motion.button>
  )
}

// Floating particle component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}

// Scroll progress indicator
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 origin-left z-50"
      style={{ scaleX }}
    />
  )
}

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  
  // Parallax values
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200])

  // Counter animations
  const roiCounter = useCounter(340)
  const revenueCounter = useCounter(2400000)
  const retentionCounter = useCounter(94)

  return (
    <div ref={containerRef} className="relative">
      <ScrollProgress />
      <CustomCursor />
      <FloatingParticles />

      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div 
            className="text-2xl font-bold text-gray-900"
            whileHover={{ scale: 1.05 }}
          >
            vrvo
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            <motion.a href="#services" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors" whileHover={{ y: -2 }}>
              Services
            </motion.a>
            <motion.a href="#approach" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors" whileHover={{ y: -2 }}>
              Approach
            </motion.a>
            <motion.a href="#about" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors" whileHover={{ y: -2 }}>
              About
            </motion.a>
          </div>
          
          <MagneticButton className="px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started
          </MagneticButton>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Animated background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-orange-500/10"
          style={{ y: backgroundY }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            style={{ y: heroY }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
            >
              <span className="text-white/90 text-sm font-medium">Digital Marketing & Business Transformation</span>
            </motion.div>
            
            {/* Headline with word-by-word animation */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-8 max-w-6xl mx-auto"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {"Transform Your Business Through Strategic Digital Marketing".split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-10"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              Vrvo combines advanced programmatic advertising, integrated marketing strategy, and business transformation consulting to help ambitious SMBs build scalable, data-driven growth engines.
            </motion.p>
            
            {/* Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <MagneticButton className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg text-lg transition-all duration-300 shadow-xl hover:shadow-2xl">
                Get Started
              </MagneticButton>
              <MagneticButton className="px-8 py-4 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-lg text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/10">
                View Our Work
              </MagneticButton>
            </motion.div>
            
            {/* Trust line */}
            <motion.p 
              className="text-sm text-gray-400"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
            >
              Trusted by 200+ growing businesses • $50M+ in ad spend managed
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Platform Section - Bento Box Layout */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="text-sm font-semibold text-orange-500 uppercase tracking-wide mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Platform
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Real-Time Visibility Into Your Marketing Performance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track every campaign, channel, and conversion in one unified dashboard. Make data-driven decisions with confidence.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 h-[600px]">
            {/* Big Hero Card */}
            <motion.div 
              className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <div className="relative z-10">
                <BarChart3 className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Unified Dashboard</h3>
                <p className="text-blue-100">See all channels in one place with real-time performance metrics and actionable insights.</p>
              </div>
              <motion.div 
                className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Dashboard Mockup */}
            <motion.div 
              className="md:col-span-2 lg:col-span-3 bg-white rounded-2xl p-8 shadow-xl border border-gray-200 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 bg-gray-100 rounded px-3 py-1">
                  <span className="text-xs text-gray-500">vrvo.com/dashboard</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div 
                    ref={roiCounter.setIsInView}
                    className="text-3xl font-bold text-orange-500"
                  >
                    {roiCounter.count}%
                  </div>
                  <div className="text-xs text-gray-500">Avg ROI</div>
                </div>
                <div className="text-center">
                  <div 
                    ref={revenueCounter.setIsInView}
                    className="text-3xl font-bold text-green-500"
                  >
                    ${revenueCounter.count.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-500">Revenue</div>
                </div>
                <div className="text-center">
                  <div 
                    ref={retentionCounter.setIsInView}
                    className="text-3xl font-bold text-blue-500"
                  >
                    {retentionCounter.count}%
                  </div>
                  <div className="text-xs text-gray-500">Retention</div>
                </div>
              </div>

              {/* Chart */}
              <motion.div 
                className="h-24 bg-gradient-to-r from-blue-100 via-purple-100 to-orange-100 rounded-lg relative overflow-hidden"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Feature Cards */}
            {[
              { icon: CheckCircle, title: "Custom Reporting", desc: "Build reports that matter" },
              { icon: Eye, title: "Transparent Spend", desc: "Know where every dollar goes" },
              { icon: Users, title: "Team Collaboration", desc: "Work together seamlessly" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, rotateX: 5 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <feature.icon className="w-8 h-8 text-orange-500 mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Interactive Cards */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-semibold text-orange-500 uppercase tracking-wide mb-2">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Full-Stack Digital Growth Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end capabilities that work together to accelerate your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Strategic Marketing",
                description: "Integrated campaigns that build brands and drive revenue through multi-channel strategy and execution.",
                features: [
                  "Brand positioning & messaging architecture",
                  "Multi-channel campaign strategy",
                  "Content marketing & SEO",
                  "Performance marketing & analytics"
                ],
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Target,
                title: "Programmatic Advertising",
                description: "Enterprise-grade audience targeting and automation that maximizes reach and ROI at scale.",
                features: [
                  "AI-powered programmatic display & video",
                  "Cross-platform DSP management",
                  "Advanced audience segmentation",
                  "Real-time bid optimization"
                ],
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Lightbulb,
                title: "Business Transformation",
                description: "Build the marketing infrastructure and systems needed to scale efficiently and make data-driven decisions.",
                features: [
                  "MarTech stack optimization",
                  "CRM implementation & integration",
                  "Data analytics infrastructure",
                  "Process automation & training"
                ],
                gradient: "from-orange-500 to-red-500"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"
                  style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
                />
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200 h-full">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-6`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, j) => (
                      <motion.li 
                        key={j}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: j * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                        <span className="text-gray-600">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section - Horizontal Scroll */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Integrated Capabilities Across The Digital Spectrum
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise technology. SMB accessibility.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Paid Media",
                items: [
                  "Programmatic Display & Video",
                  "Paid Search (Google, Microsoft)",
                  "Paid Social (Meta, LinkedIn, TikTok)",
                  "Native Advertising",
                  "Connected TV & Audio"
                ]
              },
              {
                title: "Organic & Content",
                items: [
                  "Search Engine Optimization",
                  "Content Strategy & Production",
                  "Social Media Management",
                  "Email Marketing & Automation",
                  "Community Building"
                ]
              },
              {
                title: "MarTech & Data",
                items: [
                  "Marketing Automation Platforms",
                  "CRM Implementation",
                  "Analytics & Business Intelligence",
                  "Customer Data Platforms",
                  "Attribution & Measurement"
                ]
              }
            ].map((capability, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-white mb-6">{capability.title}</h3>
                <ul className="space-y-4">
                  {capability.items.map((item, j) => (
                    <motion.li 
                      key={j}
                      className="text-gray-300 flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5, color: "#F97316" }}
                    >
                      <div className="w-1 h-1 bg-orange-500 rounded-full mr-3"></div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vrvo Section - Floating Cards */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Vrvo Is Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent partnerships built on results, not contracts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Handshake,
                title: "No Long-Term Contracts",
                description: "Month-to-month partnerships. Stay because we deliver, not because you're locked in."
              },
              {
                icon: Eye,
                title: "Complete Transparency",
                description: "Real-time dashboard access. Know exactly where your budget goes and what's working."
              },
              {
                icon: Zap,
                title: "Strategy + Execution",
                description: "We don't just plan—we do. Full-service from strategy through implementation."
              },
              {
                icon: TrendingUp,
                title: "Built for Growth",
                description: "Scalable solutions that grow with you. Start small, scale as you see results."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, rotateY: 5 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 text-center h-full">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl mx-auto mb-6 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <item.icon className="w-8 h-8 text-orange-500" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Immersive */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-orange-900 overflow-hidden">
        {/* Animated background */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(45deg, #1e3a8a, #7c3aed, #ea580c)",
              "linear-gradient(45deg, #7c3aed, #ea580c, #1e3a8a)",
              "linear-gradient(45deg, #ea580c, #1e3a8a, #7c3aed)",
              "linear-gradient(45deg, #1e3a8a, #7c3aed, #ea580c)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-white mb-8"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              Ready to Transform Your Marketing?
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              Let's discuss how Vrvo can elevate your digital marketing and business infrastructure.
            </motion.p>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
              }}
            >
              <MagneticButton className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-6 rounded-2xl font-semibold text-xl transition-all duration-300 shadow-2xl hover:shadow-orange-500/25">
                Contact Us
                <ArrowRight className="w-6 h-6 ml-3" />
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold text-white mb-4">vrvo</div>
              <p className="text-gray-400 mb-4">
                Strategic digital marketing for ambitious businesses.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services/strategic-marketing" className="text-gray-400 hover:text-white transition-colors">Strategic Marketing</Link></li>
                <li><Link href="/services/programmatic-advertising" className="text-gray-400 hover:text-white transition-colors">Programmatic Advertising</Link></li>
                <li><Link href="/services/business-transformation" className="text-gray-400 hover:text-white transition-colors">Business Transformation</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Get Started</h3>
              <p className="text-gray-400 mb-4">
                Ready to transform your marketing?
              </p>
              <Link href="/contact" className="text-orange-500 hover:text-orange-400 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-center">
              © 2025 Vrvo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}