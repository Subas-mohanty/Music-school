import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

function HeroSection() {
  return (
    <>
    <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <div  className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Master the art of music
        </div>
        <p className="mt-4 md:text-lg max-w-lg text-center">
            Dive into our comprehensive music courses and transform your musical journey today. Whether you&apos;re a beginner or looking to refine your skills, join us to unlock your true potential.
        </p>
        <div className='mt-4'>
            <Link href={"/courses"}>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
                Explore Courses
              </Button>
            </Link>
        </div>
    </div>

    </>
  )
}

export default HeroSection