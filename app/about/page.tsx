'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users, Target, Lightbulb, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import SectionTransition from '../components/SectionTransition'
import ParallaxText from '../components/ParallaxText'
import ShimmerText from '../components/ShimmerText'
import SpotlightCard from '../components/SpotlightCard'
import AnimatedIcon from '../components/AnimatedIcon'
import AdaptiveFloatingElement from '../components/AdaptiveFloatingElement'

export default function AboutPage() {
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
                About Vrvo
              </span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight text-balance">
              <ParallaxText speed={0.5}>
                <ShimmerText>
                  Built for Businesses Ready to Think Bigger
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
              We democratize enterprise-grade digital marketing and business transformation for ambitious SMBs who refuse to settle for mediocre results.
            </motion.p>
          </motion.div>
        </div>
      </SectionTransition>

      {/* Mission Section */}
      <SectionTransition sectionId="mission" className="py-20 px-6 bg-slate-900/50 relative z-10">
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
              Why Vrvo Exists
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              For too long, sophisticated digital marketing has been gatekept by high minimums, complex platforms, and agencies that treat SMBs like afterthoughts.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              We believe every ambitious business deserves access to the same technology, strategy, and expertise that enterprise companies use to dominate their markets.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              That's why we built Vrvo—to democratize programmatic advertising and digital transformation for businesses ready to punch above their weight class.
            </p>
          </motion.div>
        </div>
      </SectionTransition>

      {/* Values Section */}
      <SectionTransition sectionId="values" className="py-20 px-6 relative z-10">
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
              Our Values
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-12 h-12" strokeWidth={1.5} />,
                title: 'Results Obsessed',
                description: 'We measure success by your success. Every strategy, campaign, and optimization is designed to drive measurable business growth.'
              },
              {
                icon: <Users className="w-12 h-12" strokeWidth={1.5} />,
                title: 'Partnership Focused',
                description: 'We become an extension of your team, not just another vendor. Your goals become our goals, your challenges become our challenges.'
              },
              {
                icon: <Lightbulb className="w-12 h-12" strokeWidth={1.5} />,
                title: 'Innovation Driven',
                description: 'We stay at the forefront of marketing technology and strategy, constantly evolving our approach to deliver cutting-edge solutions.'
              }
            ].map((value, index) => (
              <SpotlightCard
                key={index}
                spotlightColor="rgba(34, 197, 94, 0.1)"
                className="rounded-2xl"
              >
                <motion.div
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
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
                    scale: 1.02
                  }}
                  className="relative rounded-2xl p-8 text-center overflow-hidden"
                  style={{
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
                      className="text-blue-400 mb-6 mx-auto w-fit"
                    >
                      <AdaptiveFloatingElement
                        amplitude={8}
                        duration={3 + index * 0.5}
                        delay={1 + index * 0.3}
                      >
                        <AnimatedIcon animationType="rotate">
                          {value.icon}
                        </AnimatedIcon>
                      </AdaptiveFloatingElement>
                    </motion.div>
                    
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ 
                        delay: 0.7 + index * 0.2,
                        duration: 0.6,
                        type: "spring",
                        stiffness: 100,
                        damping: 20
                      }}
                      className="text-2xl font-bold text-white mb-4"
                    >
                      <ShimmerText>
                        {value.title}
                      </ShimmerText>
                    </motion.h3>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ 
                        delay: 0.9 + index * 0.2,
                        duration: 0.6,
                        type: "spring",
                        stiffness: 100,
                        damping: 20
                      }}
                      className="text-slate-400 leading-relaxed"
                    >
                      {value.description}
                    </motion.p>
                  </div>
                </motion.div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </SectionTransition>

      {/* Promise Section */}
      <SectionTransition sectionId="promise" className="py-20 px-6 bg-slate-900/30 relative z-10">
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
              Our Promise to You
            </h2>
            <div 
              className="p-8 rounded-xl border border-blue-500/30"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))'
              }}
            >
              <p className="text-xl text-slate-300 leading-relaxed">
                <span className="text-blue-400 font-bold">No long-term contracts. No hidden fees. Just transparent partnership focused on your growth.</span> We're not just your marketing vendor. We're your strategic partner, your growth team, and your competitive advantage.
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
              Ready to Work Together?
            </h2>
            
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Let's discuss how Vrvo can help you achieve your growth goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </Link>
              <Link
                href="/services"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </SectionTransition>
    </main>
  )
}
