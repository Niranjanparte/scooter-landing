import { HeroSection } from "@/components/hero-section"
import { ProductHighlights } from "@/components/product-highlights"
import { ConfiguratorSection } from "@/components/configurator-section"
import { SpecsSection } from "@/components/specs-section"
import { FooterSection } from "@/components/footer-section"
import { Background3D } from "@/components/background-3d"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <Background3D />
      <div className="relative z-10">
        <HeroSection />
        <ProductHighlights />
        <ConfiguratorSection />
        <SpecsSection />
        <FooterSection />
      </div>
    </main>
  )
}
