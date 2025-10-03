'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Target, Lightbulb, Users, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('paid-media')

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation - Clean & Professional */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                  <Image
                  src="/logo/vrvo_logo.png" 
                  alt="Vrvo" 
                  width={100} 
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Services
              </Link>
              <Link href="#approach" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Approach
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                About
              </Link>
              <Link href="/contact">
                <button className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors">
                  Get Started
                </button>
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-gray-700">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
        </div>
            
        </div>
        </div>
      </nav>

      {/* Hero Section - Clean & Professional */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-sm font-medium text-gray-700">
              Digital Marketing & Business Transformation
            </span>
              </div>
          
          {/* Headline */}
          <h1 className="text-center text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-[1.1] tracking-tight">
            Transform Your Business Through Strategic Digital Marketing
            </h1>
            
          {/* Subheadline */}
          <p className="text-center text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Vrvo combines advanced programmatic advertising, integrated marketing strategy, and business transformation consulting to help ambitious SMBs build scalable, data-driven growth engines.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/contact">
              <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200">
                Get Started
              </button>
            </Link>
            <Link href="/services">
              <button className="px-8 py-4 border-2 border-gray-300 hover:border-gray-400 text-gray-900 font-semibold rounded-lg transition-colors duration-200">
                View Our Work
              </button>
            </Link>
          </div>
          
          {/* Trust line */}
          <p className="text-center text-sm text-gray-500">
            Trusted by 200+ growing businesses  •  $50M+ in ad spend managed
          </p>
        </div>
      </section>

      {/* Logo Cloud / Trust Bar */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm text-gray-500 mb-8">
            Trusted by forward-thinking businesses
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

      {/* Platform Showcase Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div>
              <div className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-4">
                Platform
        </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Real-Time Visibility Into Your Marketing Performance
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Track every campaign, channel, and conversion in one unified dashboard. Make data-driven decisions with confidence.
              </p>
              
              {/* Features */}
              <div className="space-y-6">
                {[
                  {
                    title: "Unified Dashboard",
                    description: "See all channels in one place with real-time performance metrics"
                  },
                  {
                    title: "Custom Reporting", 
                    description: "Build reports that matter to your business with drag-and-drop simplicity"
                  },
                  {
                    title: "Transparent Spend",
                    description: "Know exactly where every dollar goes with detailed attribution tracking"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-700 text-sm">{feature.description}</p>
          </div>
                </div>
            ))}
          </div>
                    </div>
            
            {/* Right: Dashboard Mockup */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                {/* Browser Header */}
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-gray-100 rounded px-3 py-1 text-sm text-gray-500">
                    vrvo-dashboard.com
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="space-y-4">
                  {/* Header Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gray-900 mb-1">340%</div>
                      <div className="text-sm text-gray-600">Avg ROI</div>
                  </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gray-900 mb-1">$2.4M</div>
                      <div className="text-sm text-gray-600">Revenue</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gray-900 mb-1">94%</div>
                      <div className="text-sm text-gray-600">Retention</div>
                  </div>
                </div>
                
                  {/* Chart Area */}
                  <div className="bg-gray-50 rounded-lg p-6 h-32 flex items-center justify-center">
                    <div className="text-gray-400 text-sm">Performance Chart</div>
              </div>
                  
                  {/* Campaign List */}
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-900 mb-2">Active Campaigns</div>
                    {['Strategic Marketing Campaign', 'Programmatic Display', 'Social Media Ads'].map((campaign, i) => (
                      <div key={i} className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded">
                        <span className="text-sm text-gray-700">{campaign}</span>
                        <span className="text-sm text-green-600 font-medium">+12%</span>
                  </div>
                    ))}
          </div>
        </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Symmetrical & Clean */}
      <section className="bg-gray-50 py-24" id="services">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-3">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Full-Stack Digital Growth Solutions
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              End-to-end capabilities that work together to accelerate your business
            </p>
          </div>
          
          {/* Three Cards - PERFECTLY SYMMETRICAL */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow duration-200">
              
              {/* Icon - Simple, Not Cheesy */}
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Strategic Marketing
                </h3>
                
              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                Integrated campaigns that build brands and drive revenue through multi-channel strategy and execution.
              </p>
              
              {/* Features List */}
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Brand positioning & messaging architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Multi-channel campaign strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Content marketing & SEO</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Performance marketing & analytics</span>
                </li>
              </ul>
              </div>
            
            {/* Card 2 - IDENTICAL STRUCTURE */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Programmatic Advertising
                </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Enterprise-grade audience targeting and automated bidding that maximizes reach and ROI at scale.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">•</span>
                  <span className="text-gray-700">AI-powered programmatic display & video</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Cross-platform DSP management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Advanced audience segmentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Real-time bid optimization</span>
                </li>
              </ul>
              </div>
            
            {/* Card 3 - IDENTICAL STRUCTURE */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Business Transformation
                </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Build the marketing infrastructure and systems needed to scale efficiently and make data-driven decisions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">•</span>
                  <span className="text-gray-700">MarTech stack optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">•</span>
                  <span className="text-gray-700">CRM implementation & integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Data analytics infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Process automation & training</span>
                </li>
              </ul>
              </div>
            
          </div>
        </div>
      </section>

      {/* Capabilities Section - Clean */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Integrated Capabilities Across The Digital Spectrum
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Enterprise technology. SMB accessibility.
            </p>
        </div>
          
          {/* Capabilities Grid - Clean Layout */}
          <div className="grid md:grid-cols-3 gap-12">
            
            {/* Column 1 */}
            <div>
              <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wide mb-4">
                Paid Media
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>Programmatic Display & Video</li>
                <li>Paid Search (Google, Microsoft)</li>
                <li>Paid Social (Meta, LinkedIn, TikTok)</li>
                <li>Native Advertising</li>
                <li>Connected TV & Audio</li>
              </ul>
            </div>
            
            {/* Column 2 */}
            <div>
              <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wide mb-4">
                Organic & Content
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>Search Engine Optimization</li>
                <li>Content Strategy & Production</li>
                <li>Social Media Management</li>
                <li>Email Marketing & Automation</li>
                <li>Community Building</li>
              </ul>
        </div>
            
            {/* Column 3 */}
            <div>
              <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wide mb-4">
                MarTech & Data
              </h3>
              <ul className="space-y-3 text-gray-300">
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

      {/* Why Vrvo Is Different Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Vrvo Is Different
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Transparent partnerships built on results, not contracts
            </p>
          </div>
          
          {/* Four Value Props - PERFECTLY ALIGNED */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                No Long-Term Contracts
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Month-to-month partnerships. Stay because we deliver, not because you're locked in.
              </p>
        </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
        </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Complete Transparency
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Real-time dashboard access. Know exactly where your budget goes and what's working.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Strategy + Execution
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We don't just plan—we do. Full-service from strategy through implementation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Built for Growth
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Scalable solutions that grow with you. Start small, scale as you see results.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            
            {/* Company */}
            <div>
              <h3 className="text-lg font-bold mb-4">Vrvo</h3>
              <p className="text-gray-400 text-sm mb-4">
                Strategic digital marketing for ambitious businesses
              </p>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/services/strategic-marketing" className="hover:text-white transition-colors">Strategic Marketing</Link></li>
                <li><Link href="/services/programmatic-advertising" className="hover:text-white transition-colors">Programmatic Advertising</Link></li>
                <li><Link href="/services/business-transformation" className="hover:text-white transition-colors">Business Transformation</Link></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            {/* CTA */}
            <div>
              <h4 className="font-semibold mb-4">Get Started</h4>
              <p className="text-gray-400 text-sm mb-4">
                Ready to transform your marketing?
              </p>
              <Link href="/contact">
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                  Contact Us
                  </button>
              </Link>
            </div>
            
                  </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Vrvo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}