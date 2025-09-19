import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Careers', href: '#careers' },
    { name: 'News & Updates', href: '#news' },
  ],
  services: [
    { name: 'Roads & Highways', href: '#services' },
    { name: 'Bridges & Flyovers', href: '#services' },
    { name: 'Industrial Projects', href: '#services' },
    { name: 'Urban Development', href: '#services' },
  ],
  support: [
    { name: 'Contact Us', href: '#contact' },
    { name: 'Get Quote', href: '#quote' },
    { name: 'Project Inquiry', href: '#inquiry' },
    { name: 'Support', href: '#support' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots opacity-10" />
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Main footer content */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-accent mb-6">AKG Sons Infra</h3>
                <p className="text-white/80 leading-relaxed text-lg">
                  Building tomorrow&apos;s infrastructure today with quality, innovation, and commitment to excellence in every project.
                </p>
              </div>
              
              {/* Contact info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group">
                  <div className="p-2 rounded-xl bg-accent/20 group-hover:bg-accent/30 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-white/80 group-hover:text-white transition-colors duration-300">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="p-2 rounded-xl bg-accent/20 group-hover:bg-accent/30 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-white/80 group-hover:text-white transition-colors duration-300">info@akgsonsinfra.com</span>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="p-2 rounded-xl bg-accent/20 group-hover:bg-accent/30 transition-colors duration-300 mt-1">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-white/80 group-hover:text-white transition-colors duration-300 leading-relaxed">
                    123 Infrastructure Avenue,<br />
                    Business District, Mumbai - 400001
                  </span>
                </div>
              </div>
            </div>

            {/* Company links */}
            <div>
              <h4 className="text-xl font-semibold mb-8 text-white">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services links */}
            <div>
              <h4 className="text-xl font-semibold mb-8 text-white">Services</h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support links */}
            <div>
              <h4 className="text-xl font-semibold mb-8 text-white">Support</h4>
              <ul className="space-y-4">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/60 text-sm">
              © 2024 AKG Sons Infra. All rights reserved.
            </div>

            {/* Social links */}
            <div className="flex space-x-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-white/60 hover:text-accent transition-all duration-300 hover:scale-110 p-2 rounded-xl hover:bg-accent/10"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>

            {/* Additional links */}
            <div className="flex space-x-8 text-sm">
              <a href="#privacy" className="text-white/60 hover:text-accent transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-white/60 hover:text-accent transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 