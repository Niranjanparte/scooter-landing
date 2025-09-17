"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { motion } from "framer-motion"

export function FooterSection() {
  return (
    <footer className="py-24 px-6 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="glass-effect glow-effect hover-3d-float">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold mb-4 text-white">Stay Connected</h3>
              <p className="text-white mb-6 max-w-2xl mx-auto">
                Get the latest updates on new models, exclusive offers, and riding tips delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Enter your email" className="glass-effect text-white" />
                <Button className="glow-effect hover-3d-button">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-primary">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-primary transition-colors">
                  Models
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-primary transition-colors">
                  Specifications
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-primary transition-colors">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-primary transition-colors">
                  Warranty
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-primary">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-primary transition-colors">
                  Service Locations
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-primary transition-colors">
                  User Manual
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-primary">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-primary transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-primary transition-colors">
                  Sustainability
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-primary">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-white">parteniranjan7@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-white"> +91 8850606205</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-white">New Delhi, DL</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <a href="#" className="p-2 rounded-full glass-effect hover:glow-effect hover-3d-icon transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full glass-effect hover:glow-effect hover-3d-icon transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full glass-effect hover:glow-effect hover-3d-icon transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full glass-effect hover:glow-effect hover-3d-icon transition-all">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-white">© 2024 FutureRide. All rights reserved. Ride the future today.</p>
        </motion.div>
      </div>
    </footer>
  )
}
