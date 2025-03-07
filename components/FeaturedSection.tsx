import React from 'react'
import coursedata from "../data/music_courses.json";
import Link from 'next/link';
import { BackgroundGradient } from './ui/background-gradient';
import Image from 'next/image';
interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image:string
}

const FeaturedSection = () => {
        const featuredCourses = coursedata.courses.filter((course:Course) => course.isFeatured)
    
    
  return (
    <div className='p-12 bg-zinc-900'>
      <div className=''>
        <div className='text-center'>
      <h2 className='font-semibold uppercase bg-clip-text text-transparent bg-gradient-to-b from-blue-600 to-green-800'>Featured courses</h2>
      <p className='font-extrabold tracking-tight mt-3 text-3xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-200'>Learn with the best </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {featuredCourses.map((course:Course)=> (
                    <div key={course.id} className="flex justify-center">
                        <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                           {/* <Image
          src={course.image}
          alt="jordans"
          height="400"
          width="400"
          className="object-cover max-h-44"
        /> */}
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                <Link href={`/courses/${course.slug}`}>
                                Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
      <div className='mt-20 text-center'>
       <Link href="/courses"  className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">View all courses</Link>
      </div>
    </div>
  )
}

export default FeaturedSection
