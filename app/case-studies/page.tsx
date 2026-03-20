'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { ArrowRight, TrendingUp } from 'lucide-react'

export default function CaseStudies() {
  const cases = [
    {
      title: 'Cloud Migration',
      challenge: 'Legacy infrastructure limiting scalability and increasing costs',
      solution: 'Designed a cloud-first architecture and executed phased migration',
      results: ['40% reduction in infrastructure costs', '99.9% uptime achieved', 'Scalable environment for growth'],
    },
    {
      title: 'Disaster Recovery Implementation',
      challenge: 'Lack of disaster recovery planning and frequent downtime',
      solution: 'Implemented comprehensive backup and failover systems',
      results: ['Near-zero downtime recovery capability', 'Significant reduction in downtime', 'Enhanced operational stability'],
    },
    {
      title: 'Network Optimization',
      challenge: 'Poor network performance and latency issues',
      solution: 'Redesigned network architecture and implemented optimization',
      results: ['Improved performance', 'Reduced latency significantly', 'Better overall efficiency'],
    },
  ]

  return (
    <>
      <Header />
      
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-primary to-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl opacity-90">Real results, measurable impact. Explore how Nuvextro delivered measurable business outcomes through optimized IT infrastructure.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {cases.map((case_, i) => (
              <div key={i} className="p-8 rounded-xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <TrendingUp className="w-8 h-8 text-secondary flex-shrink-0" />
                  <h2 className="text-2xl font-bold text-foreground">{case_.title}</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm font-semibold text-secondary mb-2">CHALLENGE</p>
                    <p className="text-muted-foreground">{case_.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-secondary mb-2">SOLUTION</p>
                    <p className="text-muted-foreground">{case_.solution}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-secondary mb-2">RESULTS</p>
                    <ul className="space-y-1 text-muted-foreground">
                      {case_.results.map((result, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-secondary font-bold">✓</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">See how Nuvextro can deliver similar results for your business</h2>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Schedule a Consultation <ArrowRight className="ml-2" size={20} />
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
