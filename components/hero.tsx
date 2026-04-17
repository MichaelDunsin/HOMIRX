import { Button } from '@/components/ui/button'
import { MapPin, Zap, ArrowRight, Star } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&h=900&fit=crop)',
            backgroundPosition: 'center',
          }}
        />
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/50" />
      </div>

      {/* Animated Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full border border-accent/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in">
            {/* Badge */}
            

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-balance">
                Find Your 
                <br />
                <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
                  Dream Home
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-lg">
                We guide you through every step with expert local knowledge, transparent pricing, and personalized service. Your perfect property is just one search away.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-accent text-white hover:bg-accent/90 px-8 py-6 text-base font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 group">
                Start Searching
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-6 text-base font-semibold rounded-xl transition-all duration-300 bg-transparent">
                <MapPin className="w-5 h-5 mr-2" />
                Browse Listings
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="space-y-1">
                <div className="text-4xl font-bold text-accent">2.5K+</div>
                <p className="text-sm text-gray-300">Properties Sold</p>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-bold text-accent">98%</div>
                <p className="text-sm text-gray-300">Satisfaction Rate</p>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-bold text-accent">15+</div>
                <p className="text-sm text-gray-300">Years In Business</p>
              </div>
            </div>
          </div>

          {/* Right Side - Search Form */}
          <div className="lg:ml-8">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 space-y-6 shadow-2xl hover:border-white/30 transition-all duration-300 animate-fade-in-delay">
              {/* Form Header */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Find Your Property</h3>
                <p className="text-gray-300">Search from our exclusive listings</p>
              </div>

              {/* Tabs */}
           

              {/* Search Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all appearance-none cursor-pointer [&_option]:bg-slate-900 [&_option]:text-white">
                    <option>Select Location</option>
                    <option>California</option>
                    <option>New York</option>
                    <option>Texas</option>
                    <option>Florida</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Property Type</label>
                    <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all appearance-none cursor-pointer [&_option]:bg-slate-900 [&_option]:text-white">
                      <option>All Types</option>
                      <option>Apartment</option>
                      <option>Villa</option>
                      <option>Commercial</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Bedrooms</label>
                    <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all appearance-none cursor-pointer [&_option]:bg-slate-900 [&_option]:text-white">
                      <option>Any</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4+</option>
                    </select>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white py-3 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 group">
                  <Zap className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Search Properties
                </Button>
              </div>

              {/* Quick Filters */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Popular Searches</p>
                <div className="flex flex-wrap gap-2">
                  {['Luxury Villas', 'New Projects', 'Under $500K', 'With Garden'].map((filter) => (
                    <button
                      key={filter}
                      className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-all duration-200 border border-white/10 hover:border-accent/50"
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

 
    </section>
  )
}
