import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { PropertyTypes } from '@/components/property-types'
import { FeaturedListings } from '@/components/featured-listings'
import { HowItWorks } from '@/components/how-it-works'
import { Testimonials } from '@/components/testimonials'
import { LocationShowcase } from '@/components/location-showcase'
import { FAQSection } from '@/components/faq-section'
import { FinalCTA } from '@/components/final-cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Header />
      <Hero />
      <PropertyTypes />
      <FeaturedListings />
      <HowItWorks />
      <Testimonials />
      <LocationShowcase />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
