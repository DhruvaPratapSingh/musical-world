import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

const Herosection = () => {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center mx-auto py-10 md:py-0 overflow-hidden relative'>
         <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className='p-4 relative z-10 w-full text-center'>
        <h1 className='text-4xl font-extrabold mt-20 md:mt-0 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-red-600'>Master the art of music</h1>
        <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto '>Deep Dive in our comprehensive music course and transform your musical journey today. whether you are a beginner or looking to refine your skills, join our community to boost your potential and musical power.</p>
        <div className='mt-4'>
            <Link href={"/courses"}>
            <Button
        borderRadius="1.95rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 p-2 md:w-40 "
      >
       Explore Services
      </Button>
           </Link>
        </div>
      </div>
    </div>
  )
}

export default Herosection
