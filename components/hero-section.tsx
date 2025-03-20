import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16 xl:py-20 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Restoring Independence Through Advanced Grip Technology
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                ExoGrasp is a soft robotic glove that assists users to grasp and hold objects using pneumatic actuated
                muscles, controlled by advanced machine learning algorithms.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#technology">
                  Discover Our Technology
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#problem">Learn About The Problem</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]">
              <Image
                src="https://i.postimg.cc/rsbCrpZ9/Adobe-Express-file.png"
                //src="https://i.postimg.cc/hvLbThKV/full-product.png"
                alt="ExoGrasp Robotic Glove"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

