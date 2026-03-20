'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { ArrowRight, Target, Eye, Shield, Zap } from 'lucide-react'

export default function About() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              About Nuvextro
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Engineering Technology for Tomorrow — delivering enterprise IT infrastructure solutions with excellence, reliability, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Our Mission</h2>
                  <p className="text-muted-foreground">
                    To deliver reliable, scalable, and efficient IT infrastructure solutions that empower businesses to operate securely and grow without limitations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Eye className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Our Vision</h2>
                  <p className="text-muted-foreground">
                    To become a trusted global leader in IT infrastructure consulting by consistently delivering high-quality, future-ready technology solutions.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative h-96 rounded-xl overflow-hidden"
              style={{
                backgroundImage: 'url(/images/about-bg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Expertise
            </h2>
            <p className="text-lg text-muted-foreground">
              Deep specialization in designing and managing critical IT systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Cloud Infrastructure (AWS, Azure, Hybrid)',
              'Managed IT Infrastructure',
              'Network Architecture & Optimization',
              'Cybersecurity & Risk Management',
              'Backup & Disaster Recovery',
              'IT Operations & Support',
            ].map((expertise, i) => (
              <div key={i} className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-all">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 text-secondary font-bold flex items-center justify-center mb-4">
                  ✓
                </div>
                <h3 className="font-semibold text-foreground">{expertise}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            What Sets Nuvextro Apart
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: 'Reliability First',
                description: 'We design infrastructure that ensures consistent uptime and operational stability.',
              },
              {
                icon: Zap,
                title: 'Scalable by Design',
                description: 'Our solutions are built to grow with your business without frequent reconfiguration.',
              },
              {
                icon: Shield,
                title: 'Efficiency Driven',
                description: 'We optimize systems to reduce unnecessary costs and improve performance.',
              },
              {
                icon: Target,
                title: 'Security Focused',
                description: 'We implement strong security practices to protect systems, data, and operations.',
              },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-xl bg-card border border-border hover:border-secondary hover:shadow-lg transition-all">
                <item.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Who We Work With
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Startups & SaaS',
                description: 'Build and scale infrastructure quickly with a strong technical foundation.',
              },
              {
                title: 'Growing Businesses',
                description: 'Transition from basic IT systems to structured, enterprise-grade environments.',
              },
              {
                title: 'Enterprises',
                description: 'Optimize complex infrastructure and improve performance, security, and cost control.',
              },
            ].map((segment, i) => (
              <div key={i} className="p-8 rounded-xl bg-card border border-border text-center hover:border-primary hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-foreground mb-3">{segment.title}</h3>
                <p className="text-muted-foreground">{segment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Want to learn more about our approach?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how Nuvextro can build a reliable IT foundation for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Schedule a Consultation <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div><h3 className="font-semibold mb-4">Company</h3><ul className="space-y-2"><li><Link href="/about" className="hover:opacity-80 transition-opacity">About</Link></li><li><Link href="/careers" className="hover:opacity-80 transition-opacity">Careers</Link></li><li><Link href="/blog" className="hover:opacity-80 transition-opacity">Blog</Link></li></ul></div>
            <div><h3 className="font-semibold mb-4">Services</h3><ul className="space-y-2"><li><Link href="/services" className="hover:opacity-80 transition-opacity">Services</Link></li><li><Link href="/solutions" className="hover:opacity-80 transition-opacity">Solutions</Link></li><li><Link href="/industries" className="hover:opacity-80 transition-opacity">Industries</Link></li></ul></div>
            <div><h3 className="font-semibold mb-4">Resources</h3><ul className="space-y-2"><li><Link href="/how-it-works" className="hover:opacity-80 transition-opacity">How It Works</Link></li><li><Link href="/case-studies" className="hover:opacity-80 transition-opacity">Case Studies</Link></li><li><Link href="/contact" className="hover:opacity-80 transition-opacity">Contact</Link></li></ul></div>
            <div><h3 className="font-semibold mb-4">Connect</h3><p className="text-sm opacity-80">Let's build reliable IT infrastructure together.</p></div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 Nuvextro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
