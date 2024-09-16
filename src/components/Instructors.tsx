"use client";
import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from './ui/animated-tooltip';
import {instructors} from "../data/instructors.json";

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className=" flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-4xl lg:text-7xl font-bold text-center mb-8">Meet Our Instructors</h2>
            <p className="md:text-lg text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
            <div className="flex flex-row items-center justify-center mb-10">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors