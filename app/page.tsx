'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Target, Lightbulb, ArrowRight, Eye, Zap, Handshake } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">vrvo</div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</Link>
            <Link href="/approach" className="text-gray-600 hover:text-gray-900 transition-colors">Approach</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
          </div>
          <Link 
            href="/contact" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              Digital Marketing & Business Transformation
        </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-[80px] font-bold text-[#2C2C2C] leading-tight tracking-[-0.02em] mb-8 text-balance">
              Transform Your Business Through Strategic Digital Marketing
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
              Vrvo combines advanced programmatic advertising, integrated marketing strategy, and business transformation consulting to help ambitious SMBs build scalable, data-driven growth engines.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/contact" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95"
              >
                Get Started
              </Link>
              <Link 
                href="/work" 
                className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md hover:bg-gray-50"
              >
                View Our Work
              </Link>
              </div>
            
            <p className="text-gray-500 text-sm">
              Trusted by 200+ growing businesses • $50M+ in ad spend managed
            </p>
            </motion.div>
              </div>
      </section>

      {/* Platform Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-[#F97316] text-sm font-medium uppercase tracking-wider mb-4">
                Platform
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] leading-tight tracking-[-0.02em] mb-6 text-balance">
                Real-Time Visibility Into Your Marketing Performance
            </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Unified Dashboard</h3>
                  <p className="text-gray-600">See all channels in one place with real-time performance metrics.</p>
                  </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Custom Reporting</h3>
                  <p className="text-gray-600">Build reports that matter to your business with drag-and-drop simplicity.</p>
        </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Transparent Spend</h3>
                  <p className="text-gray-600">Know exactly where every dollar goes with detailed attribution tracking.</p>
                </div>
              </div>
          </motion.div>

          <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg"
            >
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">340%</div>
                    <div className="text-sm text-gray-600">Avg ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">$2.4M</div>
                    <div className="text-sm text-gray-600">Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-500">94%</div>
                    <div className="text-sm text-gray-600">Retention</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Active Campaigns</span>
                    <span className="text-sm font-medium text-green-500">+12%</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Strategic Marketing</span>
                    <span className="text-sm font-medium text-green-500">+12%</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Programmatic Display</span>
                    <span className="text-sm font-medium text-green-500">+12%</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600">Social Media Ads</span>
                    <span className="text-sm font-medium text-green-500">+12%</span>
                  </div>
                </div>
                </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-[#F97316] text-sm font-medium uppercase tracking-wider mb-4">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] leading-tight tracking-[-0.02em] mb-6 text-balance">
              Full-Stack Digital Growth Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end capabilities that work together to accelerate your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-orange-500" />
                </div>
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">Strategic Marketing</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Integrated campaigns that build brands and drive revenue through multi-channel strategy and execution.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Brand positioning & messaging architecture</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Multi-channel campaign strategy</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Content marketing & SEO</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Performance marketing & analytics</span>
                </li>
              </ul>
              </motion.div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-orange-500" />
                    </div>
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">Programmatic Advertising</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Enterprise-grade audience targeting and automation that maximizes reach and ROI at scale.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">AI-powered programmatic display & video</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Cross-platform DSP management</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Advanced audience segmentation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Real-time bid optimization</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">Business Transformation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Build the marketing infrastructure and systems needed to scale efficiently and make data-driven decisions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">MarTech stack optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">CRM implementation & integration</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Data analytics infrastructure</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Process automation & training</span>
                </li>
              </ul>
          </motion.div>
            </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-[-0.02em] mb-6 text-balance">
              Integrated Capabilities Across The Digital Spectrum
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise technology. SMB accessibility.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Paid Media</h3>
              <ul className="space-y-4">
                <li className="text-gray-300">Programmatic Display & Video</li>
                <li className="text-gray-300">Paid Search (Google, Microsoft)</li>
                <li className="text-gray-300">Paid Social (Meta, LinkedIn, TikTok)</li>
                <li className="text-gray-300">Native Advertising</li>
                <li className="text-gray-300">Connected TV & Audio</li>
              </ul>
            </motion.div>

            <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Organic & Content</h3>
              <ul className="space-y-4">
                <li className="text-gray-300">Search Engine Optimization</li>
                <li className="text-gray-300">Content Strategy & Production</li>
                <li className="text-gray-300">Social Media Management</li>
                <li className="text-gray-300">Email Marketing & Automation</li>
                <li className="text-gray-300">Community Building</li>
              </ul>
                </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-6">MarTech & Data</h3>
              <ul className="space-y-4">
                <li className="text-gray-300">Marketing Automation Platforms</li>
                <li className="text-gray-300">CRM Implementation</li>
                <li className="text-gray-300">Analytics & Business Intelligence</li>
                <li className="text-gray-300">Customer Data Platforms</li>
                <li className="text-gray-300">Attribution & Measurement</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Vrvo Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] leading-tight tracking-[-0.02em] mb-6 text-balance">
              Why Vrvo Is Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent partnerships built on results, not contracts.
            </p>
            </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <Handshake className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">No Long-Term Contracts</h3>
              <p className="text-gray-600">
                Month-to-month partnerships. Stay because we deliver, not because you're locked in.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <Eye className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">Complete Transparency</h3>
              <p className="text-gray-600">
                Real-time dashboard access. Know exactly where your budget goes and what's working.
              </p>
            </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <Zap className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">Strategy + Execution</h3>
              <p className="text-gray-600">
                We don't just plan—we do. Full-service from strategy through implementation.
            </p>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">Built for Growth</h3>
              <p className="text-gray-600">
                Scalable solutions that grow with you. Start small, scale as you see results.
              </p>
          </motion.div>
        </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-[-0.02em] mb-6 text-balance">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how Vrvo can elevate your digital marketing and business infrastructure.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95"
            >
              Contact Us
                      <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
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
