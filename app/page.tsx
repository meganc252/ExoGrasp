import HeroSection from "@/components/hero-section"
import ProblemSection from "@/components/problem-section"
import TechnologySection from "@/components/technology-section"
import BenefitsSection from "@/components/benefits-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <TechnologySection />
        <BenefitsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

