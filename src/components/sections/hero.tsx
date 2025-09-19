'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Pause, Play } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVideoPaused, setIsVideoPaused] = useState(false)

  const slides = [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Construction Site'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Modern Architecture'
    },
    {
      type: 'image',
      src: '/building-1.jpg',
      alt: 'Building Project'
    },
    {
      type: 'video',
      src: '/construction-1.mp4',
      alt: 'Construction Video 1'
    },
    {
      type: 'video',
      src: '/construction-2.mp4',
      alt: 'Construction Video 2'
    }
  ]

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const scheduleNextSlide = () => {
      const currentSlideData = slides[currentSlide]
      
      if (currentSlideData.type === 'video') {
        // For videos, let them play completely
        // We'll use a longer timeout to allow full video playback
        timeoutId = setTimeout(() => {
          setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 8000) // 8 seconds for videos
      } else {
        // For images, use shorter duration
        timeoutId = setTimeout(() => {
          setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 4000) // 4 seconds for images
      }
    }

    scheduleNextSlide()

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [currentSlide, slides.length])

  const currentSlideData = slides[currentSlide]

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Slideshow Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {slide.type === 'image' ? (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            ) : (
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                ref={(el) => {
                  if (el && index === currentSlide) {
                    if (isVideoPaused) {
                      el.pause()
                    } else {
                      el.play()
                    }
                  }
                }}
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        
        {/* Video Controls */}
        {currentSlideData.type === 'video' && (
          <div className="absolute top-4 right-4 z-20">
            <button
              onClick={() => setIsVideoPaused(!isVideoPaused)}
              className="w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
              {isVideoPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>

      {/* Content - Left Side */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-8 lg:px-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Main Heading */}
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Building
                <span className="block text-yellow-400">Dreams</span>
                <span className="block text-white">Together</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
                Crafting extraordinary structures that shape the future of urban living.
              </p>

              {/* Click to Explore Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#about')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className="group inline-flex items-center gap-3 bg-yellow-400 cursor-pointer hover:bg-yellow-300 text-black font-semibold text-base px-4 py-2 rounded-lg transition-all duration-300"
              >
                <span>CLICK TO EXPLORE</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}