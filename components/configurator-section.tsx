"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { DeliveryScooter3D } from "./delivery-scooter-3d"

const colors = [
  { name: "Delivery Orange", value: "#ff8c00", class: "bg-orange-500" },
  { name: "Corporate Blue", value: "#3b82f6", class: "bg-blue-500" },
  { name: "Fleet White", value: "#f8fafc", class: "bg-slate-100" },
  { name: "Safety Red", value: "#ef4444", class: "bg-red-500" },
  { name: "Professional Black", value: "#1f2937", class: "bg-gray-800" },
]

const wheels = [
  { name: "Standard", price: 0, description: '12" Heavy-duty wheels for city delivery' },
  { name: "All-Terrain", price: 399, description: '14" Puncture-resistant wheels' },
  { name: "Pro Cargo", price: 699, description: '16" Reinforced wheels for heavy loads' },
]

const accessories = [
  { name: "Cargo Box", price: 299, description: "Insulated 60L delivery box with lock" },
  { name: "GPS Tracker Pro", price: 199, description: "Real-time tracking with fleet management" },
  { name: "Fast Charger", price: 149, description: "Quick charge in 2 hours for continuous delivery" },
  { name: "Safety Kit", price: 99, description: "LED warning lights and reflective strips" },
]

export function ConfiguratorSection() {
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [selectedWheel, setSelectedWheel] = useState(wheels[0])
  const [selectedAccessories, setSelectedAccessories] = useState<typeof accessories>([])

  const basePrice = 3499
  const totalPrice = basePrice + selectedWheel.price + selectedAccessories.reduce((sum, acc) => sum + acc.price, 0)

  const toggleAccessory = (accessory: (typeof accessories)[0]) => {
    setSelectedAccessories((prev) =>
      prev.includes(accessory) ? prev.filter((a) => a !== accessory) : [...prev, accessory],
    )
  }

  return (
    <section className="py-24 px-6 bg-muted/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance text-white">
            Build Your <span className="text-primary">Delivery Fleet</span>
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto text-pretty">
            Configure the perfect delivery scooter for your business needs and maximize efficiency.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Color Selection */}
            <Card className="glass-effect hover-3d-tilt">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between text-white">
                  <span>Color Selection</span>
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    {selectedColor.name}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 justify-center">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 rounded-full ${color.class} border-2 hover-3d-button transition-all ${
                        selectedColor.name === color.name
                          ? "border-primary scale-110 shadow-lg shadow-primary/50"
                          : "border-muted hover:scale-105"
                      }`}
                      title={color.name}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Wheel Selection */}
            <Card className="glass-effect hover-3d-tilt">
              <CardHeader className="pb-4">
                <CardTitle className="text-white text-center">Wheel Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {wheels.map((wheel) => (
                    <div
                      key={wheel.name}
                      onClick={() => setSelectedWheel(wheel)}
                      className={`p-4 rounded-lg border cursor-pointer hover-3d-lift transition-all ${
                        selectedWheel.name === wheel.name
                          ? "border-primary bg-primary/10"
                          : "border-muted hover:border-primary/50"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-1">{wheel.name}</h4>
                          <p className="text-sm text-white/80">{wheel.description}</p>
                        </div>
                        <div className="text-right ml-4">
                          <p className="font-semibold text-white">
                            {wheel.price === 0 ? "Included" : `+₹${wheel.price}`}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Accessories */}
            <Card className="glass-effect hover-3d-tilt">
              <CardHeader className="pb-4">
                <CardTitle className="text-white text-center">Delivery Accessories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {accessories.map((accessory) => (
                    <div
                      key={accessory.name}
                      onClick={() => toggleAccessory(accessory)}
                      className={`p-4 rounded-lg border cursor-pointer hover-3d-lift transition-all ${
                        selectedAccessories.includes(accessory)
                          ? "border-primary bg-primary/10"
                          : "border-muted hover:border-primary/50"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-1">{accessory.name}</h4>
                          <p className="text-sm text-white/80">{accessory.description}</p>
                        </div>
                        <div className="text-right ml-4">
                          <p className="font-semibold text-white">+₹{accessory.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* 3D Preview */}
            <Card className="glass-effect hover-3d-float">
              <CardContent className="p-6">
                <DeliveryScooter3D selectedColor={selectedColor.value} />
              </CardContent>
            </Card>

            {/* Price Summary */}
            <Card className="glass-effect glow-effect hover-3d-tilt">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between text-white">
                    <span>Base Delivery Model</span>
                    <span>₹{basePrice.toLocaleString()}</span>
                  </div>
                  {selectedWheel.price > 0 && (
                    <div className="flex justify-between text-sm text-white/80">
                      <span>{selectedWheel.name} Wheels</span>
                      <span>+₹{selectedWheel.price}</span>
                    </div>
                  )}
                  {selectedAccessories.map((accessory) => (
                    <div key={accessory.name} className="flex justify-between text-sm text-white/80">
                      <span>{accessory.name}</span>
                      <span>+₹{accessory.price}</span>
                    </div>
                  ))}
                  <hr className="border-muted/30" />
                  <div className="flex justify-between text-xl font-bold text-white">
                    <span>Total</span>
                    <span className="text-primary">₹{totalPrice.toLocaleString()}</span>
                  </div>
                  <Button className="w-full glow-effect hover-3d-button" size="lg">
                    Order Fleet - ₹{totalPrice.toLocaleString()}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
