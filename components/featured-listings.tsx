'use client'

import { Heart, MapPin, Bed, Bath, Ruler } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

interface Property {
  id: string
  title: string
  location: string
  price: number
  image: string
  beds: number
  baths: number
  sqft: number
  rating: number
  reviews: number
  featured?: boolean
}

const properties: Property[] = [
  {
    id: '1',
    title: 'Elevation Small Apartments',
    location: '12 Newbridge Court New York',
    price: 299,
    image:
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop',
    beds: 2,
    baths: 2,
    sqft: 1200,
    rating: 4.8,
    reviews: 12,
    featured: true,
  },
  {
    id: '2',
    title: 'West Square Apartments',
    location: '12 Newbridge Court New York',
    price: 450,
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
    beds: 3,
    baths: 2,
    sqft: 1500,
    rating: 4.9,
    reviews: 8,
  },
  {
    id: '3',
    title: 'Peninsula Apartments',
    location: '12 Newbridge Court New York',
    price: 520,
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop',
    beds: 4,
    baths: 3,
    sqft: 2000,
    rating: 4.7,
    reviews: 15,
  },
]

export function FeaturedListings() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(id)) {
      newFavorites.delete(id)
    } else {
      newFavorites.add(id)
    }
    setFavorites(newFavorites)
  }

  return (
    <section className="w-full bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
          <div className="space-y-2">
            <p className="text-accent font-semibold text-sm">Our Listings</p>
            <h2 className="text-4xl font-bold text-foreground">
              Find Home Listing
              <br />
              in Your Area
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-3 flex-wrap">
            <button className="px-6 py-2 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition">
              All Listings
            </button>
            <button className="px-6 py-2 border border-foreground/20 text-foreground rounded-full font-medium hover:bg-foreground/5 transition">
              General
            </button>
            <button className="px-6 py-2 border border-foreground/20 text-foreground rounded-full font-medium hover:bg-foreground/5 transition">
              Villa
            </button>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-accent text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                <button
                  onClick={() => toggleFavorite(property.id)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition"
                >
                  <Heart
                    className={`w-5 h-5 transition ${
                      favorites.has(property.id)
                        ? 'fill-accent text-accent'
                        : 'text-foreground'
                    }`}
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Title & Rating */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {property.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{property.location}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent">
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {property.rating}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    ({property.reviews})
                  </span>
                </div>

                {/* Features */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground font-medium">
                      {property.beds} beds
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground font-medium">
                      {property.baths} baths
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground font-medium">
                      {property.sqft} sqft
                    </span>
                  </div>
                </div>

                {/* Price & Button */}
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Price:</p>
                    <p className="text-2xl font-bold text-foreground">
                      ${property.price}
                      <span className="text-base text-muted-foreground font-normal">
                        /mo
                      </span>
                    </p>
                  </div>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    View
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
