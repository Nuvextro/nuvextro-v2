'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Consulting() {
  return (
    <>
      <Header />
      
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-primary to-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">IT Consulting & Advisory</h1>
            <p className="text-xl opacity-90">Strategic guidance for your infrastructure. Get expert consulting services to help optimize performance and reduce costs.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">What We Offer</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Consulting Services</h3>
              <ul className="space-y-4">
                {[
                  'Infrastructure assessment and analysis',
                  'Cloud strategy and planning',
                  'Cost optimization consulting',
                  'Security consulting and advisory',
                  'Performance improvement strategies',
                  'Scalability planning',
                ].map((service, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
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

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">How Our Consulting Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { num: '1', title: 'Initial Assessment', desc: 'In-depth analysis of your current infrastructure and goals.' },
              { num: '2', title: 'Strategy Development', desc: 'Create customized strategy aligned with your objectives.' },
              { num: '3', title: 'Implementation Support', desc: 'Ongoing guidance and support throughout implementation.' },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start With a Consultation</h2>
          <p className="text-lg opacity-90 mb-8">Let's discuss how we can help optimize your IT infrastructure and strategy.</p>
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
