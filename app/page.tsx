'use client'

import { useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Zap, Target, TrendingUp, Lightbulb, Users } from 'lucide-react'
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
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <div className="block mb-4">
                <TextReveal 
                  delay={0.5}
                  staggerDelay={0.04}
                  duration={0.7}
                  className="text-white"
                >
                  Transform Your Digital
                </TextReveal>
              </div>
              <div className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                <TextReveal 
                  delay={1.2}
                  staggerDelay={0.035}
                  duration={0.8}
                  className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent"
                >
                Presence Into Growth
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
              Vrvo combines cutting-edge programmatic advertising, data-driven digital marketing, 
              and business transformation strategies to help SMBs compete at enterprise level.
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
                <ArrowRight className="w-5 h-5" />
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
            <ParallaxText speed={0.6} className="text-4xl md:text-5xl font-bold text-white mb-4">
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
                icon: <AnimatedIcon animationType="glow"><Target className="w-12 h-12" /></AnimatedIcon>,
                title: 'Programmatic Advertising',
                subtitle: 'Precision-Targeted Campaigns That Scale',
                features: [
                  'Automated bidding strategies',
                  'Real-time optimization',
                  'Cross-platform reach',
                  'Advanced audience segmentation'
                ],
                outcome: 'Lower acquisition costs, higher ROI, smarter spend'
              },
              {
                icon: <AnimatedIcon animationType="glow"><TrendingUp className="w-12 h-12" /></AnimatedIcon>,
                title: 'Digital Marketing Strategy',
                subtitle: 'Integrated Campaigns That Convert',
                features: [
                  'Multi-channel strategy',
                  'Content marketing & SEO/SEM',
                  'Social media management',
                  'Analytics & reporting'
                ],
                outcome: 'Consistent brand presence, qualified leads, measurable growth'
              },
              {
                icon: <AnimatedIcon animationType="glow"><Lightbulb className="w-12 h-12" /></AnimatedIcon>,
                title: 'Business Transformation',
                subtitle: 'Digital Infrastructure That Empowers',
                features: [
                  'MarTech stack optimization',
                  'CRM implementation',
                  'Data analytics setup',
                  'Process automation'
                ],
                outcome: 'Scalable systems, data-driven decisions, efficiency'
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
            <ParallaxText speed={0.5} className="text-4xl md:text-5xl font-bold text-white mb-4">
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
            
            <ParallaxText speed={0.4} className="text-3xl md:text-4xl font-bold text-white mb-4">
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
              We partner with ambitious small and medium-sized businesses across industries
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {['Professional Services', 'Healthcare', 'E-commerce', 'B2B SaaS', 'Retail', 'Financial Services'].map((industry, i) => (
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
                  
                  <span className="relative z-10">{industry}</span>
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </SectionTransition>

      {/* Animated Divider */}
      <AnimatedDivider />

      {/* About Section */}
      <SectionTransition sectionId="about" className="py-20 px-6 relative z-10">
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
            <ParallaxText speed={0.3} className="text-4xl md:text-5xl font-bold text-white mb-6">
              Leveling the Playing Field
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
              Enterprise-grade marketing strategy shouldn&apos;t be exclusive to Fortune 500 companies. 
              Vrvo brings sophisticated programmatic advertising, integrated digital marketing, 
              and transformative business strategies to ambitious SMBs ready to scale.
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
              className="text-lg text-slate-400"
            >
              We exist to help forward-thinking businesses compete—and win—in the digital age.
            </motion.p>
          </motion.div>
        </div>
      </SectionTransition>

      {/* Enhanced CTA Section */}
      <SectionTransition sectionId="cta" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden z-10">
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
              className="text-4xl md:text-5xl font-bold text-white mb-6"
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
              className="text-xl text-slate-400 mb-10"
            >
              Let&apos;s discuss how Vrvo can elevate your digital marketing and business infrastructure.
            </motion.p>
            
            <motion.div
              className="relative inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.6
              }}
            >
              {/* Animated Button Border */}
              <motion.div
                className="absolute inset-0 rounded-lg"
                animate={{
                  background: [
                    'linear-gradient(45deg, rgba(59, 130, 246, 0.5), rgba(6, 182, 212, 0.5))',
                    'linear-gradient(45deg, rgba(6, 182, 212, 0.5), rgba(59, 130, 246, 0.5))',
                    'linear-gradient(45deg, rgba(59, 130, 246, 0.5), rgba(6, 182, 212, 0.5))'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  filter: 'blur(1px)',
                  zIndex: -1,
                }}
              />
              
              <AdaptiveMagneticButton
                whileHover={{ 
                  scale: 1.08,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.6), 0 0 100px rgba(6, 182, 212, 0.4)",
                  backgroundColor: "rgb(37, 99, 235)"
                }}
                whileTap={{ scale: 0.95 }}
                magneticStrength={0.4}
                magneticDistance={100}
                className="relative bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-lg font-bold text-xl inline-flex items-center gap-4 transition-all duration-300 border-2 border-blue-400/30"
              >
                Let&apos;s Talk Growth
                <AdaptiveFloatingElement
                  amplitude={8}
                  duration={3.5}
                  delay={2}
                >
                  <AnimatedIcon animationType="bounce">
              <ArrowRight className="w-6 h-6" />
                  </AnimatedIcon>
                </AdaptiveFloatingElement>
              </AdaptiveMagneticButton>
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