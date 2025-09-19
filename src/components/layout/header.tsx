'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Blogs', href: '#blogs' },
]

// Smooth scroll function
const smoothScrollTo = (elementId: string) => {
  const element = document.querySelector(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled
        ? "bg-slate-900/95 backdrop-blur-xl shadow-xl border-b border-slate-700/30"
        : "bg-transparent"
    )}>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto container-padding">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="transition-all duration-300 group cursor-pointer">
              <div className="flex items-center space-x-3">

                <div className="flex flex-col">
                  <span className={cn(
                    "text-xl font-bold group-hover:text-yellow-400 transition-colors duration-300",
                    isScrolled ? "text-white" : "text-white"
                  )}>
                    SONS INFRA
                  </span>
                  <span className={cn(
                    "text-xs -mt-1 transition-colors duration-300",
                    isScrolled ? "text-gray-300" : "text-gray-300"
                  )}>
                    GENERAL CONTRACTORS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => smoothScrollTo(item.href)}
                className={cn(
                  "text-sm font-medium relative group flex items-center space-x-1 cursor-pointer px-3 py-2 rounded-lg transition-all duration-300",
                  isScrolled
                    ? "text-gray-300 hover:text-yellow-400 hover:bg-slate-800/50"
                    : "text-white hover:text-yellow-400 hover:bg-white/10"
                )}
              >
                <span>{item.name}</span>
                <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
                <span className="absolute -bottom-1 left-3 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]" />
              </button>
            ))}
          </div>

          {/* CTA Button & Mobile menu button */}
          <div className="flex items-center space-x-4">
            <Button
              className={cn(
                "hidden md:inline-flex font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 items-center gap-2",
                isScrolled
                  ? "bg-slate-800 hover:bg-slate-700 text-white shadow-lg hover:shadow-xl border border-slate-600"
                  : "bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white/50"
              )}
              size="sm"
            >
              <Phone className="w-4 h-4" />
              Get a Quote
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "md:hidden p-3 rounded-xl transition-all duration-300",
                isScrolled
                  ? "text-gray-300 hover:text-yellow-400 hover:bg-slate-800/50"
                  : "text-white hover:text-yellow-400 hover:bg-white/10"
              )}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-700/30 bg-slate-900/95 backdrop-blur-xl shadow-xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    smoothScrollTo(item.href)
                    setIsMobileMenuOpen(false)
                  }}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-gray-300 hover:text-yellow-400 hover:bg-slate-800/50 rounded-xl transition-all duration-300"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 py-4 pt-6">
                <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-600 items-center gap-2 justify-center">
                  <Phone className="w-4 h-4" />
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 