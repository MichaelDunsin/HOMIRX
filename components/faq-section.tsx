'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    id: '1',
    question: 'What fees do you charge?',
    answer:
      'Our commission is competitive and transparent. For sellers, we typically charge 5-6% of the final sale price. For buyers, most sellers cover the buyer agent commission. We discuss all costs upfront before any commitment.',
  },
  {
    id: '2',
    question: 'How long does the buying process take?',
    answer:
      'The timeline varies depending on market conditions and your specific situation. On average, from consultation to closing takes 30-60 days. We expedite the process whenever possible while ensuring all legal requirements are met.',
  },
  {
    id: '3',
    question: 'Can you help with investment properties?',
    answer:
      'Absolutely. Our agents specialize in investment analysis and can help you identify high-return opportunities. We provide market data, rental projections, and cap rate analysis to support your investment decisions.',
  },
  {
    id: '4',
    question: 'What areas do you serve?',
    answer:
      'We serve California, New York, Texas, and Florida. Our network extends to major metropolitan areas nationwide. If you\'re looking in a different region, we can connect you with trusted partners.',
  },
  {
    id: '5',
    question: 'How do I schedule a property viewing?',
    answer:
      'Simply click "Book a Viewing" on any listing or contact our office directly. We offer flexible viewing times, including evenings and weekends. Virtual tours are also available for out-of-state buyers.',
  },
  {
    id: '6',
    question: 'Do you offer property management services?',
    answer:
      'Yes, we manage rental properties for investors. Services include tenant screening, rent collection, maintenance coordination, and comprehensive financial reporting.',
  },
]

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('1')

  return (
    <section className="w-full bg-background py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services and process
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-colors"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {openId === faq.id && (
                <div className="px-6 pb-6 border-t border-border/50 pt-4">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-12 bg-accent/10 border border-accent/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our expert agents are ready to help. Contact us anytime.
          </p>
          <button className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition">
            Talk to an Agent
          </button>
        </div>
      </div>
    </section>
  )
}
