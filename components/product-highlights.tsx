"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Battery, Gauge, Smartphone, Leaf, Shield, Zap } from "lucide-react"
import { motion } from "framer-motion"

const highlights = [
  {
    icon: Battery,
    title: "Extended Range",
    description: "Up to 100km on a single charge with our advanced lithium-ion battery technology",
    color: "text-green-400",
  },
  {
    icon: Gauge,
    title: "High Performance",
    description: "Reach speeds up to 45 km/h with our powerful 3000W motor system",
    color: "text-blue-400",
  },
  {
    icon: Smartphone,
    title: "Smart Integration",
    description: "Connect via our mobile app for GPS tracking, diagnostics, and remote control",
    color: "text-purple-400",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Zero emissions, sustainable materials, and recyclable components",
    color: "text-green-400",
  },
  {
    icon: Shield,
    title: "Advanced Safety",
    description: "Anti-lock braking system, LED lighting, and collision detection",
    color: "text-yellow-400",
  },
  {
    icon: Zap,
    title: "Fast Charging",
    description: "Quick charge technology - 0 to 80% in just 2 hours",
    color: "text-cyan-400",
  },
]

export function ProductHighlights() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance text-white">
            Revolutionary <span className="text-primary">Features</span>
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto text-pretty">
            Engineered for the future, designed for today. Every component optimized for performance, safety, and
            sustainability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect hover:glow-effect hover-3d transition-all duration-300 group cursor-pointer h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-muted/20 ${highlight.color} hover-3d-icon transition-transform`}>
                      <highlight.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-white">{highlight.title}</h3>
                      <p className="text-white text-sm leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
