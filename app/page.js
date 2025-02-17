'use client'
import dynamic from 'next/dynamic'

// Dynamically import the TallyEmbed component with SSR disabled
const TallyEmbed = dynamic(() => import('./components/TallyEmbed'), {
  ssr: false,
})

export default function Home() {
  return (
    <main style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      margin: 0,
      padding: 0,
      position: 'relative'
    }}>
      <TallyEmbed />
      <div className='absolute bottom-0 right-0 w-full h-12 sm:h-16  md:h-20 bg-white'>
      </div>
    </main>
  );
}
