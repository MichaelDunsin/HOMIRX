'use client'

import { Quote } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const testimonials = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'Home Buyer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    text: 'The team made the entire buying process effortless. Their local knowledge and negotiation skills saved us thousands. Highly recommend!',
    rating: 5,
  },
  {
    id: '2',
    name: 'James Chen',
    role: 'Property Investor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    text: 'Professional, transparent, and results-driven. They understood my investment goals and delivered properties that exceeded expectations.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Jessica Williams',
    role: 'Home Seller',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    text: 'Sold our home in record time with maximum return. Their marketing strategy and buyer coordination were exceptional.',
    rating: 5,
  },
]

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="w-full bg-primary text-primary-foreground py-16">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center space-y-4 mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real experiences from real people who found their dream homes with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white/10 border border-white/20 rounded-2xl p-8 space-y-4 hover:bg-white/15 hover:border-accent/50 transition-all duration-300 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              {/* Quote Icon */}
              <Quote className="w-6 h-6 text-accent" />

              {/* Text */}
              <p className="text-white/90 leading-relaxed">{testimonial.text}</p>

              {/* Divider */}
              <div className="h-px bg-white/10" />

              {/* Author */}
              <div className="flex items-center gap-3 pt-2">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border border-accent/30"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
