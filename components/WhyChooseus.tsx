"use client"
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
const content = [
    {
      title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
      description:
       'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          CDiscover Your Sound with Us: A Personal Journey in Music Mastery
        </div>
      ),
    },
    {
      title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
      description:
       'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          {/* <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          /> */}
        </div>
      ),
    },
    {
      title: "Master Next level music",
      description:
        'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Master Next level music
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Running out of content
        </div>
      ),
    },
  ];
const WhyChooseus = () => {
  return (
    <div className="">
    <StickyScroll content={content} />
  </div>

  )
}

export default WhyChooseus
