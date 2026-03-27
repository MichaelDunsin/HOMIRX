import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-black">H</span>
              </div>
              <span className="text-xl font-bold">HOMIRX</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming real estate with local expertise, transparent pricing, and personalized service.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-accent transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-accent transition">
                  Browse Properties
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent transition">
                  Find an Agent
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent transition">
                  Buying Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent transition">
                  Selling Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-accent transition">
                  Buy Properties
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent transition">
                  Sell Properties
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent transition">
                  Investment Advisory
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent transition">
                  Property Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent transition">
                  Rentals
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  123 Main Street
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-accent transition">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:info@homirx.com" className="text-gray-400 hover:text-accent transition">
                  info@homirx.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; 2024 HOMIRX Real Estate. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-accent transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent transition">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
