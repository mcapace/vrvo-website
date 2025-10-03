'use client'

import { useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Zap, Target, TrendingUp, Lightbulb, Users, Heart, ShoppingCart, Briefcase, BarChart3, Building, Banknote } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
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
    <main className="min-h-screen bg-white">
      {/* Navigation - Zapier Style */}
      <nav className="fixed top-0 w-full z-40 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/vrvo_wordmark_black.png"
              alt="Vrvo"
              width={120}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </Link>
          
          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-gray-900 hover:text-orange-500 transition-colors duration-200 font-medium">
              Services
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-orange-500 transition-colors duration-200 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-orange-500 transition-colors duration-200 font-medium">
              Contact
            </Link>
          </div>
          
          {/* CTA Button */}
          <Link href="/contact">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
              Get Started
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section - Zapier Style */}
      <section className="relative bg-white py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="text-eyebrow mb-6">
            Digital Marketing & Business Transformation
        </div>
          
          {/* Main Headline */}
          <h1 className="text-hero text-gray-900 mb-8 leading-tight">
            Transform Your Business Through Strategic Digital Marketing
            </h1>
            
          {/* Subheadline */}
          <p className="text-body-large text-gray-600 mb-12 max-w-2xl mx-auto">
            Vrvo is your end-to-end digital growth partner. We combine advanced programmatic advertising, integrated marketing strategy, and business transformation consulting to help ambitious SMBs build scalable, data-driven growth engines.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/contact">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </Link>
            <Link href="/services">
              <button className="border border-gray-300 hover:border-gray-400 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                View Services
              </button>
            </Link>
          </div>
          
          {/* Trust Line */}
          <p className="text-sm text-gray-500">
            Trusted by 200+ growing businesses
          </p>
        </div>

      </section>

      {/* Logo Cloud / Trust Bar */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm text-gray-500 mb-8">
            Trusted by 200+ growing businesses
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {/* Placeholder logos - replace with actual client logos */}
            {['Client A', 'Client B', 'Client C', 'Client D', 'Client E', 'Client F'].map((client, index) => (
              <div key={index} className="text-gray-400 font-medium">
                {client}
              </div>
            ))}
        </div>
        </div>
      </section>

      {/* Services Section - Clean & Editorial */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="text-eyebrow mb-4">
              Our Services
            </div>
            <h2 className="text-section text-gray-900 mb-6">
              Full-Stack Digital Growth Solutions
            </h2>
            <p className="text-body-large text-gray-600 max-w-2xl mx-auto">
              End-to-end capabilities that work together to accelerate your business
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-10 h-10" strokeWidth={1.5} />,
                title: 'Strategic Marketing',
                subtitle: 'Integrated campaigns that build brands and drive revenue',
                features: [
                  'Brand positioning & messaging architecture',
                  'Multi-channel campaign strategy & execution',
                  'Content marketing & SEO that establishes authority',
                  'Performance marketing (Paid Social, Search, Display)',
                  'Marketing analytics & attribution modeling'
                ]
              },
              {
                icon: <Target className="w-10 h-10" strokeWidth={1.5} />,
                title: 'Programmatic Advertising',
                subtitle: 'Precision audience targeting at enterprise scale',
                features: [
                  'AI-powered programmatic display, video & native',
                  'Cross-platform DSP management',
                  'Advanced audience segmentation & retargeting',
                  'Real-time bid optimization & budget allocation'
                ]
              },
              {
                icon: <Lightbulb className="w-10 h-10" strokeWidth={1.5} />,
                title: 'Business Transformation',
                subtitle: 'Build the infrastructure for scalable growth',
                features: [
                  'Marketing technology stack design & implementation',
                  'CRM & marketing automation (HubSpot, Salesforce, Marketo)',
                  'Data warehouse & analytics infrastructure',
                  'Process optimization & team enablement',
                  'Fractional CMO & strategic advisory'
                ]
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="text-gray-900 mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.subtitle}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-gray-600 text-sm leading-relaxed">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Capabilities Section */}
      <SectionTransition sectionId="capabilities" className="py-20 px-6 bg-slate-900/30 relative z-10">
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
              Integrated Capabilities Across The Digital Spectrum
            </ParallaxText>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-5 border-b border-slate-700">
                {[
                  { id: 'paid-media', label: 'Paid Media', icon: <Target className="w-5 h-5" /> },
                  { id: 'organic-content', label: 'Organic & Content', icon: <TrendingUp className="w-5 h-5" /> },
                  { id: 'martech-data', label: 'MarTech & Data', icon: <BarChart3 className="w-5 h-5" /> },
                  { id: 'creative-brand', label: 'Creative & Brand', icon: <Lightbulb className="w-5 h-5" /> },
                  { id: 'advisory-transformation', label: 'Advisory & Transformation', icon: <Users className="w-5 h-5" /> }
                ].map((tab, index) => (
                  <button
                    key={tab.id}
                    className="flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300 border-b-2 border-transparent hover:border-blue-500"
                  >
                    <span>{tab.icon}</span>
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    'Programmatic Display & Video',
                    'Paid Search (Google Ads, Microsoft Ads)',
                    'Paid Social (Meta, LinkedIn, TikTok, Pinterest)',
                    'Native Advertising',
                    'Connected TV & Audio',
                    'Retargeting & Remarketing'
                  ].map((capability, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ 
                        delay: index * 0.1,
                        duration: 0.6
                      }}
                      className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-300 cursor-pointer group"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:bg-blue-300 transition-colors duration-300"></div>
                      <span className="text-sm">{capability}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionTransition>

      {/* Why Vrvo Is Different Section */}
      <SectionTransition sectionId="why-vrvo" className="py-20 px-6 bg-slate-900/30 relative z-10">
        <div className="max-w-6xl mx-auto">
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
              Why Vrvo Is Different
            </ParallaxText>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Clear differentiators that set us apart from traditional agencies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Users className="w-12 h-12" strokeWidth={1.5} />,
                title: "No Long-Term Contracts",
                description: "Month-to-month partnerships. Stay because we deliver, not because you're locked in."
              },
              {
                icon: <Target className="w-12 h-12" strokeWidth={1.5} />,
                title: "Complete Transparency",
                description: "Real-time dashboard access. Know exactly where your budget goes and what's working."
              },
              {
                icon: <Zap className="w-12 h-12" strokeWidth={1.5} />,
                title: "Strategic + Execution",
                description: "We don't just plan—we do. Full-service from strategy through implementation and optimization."
              },
              {
                icon: <TrendingUp className="w-12 h-12" strokeWidth={1.5} />,
                title: "Built for Growth",
                description: "Scalable solutions that grow with you. Start small, scale as you see results."
              }
            ].map((differentiator, index) => (
              <SpotlightCard
                key={index}
                spotlightColor="rgba(34, 197, 94, 0.1)"
                className="rounded-xl"
              >
                <motion.div
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 80,
                    damping: 25
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
                  <div className="relative z-10">
                    <motion.div 
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ 
                        delay: 0.5 + index * 0.1,
                  duration: 0.6,
                  type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                      className="text-blue-400 mb-4 mx-auto w-fit"
                    >
                      <AdaptiveFloatingElement
                        amplitude={8}
                        duration={3 + index * 0.5}
                        delay={1 + index * 0.3}
                      >
                        <AnimatedIcon animationType="rotate">
                          {differentiator.icon}
                        </AnimatedIcon>
                      </AdaptiveFloatingElement>
                    </motion.div>
                    
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                transition={{
                        delay: 0.7 + index * 0.1,
                  duration: 0.6,
                  type: "spring",
                        stiffness: 100,
                        damping: 20
                      }}
                      className="text-xl font-bold text-white mb-3"
                    >
                      <ShimmerText>
                        {differentiator.title}
                      </ShimmerText>
                    </motion.h3>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                transition={{
                        delay: 0.9 + index * 0.1,
                  duration: 0.6,
                  type: "spring",
                        stiffness: 100,
                        damping: 20
                      }}
                      className="text-slate-400 text-sm leading-relaxed"
                    >
                      {differentiator.description}
                    </motion.p>
                  </div>
                </motion.div>
              </SpotlightCard>
            ))}
          </div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Traditional Agency vs Vrvo
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-red-400 mb-4">Traditional Agency</h4>
                <div className="space-y-3">
                  {[
                    'Long contracts',
                    'Black box reporting',
                    'Strategy only',
                    'One-size-fits-all',
                    'Minimum $50K+/mo'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-slate-400">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-green-400 mb-4">Vrvo</h4>
                <div className="space-y-3">
                  {[
                    'Month-to-month',
                    'Full transparency',
                    'Strategy + execution',
                    'Customized approach',
                    'Starts at $10K/mo'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-slate-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
              The Vrvo Growth Framework
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
              A proven methodology that aligns technology, strategy, and execution
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {[
              { 
                icon: <Zap className="w-8 h-8" strokeWidth={1.5} />,
                title: 'Discover', 
                desc: 'Business & market analysis, competitive intelligence, audience research & segmentation, technology audit, growth opportunity mapping',
                bullets: ['Business & market analysis', 'Competitive intelligence', 'Audience research & segmentation', 'Technology audit', 'Growth opportunity mapping']
              },
              { 
                icon: <Lightbulb className="w-8 h-8" strokeWidth={1.5} />,
                title: 'Architect', 
                desc: 'Strategic roadmap development, channel & tactic prioritization, technology stack design, KPI framework & measurement plan, budget allocation modeling',
                bullets: ['Strategic roadmap development', 'Channel & tactic prioritization', 'Technology stack design', 'KPI framework & measurement plan', 'Budget allocation modeling']
              },
              { 
                icon: <Target className="w-8 h-8" strokeWidth={1.5} />,
                title: 'Execute', 
                desc: 'Campaign development & launch, platform implementation & integration, content production & distribution, continuous testing & optimization, cross-functional coordination',
                bullets: ['Campaign development & launch', 'Platform implementation & integration', 'Content production & distribution', 'Continuous testing & optimization', 'Cross-functional coordination']
              },
              { 
                icon: <TrendingUp className="w-8 h-8" strokeWidth={1.5} />,
                title: 'Evolve', 
                desc: 'Performance analysis & reporting, strategic pivots & adjustments, scaling successful initiatives, team training & knowledge transfer, long-term partnership & growth',
                bullets: ['Performance analysis & reporting', 'Strategic pivots & adjustments', 'Scaling successful initiatives', 'Team training & knowledge transfer', 'Long-term partnership & growth']
              }
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
                className="relative rounded-xl p-8 overflow-hidden"
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
                    className="text-blue-400 mb-4 flex items-center gap-3"
                  >
                    <AdaptiveFloatingElement
                      amplitude={6}
                      duration={2.5 + index * 0.3}
                      delay={2 + index * 0.4}
                    >
                      <AnimatedIcon animationType="scale">
                        {phase.icon}
                      </AnimatedIcon>
                    </AdaptiveFloatingElement>
                    <span className="font-bold text-lg">{phase.title}</span>
                  </motion.div>
                
                <motion.p 
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
                  className="text-slate-300 text-sm mb-4"
                >
                  {phase.desc}
                </motion.p>
                
                <motion.ul 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: 0.9 + index * 0.15,
                    duration: 0.6
                  }}
                  className="space-y-2"
                >
                  {phase.bullets.map((bullet, i) => (
                    <motion.li 
                      key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                        delay: 1.1 + index * 0.15 + i * 0.1,
                        duration: 0.4
                    }}
                      whileHover={{ x: 5 }}
                      className="text-slate-400 flex items-start gap-2 text-xs"
                  >
                    <AdaptiveFloatingElement
                        amplitude={3}
                        duration={2 + i * 0.2}
                        delay={4 + i * 0.3}
                      >
                        <AnimatedIcon animationType="pulse" className="mt-1 flex-shrink-0">
                          <Zap className="w-3 h-3 text-blue-400" />
                      </AnimatedIcon>
                    </AdaptiveFloatingElement>
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </motion.ul>
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