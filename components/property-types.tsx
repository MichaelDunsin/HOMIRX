'use client'

import { Building2, Warehouse, Home, AirVent as Apartment, Trees } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const propertyTypes = [
  {
    icon: Building2,
    name: 'Commercial',
    count: '6 Properties',
  },
  {
    icon: Warehouse,
    name: 'Warehouse',
    count: '6 Properties',
  },
  {
    icon: Home,
    name: 'Villa',
    count: '6 Properties',
  },
  {
    icon: Apartment,
    name: 'Apartment',
    count: '6 Properties',
  },
  {
    icon: Trees,
    name: 'Homestay',
    count: '5 Properties',
  },
]

export function PropertyTypes() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="w-full bg-primary text-primary-foreground py-16">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center space-y-4 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-accent font-semibold text-sm">Property by Requirement</p>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Explore Apartment <span className="text-accent">Types</span>
          </h2>
        </div>

        {/* Property Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {propertyTypes.map((type, index) => {
            const IconComponent = type.icon
            return (
              <button
                key={type.name}
                className={`group relative h-48 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-accent hover:bg-white/20 transition-all duration-300 cursor-pointer ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:to-accent/5 rounded-2xl transition-all duration-300" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-white/10 group-hover:bg-accent/20 rounded-xl flex items-center justify-center transition-colors">
                    <IconComponent className="w-6 h-6 text-accent group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold">{type.name}</h3>
                  <p className="text-sm text-gray-300">{type.count}</p>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
