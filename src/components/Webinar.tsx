"use client";
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';
import Link from 'next/link';
import {featuredWebinars} from "../data/featured_webinar.json"

function Webinar() {

      // featuredWebinars don't have link , so we have to modify it for the usage, so that we can use the card effect on the data, which needs these properties
      // why aren't we modifying the original data ?
      // because this data might be recieved from some api and we don't want to modify the original data as there might be some extra information that will be used later
      const formattedWebinars = featuredWebinars.map((webinar)=> {
        return {
            title : webinar.title,
            description : webinar.description,
            link : '/' 
        }
      })

  return (
    <div className='py-12 bg-gray-900'>
        <div className='mx-10'>
             <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
            </div>
        </div>
        <div className="max-w-7xl mx-auto">
            <HoverEffect items={formattedWebinars}/>
        </div>
        <div className="mt-10 text-center">
            <Link href={"/courses"} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                View All courses
            </Link>
        </div>
    </div>
  )
}

export default Webinar