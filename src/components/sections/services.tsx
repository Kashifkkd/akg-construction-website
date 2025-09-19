'use client'

import { motion } from 'framer-motion'
import { 
  MapPin, 
  Building, 
  GitBranch, 
  Factory, 
  TreePine, 
  Droplets,
  ArrowRight 
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: MapPin,
    title: "Roads & Highways",
    description: "Construction and maintenance of national highways, state roads, and urban road networks with cutting-edge technology and materials.",
    features: ["National Highways", "State Roads", "Urban Roads", "Traffic Systems"],
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    icon: GitBranch,
    title: "Bridges & Flyovers",
    description: "Design and construction of bridges, flyovers, and elevated corridors that connect communities and enable seamless transportation.",
    features: ["Cable Bridges", "Flyovers", "Pedestrian Bridges", "Railway Bridges"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
  },
  {
    icon: Factory,
    title: "Industrial Projects",
    description: "Complete industrial infrastructure development including manufacturing facilities, warehouses, and industrial complexes.",
    features: ["Manufacturing Units", "Warehouses", "Industrial Parks", "Logistics Hubs"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    icon: Building,
    title: "Urban Development",
    description: "Comprehensive urban planning and development projects including residential complexes, commercial centers, and smart city initiatives.",
    features: ["Residential Projects", "Commercial Centers", "Smart Cities", "Public Buildings"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    icon: Droplets,
    title: "Water & Irrigation",
    description: "Water management systems, irrigation networks, and water treatment facilities for sustainable water resource management.",
    features: ["Irrigation Systems", "Water Treatment", "Dams & Reservoirs", "Drainage Systems"],
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    icon: TreePine,
    title: "Environmental Projects",
    description: "Sustainable infrastructure development with focus on environmental conservation and green building practices.",
    features: ["Green Buildings", "Waste Management", "Solar Projects", "Environmental Restoration"],
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
  }
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gradient-to-br from-muted/50 via-background to-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full border border-accent/20 text-sm font-medium text-accent mb-6">
            <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
            Our Services
          </div>
          
          <h2 className="heading-lg text-primary mb-6">
            Our Services
          </h2>
          <p className="text-lead text-muted-foreground max-w-4xl mx-auto">
            From concept to completion, we deliver comprehensive infrastructure solutions 
            that drive progress and build the foundation for tomorrow&apos;s growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card-elevated overflow-hidden h-full hover:shadow-xl transition-all duration-500 group-hover:scale-105">
                  {/* Service Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                    
                    {/* Icon overlay */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl border border-white/30 group-hover:bg-accent/20 group-hover:border-accent/30 transition-all duration-300">
                        <Icon className="w-8 h-8 text-white group-hover:text-accent transition-colors duration-300" />
                      </div>
                    </div>
                    
                    {/* Service category badge */}
                    <div className="absolute top-6 right-6">
                      <div className="bg-accent/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                        {service.title.split(' ')[0]}
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Button */}
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between group-hover:bg-accent group-hover:text-white transition-all duration-300 rounded-xl py-3"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="card-elevated p-12 lg:p-16 text-center bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border-primary/20">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent/10 rounded-full -translate-x-16 -translate-y-16" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/10 rounded-full translate-x-12 translate-y-12" />
            
            <div className="relative z-10">
              <h3 className="heading-md text-primary mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-lead text-muted-foreground mb-10 max-w-3xl mx-auto">
                Let&apos;s discuss how we can bring your infrastructure vision to life with our 
                expertise, innovation, and commitment to excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="btn-primary px-8 py-4 text-lg shadow-glow-lg">
                  Get Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="btn-outline px-8 py-4 text-lg">
                  View All Projects
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 