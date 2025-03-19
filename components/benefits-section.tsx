import { CheckCircle } from "lucide-react"

export default function BenefitsSection() {
  return (
    <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Benefits</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Restoring Independence & Dignity</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              ExoGrasp provides more than just physical assistance—it empowers users to reclaim their daily lives.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <div className="flex flex-col items-start gap-2">
            <CheckCircle className="h-10 w-10 text-primary" />
            <h3 className="text-xl font-bold">Enhanced Grip Strength</h3>
            <p className="text-muted-foreground">
              Provides the additional force needed to grasp and hold objects securely without excessive exertion.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <CheckCircle className="h-10 w-10 text-primary" />
            <h3 className="text-xl font-bold">Intuitive Control</h3>
            <p className="text-muted-foreground">
              Responds to natural muscle signals, making the device feel like a natural extension of the user's hand.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <CheckCircle className="h-10 w-10 text-primary" />
            <h3 className="text-xl font-bold">Comfortable Design</h3>
            <p className="text-muted-foreground">
              Soft, lightweight materials ensure all-day wearability without discomfort or skin irritation.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <CheckCircle className="h-10 w-10 text-primary" />
            <h3 className="text-xl font-bold">Rehabilitation Support</h3>
            <p className="text-muted-foreground">
              Assists in rehabilitation exercises, potentially accelerating recovery through consistent, guided
              movement.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <CheckCircle className="h-10 w-10 text-primary" />
            <h3 className="text-xl font-bold">Daily Independence</h3>
            <p className="text-muted-foreground">
              Enables users to perform essential daily tasks without constant assistance from caregivers.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <CheckCircle className="h-10 w-10 text-primary" />
            <h3 className="text-xl font-bold">Data-Driven Insights</h3>
            <p className="text-muted-foreground">
              Tracks progress and usage patterns, providing valuable information for users and healthcare providers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

