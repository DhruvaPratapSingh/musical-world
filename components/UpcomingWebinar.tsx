"use client"
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";
const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];
const UpcomingWebinar = () => {
  return (
    <div className='w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] p-12'>
    <div className='max-w-full mx-auto px-4 sm:px-6'>
    <div className='text-center'>
        <h2 className='font-semibold uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-800'>Featured Webinar</h2>
        <p className='font-extrabold tracking-tight mt-3 text-3xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-green-600 to-red-800'>Enhance your Musical journey</p>
    </div>
    <div className='mt-10 text-center '>
    <div className="max-w-full mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    </div>
    <div className='mt-10 text-center'>
    <Link href="/webinar"  className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">View all Webinars</Link>
    </div>
    </div>
    </div>
  )
}

export default UpcomingWebinar
