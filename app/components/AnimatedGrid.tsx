'use client'

export default function AnimatedGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Grid pattern definition */}
          <pattern
            id="grid"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke="rgba(30, 41, 59, 0.2)"
              strokeWidth="0.5"
            />
            {/* Circuit board-style corners */}
            <path
              d="M 0 0 L 8 0 L 8 8 L 0 8 Z"
              fill="none"
              stroke="rgba(59, 130, 246, 0.4)"
              strokeWidth="1"
            />
            <path
              d="M 92 0 L 100 0 L 100 8 L 92 8 Z"
              fill="none"
              stroke="rgba(6, 182, 212, 0.4)"
              strokeWidth="1"
            />
            <path
              d="M 0 92 L 8 92 L 8 100 L 0 100 Z"
              fill="none"
              stroke="rgba(34, 197, 94, 0.4)"
              strokeWidth="1"
            />
            <path
              d="M 92 92 L 100 92 L 100 100 L 92 100 Z"
              fill="none"
              stroke="rgba(59, 130, 246, 0.4)"
              strokeWidth="1"
            />
          </pattern>

          {/* Animated glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Pulse animation for accent lines */}
          <animate
            id="pulse1"
            attributeName="opacity"
            values="0.3;0.8;0.3"
            dur="3s"
            begin="0s"
            repeatCount="indefinite"
          />
          
          <animate
            id="pulse2"
            attributeName="opacity"
            values="0.2;0.6;0.2"
            dur="4s"
            begin="1s"
            repeatCount="indefinite"
          />
          
          <animate
            id="pulse3"
            attributeName="opacity"
            values="0.4;0.7;0.4"
            dur="5s"
            begin="2s"
            repeatCount="indefinite"
          />
        </defs>

        {/* Animated gradient overlay */}
        <rect width="100%" height="100%">
          <animate
            attributeName="fill"
            values="rgba(59, 130, 246, 0.02);rgba(6, 182, 212, 0.03);rgba(34, 197, 94, 0.02);rgba(59, 130, 246, 0.02)"
            dur="8s"
            repeatCount="indefinite"
          />
        </rect>

        {/* Main grid background */}
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Accent horizontal lines with pulsing glow */}
        <line
          x1="0"
          y1="120"
          x2="100%"
          y2="120"
          stroke="url(#horizontalGradient)"
          strokeWidth="1"
          filter="url(#glow)"
          opacity="0.6"
        >
          <animate
            attributeName="opacity"
            values="0.3;0.8;0.3"
            dur="6s"
            begin="0s"
            repeatCount="indefinite"
          />
        </line>

        <line
          x1="0"
          y1="300"
          x2="100%"
          y2="300"
          stroke="url(#horizontalGradient)"
          strokeWidth="1"
          filter="url(#glow)"
          opacity="0.4"
        >
          <animate
            attributeName="opacity"
            values="0.2;0.6;0.2"
            dur="7s"
            begin="2s"
            repeatCount="indefinite"
          />
        </line>

        <line
          x1="0"
          y1="480"
          x2="100%"
          y2="480"
          stroke="url(#horizontalGradient)"
          strokeWidth="1"
          filter="url(#glow)"
          opacity="0.5"
        >
          <animate
            attributeName="opacity"
            values="0.4;0.7;0.4"
            dur="5s"
            begin="1s"
            repeatCount="indefinite"
          />
        </line>

        <line
          x1="0"
          y1="660"
          x2="100%"
          y2="660"
          stroke="url(#horizontalGradient)"
          strokeWidth="1"
          filter="url(#glow)"
          opacity="0.3"
        >
          <animate
            attributeName="opacity"
            values="0.3;0.6;0.3"
            dur="8s"
            begin="3s"
            repeatCount="indefinite"
          />
        </line>

        {/* Accent vertical lines with pulsing glow */}
        <line
          x1="240"
          y1="0"
          x2="240"
          y2="100%"
          stroke="url(#verticalGradient)"
          strokeWidth="1"
          filter="url(#glow)"
          opacity="0.4"
        >
          <animate
            attributeName="opacity"
            values="0.2;0.7;0.2"
            dur="6s"
            begin="1.5s"
            repeatCount="indefinite"
          />
        </line>

        <line
          x1="480"
          y1="0"
          x2="480"
          y2="100%"
          stroke="url(#verticalGradient)"
          strokeWidth="1"
          filter="url(#glow)"
          opacity="0.5"
        >
          <animate
            attributeName="opacity"
            values="0.3;0.8;0.3"
            dur="7s"
            begin="0.5s"
            repeatCount="indefinite"
          />
        </line>

        <line
          x1="720"
          y1="0"
          x2="720"
          y2="100%"
          stroke="url(#verticalGradient)"
          strokeWidth="1"
          filter="url(#glow)"
          opacity="0.3"
        >
          <animate
            attributeName="opacity"
            values="0.4;0.6;0.4"
            dur="5s"
            begin="2.5s"
            repeatCount="indefinite"
          />
        </line>

        <line
          x1="960"
          y1="0"
          x2="960"
          y2="100%"
          stroke="url(#verticalGradient)"
          strokeWidth="1"
          filter="url(#glow)"
          opacity="0.4"
        >
          <animate
            attributeName="opacity"
            values="0.2;0.7;0.2"
            dur="8s"
            begin="3.5s"
            repeatCount="indefinite"
          />
        </line>

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="horizontalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
            <stop offset="20%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="50%" stopColor="rgba(34, 197, 94, 0.4)" />
            <stop offset="80%" stopColor="rgba(6, 182, 212, 0.3)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </linearGradient>

          <linearGradient id="verticalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
            <stop offset="20%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="50%" stopColor="rgba(34, 197, 94, 0.4)" />
            <stop offset="80%" stopColor="rgba(6, 182, 212, 0.3)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </linearGradient>
        </defs>

        {/* Floating accent dots */}
        <circle
          cx="180"
          cy="180"
          r="1"
          fill="rgba(59, 130, 246, 0.6)"
          filter="url(#glow)"
        >
          <animate
            attributeName="opacity"
            values="0.2;0.8;0.2"
            dur="4s"
            begin="0s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="1;2;1"
            dur="4s"
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>

        <circle
          cx="420"
          cy="360"
          r="1"
          fill="rgba(34, 197, 94, 0.6)"
          filter="url(#glow)"
        >
          <animate
            attributeName="opacity"
            values="0.3;0.7;0.3"
            dur="5s"
            begin="1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="1;2;1"
            dur="5s"
            begin="1s"
            repeatCount="indefinite"
          />
        </circle>

        <circle
          cx="780"
          cy="240"
          r="1"
          fill="rgba(6, 182, 212, 0.6)"
          filter="url(#glow)"
        >
          <animate
            attributeName="opacity"
            values="0.2;0.6;0.2"
            dur="6s"
            begin="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="1;2;1"
            dur="6s"
            begin="2s"
            repeatCount="indefinite"
          />
        </circle>

        <circle
          cx="1020"
          cy="540"
          r="1"
          fill="rgba(59, 130, 246, 0.5)"
          filter="url(#glow)"
        >
          <animate
            attributeName="opacity"
            values="0.3;0.8;0.3"
            dur="7s"
            begin="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="1;2;1"
            dur="7s"
            begin="3s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  )
}
