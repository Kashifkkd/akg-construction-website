'use client'

import { motion } from 'framer-motion'
import { Award, Users, Clock, Target, ChevronLeft, ChevronRight, ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const slideshowImages = [
  {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Construction Site 1"
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
    alt: "Construction Site 2"
  },
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Construction Site 3"
  },
  {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Construction Site 4"
  }
]

const achievements = [
  {
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Quality Excellence",
    description: "ISO 9001:2015 certified with commitment to highest quality standards"
  },
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
    title: "Expert Team",
    description: "500+ skilled engineers and construction professionals"
  },
  {
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "On-Time Delivery",
    description: "98% of projects completed within scheduled timelines"
  },
  {
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Precision Focus",
    description: "Zero-compromise approach to safety and engineering excellence"
  }
]

const masonryItems = [
  {
    type: 'image',
    src: "/building-1.jpg",
    alt: "Construction Building",
    colSpan: "col-span-2",
    rowSpan: "row-span-3",
    colStart: "col-start-1",
    rowStart: "row-start-1"
  },
  {
    type: 'video',
    src: "/construction-1.mp4",
    alt: "Construction Video 1",
    colSpan: "col-span-2",
    rowSpan: "row-span-3",
    colStart: "col-start-3",
    rowStart: "row-start-1"
  },
  {
    type: 'video',
    src: "/construction-2.mp4",
    alt: "Construction Video 2",
    colSpan: "col-span-2",
    rowSpan: "row-span-6",
    colStart: "col-start-5",
    rowStart: "row-start-1"
  },
  {
    type: 'image',
    src: "/building-1.jpg",
    alt: "Construction Project",
    colSpan: "col-span-4",
    rowSpan: "row-span-3",
    colStart: "col-start-1",
    rowStart: "row-start-4"
  }
]

// Custom hook for counting animation (runs only once per page load)
const useCountUp = (end: number, duration: number = 2000, start: number = 0) => {
  const [count, setCount] = useState(start)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    // Only animate once per page load
    if (hasAnimated) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * (end - start) + start)
      
      setCount(currentCount)
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setHasAnimated(true)
      }
    }

    // Start animation after a short delay to ensure page is loaded
    const timeoutId = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate)
    }, 500)

    return () => {
      clearTimeout(timeoutId)
      cancelAnimationFrame(animationFrame)
    }
  }, [end, duration, start, hasAnimated])

  return { count, hasAnimated }
}

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Counting animations for statistics
  const yearsCount = useCountUp(25, 2000)
  const projectsCount = useCountUp(500, 2500)
  const awardsCount = useCountUp(50, 1800)
  const qualityCount = useCountUp(100, 1500)
  const professionalsCount = useCountUp(1000, 3000)
  const valueCount = useCountUp(500, 2200)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length)
  }

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots opacity-30" />
      
      {/* Light Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            About <span className="text-yellow-400">AKG Sons Infra</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content - Our Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Left Side - Our Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Our Story Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <div className="px-4 py-2 bg-slate-100 rounded-lg text-slate-600 text-sm font-medium">
                OUR STORY
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight"
            >
              Building infrastructure that
              <span className="block text-yellow-400">shapes tomorrow</span>
            </motion.h2>

            {/* Story Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-lg text-slate-600 leading-relaxed">
                AKG Sons Infra wasn't born from a corporate boardroom, but from a shared vision. 
                We, a group of passionate engineers, were tired of seeing substandard infrastructure 
                that failed to serve communities properly. We craved a company that fostered innovation, 
                nurtured excellence, and offered the expertise to help India's infrastructure flourish.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                From highways that connect cities to bridges that unite communities, from industrial 
                complexes that drive economic growth to urban developments that enhance quality of life – 
                we have consistently delivered projects that stand the test of time.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {[
                { number: `${yearsCount.count}+`, label: "years of engineering excellence", count: yearsCount },
                { number: `${projectsCount.count}+`, label: "projects completed successfully", count: projectsCount },
                { number: `${awardsCount.count}+`, label: "awards and recognitions", count: awardsCount },
                { number: `${qualityCount.count}%`, label: "quality assured delivery", count: qualityCount },
                { number: `${professionalsCount.count}+`, label: "skilled professionals", count: professionalsCount },
                { number: `₹${valueCount.count}M+`, label: "total project value", count: valueCount }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between py-4 border-b border-slate-200 last:border-b-0 group hover:bg-slate-50/50 rounded-lg px-4 -mx-4 transition-colors duration-300"
                >
                  <motion.span 
                    className="text-4xl font-bold text-slate-900 group-hover:text-yellow-600 transition-colors duration-300"
                    key={stat.number}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.number}
                  </motion.span>
                  <span className="text-slate-600 font-medium text-right max-w-[200px]">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Masonry Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative">
            {/* Masonry Layout - CSS Grid */}
            <div className="grid grid-cols-6 grid-rows-6 gap-4 h-[600px]">
              {masonryItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative group cursor-pointer ${item.colSpan} ${item.rowSpan} ${item.colStart} ${item.rowStart}`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    {item.type === 'image' ? (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <video
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source src={item.src} type="video/mp4" />
                      </video>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Play icon for videos */}
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                          <Play className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation and View More */}
            <div className="flex items-center justify-between mt-8">
              {/* Navigation Buttons */}
              <div className="flex gap-2">
                <motion.button
                  onClick={prevSlide}
                  className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="w-5 h-5 text-slate-600" />
                </motion.button>
                <motion.button
                  onClick={nextSlide}
                  className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="w-5 h-5 text-slate-600" />
                </motion.button>
              </div>

              {/* View More Link */}
              <motion.button
                whileHover={{ x: 5 }}
                className="text-slate-600 hover:text-slate-900 font-medium flex items-center gap-2 transition-colors duration-300"
              >
                VIEW MORE PHOTOS
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* What we Offer Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            What we <span className="text-yellow-400">Offer</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
                <motion.div
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-slate-50 to-white p-6 text-center h-full shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200/50"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-grid opacity-5"></div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-tr from-yellow-400/10 to-transparent rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <motion.div
                      className="relative w-full h-40 mx-auto mb-4 overflow-hidden rounded-2xl shadow-lg"
                      whileHover={{ rotate: 2, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent"></div>
                    </motion.div>
                    
                    <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                      {achievement.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {achievement.description}
                    </p>
                    
                    {/* Decorative line */}
                    <div className="mt-6 w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
                  </div>
                </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 