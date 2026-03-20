'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { ArrowRight, Cloud, Shield, Network, BarChart3, Zap, Users } from 'lucide-react'

export default function Services() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-primary to-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive IT Infrastructure Services
            </h1>
            <p className="text-xl opacity-90">
              A full range of infrastructure and managed services designed to ensure performance, security, and scalability.
            </p>
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {[
              {
                icon: Cloud,
                title: 'Managed IT Infrastructure',
                description: 'Ensure stable and efficient system operations with proactive monitoring, maintenance, and support.',
              },
              {
                icon: Cloud,
                title: 'Cloud Infrastructure Management',
                description: 'Design, deploy, and optimize cloud environments across AWS, Azure, and hybrid solutions.',
              },
              {
                icon: Network,
                title: 'Network Monitoring & Management',
                description: 'Maintain secure and high-performing networks with continuous monitoring and optimization.',
              },
              {
                icon: Shield,
                title: 'Cybersecurity Management',
                description: 'Protect systems and data from threats with comprehensive security framework implementation.',
              },
              {
                icon: Zap,
                title: 'Backup & Disaster Recovery',
                description: 'Ensure business continuity and data protection with robust backup and recovery systems.',
              },
              {
                icon: Users,
                title: 'IT Support Services',
                description: 'Provide reliable technical support for daily operations and system reliability.',
              },
            ].map((service, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <service.icon className="w-12 h-12 text-secondary mb-4" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    <p className="text-foreground font-semibold">Key Benefits:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-bold">•</span>
                        <span>Scalable solutions tailored to your needs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-bold">•</span>
                        <span>Security-first approach throughout</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-bold">•</span>
                        <span>Performance optimization and cost efficiency</span>
                      </li>
                    </ul>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    Learn More <ArrowRight className="ml-2" size={18} />
                  </Link>
                </div>
                <div className="hidden md:block relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 border border-border"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Why Choose Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Scalable Solutions',
                description: 'Solutions that grow with your business without constant rework.',
              },
              {
                title: 'Security-First Approach',
                description: 'Security built into every solution from the ground up.',
              },
              {
                title: 'Performance Optimization',
                description: 'Continuous optimization for peak performance and cost efficiency.',
              },
            ].map((reason, i) => (
              <div key={i} className="p-6 rounded-xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to optimize your IT infrastructure?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Explore how our services can improve your systems and drive business growth.
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
