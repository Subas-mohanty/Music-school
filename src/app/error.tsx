// app/error.js
'use client'; // Error components must be Client components

// for 500 errors

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>500 - Something went wrong</h1>
      <p>Please try again later.</p>
      <br />
      <Link href="/">
        <a>Go back to Home</a>
      </Link>
    </div>
  );
}
