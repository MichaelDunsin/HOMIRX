import { Button } from '@/components/ui/button'
import { MapPin, Zap } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(30, 27, 50, 0.7) 0%, rgba(45, 27, 78, 0.7) 100%), url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop)',
          backgroundPosition: 'center',
        }}
      />

      {/* Decorative Circle */}
      <div className="absolute right-0 top-20 w-96 h-96 border-2 border-white/5 rounded-full" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Let's Find Your
                <br />
                <span className="text-accent">Dream House.</span>
              </h1>
              <p className="text-lg text-gray-300">
                Expert local agents, transparent pricing, and personalized guidance to help you find the perfect property.
              </p>
            </div>

            {/* Trust Signals */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-accent">2.5K+</div>
                <p className="text-sm text-gray-400">Properties Sold</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">98%</div>
                <p className="text-sm text-gray-400">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">15+</div>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Search Form */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 space-y-4">
            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              <button className="px-6 py-2 rounded-full bg-white/20 text-white font-medium">
                General
              </button>
              <button className="px-6 py-2 rounded-full text-gray-300 hover:text-white transition">
                Rent
              </button>
              <button className="px-6 py-2 rounded-full text-gray-300 hover:text-white transition">
                Apartment
              </button>
            </div>

            {/* Search Fields */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Keyword"
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-accent"
                />
                <select className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent">
                  <option>Looking For?</option>
                  <option>Buy</option>
                  <option>Rent</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <select className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent">
                  <option>Category</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                </select>
                <select className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent">
                  <option>Location</option>
                  <option>California</option>
                  <option>New York</option>
                  <option>Texas</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <select className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent">
                  <option>Rooms</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4+</option>
                </select>
                <Button className="bg-accent text-primary hover:bg-accent/90 w-full rounded-lg">
                  <Zap className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="flex gap-2 pt-4 border-t border-white/10">
              <button className="px-3 py-1.5 rounded-full bg-white/10 text-white text-xs hover:bg-white/20 transition">
                Commercial &gt;
              </button>
              <button className="px-3 py-1.5 rounded-full bg-white/10 text-white text-xs hover:bg-white/20 transition">
                Villas &gt;
              </button>
              <button className="px-3 py-1.5 rounded-full bg-white/10 text-white text-xs hover:bg-white/20 transition">
                Sales &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
