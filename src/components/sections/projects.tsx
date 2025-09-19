'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const projects = [
  {
    id: 1,
    title: "Mumbai-Pune Expressway Expansion",
    location: "Maharashtra, India",
    category: "Highways",
    year: "2023",
    description: "Major expansion project adding 6 lanes to the existing expressway, improving connectivity between Mumbai and Pune.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Signature Bridge Delhi",
    location: "New Delhi, India",
    category: "Bridges",
    year: "2022",
    description: "Iconic cable-stayed bridge spanning the Yamuna River, connecting North and Northeast Delhi.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    featured: false
  },
  {
    id: 3,
    title: "Smart City Infrastructure",
    location: "Surat, Gujarat",
    category: "Urban Development",
    year: "2023",
    description: "Comprehensive smart city development including roads, utilities, and digital infrastructure.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: false
  },
  {
    id: 4,
    title: "Industrial Complex Bangalore",
    location: "Karnataka, India",
    category: "Industrial",
    year: "2022",
    description: "State-of-the-art manufacturing facility with modern infrastructure and sustainable design.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true
  },
  {
    id: 5,
    title: "Water Treatment Plant",
    location: "Chennai, Tamil Nadu",
    category: "Water Management",
    year: "2023",
    description: "Advanced water treatment facility serving 2 million residents with cutting-edge purification technology.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: false
  },
  {
    id: 6,
    title: "Green Building Complex",
    location: "Hyderabad, Telangana",
    category: "Environmental",
    year: "2023",
    description: "LEED Platinum certified office complex with solar panels and rainwater harvesting systems.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    featured: false
  }
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 text-sm font-medium text-primary mb-6">
            <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
            Featured Projects
          </div>
          
          <h2 className="heading-lg text-primary mb-6">
            Featured Projects
          </h2>
          <p className="text-lead text-muted-foreground max-w-4xl mx-auto">
            Discover our portfolio of landmark infrastructure projects that showcase 
            our engineering excellence and commitment to building a better tomorrow.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                    project.featured ? 'h-80' : 'h-64'
                  }`}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-accent/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-accent/20">
                    {project.category}
                  </span>
                </div>

                {/* Project Number */}
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border border-white/30">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-200">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed line-clamp-3 text-base">
                      {project.description}
                    </p>
                  </div>

                  {/* Hover Actions */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex space-x-3">
                      <Button 
                        size="sm" 
                        className="btn-primary text-sm px-6 py-3"
                      >
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <div className="card-elevated p-12 lg:p-16 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white rounded-3xl overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24" />
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div className="group">
                  <div className="text-5xl md:text-6xl font-bold text-accent mb-3 group-hover:scale-110 transition-transform duration-300">500+</div>
                  <div className="text-lg text-white/90 font-medium">Projects Completed</div>
                </div>
                <div className="group">
                  <div className="text-5xl md:text-6xl font-bold text-accent mb-3 group-hover:scale-110 transition-transform duration-300">₹50B+</div>
                  <div className="text-lg text-white/90 font-medium">Project Value</div>
                </div>
                <div className="group">
                  <div className="text-5xl md:text-6xl font-bold text-accent mb-3 group-hover:scale-110 transition-transform duration-300">15+</div>
                  <div className="text-lg text-white/90 font-medium">States Covered</div>
                </div>
                <div className="group">
                  <div className="text-5xl md:text-6xl font-bold text-accent mb-3 group-hover:scale-110 transition-transform duration-300">98%</div>
                  <div className="text-lg text-white/90 font-medium">On-Time Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="heading-md text-primary mb-6">
            Explore All Our Projects
          </h3>
          <p className="text-lead text-muted-foreground mb-10 max-w-3xl mx-auto">
            Discover the full range of our infrastructure achievements and see how 
            we&apos;re building the foundation for India&apos;s future.
          </p>
          <Button size="lg" className="btn-primary px-8 py-4 text-lg shadow-glow-lg">
            View Complete Portfolio
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 