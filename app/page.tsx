'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { ArrowRight, Cloud, Shield, Zap, BarChart3, Network, Users, CheckCircle2 } from 'lucide-react'

export default function Home() {
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Enterprise IT Infrastructure That Scales With Your Business
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90">
                Design, manage, and optimize secure, scalable IT systems. Cloud, security, networking, and disaster recovery solutions built for reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary-foreground/20 text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/30 transition-colors border border-primary-foreground/30"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-2xl backdrop-blur-sm border border-primary-foreground/10"></div>
              <div className="absolute inset-8 flex items-center justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-square-4AzG23EXtkp4CE6TBCu7c8F0rBGUsN.png"
                  alt="Nuvextro"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Nuvextro
            </h2>
            <p className="text-lg text-muted-foreground">
              We combine deep technical expertise with a results-driven approach to deliver IT infrastructure solutions that work.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Security First',
                description: 'Built-in security architecture protecting your systems and data from evolving threats.',
              },
              {
                icon: Zap,
                title: 'High Performance',
                description: 'Optimized infrastructure ensuring consistent uptime and peak performance.',
              },
              {
                icon: Network,
                title: 'Scalable Design',
                description: 'Solutions that grow with your business without constant rework or disruption.',
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all">
                <item.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="py-16 md:py-24 relative"
        style={{
          backgroundImage: 'url(/images/services-pattern.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 to-background/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive IT Services
            </h2>
            <p className="text-lg text-muted-foreground">
              A complete range of infrastructure and managed services designed for modern businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cloud,
                title: 'Cloud Infrastructure',
                description: 'Design, deploy, and optimize cloud environments across AWS, Azure, and hybrid solutions.',
              },
              {
                icon: Shield,
                title: 'Cybersecurity',
                description: 'Comprehensive security framework implementation and management to protect your systems.',
              },
              {
                icon: Network,
                title: 'Network Optimization',
                description: 'Build and maintain high-performing networks with monitoring and optimization.',
              },
              {
                icon: BarChart3,
                title: 'Managed IT Services',
                description: 'Proactive monitoring, maintenance, and support for stable system operations.',
              },
              {
                icon: Zap,
                title: 'Disaster Recovery',
                description: 'Ensure business continuity with robust backup and recovery systems.',
              },
              {
                icon: Users,
                title: 'Endpoint Management',
                description: 'Secure and manage devices across your entire organization with ease.',
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group p-6 rounded-xl bg-card border border-border hover:border-secondary hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
              >
                <service.icon className="w-10 h-10 text-secondary mb-4 group-hover:text-primary transition-colors" />
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Explore All Services <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Proven Approach
              </h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Assess', desc: 'Analyze your current infrastructure and business requirements' },
                  { step: '2', title: 'Design', desc: 'Create tailored solutions aligned with your goals' },
                  { step: '3', title: 'Implement', desc: 'Deploy systems with precision and minimal disruption' },
                  { step: '4', title: 'Optimize', desc: 'Continuously improve performance, cost, and security' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
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

      {/* Social Proof */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Enterprise Clients' },
              { number: '99.9%', label: 'Uptime Achieved' },
              { number: '40%', label: 'Avg. Cost Savings' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how Nuvextro can help you build reliable, scalable, and secure systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Schedule Consultation <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:opacity-80 transition-opacity">About</Link></li>
                <li><Link href="/careers" className="hover:opacity-80 transition-opacity">Careers</Link></li>
                <li><Link href="/blog" className="hover:opacity-80 transition-opacity">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services" className="hover:opacity-80 transition-opacity">Services</Link></li>
                <li><Link href="/solutions" className="hover:opacity-80 transition-opacity">Solutions</Link></li>
                <li><Link href="/industries" className="hover:opacity-80 transition-opacity">Industries</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/how-it-works" className="hover:opacity-80 transition-opacity">How It Works</Link></li>
                <li><Link href="/case-studies" className="hover:opacity-80 transition-opacity">Case Studies</Link></li>
                <li><Link href="/contact" className="hover:opacity-80 transition-opacity">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <p className="text-sm opacity-80">
                Let's build reliable IT infrastructure together.
              </p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 Nuvextro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
