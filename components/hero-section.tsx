"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Wifi } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 gradient-mesh">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Zap className="w-4 h-4 text-primary" />
              <span>Next-Gen Electric Mobility</span>
            </motion.div>

            <motion.h1
              className="text-6xl lg:text-7xl font-bold text-balance neon-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Ride the
              <span className="text-primary block">Future</span>
            </motion.h1>

            <motion.p
              className="text-xl text-white text-pretty max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Experience the perfect fusion of cutting-edge technology, sustainable design, and unmatched performance
              with our revolutionary electric scooter.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button size="lg" className="glow-effect hover-3d-button group">
              Configure Your Ride
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 bg-background/80 backdrop-blur-sm hover:bg-background/90 hover-3d-button"
            >
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center gap-8 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm text-white">5-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Wifi className="w-5 h-5 text-primary" />
              <span className="text-sm text-white">Smart Connected</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="relative w-full h-96 lg:h-[500px] float-animation">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full blur-3xl"></div>
            <img
              src="/futuristic-electric-scooter-side-view-neon-lights.jpg"
              alt="Electric Scooter"
              className="relative z-10 w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
