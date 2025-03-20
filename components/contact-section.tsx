"use client"

import type React from "react"
import Image from "next/image"

const teamMembers = [
  {
    name: "Nathan Bellsmith",
    role: "Electrical Design",
    description: "Nathan specializes in electronics and circuit design, developing high-performance and low-power electronic systems.",
    image: "https://i.postimg.cc/kgp5xb78/nathan.jpg", // Replace with actual image path
  },
  {
    name: "Megan Chang",
    role: "System Integration & Machine Learning",
    description: "Megan works on integrating mechanical, electrical, and software components, as well as developing AI-driven solutions for future project development.",
    image: "https://i.postimg.cc/jdkT9YBY/megan.jpg", // Replace with actual image path
  },
  {
    name: "Devshi Perera",
    role: "Mechanical Design",
    description: "Devshi focuses on mechanical design, ensuring a robust wearable device with lightweight pneumatic actuators optimized for user interaction.",
    image: "https://i.postimg.cc/XJ36FjBd/devshi.jpg", // Replace with actual image path
  },
  {
    name: "Relja Vojvodic",
    role: "Software & Control Systems",
    description: "Relja specializes in control systems and embedded programming, developing intelligent algorithms for robotics applications.",
    image: "https://i.postimg.cc/XvfTnR1J/relja.jpg", // Replace with actual image path
  },
  {
    name: "Seyon Yogendran",
    role: "Software & Control Systems",
    description: "Seyon specializes in control systems and embedded programming, developing intelligent algorithms for robotics applications.",
    image: "https://i.postimg.cc/ZqHV74Dr/seyon.jpg", // Replace with actual image path
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
