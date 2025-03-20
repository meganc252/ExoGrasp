import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, HandMetal } from "lucide-react"

export default function TechnologySection() {
  return (
    <section id="technology" className="w-full py-6 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Our Technology
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Advanced Assistive Technology</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              ExoGrasp combines soft robotics, machine learning, and biomechanics to restore hand function.
            </p>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_650px] mt-12">
          <div className="flex items-center justify-center">
            <div className="relative h-[600px] w-[600px] md:h-[700px] md:w-[700px]">
              <Image
                src="https://i.postimg.cc/kGrSg93z/Hand-Half-Closed.png"
                alt="ExoGrasp Technology Visualization"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <HandMetal className="h-8 w-8 text-primary" />
                  <CardTitle>Soft Robotic Actuators</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Pneumatic artificial muscles that mimic natural hand movements, providing gentle yet effective
                    assistance without rigid components.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Brain className="h-8 w-8 text-primary" />
                  <CardTitle>sEMG Sensors & ML Algorithms</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Surface electromyography sensors detect subtle muscle signals, while machine learning algorithms
                    interpret user intent for intuitive control.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <HandMetal className="h-8 w-8 text-primary" />
                  <CardTitle>Adaptive Control System</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Our system learns and adapts to each user's unique patterns, improving assistance over time and
                    adjusting to different tasks.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
