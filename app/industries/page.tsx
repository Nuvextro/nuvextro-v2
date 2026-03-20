'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { ArrowRight } from 'lucide-react'

export default function Industries() {
  const industries = [
    { name: 'Healthcare', description: 'Secure and compliant infrastructure for healthcare organizations.' },
    { name: 'Finance', description: 'High-security and reliable systems for financial institutions.' },
    { name: 'SaaS', description: 'Scalable cloud infrastructure for SaaS companies.' },
    { name: 'Enterprises', description: 'Complex infrastructure optimization for large enterprises.' },
    { name: 'E-Commerce', description: 'High-performance systems for retail and e-commerce.' },
    { name: 'Manufacturing', description: 'Reliable infrastructure for manufacturing operations.' },
  ]

  return (
    <>
      <Header />
      
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-primary to-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl opacity-90">Nuvextro delivers IT infrastructure solutions tailored for industries such as healthcare, finance, SaaS, and enterprises.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => (
              <div key={i} className="p-8 rounded-xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-foreground mb-3">{industry.name}</h3>
                <p className="text-muted-foreground mb-4">{industry.description}</p>
                <Link href="/contact" className="text-primary font-medium hover:opacity-80 transition-opacity inline-flex items-center gap-2">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Find Solutions Tailored to Your Industry</h2>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Schedule Consultation <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div><h3 className="font-semibold mb-4">Company</h3><ul className="space-y-2"><li><Link href="/about" className="hover:opacity-80">About</Link></li><li><Link href="/careers" className="hover:opacity-80">Careers</Link></li><li><Link href="/blog" className="hover:opacity-80">Blog</Link></li></ul></div>
            <div><h3 className="font-semibold mb-4">Services</h3><ul className="space-y-2"><li><Link href="/services" className="hover:opacity-80">Services</Link></li><li><Link href="/solutions" className="hover:opacity-80">Solutions</Link></li><li><Link href="/industries" className="hover:opacity-80">Industries</Link></li></ul></div>
            <div><h3 className="font-semibold mb-4">Resources</h3><ul className="space-y-2"><li><Link href="/how-it-works" className="hover:opacity-80">How It Works</Link></li><li><Link href="/case-studies" className="hover:opacity-80">Case Studies</Link></li><li><Link href="/contact" className="hover:opacity-80">Contact</Link></li></ul></div>
            <div><h3 className="font-semibold mb-4">Connect</h3><p className="text-sm opacity-80">Let's build reliable IT infrastructure together.</p></div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80"><p>&copy; 2024 Nuvextro. All rights reserved.</p></div>
        </div>
      </footer>
    </>
  )
}
