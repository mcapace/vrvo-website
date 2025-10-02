'use client'

export default function NoiseOverlay() {
  return (
    <>
      {/* CSS Noise Pattern */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] opacity-[0.025] mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          animation: 'noise 0.15s infinite linear'
        }}
      />
      
      {/* Secondary noise layer for depth */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter2)'/%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px',
          animation: 'noiseReverse 0.3s infinite linear'
        }}
      />
      
      {/* CSS Animation */}
      <style jsx>{`
        @keyframes noise {
          0% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -5%); }
          20% { transform: translate(-10%, 5%); }
          30% { transform: translate(5%, -10%); }
          40% { transform: translate(-5%, 15%); }
          50% { transform: translate(-10%, 5%); }
          60% { transform: translate(15%, 0%); }
          70% { transform: translate(0%, 15%); }
          80% { transform: translate(-15%, 10%); }
          90% { transform: translate(10%, 5%); }
          100% { transform: translate(5%, 0%); }
        }
        
        @keyframes noiseReverse {
          0% { transform: translate(0, 0); }
          10% { transform: translate(3%, 3%); }
          20% { transform: translate(8%, -3%); }
          30% { transform: translate(-3%, 8%); }
          40% { transform: translate(3%, -12%); }
          50% { transform: translate(8%, -3%); }
          60% { transform: translate(-12%, 0%); }
          70% { transform: translate(0%, -12%); }
          80% { transform: translate(12%, -8%); }
          90% { transform: translate(-8%, -3%); }
          100% { transform: translate(-3%, 0%); }
        }
      `}</style>
    </>
  )
}
