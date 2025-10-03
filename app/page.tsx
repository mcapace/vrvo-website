'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { TrendingUp, Target, Lightbulb, BarChart3, Eye, Zap, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">vrvo</span>
            </div>
            
            {/* Center Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Services
              </a>
              <a href="#approach" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Approach
              </a>
              <a href="#about" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">
                About
              </a>
            </div>
            
            {/* Right CTA */}
            <div className="hidden md:block">
              <button className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white text-base font-semibold rounded-lg transition-colors">
                Get Started
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
        </div>
            
        </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center">
            {/* Badge */}
            <div className="inline-block mb-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 border border-gray-200">
                <span className="text-sm font-medium text-gray-700">
                  Digital Marketing & Business Transformation
                </span>
              </div>
              </div>
            
            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight max-w-5xl mx-auto">
              Transform Your Business Through Strategic Digital Marketing
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-4xl mx-auto">
              Vrvo combines advanced programmatic advertising, integrated marketing strategy, and business transformation consulting to help ambitious SMBs build scalable, data-driven growth engines.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-row gap-4 justify-center mb-12">
              <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors text-lg">
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 hover:border-gray-400 text-gray-900 font-semibold rounded-lg transition-colors text-lg">
                View Our Work
              </button>
            </div>
            
            {/* Trust Line */}
            <p className="text-sm text-gray-500">
              Trusted by 200+ growing businesses • $50M+ in ad spend managed
            </p>
              </div>
        </div>
      </section>

      {/* PLATFORM SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="mb-16">
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-2">
              PLATFORM
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
              Real-Time Visibility Into Your Marketing Performance
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              Track every campaign, channel, and conversion in one unified dashboard. Make data-driven decisions with confidence.
            </p>
                  </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Left: Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Unified Dashboard</h3>
                  <p className="text-gray-600 leading-relaxed">See all channels in one place with real-time performance metrics</p>
                </div>
          </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Custom Reporting</h3>
                  <p className="text-gray-600 leading-relaxed">Build reports that matter to your business with drag-and-drop simplicity</p>
                </div>
          </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Transparent Spend</h3>
                  <p className="text-gray-600 leading-relaxed">Know exactly where every dollar goes with detailed attribution tracking</p>
                    </div>
                  </div>
            </div>

            {/* Right: Dashboard Mockup */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="ml-4 text-sm text-gray-500">vrvo-dashboard.com</span>
            </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div className="text-3xl font-bold text-gray-900">340%</div>
                    <div className="text-sm text-gray-500">Avg ROI</div>
        </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">$2.4M</div>
                    <div className="text-sm text-gray-500">Revenue</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">94%</div>
                    <div className="text-sm text-gray-500">Retention</div>
                  </div>
                </div>
                
                {/* Chart Placeholder */}
                <div className="h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded mb-6"></div>

                {/* Campaign List */}
                <div className="space-y-3">
                  <div className="text-sm font-semibold text-gray-500 mb-2">Active Campaigns</div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-700">Strategic Marketing Campaign</span>
                    <span className="text-green-600 font-medium">+12%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-700">Programmatic Display</span>
                    <span className="text-green-600 font-medium">+12%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-700">Social Media Ads</span>
                    <span className="text-green-600 font-medium">+12%</span>
                </div>
              </div>
                  </div>
                  </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-3">
              OUR SERVICES
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
              Full-Stack Digital Growth Solutions
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              End-to-end capabilities that work together to accelerate your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategic Marketing</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Integrated campaigns that build brands and drive revenue through multi-channel strategy and execution.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm">
                  <span className="text-orange-600 mr-3 mt-0.5">•</span>
                  <span className="text-gray-700">Brand positioning & messaging architecture</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-orange-600 mr-3 mt-0.5">•</span>
                  <span className="text-gray-700">Multi-channel campaign strategy</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-orange-600 mr-3 mt-0.5">•</span>
                  <span className="text-gray-700">Content marketing & SEO</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-orange-600 mr-3 mt-0.5">•</span>
                  <span className="text-gray-700">Performance marketing & analytics</span>
                </li>
              </ul>
              </div>

            {/* Service 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Programmatic Advertising</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Enterprise-grade audience targeting and automated bidding that maximizes reach and ROI at scale.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm">
                  <span className="text-orange-600 mr-3 mt-0.5">•</span>
                  <span className="text-gray-700">AI-powered programmatic display & video</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-orange-600 mr-3 mt-0.5">•</span>
                  <span className="text-gray-700">Cross-platform DSP management</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-orange-600 mr-3 mt-0.5">•</span>
                  <span className="text-gray-700">Advanced audience segmentation</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-orange-600 mr-3 mt-0.5">•</span>
                  <span className="text-gray-700">Real-time bid optimization</span>
                </li>
              </ul>
              </div>

            {/* Service 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Business Transformation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Build the marketing infrastructure and systems needed to scale efficiently and make data-driven decisions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm">
                  <span className="text-orange-600 mr-3 mt-0.5">•</span>
                  <span className="text-gray-700">MarTech stack optimization</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-orange-600 mr-3 mt-0.5">•</span>
                  <span className="text-gray-700">CRM implementation & integration</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-orange-600 mr-3 mt-0.5">•</span>
                  <span className="text-gray-700">Data analytics infrastructure</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-orange-600 mr-3 mt-0.5">•</span>
                  <span className="text-gray-700">Process automation & training</span>
                </li>
              </ul>
              </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES SECTION */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">
              Integrated Capabilities Across The Digital Spectrum
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Enterprise technology. SMB accessibility.
            </p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wide mb-4">Paid Media</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Programmatic Display & Video</li>
                <li>Paid Search (Google, Microsoft)</li>
                <li>Paid Social (Meta, LinkedIn, TikTok)</li>
                <li>Native Advertising</li>
                <li>Connected TV & Audio</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wide mb-4">Organic & Content</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Search Engine Optimization</li>
                <li>Content Strategy & Production</li>
                <li>Social Media Management</li>
                <li>Email Marketing & Automation</li>
                <li>Community Building</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wide mb-4">MarTech & Data</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Marketing Automation Platforms</li>
                <li>CRM Implementation</li>
                <li>Analytics & Business Intelligence</li>
                <li>Customer Data Platforms</li>
                <li>Attribution & Measurement</li>
              </ul>
        </div>
          </div>
        </div>
      </section>

      {/* WHY VRVO SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
              Why Vrvo Is Different
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transparent partnerships built on results, not contracts
            </p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
        </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">No Long-Term Contracts</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Month-to-month partnerships. Stay because we deliver, not because you're locked in.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Complete Transparency</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Real-time dashboard access. Know exactly where your budget goes and what's working.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Strategy + Execution</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We don't just plan—we do. Full-service from strategy through implementation.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Built for Growth</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Scalable solutions that grow with you. Start small, scale as you see results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Let's discuss how Vrvo can elevate your digital marketing and business infrastructure.
          </p>
          <button className="px-10 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg text-lg transition-colors inline-flex items-center gap-2">
            Contact Us
            <ArrowRight className="w-5 h-5" />
                  </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">Vrvo</div>
              <p className="text-gray-400 text-sm leading-relaxed">Strategic digital marketing for ambitious businesses</p>
                  </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Strategic Marketing</li>
                <li>Programmatic Advertising</li>
                <li>Business Transformation</li>
              </ul>
                  </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>About</li>
                <li>Contact</li>
                <li>Careers</li>
              </ul>
                  </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Get Started</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">Ready to transform your marketing?</p>
              <button className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-lg transition-colors">
                Contact Us
              </button>
        </div>
        </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            © 2025 Vrvo. All rights reserved.
          </div>
        </div>
      </footer>

    </main>
  )
}