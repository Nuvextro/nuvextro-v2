'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { ArrowRight, Calendar, User } from 'lucide-react'

export default function Blog() {
  const articles = [
    {
      title: 'Cloud Optimization Best Practices',
      excerpt: 'Learn how to optimize your cloud spending and improve performance.',
      date: 'Mar 15, 2024',
      author: 'John Smith',
      category: 'Cloud',
    },
    {
      title: 'Cybersecurity Trends in 2024',
      excerpt: 'Stay ahead of emerging cybersecurity threats and best practices.',
      date: 'Mar 10, 2024',
      author: 'Sarah Johnson',
      category: 'Security',
    },
    {
      title: 'Disaster Recovery Strategy Guide',
      excerpt: 'Complete guide to implementing effective disaster recovery systems.',
      date: 'Mar 5, 2024',
      author: 'Mike Chen',
      category: 'Infrastructure',
    },
    {
      title: 'Network Performance Optimization',
      excerpt: 'Improve network performance with proven optimization strategies.',
      date: 'Feb 28, 2024',
      author: 'Emma Davis',
      category: 'Networking',
    },
    {
      title: 'IT Infrastructure Best Practices',
      excerpt: 'Key practices for building reliable and scalable IT infrastructure.',
      date: 'Feb 20, 2024',
      author: 'Robert Wilson',
      category: 'Best Practices',
    },
    {
      title: 'Digital Transformation Guide',
      excerpt: 'Navigate digital transformation with expert guidance and strategies.',
      date: 'Feb 15, 2024',
      author: 'Lisa Anderson',
      category: 'Transformation',
    },
  ]

  return (
    <>
      <Header />
      
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-primary to-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">IT Insights & Blog</h1>
            <p className="text-xl opacity-90">Expert insights on cloud computing, cybersecurity, disaster recovery, and IT infrastructure best practices.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <div key={i} className="rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all overflow-hidden flex flex-col">
                <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex-grow">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground border-t border-border pt-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {article.author}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated on IT Insights</h2>
          <p className="text-lg opacity-90 mb-8">Subscribe to our newsletter for the latest IT infrastructure insights and best practices.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none"
            />
            <button className="px-6 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>
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
