'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Target, Lightbulb } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import SectionTransition from '../components/SectionTransition'
import ParallaxText from '../components/ParallaxText'
import ShimmerText from '../components/ShimmerText'
import SpotlightCard from '../components/SpotlightCard'
import AnimatedIcon from '../components/AnimatedIcon'
import AdaptiveFloatingElement from '../components/AdaptiveFloatingElement'

export default function ServicesPage() {
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
                Comprehensive Digital Growth Solutions
              </span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight text-balance">
              <ParallaxText speed={0.5}>
                <ShimmerText>
                  Services That Drive Growth
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
              From strategic marketing to programmatic advertising to business transformation—we provide the full spectrum of digital capabilities your business needs to scale.
            </motion.p>
          </motion.div>
        </div>
      </SectionTransition>

      {/* Services Grid */}
      <SectionTransition sectionId="services-grid" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                href: '/services/strategic-marketing',
                icon: <TrendingUp className="w-16 h-16" strokeWidth={1.5} />,
                title: 'Strategic Marketing',
                subtitle: 'Integrated campaigns that build brands and drive revenue',
                description: 'Comprehensive marketing strategies that align brand positioning, multi-channel execution, and performance optimization to create predictable growth.',
                features: [
                  'Brand positioning & messaging architecture',
                  'Multi-channel campaign strategy & execution',
                  'Content marketing & SEO that establishes authority',
                  'Performance marketing (Paid Social, Search, Display)',
                  'Marketing analytics & attribution modeling'
                ],
                outcome: 'Predictable pipeline. Measurable ROI. Sustainable growth.'
              },
              {
                href: '/services/programmatic-advertising',
                icon: <Target className="w-16 h-16" strokeWidth={1.5} />,
                title: 'Programmatic Advertising',
                subtitle: 'Precision audience targeting at enterprise scale',
                description: 'Advanced programmatic advertising that reaches your ideal customers across display, video, native, and audio channels with AI-powered optimization.',
                features: [
                  'AI-powered programmatic display, video & native',
                  'Cross-platform DSP management',
                  'Advanced audience segmentation & retargeting',
                  'Real-time bid optimization & budget allocation'
                ],
                outcome: 'Reach your ideal customers at the right moment, every time.'
              },
              {
                href: '/services/business-transformation',
                icon: <Lightbulb className="w-16 h-16" strokeWidth={1.5} />,
                title: 'Business Transformation',
                subtitle: 'Build the infrastructure for scalable growth',
                description: 'Transform your marketing operations with enterprise-grade technology stacks, data infrastructure, and strategic advisory services.',
                features: [
                  'Marketing technology stack design & implementation',
                  'CRM & marketing automation (HubSpot, Salesforce, Marketo)',
                  'Data warehouse & analytics infrastructure',
                  'Process optimization & team enablement',
                  'Fractional CMO & strategic advisory'
                ],
                outcome: 'Transform marketing from a cost center to a growth engine.'
              }
            ].map((service, index) => (
              <SpotlightCard
                key={index}
                spotlightColor="rgba(34, 197, 94, 0.1)"
                className="rounded-2xl"
              >
                <Link href={service.href}>
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
                      scale: 1.02,
                      rotateY: 5,
                      rotateX: 5
                    }}
                    className="relative rounded-2xl p-8 perspective-1000 overflow-hidden cursor-pointer h-full"
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
                    
                    <div className="relative z-10 h-full flex flex-col">
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
                        className="text-blue-300 text-sm mb-4 font-medium"
                      >
                        {service.subtitle}
                      </motion.p>

                      <motion.p 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ 
                          delay: 0.9 + index * 0.2,
                          duration: 0.6,
                          type: "spring",
                          stiffness: 100,
                          damping: 20
                        }}
                        className="text-slate-300 text-sm mb-6 flex-grow"
                      >
                        {service.description}
                      </motion.p>
                      
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
                        <p className="text-slate-300 font-medium mb-4">{service.outcome}</p>
                        <div className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300">
                          <span className="text-sm font-medium">Learn More</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </SpotlightCard>
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
              Ready to Transform Your Growth?
            </h2>
            
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Let's discuss which services align with your business goals and how we can help you scale.
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
                href="/about"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </SectionTransition>
    </main>
  )
}
