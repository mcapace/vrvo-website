'use client'

import { useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Zap, Target, TrendingUp, Lightbulb, Users, Heart, ShoppingCart, Briefcase, BarChart3, Building, Banknote } from 'lucide-react'
import Image from 'next/image'
import LazyParticleNetwork from './components/LazyParticleNetwork'
import AdaptiveCursor from './components/AdaptiveCursor'
import AnimatedCounter from './components/AnimatedCounter'
import AdaptiveMagneticButton from './components/AdaptiveMagneticButton'
import AnimatedGrid from './components/AnimatedGrid'
import SpotlightCard from './components/SpotlightCard'
import ShimmerText from './components/ShimmerText'
import AnimatedIcon from './components/AnimatedIcon'
import TextReveal from './components/TextReveal'
import AdaptiveFloatingElement from './components/AdaptiveFloatingElement'
import SectionTransition from './components/SectionTransition'
import MobileNav from './components/MobileNav'
import AnimatedGradientOverlay from './components/AnimatedGradientOverlay'
import AnimatedDivider from './components/AnimatedDivider'
import ParallaxText from './components/ParallaxText'
import KonamiCode from './components/KonamiCode'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Navigation scroll effects
  const navBlur = useTransform(scrollYProgress, [0, 0.1], [24, 32])
  const navOpacity = useTransform(scrollYProgress, [0, 0.1], [0.8, 0.95])
  const navShadow = useTransform(scrollYProgress, [0, 0.1], [0.4, 0.8])

  // Konami Code state
  const [konamiActive, setKonamiActive] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative">
      {/* Animated Grid Background */}
      <AnimatedGrid />
      
      {/* Animated Gradient Overlay */}
      <AnimatedGradientOverlay />
      
      {/* Adaptive Cursor */}
      <AdaptiveCursor />
      
      {/* Konami Code Easter Egg */}
      <KonamiCode 
        onActivate={() => setKonamiActive(true)}
        onDeactivate={() => setKonamiActive(false)}
      />
      
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Enhanced Premium Scroll Progress Indicator */}
          <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 z-50 origin-left shadow-lg"
        style={{ 
          scaleX,
          boxShadow: '0 0 15px rgba(59, 130, 246, 0.8), 0 0 30px rgba(6, 182, 212, 0.5), 0 0 45px rgba(14, 184, 166, 0.3)'
        }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Progress indicator glow effect */}
      <motion.div
        className="fixed top-0 left-0 h-1 z-50 pointer-events-none"
        style={{
          width: `${scrollYProgress.get() * 100}%`,
          background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.2))',
          filter: 'blur(8px)',
          opacity: 0.8,
        }}
      />
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
        className="fixed top-0 w-full z-40 hidden md:block"
        style={{
          background: `rgba(15, 23, 42, ${navOpacity})`,
          backdropFilter: `blur(${navBlur}px)`,
          WebkitBackdropFilter: `blur(${navBlur}px)`,
          borderBottom: '1px solid transparent',
          backgroundImage: `linear-gradient(rgba(15, 23, 42, ${navOpacity}), rgba(15, 23, 42, ${navOpacity})), linear-gradient(90deg, rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.3))`,
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
          boxShadow: `0 8px 32px rgba(0, 0, 0, ${navShadow}), inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 0 20px rgba(59, 130, 246, 0.1)`
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.2
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.6))'
                  }}
                  className="cursor-pointer"
                >
                  <Image
                    src="/logo/vrvo_wordmark_white.png"
                    alt="Vrvo - Next-Generation Marketing"
                    width={130}
                    height={40}
                    priority
                    className="w-auto h-auto max-w-[130px]"
                  />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4
            }}
            className="hidden md:flex gap-8 text-slate-300"
          >
            {[
              { href: "#services", label: "Services" },
              { href: "#approach", label: "Approach" },
              { href: "#about", label: "About" }
            ].map((link, index) => (
              <motion.a 
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.6 + index * 0.1
                }}
                whileHover={{ 
                  y: -2,
                  scale: 1.05
                }}
                className="relative px-4 py-2 rounded-full transition-all duration-300 text-slate-300 hover:text-white"
                style={{
                  background: 'rgba(148, 163, 184, 0.1)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(148, 163, 184, 0.2)'
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full"
                  whileHover={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(34, 197, 94, 0.2))',
                    boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                  }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>
          
                <AdaptiveMagneticButton
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.8
            }}
            whileHover={{ 
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            magneticStrength={0.4}
            magneticDistance={80}
            className="relative px-6 py-2 rounded-full text-white font-medium transition-all duration-300 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(37, 99, 235, 0.9))',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              boxShadow: '0 8px 32px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              whileHover={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(37, 99, 235, 1))',
                boxShadow: '0 12px 40px rgba(59, 130, 246, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
              }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Get Started</span>
          </AdaptiveMagneticButton>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <SectionTransition sectionId="hero" className="relative pt-20 md:pt-32 pb-20 px-4 md:px-6 overflow-hidden z-10">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Triangles */}
          <motion.div
            animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-4 h-4 border-l-2 border-t-2 border-blue-400/30 rotate-45"
          />
          <motion.div
            animate={{ y: [20, -20, 20], rotate: [360, 180, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-40 right-20 w-3 h-3 border-l-2 border-t-2 border-cyan-400/20 rotate-45"
          />
          <motion.div
            animate={{ y: [-15, 15, -15], rotate: [0, 360, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute bottom-40 left-1/4 w-2 h-2 border-l-2 border-t-2 border-blue-500/25 rotate-45"
          />
          
          {/* Floating Circles */}
          <motion.div
            animate={{ y: [-10, 10, -10], scale: [1, 1.2, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-1/3 w-6 h-6 border border-cyan-400/20 rounded-full"
          />
          <motion.div
            animate={{ y: [10, -10, 10], scale: [1.2, 1, 1.2] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute bottom-1/4 right-1/4 w-4 h-4 border border-blue-400/15 rounded-full"
          />
          
          {/* Diagonal Lines */}
          <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transform -rotate-12" />
          <div className="absolute bottom-1/3 right-0 w-24 h-px bg-gradient-to-l from-transparent via-cyan-500/15 to-transparent transform rotate-12" />
        </div>
        {/* 3D Particle Network Background */}
        <LazyParticleNetwork />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ 
              duration: 1.2,
              type: "spring",
              stiffness: 80,
              damping: 25
            }}
            className="text-center"
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
                Next-Generation Marketing
              </span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight text-balance">
              <div className="block mb-4">
                <TextReveal 
                  delay={0.5}
                  staggerDelay={0.04}
                  duration={0.7}
                  className="text-white"
                >
                  Programmatic Advertising
                </TextReveal>
              </div>
              <div className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                <TextReveal 
                  delay={1.2}
                  staggerDelay={0.035}
                  duration={0.8}
                  className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent"
                >
                That Drives Sustainable Business Growth
                </TextReveal>
              </div>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 2.0,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Vrvo is your strategic partner in digital transformation. Combining cutting-edge programmatic technology with integrated marketing strategy, we help ambitious SMBs create demand, drive conversions, and scale efficiently—all while you focus on what you do best: running your business.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 2.3,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <AdaptiveMagneticButton
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                magneticStrength={0.3}
                magneticDistance={100}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
              >
                Start Your Transformation
                <AdaptiveFloatingElement
                  amplitude={5}
                  duration={2.8}
                  delay={3}
                >
                  <AnimatedIcon animationType="bounce">
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                  </AnimatedIcon>
                </AdaptiveFloatingElement>
              </AdaptiveMagneticButton>
              <AdaptiveMagneticButton
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgb(59, 130, 246)",
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                magneticStrength={0.3}
                magneticDistance={100}
                className="border border-slate-700 hover:border-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Explore Services
              </AdaptiveMagneticButton>
            </motion.div>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 2.6,
              duration: 1,
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { label: 'Average ROI Increase', value: 340, suffix: '%' },
              { label: 'Client Retention Rate', value: 94, suffix: '%' },
              { label: 'Campaigns Optimized', value: 500, suffix: '+' }
            ].map((stat, index) => (
              <SpotlightCard
                key={index}
                spotlightColor="rgba(59, 130, 246, 0.15)"
                className="rounded-xl"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: 1.6 + index * 0.2,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 120,
                    damping: 20
                  }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02
                  }}
                  className="relative rounded-xl p-6 text-center overflow-hidden"
                  style={{
                    background: 'rgba(30, 41, 59, 0.3)',
                    backdropFilter: 'blur(15px)',
                    WebkitBackdropFilter: 'blur(15px)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                {/* Glassmorphism overlay */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 1,
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(34, 197, 94, 0.1))',
                    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                    className="text-3xl font-bold text-blue-400 mb-2 block"
                  />
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
              </motion.div>
              </SpotlightCard>
            ))}
          </motion.div>
        </div>
      </SectionTransition>

      {/* Social Proof Section */}
      <SectionTransition sectionId="social-proof" className="py-16 px-6 bg-slate-950/50 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">
              Trusted by Forward-Thinking Businesses
            </h2>
            
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-8"
            >
              {[
                { icon: <Heart className="w-8 h-8" strokeWidth={1.5} />, name: 'Healthcare' },
                { icon: <ShoppingCart className="w-8 h-8" strokeWidth={1.5} />, name: 'E-commerce' },
                { icon: <Briefcase className="w-8 h-8" strokeWidth={1.5} />, name: 'Professional Services' },
                { icon: <BarChart3 className="w-8 h-8" strokeWidth={1.5} />, name: 'B2B SaaS' },
                { icon: <Building className="w-8 h-8" strokeWidth={1.5} />, name: 'Retail' },
                { icon: <Banknote className="w-8 h-8" strokeWidth={1.5} />, name: 'Financial Services' }
              ].map((industry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: 0.4 + i * 0.1,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 120,
                    damping: 20
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    filter: 'brightness(1.2)'
                  }}
                  className="flex flex-col items-center gap-3 p-4 rounded-lg transition-all duration-300 cursor-pointer group"
                  style={{
                    background: 'rgba(30, 41, 59, 0.3)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                  }}
                >
                  <div className="text-4xl opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    {industry.icon}
                  </div>
                  <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                    {industry.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-slate-400 text-lg"
            >
              Join innovative companies that trust Vrvo to transform their digital presence
            </motion.p>
          </motion.div>
        </div>
      </SectionTransition>

      {/* Services Section */}
      <SectionTransition sectionId="services" className="py-20 px-6 bg-slate-900/50 relative z-10">
        <div className="max-w-7xl mx-auto">
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
            className="text-center mb-16"
          >
            <ParallaxText speed={0.6} className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight text-balance relative">
              {/* Decorative Accent Lines */}
              <div className="absolute -left-8 top-1/2 w-6 h-px bg-gradient-to-r from-transparent to-blue-400/30" />
              <div className="absolute -right-8 top-1/2 w-6 h-px bg-gradient-to-l from-transparent to-cyan-400/30" />
              Three Pillars of <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.4
                }}
                className="text-blue-400"
              >
                <ShimmerText shimmerColors={['#60a5fa', '#34d399', '#14b8a6']}>
                  Digital Excellence
                </ShimmerText>
              </motion.span>
            </ParallaxText>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.6
              }}
              className="text-slate-400 text-lg max-w-2xl mx-auto"
            >
              Comprehensive solutions that drive measurable business growth
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <AnimatedIcon animationType="glow"><Target className="w-16 h-16" strokeWidth={1.5} /></AnimatedIcon>,
                title: 'Programmatic Advertising',
                subtitle: 'Reach your ideal customers at the right moment, on the right platform',
                features: [
                  'AI-powered audience targeting across display, video, and native',
                  'Real-time bid optimization to maximize every dollar',
                  'Cross-device campaigns that follow your customer journey',
                  'Transparent reporting with actionable insights'
                ],
                outcome: 'Pay only for the results that matter. Scale efficiently as you grow.'
              },
              {
                icon: <AnimatedIcon animationType="glow"><TrendingUp className="w-16 h-16" strokeWidth={1.5} /></AnimatedIcon>,
                title: 'Digital Marketing Strategy',
                subtitle: 'Integrated campaigns designed to convert browsers into customers',
                features: [
                  'Custom strategies tailored to your business goals',
                  'SEO and content that actually ranks and engages',
                  'Social media that builds community and drives action',
                  'Email automation that nurtures leads on autopilot'
                ],
                outcome: 'Build a predictable pipeline of qualified leads, month after month.'
              },
              {
                icon: <AnimatedIcon animationType="glow"><Lightbulb className="w-16 h-16" strokeWidth={1.5} /></AnimatedIcon>,
                title: 'Business Transformation',
                subtitle: 'Transform your marketing from cost center to growth engine',
                features: [
                  'MarTech stack audit and optimization',
                  'CRM setup and integration (HubSpot, Salesforce, etc.)',
                  'Custom dashboards for real-time performance tracking',
                  'Team training and ongoing strategic support',
                  'Change management and adoption strategies'
                ],
                outcome: 'Make data-driven decisions with confidence. Scale without chaos.'
              }
            ].map((service, index) => (
              <SpotlightCard
                key={index}
                spotlightColor="rgba(34, 197, 94, 0.1)"
                className="rounded-2xl"
              >
                <motion.div
                  initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(5px)" }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: index * 0.15,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 80,
                    damping: 25
                  }}
                  whileHover={{ 
                    y: -12,
                    scale: 1.02,
                    rotateY: 5,
                    rotateX: 5
                  }}
                  className="relative rounded-2xl p-8 perspective-1000 overflow-hidden"
                  style={{ 
                    transformStyle: "preserve-3d",
                    background: 'rgba(30, 41, 59, 0.6)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid transparent',
                    backgroundImage: 'linear-gradient(rgba(30, 41, 59, 0.6), rgba(30, 41, 59, 0.6)), linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.3))',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 0 20px rgba(59, 130, 246, 0.05)'
                  }}
                >
                {/* Glassmorphism overlay */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 1,
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(34, 197, 94, 0.15))',
                    boxShadow: '0 25px 50px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 0 30px rgba(6, 182, 212, 0.2)'
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      delay: 0.5 + index * 0.2,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    className="text-blue-400 mb-6 transition-colors duration-300"
                  >
                    <AdaptiveFloatingElement
                      amplitude={8}
                      duration={3 + index * 0.5}
                      delay={1 + index * 0.3}
                    >
                      <AnimatedIcon animationType="rotate">
                        {service.icon}
                      </AnimatedIcon>
                    </AdaptiveFloatingElement>
                  </motion.div>
                
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: 0.7 + index * 0.2,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }}
                  className="text-2xl font-bold text-white mb-2"
                >
                  <ShimmerText>
                    {service.title}
                  </ShimmerText>
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: 0.8 + index * 0.2,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }}
                  className="text-blue-300 text-sm mb-6 font-medium"
                >
                  {service.subtitle}
                </motion.p>
                
                <motion.ul 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: 0.9 + index * 0.2,
                    duration: 0.6
                  }}
                  className="space-y-3 mb-6"
                >
                  {service.features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ 
                        delay: 1 + index * 0.2 + i * 0.1,
                        duration: 0.4
                      }}
                      whileHover={{ x: 5 }}
                      className="text-slate-400 flex items-start gap-2 transition-all duration-200"
                    >
                      <AdaptiveFloatingElement
                        amplitude={3}
                        duration={2 + i * 0.2}
                        delay={4 + i * 0.3}
                      >
                        <AnimatedIcon animationType="pulse" className="mt-1 flex-shrink-0">
                          <Zap className="w-4 h-4 text-blue-400" />
                        </AnimatedIcon>
                      </AdaptiveFloatingElement>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: 1.2 + index * 0.2,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }}
                  className="pt-6 border-t border-slate-700/50"
                >
                  <p className="text-sm text-slate-500 mb-2">Outcome:</p>
                  <p className="text-slate-300 font-medium">{service.outcome}</p>
                </motion.div>
                </div>
              </motion.div>
              </SpotlightCard>
            ))}
          </motion.div>
          </div>
      </SectionTransition>

      {/* Animated Divider */}
      <AnimatedDivider />

      {/* Approach Section */}
      <SectionTransition sectionId="approach" className="py-20 px-6 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
            className="text-center mb-16"
          >
            <ParallaxText speed={0.5} className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  delay: 0.4
                }}
              >
                Data-Driven.
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  delay: 0.6
                }}
              >
                Human-Centered.
              </motion.span>{' '}
              <motion.span 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.8
                }}
                className="text-blue-400"
              >
                Results-Obsessed.
              </motion.span>
            </ParallaxText>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-5 gap-4"
          >
            {[
              { step: '01', title: 'Discovery', desc: 'Deep-dive into your business, audience, and goals' },
              { step: '02', title: 'Strategy', desc: 'Custom roadmap blending programmatic, marketing, and transformation' },
              { step: '03', title: 'Execution', desc: 'Launch campaigns with precision and agility' },
              { step: '04', title: 'Optimization', desc: 'Continuous testing, learning, and scaling' },
              { step: '05', title: 'Growth', desc: 'Long-term partnership for sustained results' }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.15,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                whileHover={{ 
                  y: -8,
                  scale: 1.05
                }}
                className="relative rounded-xl p-6 overflow-hidden"
                style={{
                  background: 'rgba(30, 41, 59, 0.3)',
                  backdropFilter: 'blur(15px)',
                  WebkitBackdropFilter: 'blur(15px)',
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                {/* Glassmorphism overlay */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 1,
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(34, 197, 94, 0.1))',
                    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      delay: 0.5 + index * 0.15,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    className="text-blue-400 font-bold text-sm mb-3 inline-block"
                  >
                    <AdaptiveFloatingElement
                      amplitude={6}
                      duration={2.5 + index * 0.3}
                      delay={2 + index * 0.4}
                    >
                      <AnimatedIcon animationType="scale">
                        {phase.step}
                      </AnimatedIcon>
                    </AdaptiveFloatingElement>
                  </motion.div>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: 0.7 + index * 0.15,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }}
                  className="text-xl font-bold text-white mb-2"
                >
                  {phase.title}
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: 0.9 + index * 0.15,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }}
                  className="text-slate-400 text-sm"
                >
                  {phase.desc}
                </motion.p>
                
                {index < 4 && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      delay: 1.1 + index * 0.15,
                      duration: 0.6
                    }}
                    className="hidden md:block absolute -right-2 top-1/2 transform -translate-y-1/2"
                  >
                    <AdaptiveFloatingElement
                      amplitude={4}
                      duration={3 + index * 0.2}
                      delay={3 + index * 0.5}
                    >
                      <AnimatedIcon animationType="bounce">
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                      </AnimatedIcon>
                    </AdaptiveFloatingElement>
                  </motion.div>
                )}
                </div>
              </motion.div>
            ))}
          </motion.div>
          </div>
      </SectionTransition>

      {/* Who We Serve */}
      <SectionTransition sectionId="who-we-serve" className="py-20 px-6 bg-slate-900/50 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
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
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2
              }}
              className="inline-block mb-6"
            >
              <AdaptiveFloatingElement
                amplitude={12}
                duration={4.5}
                delay={1.5}
              >
                <AnimatedIcon animationType="rotate"><Users className="w-16 h-16 text-blue-400" /></AnimatedIcon>
              </AdaptiveFloatingElement>
            </motion.div>
            
            <ParallaxText speed={0.4} className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              <ShimmerText>
              Built for SMBs Ready to Think Bigger
              </ShimmerText>
            </ParallaxText>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.6
              }}
              className="text-slate-400 text-lg mb-8"
            >
              We specialize in helping small and medium-sized businesses compete with industry leaders—without the enterprise budget.
            </motion.p>
            
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {[
                { name: 'Professional Services', tooltip: 'Law firms, consultancies, agencies' },
                { name: 'Healthcare', tooltip: 'Clinics, med spas, wellness centers' },
                { name: 'E-commerce', tooltip: 'DTC brands, online retailers' },
                { name: 'B2B SaaS', tooltip: 'Software and tech platforms' },
                { name: 'Home Services', tooltip: 'HVAC, solar, contractors' },
                { name: 'Financial Services', tooltip: 'Advisors, insurance, fintech' }
              ].map((industry, i) => (
                <motion.span 
                  key={i}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: 1 + i * 0.1,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 120,
                    damping: 20
                  }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.05,
                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(6, 182, 212, 0.4)',
                    letterSpacing: '0.05em'
                  }}
                  className="relative px-6 py-3 rounded-full text-slate-300 transition-all duration-500 cursor-pointer overflow-hidden group"
                  style={{
                    background: 'rgba(30, 41, 59, 0.4)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(148, 163, 184, 0.3)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {/* Shimmer effect overlay */}
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                      backgroundSize: '200% 100%',
                    }}
                    animate={{
                      backgroundPosition: ['200% 0', '-200% 0'],
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Enhanced hover background */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    initial={{ opacity: 0 }}
                    whileHover={{
                      opacity: 1,
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(34, 197, 94, 0.2))',
                      boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative group">
                    <span className="relative z-10">{industry.name}</span>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20">
                      {industry.tooltip}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
                    </div>
                  </div>
                </motion.span>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="text-center mt-8"
            >
              <AdaptiveMagneticButton
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)"
                }}
                className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-3 transition-all duration-300 border border-slate-600 hover:border-blue-500"
              >
                See Industry Solutions
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </AdaptiveMagneticButton>
            </motion.div>
          </motion.div>
            </div>
      </SectionTransition>

      {/* How It Works Section */}
      <SectionTransition sectionId="how-it-works" className="py-20 px-6 bg-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto">
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
            className="text-center mb-16"
          >
            <ParallaxText speed={0.5} className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Enterprise Technology, SMB Accessibility
            </ParallaxText>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.2
              }}
              className="text-slate-600 text-lg max-w-3xl mx-auto"
            >
              We leverage the same programmatic platforms and data intelligence as Fortune 500 companies—without the enterprise complexity or cost.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Platform Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
                    <span className="text-white font-semibold">Vrvo Platform</span>
        </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="space-y-4">
                  <div className="h-4 bg-blue-500/20 rounded animate-pulse"></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-16 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-lg"></div>
                    <div className="h-16 bg-gradient-to-r from-cyan-500/30 to-teal-500/30 rounded-lg"></div>
                    <div className="h-16 bg-gradient-to-r from-teal-500/30 to-green-500/30 rounded-lg"></div>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg flex items-center justify-center">
                    <span className="text-slate-400 text-sm">Real-time Performance Dashboard</span>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full shadow-lg"
                />
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-2 -left-2 w-4 h-4 bg-cyan-500 rounded-full shadow-lg"
                />
              </div>
            </motion.div>

            {/* Right: Benefits List */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.2
              }}
              className="space-y-6"
            >
              {[
                {
                  icon: <Zap className="w-8 h-8" strokeWidth={1.5} />,
                  title: "Unified dashboard for all campaigns and channels",
                  description: "Manage display, video, native, and social campaigns from one central platform."
                },
                {
                  icon: <Target className="w-8 h-8" strokeWidth={1.5} />,
                  title: "Real-time performance monitoring and alerts",
                  description: "Get instant notifications when campaigns need attention or optimization."
                },
                {
                  icon: <TrendingUp className="w-8 h-8" strokeWidth={1.5} />,
                  title: "Automated optimization powered by machine learning",
                  description: "AI continuously adjusts bids, audiences, and placements for maximum ROI."
                },
                {
                  icon: <Lightbulb className="w-8 h-8" strokeWidth={1.5} />,
                  title: "Complete transparency - see exactly where your budget goes",
                  description: "Detailed reporting shows every impression, click, and conversion with full attribution."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: 0.4 + index * 0.1,
                    duration: 0.6
                  }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-white/80 backdrop-blur-sm border border-slate-200 hover:border-blue-500/50 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-600">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-slate-600 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="pt-4"
              >
                <AdaptiveMagneticButton
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-3 transition-all duration-300"
                >
                  See The Platform
                  <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                </AdaptiveMagneticButton>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </SectionTransition>

      {/* Case Study Teaser Section */}
      <SectionTransition sectionId="case-studies" className="py-20 px-6 bg-slate-900/30 relative z-10">
        <div className="max-w-7xl mx-auto">
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
            className="text-center mb-16"
          >
            <ParallaxText speed={0.5} className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Results That Speak
            </ParallaxText>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.2
              }}
              className="text-slate-400 text-lg max-w-2xl mx-auto"
            >
              Real results from real businesses that trusted Vrvo with their growth
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Case Study Card 1 - Healthcare */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: 0.2,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(251, 191, 36, 0.3)"
              }}
              className="relative p-8 rounded-2xl border border-yellow-500/20 overflow-hidden group cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(245, 158, 11, 0.05))',
              }}
            >
              {/* Floating particles */}
              <motion.div
                animate={{ y: [-5, 5, -5], rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full opacity-60"
              />
              <motion.div
                animate={{ y: [5, -5, 5], rotate: [360, 180, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-4 left-4 w-2 h-2 bg-yellow-300 rounded-full opacity-40"
              />
              
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
                  className="text-6xl font-bold text-yellow-400 mb-4"
                >
                  <AnimatedCounter end={3.2} suffix="x" className="text-yellow-400" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  Increase in Qualified Leads
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed">
                  Healthcare provider scaled patient acquisition while reducing cost per lead by 47%
                </p>
              </div>
            </motion.div>

            {/* Case Study Card 2 - E-commerce */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: 0.4,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
              }}
              className="relative p-8 rounded-2xl border border-blue-500/20 overflow-hidden group cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.05))',
              }}
            >
              {/* Floating particles */}
              <motion.div
                animate={{ y: [-3, 7, -3], rotate: [0, 360, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 right-6 w-4 h-4 bg-blue-400 rounded-full opacity-50"
              />
              <motion.div
                animate={{ y: [7, -3, 7], rotate: [360, 0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-6 left-6 w-3 h-3 bg-blue-300 rounded-full opacity-30"
              />
              
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.7, duration: 0.6, type: "spring" }}
                  className="text-6xl font-bold text-blue-400 mb-4"
                >
                  <AnimatedCounter end={425} suffix="%" className="text-blue-400" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  ROAS Improvement
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed">
                  E-commerce brand achieved 4.25x return on ad spend within 90 days
                </p>
              </div>
            </motion.div>

            {/* Case Study Card 3 - B2B SaaS */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: 0.6,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(20, 184, 166, 0.3)"
              }}
              className="relative p-8 rounded-2xl border border-teal-500/20 overflow-hidden group cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(13, 148, 136, 0.05))',
              }}
            >
              {/* Floating particles */}
              <motion.div
                animate={{ y: [-6, 4, -6], rotate: [0, 180, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-5 right-5 w-3 h-3 bg-teal-400 rounded-full opacity-60"
              />
              <motion.div
                animate={{ y: [4, -6, 4], rotate: [360, 180, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-5 left-5 w-2 h-2 bg-teal-300 rounded-full opacity-40"
              />
              
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.9, duration: 0.6, type: "spring" }}
                  className="text-6xl font-bold text-teal-400 mb-4"
                >
                  <AnimatedCounter end={67} suffix="%" className="text-teal-400" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  Reduction in CAC
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed">
                  B2B SaaS company cut customer acquisition costs while scaling to new markets
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mt-12"
          >
            <p className="text-slate-500 text-sm italic">
              Results vary based on industry, budget, and goals
            </p>
          </motion.div>
        </div>
      </SectionTransition>

      {/* Animated Divider */}
      <AnimatedDivider />

      {/* About Section */}
      <SectionTransition sectionId="about" className="py-20 px-6 bg-slate-900/20 relative z-10">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Subtle Dot Pattern */}
          <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400/10 rounded-full" />
          <div className="absolute top-20 right-20 w-1 h-1 bg-cyan-400/15 rounded-full" />
          <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-blue-500/10 rounded-full" />
          <div className="absolute bottom-10 right-1/3 w-1 h-1 bg-cyan-500/10 rounded-full" />
          
          {/* Faint Geometric Shapes */}
          <div className="absolute top-1/3 left-5 w-8 h-8 border border-blue-400/5 rounded-full" />
          <div className="absolute bottom-1/3 right-5 w-6 h-6 border border-cyan-400/8 rotate-45" />
        </div>
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
            <ParallaxText speed={0.3} className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Why Vrvo Exists
            </ParallaxText>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.4
              }}
              className="text-xl text-slate-300 leading-relaxed mb-6"
            >
              For too long, sophisticated digital marketing has been gatekept by high minimums, complex platforms, and agencies that treat SMBs like afterthoughts.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.4
              }}
              className="text-lg text-slate-300 leading-relaxed mb-6"
            >
              We believe every ambitious business deserves access to the same technology, strategy, and expertise that enterprise companies use to dominate their markets.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.6
              }}
              className="text-lg text-slate-300 leading-relaxed mb-6"
            >
              That&apos;s why we built Vrvo—to democratize programmatic advertising and digital transformation for businesses ready to punch above their weight class.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.8
              }}
              className="text-lg text-slate-300 leading-relaxed mb-8"
            >
              We&apos;re not just your marketing vendor. We&apos;re your strategic partner, your growth team, and your competitive advantage.
            </motion.p>

            {/* Promise Highlight Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 1.0
              }}
              className="relative p-6 rounded-xl border border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-xl"></div>
              <p className="relative text-lg text-white font-medium text-center">
                <span className="text-blue-400 font-bold">Our Promise:</span> No long-term contracts. No hidden fees. Just transparent partnership focused on your growth.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </SectionTransition>

      {/* Enhanced CTA Section */}
      <SectionTransition sectionId="cta" className="py-20 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden z-10">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Light Orbs */}
          <motion.div
            animate={{ y: [-15, 15, -15], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/20 rounded-full blur-sm"
          />
          <motion.div
            animate={{ y: [15, -15, 15], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-cyan-200/30 rounded-full blur-sm"
          />
          <motion.div
            animate={{ y: [-10, 10, -10], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute top-2/3 left-2/3 w-4 h-4 bg-blue-200/25 rounded-full blur-sm"
          />
        </div>
        {/* Animated Background Glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: [
              'radial-gradient(ellipse 800px 600px at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
              'radial-gradient(ellipse 1000px 800px at 50% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
              'radial-gradient(ellipse 800px 600px at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)'
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
        
        {/* Pulsing Border Glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            boxShadow: [
              '0 0 50px rgba(59, 130, 246, 0.2)',
              '0 0 100px rgba(59, 130, 246, 0.4)',
              '0 0 50px rgba(59, 130, 246, 0.2)'
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
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
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.2
              }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
            >
              Ready to Transform Your Growth?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.4
              }}
              className="text-xl text-slate-400 mb-10 leading-relaxed"
            >
              Let&apos;s talk about your goals, your challenges, and how Vrvo can help you compete—and win.
            </motion.p>
            
            {/* Mini Form Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.6
              }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <form className="space-y-6">
                  {/* Challenge Dropdown */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      What&apos;s your biggest marketing challenge?
                    </label>
                    <select className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
                      <option value="">Select your challenge</option>
                      <option value="generating-leads">Generating Leads</option>
                      <option value="reducing-cac">Reducing CAC</option>
                      <option value="scaling-campaigns">Scaling Campaigns</option>
                      <option value="measuring-roi">Measuring ROI</option>
                      <option value="all-of-above">All of the Above</option>
                    </select>
                  </motion.div>

                  {/* Budget Dropdown */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      What&apos;s your monthly marketing budget?
                    </label>
                    <select className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
                      <option value="">Select budget range</option>
                      <option value="5k-15k">$5K - $15K</option>
                      <option value="15k-50k">$15K - $50K</option>
                      <option value="50k-100k">$50K - $100K</option>
                      <option value="100k+">$100K+</option>
                    </select>
                  </motion.div>

                  {/* Email Input */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 1.0, duration: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                  >
                    <AdaptiveMagneticButton
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-blue-500/30"
                    >
                      Get Your Custom Strategy
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </AdaptiveMagneticButton>
                  </motion.div>
                </form>

                {/* Alternative CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                  className="text-center mt-6 pt-6 border-t border-slate-700"
                >
                  <p className="text-slate-400 text-sm mb-3">
                    Or schedule a 30-minute consultation
                  </p>
                  <button className="text-blue-400 hover:text-blue-300 underline transition-colors duration-300">
                    Book a Call →
                  </button>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                  className="flex flex-wrap justify-center gap-6 mt-6 pt-6 border-t border-slate-700"
                >
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <span className="text-green-400">✓</span>
                    Free consultation
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <span className="text-green-400">✓</span>
                    No-pressure approach
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <span className="text-green-400">✓</span>
                    Custom roadmap included
                  </div>
          </motion.div>
        </div>
            </motion.div>
          </motion.div>
        </div>
      </SectionTransition>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
        className="border-t border-slate-800 py-12 px-6 relative z-10"
      >
        <div className="max-w-7xl mx-auto text-center text-slate-500">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.2
            }}
            whileHover={{ scale: 1.05 }}
            className="mb-4 cursor-pointer"
          >
            <Image
              src="/logo/vrvo_wordmark_white.png"
              alt="Vrvo - Next-Generation Marketing"
              width={160}
              height={50}
              className="w-auto h-auto max-w-[160px] mx-auto"
            />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: 0.4
            }}
            className="text-sm"
          >
            © 2025 Vrvo. Next-Generation Marketing for Forward-Thinking Businesses.
          </motion.p>
          </div>
      </motion.footer>
    </main>
  )
}