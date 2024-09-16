import Link from 'next/link'

// for 404 not found error pages

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      {/* <p className="text-lg mb-8">The page you are looking for does not exist.</p> */}
      <p className="text-lg mb-8">This page will be added soon.</p>
      <Link href="/">
        <div className="text-blue-600 hover:underline">Go back to the homepage</div>
      </Link>
    </div>
  )
}