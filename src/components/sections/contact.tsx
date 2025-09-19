'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 98765 43210", "+91 98765 43211"],
    description: "Call us for immediate assistance"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@akgsonsinfra.com", "projects@akgsonsinfra.com"],
    description: "Send us your project requirements"
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Infrastructure Avenue", "Business District, Mumbai - 400001"],
    description: "Visit our corporate office"
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
    description: "We're here to help during business hours"
  }
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-muted/50 via-background to-muted/30 relative overflow-hidden">
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
            Get In Touch
          </div>
          
          <h2 className="heading-lg text-primary mb-6">
            Get In Touch
          </h2>
          <p className="text-lead text-muted-foreground max-w-4xl mx-auto">
            Ready to start your infrastructure project? Contact our team of experts 
            for consultation, project planning, and detailed proposals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card-elevated p-8 lg:p-12">
              <div className="mb-8">
                <h3 className="heading-md text-primary mb-4">Send Us a Message</h3>
                <p className="text-muted-foreground">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-3">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-4 border border-input rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 bg-background"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-3">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-4 border border-input rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 bg-background"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-4 border border-input rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 bg-background"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-4 border border-input rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 bg-background"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-3">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full px-4 py-4 border border-input rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 bg-background"
                  >
                    <option value="">Select project type</option>
                    <option value="highways">Roads & Highways</option>
                    <option value="bridges">Bridges & Flyovers</option>
                    <option value="industrial">Industrial Projects</option>
                    <option value="urban">Urban Development</option>
                    <option value="water">Water & Irrigation</option>
                    <option value="environmental">Environmental Projects</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-3">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-4 border border-input rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 bg-background resize-none"
                    placeholder="Tell us about your project requirements, timeline, and budget"
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full btn-primary py-4 text-lg group"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="card-modern p-6 h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-4 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                            {info.title}
                          </h3>
                          <div className="space-y-2 text-sm text-muted-foreground">
                            {info.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="leading-relaxed">{detail}</div>
                            ))}
                          </div>
                          <p className="text-xs text-muted-foreground/70 mt-3">{info.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="card-elevated overflow-hidden rounded-3xl"
            >
              <div className="h-64 bg-gradient-to-br from-primary via-primary/90 to-secondary relative">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
                
                <div className="absolute inset-0 flex items-center justify-center text-white relative z-10">
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl border border-white/30 mb-6 inline-block">
                      <MapPin className="w-12 h-12 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Visit Our Office</h3>
                    <p className="text-white/90 text-lg">
                      123 Infrastructure Avenue<br />
                      Business District, Mumbai - 400001
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="card-elevated p-8 bg-gradient-to-br from-accent to-accent/90 text-white rounded-3xl overflow-hidden relative"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">24/7 Emergency Support</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  For urgent project issues or emergency construction support, 
                  our team is available around the clock.
                </p>
                <Button 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white hover:text-accent backdrop-blur-sm px-6 py-3"
                >
                  Call Emergency Line: +91 98765 00000
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 