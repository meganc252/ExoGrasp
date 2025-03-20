import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart } from "lucide-react"

export default function ProblemSection() {
  return (
    <section id="problem" className="w-full py-6 md:py-12 lg:py-16 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              The Problem
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Addressing a Global Health Challenge</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Stroke affects millions worldwide, leaving many with limited hand function and independence.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Heart className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">15 Million</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                People worldwide suffer a stroke annually, with numbers continuing to rise.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Heart className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">Hand Impairment</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                The majority of stroke patients experience reduced grip strength and limited ability to grasp objects.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Heart className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">Daily Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Simple tasks like holding utensils, opening doors, or picking up objects become significant obstacles.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 space-y-4 text-center">
          <p className="text-muted-foreground md:text-xl/relaxed">
            Current solutions are often bulky, expensive, or require extensive professional assistance, leaving many
            without effective options for regaining independence.
          </p>
        </div>
      </div>
    </section>
  )
}

