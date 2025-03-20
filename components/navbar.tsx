"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            //src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-ECLVVN73F8vBy1y6UY2niZvcrAbOoV.png"
            src="https://i.postimg.cc/GpBS2HLq/logo.png"
            alt="ExoGrasp Logo"
            width={100}
            height={100}
            className="h-auto w-auto"
          />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#problem" className="text-sm font-medium transition-colors hover:text-primary">
            The Problem
          </Link>
          <Link href="#technology" className="text-sm font-medium transition-colors hover:text-primary">
            Technology
          </Link>
          <Link href="#benefits" className="text-sm font-medium transition-colors hover:text-primary">
            Benefits
          </Link>
          <Link href="#meet-the-team" className="text-sm font-medium transition-colors hover:text-primary">
            Meet the Team
          </Link>
        </nav>
        <div className="hidden md:flex gap-4">
          <Button asChild variant="outline">
            <Link href="#contact">Learn More</Link>
          </Button>
          <Button asChild>
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6">
          <nav className="flex flex-col gap-4">
            <Link
              href="#problem"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              The Problem
            </Link>
            <Link
              href="#technology"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Technology
            </Link>
            <Link
              href="#benefits"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Meet the Team
            </Link>
          </nav>
          <div className="flex flex-col gap-2 mt-4">
            <Button asChild variant="outline">
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                Learn More
              </Link>
            </Button>
            <Button asChild>
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

