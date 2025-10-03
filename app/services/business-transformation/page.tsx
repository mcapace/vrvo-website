'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Lightbulb, Target, TrendingUp, CheckCircle, BarChart3, Users, Zap, Settings, Database, Building } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import SectionTransition from '../../components/SectionTransition'
import ParallaxText from '../../components/ParallaxText'
import ShimmerText from '../../components/ShimmerText'
import SpotlightCard from '../../components/SpotlightCard'
import AnimatedIcon from '../../components/AnimatedIcon'
import AdaptiveFloatingElement from '../../components/AdaptiveFloatingElement'

export default function BusinessTransformationPage() {
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
                Business Transformation
              </span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight text-balance">
              <ParallaxText speed={0.5}>
                <ShimmerText>
                  Transform Your Marketing Infrastructure
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
              Build scalable systems, processes, and technology that turn marketing into a predictable growth engine
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
                Discuss Your Transformation
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </SectionTransition>

      {/* Overview Section */}
      <SectionTransition sectionId="overview" className="py-20 px-6 bg-slate-900/50 relative z-10">
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
              Great Marketing Requires Great Infrastructure
            </h2>
            <div 
              className="p-8 rounded-xl border border-blue-500/30"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))'
              }}
            >
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                Great marketing requires great infrastructure. Vrvo helps ambitious businesses build the technology stack, data foundations, and operational processes needed to scale efficiently. From CRM implementation to marketing automation to analytics infrastructure, we transform how you execute, measure, and optimize your marketing.
              </p>
              <p className="text-sm text-blue-400 font-medium">
                Most SMBs are held back not by lack of budget, but by lack of infrastructure. We help you build the systems that enterprise companies use—tailored for your scale and complexity.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionTransition>

      {/* Why Transformation Matters */}
      <SectionTransition sectionId="why-transformation" className="py-20 px-6 relative z-10">
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
              Why Transformation Matters
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Without proper infrastructure, even the best marketing strategies fail to deliver their full potential. We help you build the foundation for sustainable, scalable growth.
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
              Comprehensive transformation solutions that build the foundation for scalable growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Settings className="w-8 h-8" strokeWidth={1.5} />,
                title: 'MarTech Stack Strategy & Implementation',
                description: 'Audit, design, and implement the optimal marketing technology stack for your business needs and growth goals.'
              },
              {
                icon: <Users className="w-8 h-8" strokeWidth={1.5} />,
                title: 'CRM Setup & Optimization',
                description: 'Complete CRM implementation and optimization for HubSpot, Salesforce, and other leading platforms with custom workflows.'
              },
              {
                icon: <Zap className="w-8 h-8" strokeWidth={1.5} />,
                title: 'Marketing Automation Platform Configuration',
                description: 'Design and implement sophisticated marketing automation sequences that nurture leads and drive conversions.'
              },
              {
                icon: <Database className="w-8 h-8" strokeWidth={1.5} />,
                title: 'Data Warehouse & Analytics Infrastructure',
                description: 'Build robust data infrastructure and analytics frameworks for comprehensive performance tracking and insights.'
              },
              {
                icon: <BarChart3 className="w-8 h-8" strokeWidth={1.5} />,
                title: 'Attribution Modeling & Reporting Dashboards',
                description: 'Advanced attribution modeling and custom reporting dashboards that provide actionable insights across all channels.'
              },
              {
                icon: <Building className="w-8 h-8" strokeWidth={1.5} />,
                title: 'Process Optimization & Team Enablement',
                description: 'Streamline marketing operations with documented processes, team training, and ongoing strategic support.'
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

      {/* Transformation Areas */}
      <SectionTransition sectionId="transformation-areas" className="py-20 px-6 relative z-10">
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
              Transformation Areas
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Three core areas where we drive transformation and enable sustainable growth
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                icon: <Settings className="w-12 h-12" strokeWidth={1.5} />,
                title: 'Technology',
                description: 'Platform selection & vendor management, implementation & integration, custom configuration & workflows, ongoing optimization & support',
                bullets: [
                  'Platform selection & vendor management',
                  'Implementation & integration',
                  'Custom configuration & workflows',
                  'Ongoing optimization & support'
                ]
              },
              {
                icon: <Database className="w-12 h-12" strokeWidth={1.5} />,
                title: 'Data & Analytics',
                description: 'Data strategy & governance, analytics infrastructure & dashboards, attribution & measurement frameworks, performance reporting & insights',
                bullets: [
                  'Data strategy & governance',
                  'Analytics infrastructure & dashboards',
                  'Attribution & measurement frameworks',
                  'Performance reporting & insights'
                ]
              },
              {
                icon: <Users className="w-12 h-12" strokeWidth={1.5} />,
                title: 'Process & People',
                description: 'Marketing operations design, cross-functional workflows, team structure & hiring, training & enablement programs',
                bullets: [
                  'Marketing operations design',
                  'Cross-functional workflows',
                  'Team structure & hiring',
                  'Training & enablement programs'
                ]
              }
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.6
                }}
                className="grid lg:grid-cols-2 gap-8 items-center"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="text-blue-400">
                      <AdaptiveFloatingElement
                        amplitude={8}
                        duration={3 + index * 0.5}
                        delay={1 + index * 0.3}
                      >
                        <AnimatedIcon animationType="rotate">
                          {area.icon}
                        </AnimatedIcon>
                      </AdaptiveFloatingElement>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{area.title}</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{area.description}</p>
                  <ul className="space-y-3">
                    {area.bullets.map((bullet, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.5 + index * 0.2 + i * 0.1, duration: 0.4 }}
                        className="flex items-center gap-3 text-slate-400"
                      >
                        <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div 
                  className="p-8 rounded-xl border border-slate-700"
                  style={{
                    background: 'rgba(30, 41, 59, 0.3)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="space-y-4">
                    <div className="h-4 bg-blue-500/20 rounded animate-pulse"></div>
                    <div className="h-4 bg-cyan-500/20 rounded animate-pulse"></div>
                    <div className="h-4 bg-teal-500/20 rounded animate-pulse"></div>
                    <div className="h-16 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg flex items-center justify-center">
                      <span className="text-slate-400 text-sm">{area.title} Architecture</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionTransition>

      {/* Typical Engagement */}
      <SectionTransition sectionId="engagement" className="py-20 px-6 bg-slate-900/30 relative z-10">
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
              Typical Engagement
            </h2>
            <div 
              className="p-8 rounded-xl border border-blue-500/30"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))'
              }}
            >
              <p className="text-lg text-slate-300 leading-relaxed">
                <span className="text-blue-400 font-semibold">3-6 month transformation projects</span> with ongoing support. We become an extension of your team, working closely with your internal stakeholders to ensure successful implementation and adoption.
              </p>
            </div>
          </motion.div>
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
              Ready to Transform Your Operations?
            </h2>
            
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Let's discuss how we can help you build the infrastructure for scalable, data-driven growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Start Your Transformation
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
