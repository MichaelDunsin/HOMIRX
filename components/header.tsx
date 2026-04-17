'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Heart, Search } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Properties', id: 'property-types' },
    { label: 'Featured', id: 'featured-listings' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Locations', id: 'location-showcase' },
    { label: 'FAQ', id: 'faq' },
  ]

  return (
    <header className="fixed w-full top-0 z-50 bg-primary text-primary-foreground border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold flex items-center gap-2 hover:opacity-80 transition"
            >
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-black">H</span>
              </div>
              <span>HOMIRX</span>
            </button>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium hover:text-accent transition"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="p-2 hover:bg-white/10 rounded-lg transition">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition">
              <Heart className="w-5 h-5" />
            </button>
            <Button className="bg-accent text-primary hover:bg-accent/90">
              + Add Properties
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block text-left px-4 py-2 hover:bg-white/10 rounded transition text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button className="bg-accent text-primary hover:bg-accent/90 w-full">
              + Add Properties
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
