import { MessageCircle, Eye, Handshake, FileCheck } from 'lucide-react'

const steps = [
  {
    icon: MessageCircle,
    step: '01',
    title: 'Consultation',
    description:
      'Meet with our experts to understand your needs, budget, and timeline. We listen carefully to your goals.',
  },
  {
    icon: Eye,
    step: '02',
    title: 'Property Matching',
    description:
      'We curate personalized options based on your criteria. Browse our exclusive listings and detailed property information.',
  },
  {
    icon: Handshake,
    step: '03',
    title: 'Viewing & Negotiation',
    description:
      'Schedule viewings at your convenience. We negotiate on your behalf to secure the best terms.',
  },
  {
    icon: FileCheck,
    step: '04',
    title: 'Closing & Move-In',
    description:
      'We handle all paperwork and legal details. Complete your transaction smoothly with our guidance.',
  },
]

export function HowItWorks() {
  return (
    <section className="w-full bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
            How the Process Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes finding and securing your perfect property simple and stress-free.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div key={item.step} className="relative">
                {/* Connector Line - Hidden on mobile */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] right-[-50%] h-0.5 bg-gradient-to-r from-accent/50 to-transparent" />
                )}

                {/* Card */}
                <div className="relative bg-card border border-border rounded-2xl p-6 space-y-4 h-full hover:border-accent hover:shadow-lg transition-all duration-300">
                  {/* Step Number */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-4xl font-bold text-accent/20">{item.step}</span>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="bg-card border border-border rounded-2xl p-6 text-center space-y-2">
            <p className="text-4xl font-bold text-accent">2.5K+</p>
            <p className="text-muted-foreground">Happy Clients</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 text-center space-y-2">
            <p className="text-4xl font-bold text-accent">5K+</p>
            <p className="text-muted-foreground">Properties Sold</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 text-center space-y-2">
            <p className="text-4xl font-bold text-accent">98%</p>
            <p className="text-muted-foreground">Satisfaction Rate</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 text-center space-y-2">
            <p className="text-4xl font-bold text-accent">15+</p>
            <p className="text-muted-foreground">Years in Business</p>
          </div>
        </div>
      </div>
    </section>
  )
}
