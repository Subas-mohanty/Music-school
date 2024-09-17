"use client";
import { Meteors } from '@/components/ui/meteors';
import React, { FormEvent, useState } from 'react'

function Page() {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`Submitted: Email - ${email}, Message - ${message}`);
      };

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
        {' '}
        {/* Ensure the container is relative */}
        {/* BackgroundBeams with adjusted z-index */}
        {/* Content with higher z-index */}
        <div className="max-w-2xl mx-auto p-4 relative z-10">
            {' '}
            {/* Add relative and z-10 to bring content to the front */}
            <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
            Contact Us
            </h1>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
            We&apos;re here to help with any questions about our courses,
            programs, or events. Reach out and let us know how we can assist you
            in your musical journey.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <input
                    type="email" 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                    required
                />
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message"
                    className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                    rows={5}
                    required
                />
                <button
                    type="submit"
                    className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                    Send Message
                </button>
            </form>
            <Meteors number={20} />
        </div>
    </div>
  )
}

export default Page