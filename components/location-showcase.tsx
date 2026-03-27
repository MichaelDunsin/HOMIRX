import { MapPin } from 'lucide-react'

export function LocationShowcase() {
  return (
    <section className="w-full bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-accent font-semibold text-sm mb-2">Our Property List</p>
          <h2 className="text-4xl lg:text-5xl font-bold">Our Top Location For You Property</h2>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {/* Large Featured Location */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 relative h-64 md:h-auto lg:h-96 rounded-2xl overflow-hidden group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&h=600&fit=crop"
              alt="California"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-lg font-semibold text-white">1 Prosperity</p>
              <p className="text-gray-200">California</p>
              <p className="text-sm text-gray-300">Luxury Properties With Oceanview</p>
            </div>
          </div>

          {/* Secondary Locations */}
          {[
            {
              title: 'New York',
              subtitle: 'Premium Listings',
              image:
                'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400&h=300&fit=crop',
            },
            {
              title: 'Miami',
              subtitle: 'Beachfront Living',
              image:
                'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
            },
            {
              title: 'Seattle',
              subtitle: 'Modern Homes',
              image:
                'https://images.unsplash.com/photo-1512027795669-2a7f2807dfd7?w=400&h=300&fit=crop',
            },
            {
              title: 'Austin',
              subtitle: 'Urban Living',
              image:
                'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop',
            },
            {
              title: 'Denver',
              subtitle: 'Mountain Views',
              image:
                'https://images.unsplash.com/photo-1495933050929-81a97ccc9221?w=400&h=300&fit=crop',
            },
          ].map((location, index) => (
            <div
              key={index}
              className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={location.image || "/placeholder.svg"}
                alt={location.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-semibold text-white">{location.title}</p>
                <p className="text-sm text-gray-300">{location.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
