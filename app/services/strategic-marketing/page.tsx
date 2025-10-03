'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Target, Lightbulb, CheckCircle, BarChart3, Users, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import SectionTransition from '../../components/SectionTransition'
import ParallaxText from '../../components/ParallaxText'
import ShimmerText from '../../components/ShimmerText'
import SpotlightCard from '../../components/SpotlightCard'
import AnimatedIcon from '../../components/AnimatedIcon'
import AdaptiveFloatingElement from '../../components/AdaptiveFloatingElement'

export default function StrategicMarketingPage() {
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
                Strategic Marketing
              </span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight text-balance">
              <ParallaxText speed={0.5}>
                <ShimmerText>
                  Strategic Marketing That Drives Measurable Growth
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
              Integrated, data-driven campaigns that build brand authority and fill your pipeline with qualified opportunities
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
                Discuss Your Marketing Strategy
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
              Marketing That Actually Works
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Marketing today isn't about tactics—it's about strategy. Vrvo develops comprehensive, multi-channel marketing programs that align with your business objectives and deliver measurable ROI. Whether you're building brand awareness, generating leads, or expanding into new markets, we create cohesive campaigns that move the needle.
            </p>
          </motion.div>
        </div>
      </SectionTransition>

      {/* Key Capabilities */}
      <SectionTransition sectionId="capabilities" className="py-20 px-6 relative z-10">
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
              Comprehensive marketing solutions that work together to drive growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="w-8 h-8" strokeWidth={1.5} />,
                title: 'Brand Positioning & Messaging',
                description: 'Develop compelling brand narratives and messaging frameworks that resonate with your target audience and differentiate you from competitors.'
              },
              {
                icon: <Target className="w-8 h-8" strokeWidth={1.5} />,
                title: 'Multi-Channel Campaign Management',
                description: 'Orchestrate integrated campaigns across email, social, content, and paid channels for maximum impact and efficiency.'
              },
              {
                icon: <TrendingUp className="w-8 h-8" strokeWidth={1.5} />,
                title: 'Content Marketing & SEO',
                description: 'Create authoritative content that ranks, engages, and converts while building long-term organic visibility.'
              },
              {
                icon: <Zap className="w-8 h-8" strokeWidth={1.5} />,
                title: 'Performance Marketing',
                description: 'Execute paid social, search, and display campaigns that deliver measurable ROI and scalable growth.'
              },
              {
                icon: <BarChart3 className="w-8 h-8" strokeWidth={1.5} />,
                title: 'Marketing Analytics & Attribution',
                description: 'Advanced tracking and attribution modeling to understand what drives results and optimize accordingly.'
              },
              {
                icon: <Users className="w-8 h-8" strokeWidth={1.5} />,
                title: 'Email Marketing & Automation',
                description: 'Sophisticated email programs and automation sequences that nurture leads and drive conversions.'
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

      {/* How We're Different */}
      <SectionTransition sectionId="differentiation" className="py-20 px-6 bg-slate-900/30 relative z-10">
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
              How We're Different
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: "We're strategists first, tacticians second",
                description: "Every campaign starts with deep strategic thinking. We don't just execute tactics—we build integrated strategies that align with your business goals and drive long-term growth."
              },
              {
                title: "Full integration between brand and performance",
                description: "We bridge the gap between brand building and performance marketing, ensuring your brand positioning drives measurable results across all channels."
              },
              {
                title: "Built for measurement from day one",
                description: "Every strategy includes comprehensive tracking, attribution modeling, and analytics frameworks so you know exactly what's working and why."
              },
              {
                title: "Ongoing optimization, not set-it-and-forget-it",
                description: "We continuously test, learn, and optimize your campaigns based on real performance data, ensuring your marketing gets better over time."
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

      {/* Ideal Client */}
      <SectionTransition sectionId="ideal-client" className="py-20 px-6 relative z-10">
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
              Ideal Client Profile
            </h2>
            <div 
              className="p-8 rounded-xl border border-blue-500/30"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))'
              }}
            >
              <p className="text-lg text-slate-300 leading-relaxed">
                Best for businesses spending <span className="text-blue-400 font-semibold">$10K-$100K/month on marketing</span> who need strategic oversight and seamless execution across channels. Whether you're a growing SMB looking to scale efficiently or an established company seeking to optimize your marketing operations, our strategic approach delivers measurable results.
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
              Ready to Transform Your Marketing?
            </h2>
            
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Let's discuss how strategic marketing can drive measurable growth for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Start Your Strategy
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
