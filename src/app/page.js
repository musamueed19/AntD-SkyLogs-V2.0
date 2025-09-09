import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <main>
      HomePage
<Link href={'/dashboard'}>Go to Dashboard Page</Link>
    </main>
  )
}

export default HomePage