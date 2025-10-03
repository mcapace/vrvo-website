'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Target, TrendingUp, Lightbulb, CheckCircle, BarChart3, Zap, Monitor, Smartphone, Radio } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import SectionTransition from '../../../components/SectionTransition'
import ParallaxText from '../../../components/ParallaxText'
import ShimmerText from '../../../components/ShimmerText'
import SpotlightCard from '../../../components/SpotlightCard'
import AnimatedIcon from '../../../components/AnimatedIcon'
import AdaptiveFloatingElement from '../../../components/AdaptiveFloatingElement'

export default function ProgrammaticAdvertisingPage() {
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
                Programmatic Advertising
              </span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight text-balance">
              <ParallaxText speed={0.5}>
                <ShimmerText>
                  Programmatic Advertising That Performs
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
              Enterprise-grade audience targeting and automated bidding that maximizes reach and ROI for growing businesses
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.9,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
              >
                Discuss Your Programmatic Strategy
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </SectionTransition>

      {/* What is Programmatic Section */}
      <SectionTransition sectionId="what-is-programmatic" className="py-20 px-6 bg-slate-900/50 relative z-10">
        <div className="max-w-4xl mx-auto">
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What is Programmatic Advertising?
            </h2>
            <div 
              className="p-8 rounded-xl border border-blue-500/30"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))'
              }}
            >
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                Programmatic advertising allows you to reach your ideal customers across millions of websites, apps, and connected devices—with precision and scale that traditional advertising can't match. Vrvo manages your programmatic campaigns across display, video, native, and audio, using real-time bidding and AI-powered optimization to ensure every dollar works harder.
              </p>
              <p className="text-sm text-blue-400 font-medium">
                Automated ad buying that uses data and algorithms to serve ads to the right person, at the right time, at the right price.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionTransition>

      {/* Overview Section */}
      <SectionTransition sectionId="overview" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Precision Targeting at Scale
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Our programmatic advertising platform combines advanced audience targeting, real-time optimization, and transparent reporting to deliver measurable results across all digital touchpoints.
            </p>
          </motion.div>
        </div>
      </SectionTransition>

      {/* Key Capabilities */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Key Capabilities
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Comprehensive programmatic solutions across all digital channels
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Monitor className="w-8 h-8" strokeWidth={1.5} />,
                title: 'Display Advertising',
                description: 'Banner, rich media, and interactive display campaigns across premium publisher networks with advanced targeting options.'
              },
              {
                icon: <Target className="w-8 h-8" strokeWidth={1.5} />,
                title: 'Video Advertising',
                description: 'In-stream, out-stream, and connected TV advertising with sophisticated audience targeting and brand safety measures.'
              },
              {
                icon: <Zap className="w-8 h-8" strokeWidth={1.5} />,
                title: 'Native Advertising',
                description: 'Seamlessly integrated native ads that match publisher content while maintaining clear disclosure and engagement.'
              },
              {
                icon: <Radio className="w-8 h-8" strokeWidth={1.5} />,
                title: 'Audio & Podcast Advertising',
                description: 'Programmatic audio advertising across streaming platforms, podcasts, and digital radio with precise targeting.'
              },
              {
                icon: <BarChart3 className="w-8 h-8" strokeWidth={1.5} />,
                title: 'Audience Targeting & Segmentation',
                description: 'Advanced audience segmentation using first-party data, lookalike modeling, and behavioral targeting.'
              },
              {
                icon: <TrendingUp className="w-8 h-8" strokeWidth={1.5} />,
                title: 'Real-Time Bidding & Optimization',
                description: 'AI-powered bid optimization and real-time campaign adjustments to maximize performance and ROI.'
              }
            ].map((capability, index) => (
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
                  className="relative rounded-xl p-6 overflow-hidden"
                  style={{
                    background: 'rgba(30, 41, 59, 0.3)',
                    backdropFilter: 'blur(15px)',
                    WebkitBackdropFilter: 'blur(15px)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="relative z-10">
                    <div className="text-blue-400 mb-4">
                      <AdaptiveFloatingElement
                        amplitude={6}
                        duration={2.5 + index * 0.3}
                        delay={1 + index * 0.3}
                      >
                        <AnimatedIcon animationType="scale">
                          {capability.icon}
                        </AnimatedIcon>
                      </AdaptiveFloatingElement>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">
                      {capability.title}
                    </h3>
                    
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </motion.div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </SectionTransition>

      {/* Technology Partners */}
      <SectionTransition sectionId="technology-partners" className="py-20 px-6 relative z-10">
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
              Technology Partners
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              We work with leading DSPs, DMPs, and verification partners to ensure optimal performance and transparency
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Google DV360', 'The Trade Desk', 'Amazon DSP', 'Microsoft Xandr'].map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="p-4 rounded-lg border border-slate-700 bg-slate-800/50"
                >
                  <span className="text-slate-300 font-medium">{partner}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionTransition>

      {/* The Vrvo Advantage */}
      <SectionTransition sectionId="advantage" className="py-20 px-6 bg-slate-900/30 relative z-10">
        <div className="max-w-4xl mx-auto">
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Vrvo Advantage
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: "Transparent pricing - no hidden fees or markups",
                description: "Clear, upfront pricing with no hidden costs. You know exactly what you're paying and where your budget goes."
              },
              {
                title: "Direct DSP relationships for better rates",
                description: "Direct partnerships with leading demand-side platforms ensure optimal rates and access to premium inventory."
              },
              {
                title: "Proprietary audience segments",
                description: "Advanced audience modeling and segmentation techniques that deliver higher-quality traffic and better conversion rates."
              },
              {
                title: "Real-time dashboard access",
                description: "Complete transparency with real-time campaign performance data, so you always know how your campaigns are performing."
              },
              {
                title: "White-glove account management",
                description: "Dedicated account management with strategic oversight, not just campaign execution. We're your strategic partners."
              }
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6
                }}
                className="flex items-start gap-4 p-6 rounded-xl"
                style={{
                  background: 'rgba(30, 41, 59, 0.3)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(148, 163, 184, 0.2)'
                }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {point.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionTransition>

      {/* Process Section */}
      <SectionTransition sectionId="process" className="py-20 px-6 relative z-10">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Programmatic Process
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              A proven methodology for programmatic advertising success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Audience Analysis', desc: 'Deep-dive into your target audience, competitive landscape, and market opportunities' },
              { step: '02', title: 'Targeting Strategy', desc: 'Develop sophisticated audience segments and targeting parameters for maximum reach' },
              { step: '03', title: 'Creative Development', desc: 'Design and test compelling ad creatives across display, video, and native formats' },
              { step: '04', title: 'Campaign Setup', desc: 'Launch campaigns with precision QA and real-time monitoring systems' },
              { step: '05', title: 'Optimization', desc: 'Continuous testing, learning, and scaling based on performance data' }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                whileHover={{ 
                  y: -8,
                  scale: 1.05
                }}
                className="relative rounded-xl p-6 overflow-hidden text-center"
                style={{
                  background: 'rgba(30, 41, 59, 0.3)',
                  backdropFilter: 'blur(15px)',
                  WebkitBackdropFilter: 'blur(15px)',
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                <motion.div 
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: 0.5 + index * 0.1,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  className="text-blue-400 font-bold text-sm mb-3 inline-block"
                >
                  {phase.step}
                </motion.div>
                
                <h3 className="text-lg font-bold text-white mb-2">
                  {phase.title}
                </h3>
                
                <p className="text-slate-400 text-sm">
                  {phase.desc}
                </p>
              </motion.div>
            ))}
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to Scale Your Reach?
            </h2>
            
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Let's discuss how programmatic advertising can expand your reach and drive measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Start Your Programmatic Campaign
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </Link>
              <Link
                href="/services"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </SectionTransition>
    </main>
  )
}
