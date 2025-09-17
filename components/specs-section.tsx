"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const specs = [
  {
    category: "Performance",
    items: [
      { label: "Top Speed", value: "45 km/h"},
      { label: "Range", value: "100 km", highlight: true },
      { label: "Motor Power", value: "3000W"},
      { label: "Acceleration", value: "0-30 km/h in 3.2s" },
    ],
  },
  {
    category: "Battery & Charging",
    items: [
      { label: "Battery Type", value: "Lithium-ion" },
      { label: "Capacity", value: "72V 35Ah" },
      { label: "Charging Time", value: "2-4 hours", highlight: true },
      { label: "Battery Life", value: "1000+ cycles" },
    ],
  },
  {
    category: "Design & Build",
    items: [
      { label: "Weight", value: "28 kg" },
      { label: "Max Load", value: "120 kg" },
      { label: "Frame Material", value: "Aluminum Alloy" },
      { label: "Water Rating", value: "IPX7", highlight: true },
    ],
  },
  {
    category: "Smart Features",
    items: [
      { label: "Connectivity", value: "Bluetooth 5.0" },
      { label: "GPS Tracking", value: "Built-in", highlight: true },
      { label: "Mobile App", value: "iOS & Android" },
      { label: "Anti-theft", value: "Smart Lock" },
    ],
  },
]

const pricing = [
  {
    name: "Essential",
    price: 2999,
    description: "Perfect for daily commuting",
    features: ['Standard 10" wheels', "Basic LED lighting", "Mobile app connectivity", "1-year warranty"],
    popular: false,
  },
  {
    name: "Pro",
    price: 3499,
    description: "Enhanced performance and features",
    features: [
      'Sport 12" carbon wheels',
      "Advanced LED system",
      "GPS tracking included",
      "Smart helmet bundle",
      "3-year warranty",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: 4299,
    description: "Ultimate riding experience",
    features: [
      'Pro 14" titanium wheels',
      "Premium LED matrix",
      "Full security suite",
      "All accessories included",
      "5-year warranty",
    ],
    popular: false,
  },
]

export function SpecsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance text-white">
              Technical <span className="text-primary">Specifications</span>
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto text-pretty">
              Engineered with precision, built for performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specs.map((spec, index) => (
              <motion.div
                key={spec.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="glass-effect h-full hover-3d flex flex-col">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg text-white font-bold text-center">{spec.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-4">
                      {spec.items.map((item) => (
                        <div key={item.label} className="flex justify-between items-center">
                          <span className="text-sm text-white font-medium">{item.label}</span>
                          <span className={`text-sm font-bold ${item.highlight ? "text-primary" : "text-white"}`}>
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance text-white">
              Choose Your <span className="text-primary">Model</span>
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto text-pretty">
              Three tiers of excellence, each designed for different riding needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card
                  className={`glass-effect relative hover-3d-tilt h-full flex flex-col ${plan.popular ? "glow-effect border-primary" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground font-bold">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl text-white font-bold">{plan.name}</CardTitle>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-primary">₹{plan.price.toLocaleString()}</div>
                      <p className="text-white font-medium">{plan.description}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-white font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
