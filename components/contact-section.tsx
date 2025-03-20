"use client"

import type React from "react"
import Image from "next/image"

const teamMembers = [
  {
    name: "Nathan Bellsmith",
    role: "Robotics & Control Systems",
    description: "Nathan specializes in control systems and embedded programming, developing intelligent algorithms for robotics applications.",
    image: "/images/alex.jpg", // Replace with actual image path
  },
  {
    name: "Megan Chang",
    role: "Mechanical Design & Simulation",
    description: "Megan focuses on mechanical design and FEA simulations, ensuring robust and lightweight structures.",
    image: "/images/sophia.jpg", // Replace with actual image path
  },
  {
    name: "Devshi Perera",
    role: "Electronics & PCB Design",
    description: "Devshi is an expert in circuit design and PCB layout, working on high-performance and low-power electronic systems.",
    image: "/images/daniel.jpg", // Replace with actual image path
  },
  {
    name: "Relja Vojvodic",
    role: "Software & AI Integration",
    description: "Relja develops AI-driven solutions and software interfaces, enhancing automation and user interaction.",
    image: "/images/emily.jpg", // Replace with actual image path
  },
  {
    name: "Seyon Yogendran",
    role: "System Integration & Testing",
    description: "Seyon works on integrating mechanical, electrical, and software components, ensuring seamless operation and testing.",
    image: "/images/michael.jpg", // Replace with actual image path
  },
]

export default function MeetTheTeam() {
  return (
    <section id="meet-the-team" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            Meet the Team
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mt-4">
            Mechatronics Engineers from the University of Waterloo
          </h2>
          <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Our team of engineers is dedicated to developing cutting-edge robotic solutions for assistive technology.
          </p>
        </div>
        
        {/* Team Members Row */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 border rounded-lg shadow-md w-[200px]">
              <Image
                src={member.image}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-primary font-medium text-sm">{member.role}</p>
              <p className="text-xs text-muted-foreground mt-2">{member.description}</p>
            </div>
          ))}
        </div>
        
        {/* Group Photo Below */}
        <div className="mt-12 flex justify-center">
          <Image
            src="https://i.postimg.cc/Tw2h43mq/Group-photo.jpg" // Replace with actual group photo path
            alt="Team Group Photo"
            width={800}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
