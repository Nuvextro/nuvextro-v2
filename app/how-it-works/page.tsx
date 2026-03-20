'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { ArrowRight } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    { num: '1', title: 'Assessment', desc: 'We analyze your current infrastructure and business requirements.' },
    { num: '2', title: 'Solution Design', desc: 'We design a tailored solution aligned with your goals.' },
    { num: '3', title: 'Implementation', desc: 'We deploy solutions with precision and minimal disruption.' },
    { num: '4', title: 'Optimization', desc: 'We continuously improve performance, cost, and security.' },
  ]

  return (
    <>
      <Header />
      
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-primary to-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How Nuvextro Works</h1>
            <p className="text-xl opacity-90">A structured approach to reliable IT infrastructure. Managing IT infrastructure requires the right strategy, execution, and continuous optimization.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Our Process</h2>
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-xl">
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">What You Gain</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {['Reliable infrastructure', 'Improved performance', 'Reduced downtime', 'Better cost control', 'Scalable systems'].map((benefit, i) => (
              <div key={i} className="p-6 rounded-lg bg-card border border-border text-center hover:border-primary transition-all">
                <p className="font-semibold text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground mb-8">Let's discuss your infrastructure needs today.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Contact Us <ArrowRight className="ml-2" size={20} />
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
