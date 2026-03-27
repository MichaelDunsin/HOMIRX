import { Button } from '@/components/ui/button'
import { Clock } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="w-full bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Headline */}
          <h2 className="text-4xl lg:text-6xl font-bold text-balance">
            Ready to Find Your Perfect Home?
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't miss out on your dream property. The right home doesn't stay available for long.
            <br />
            Let our expert agents guide you every step of the way.
          </p>

          {/* Urgency Message */}
          <div className="flex items-center justify-center gap-2 text-accent font-semibold pt-4">
            <Clock className="w-5 h-5" />
            <span>Limited inventory available. Schedule now.</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-accent text-primary hover:bg-accent/90 font-semibold px-8"
            >
              Schedule a Viewing
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 bg-transparent"
            >
              Get Exclusive Listings
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
            <div>
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm text-gray-300">Confidential</p>
            </div>
            <div>
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-sm text-gray-300">Agent Support</p>
            </div>
            <div>
              <p className="text-2xl font-bold">No Risk</p>
              <p className="text-sm text-gray-300">Free Consultation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
