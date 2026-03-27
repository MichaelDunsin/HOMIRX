'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Heart, Search } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-primary text-primary-foreground border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-black">H</span>
              </div>
              <span>HOMIRX</span>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex gap-8">
            <a href="#" className="text-sm font-medium hover:text-accent transition">
              Home
            </a>
            <a href="#" className="text-sm font-medium hover:text-accent transition">
              Properties
            </a>
            <a href="#" className="text-sm font-medium hover:text-accent transition">
              Agents
            </a>
            <a href="#" className="text-sm font-medium hover:text-accent transition">
              Pages
            </a>
            <a href="#" className="text-sm font-medium hover:text-accent transition">
              News
            </a>
            <a href="#" className="text-sm font-medium hover:text-accent transition">
              Contact
            </a>
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
            <a href="#" className="block px-4 py-2 hover:bg-white/10 rounded transition">
              Home
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-white/10 rounded transition">
              Properties
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-white/10 rounded transition">
              Agents
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-white/10 rounded transition">
              Pages
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-white/10 rounded transition">
              News
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-white/10 rounded transition">
              Contact
            </a>
            <Button className="bg-accent text-primary hover:bg-accent/90 w-full">
              + Add Properties
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
