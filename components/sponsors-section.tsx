import Image from "next/image"

const sponsors = [
  {
    name: "Aurora Pro Scientific",
    logo: "https://i.postimg.cc/8cpBtbyt/Aurora-Pro-Scientific-Logo.png",
  },
  {
    name: "Engineering of the Future Fund",
    logo: "https://i.postimg.cc/GhNGyr1M/engineering-of-the-future-fund.png",
  },
  {
    name: "Tameson",
    logo: "https://i.postimg.cc/Nj6FjwG2/tameson-log-1000-500px.webp",
  },
  {
    name: "University of Waterloo",
    logo: "https://i.postimg.cc/tgGrFFHm/University-of-Waterloo-Logo-Horizontal-1024x288.png",
  },
]

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            Our Sponsors
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Supporting Our Innovation</h2>
          <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We are grateful to our sponsors for supporting our mission to develop advanced assistive technology.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={250}
                height={100}
                className="object-contain max-w-[250px] max-h-[100px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
