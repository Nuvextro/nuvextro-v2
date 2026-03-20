'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { ArrowRight, Briefcase, Users, TrendingUp } from 'lucide-react'

export default function Careers() {
  return (
    <>
      <Header />
      
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-primary to-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Careers at Nuvextro</h1>
            <p className="text-xl opacity-90">Build your career in IT infrastructure. Work on real-world enterprise projects with continuous learning opportunities.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Why Work With Us</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Briefcase, title: 'Real-World Projects', desc: 'Work on advanced infrastructure and security projects for enterprise clients.' },
              { icon: TrendingUp, title: 'Continuous Learning', desc: 'Professional development and training opportunities in emerging technologies.' },
              { icon: Users, title: 'Dynamic Team', desc: 'Flexible and collaborative work environment with talented IT professionals.' },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all text-center">
                <item.icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Current Openings</h2>
            <div className="space-y-4">
              {[
                { role: 'Senior Infrastructure Engineer', type: 'Full-Time' },
                { role: 'Cloud Solutions Architect', type: 'Full-Time' },
                { role: 'Cybersecurity Specialist', type: 'Full-Time' },
                { role: 'IT Solutions Consultant', type: 'Full-Time' },
              ].map((job, i) => (
                <div key={i} className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-all flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-foreground">{job.role}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{job.type}</p>
                  </div>
                  <Link href="/contact" className="text-primary font-medium hover:opacity-80 transition-opacity">
                    Apply <ArrowRight className="inline ml-2" size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Growing Team</h2>
          <p className="text-lg opacity-90 mb-8">Apply now to work on cutting-edge IT infrastructure projects.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Apply Now <ArrowRight className="ml-2" size={20} />
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
