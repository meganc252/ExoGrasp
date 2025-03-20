import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-10">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              //src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-ECLVVN73F8vBy1y6UY2niZvcrAbOoV.png"
              src="https://i.postimg.cc/1Xt4ZcHW/1.png"
              alt="ExoGrasp Logo"
              width={140}
              height={40}
              className="h-auto w-auto"
            />
          </Link>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2025 ExoGrasp. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Terms of Service
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}

