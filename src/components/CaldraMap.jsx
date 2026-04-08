import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const HOTSPOTS = [
  {
    id: 'old-faithful',
    x: 310,
    y: 390,
    label: 'Old Faithful',
    detail: 'Erupts every ~90 minutes to a height of 32–56 m. One of ~500 geysers in the park.',
  },
  {
    id: 'norris',
    x: 255,
    y: 215,
    label: 'Norris Geyser Basin',
    detail: 'The hottest and most dynamic hydrothermal area. Ground temperatures can exceed 200°C.',
  },
  {
    id: 'mammoth',
    x: 168,
    y: 112,
    label: 'Mammoth Hot Springs',
    detail: 'Terraced travertine formations built from 2 tons of calcium carbonate deposited daily.',
  },
  {
    id: 'midway',
    x: 272,
    y: 332,
    label: 'Midway Geyser Basin',
    detail: 'Home to Grand Prismatic Spring — the largest hot spring in the US at 91 m wide.',
  },
  {
    id: 'lake',
    x: 515,
    y: 400,
    label: 'Yellowstone Lake',
    detail: 'North America\'s largest high-elevation lake. Its floor contains hydrothermal vents.',
  },
]

// Approximate caldera polygon (top-down schematic, not geographically precise)
const CALDERA_POINTS =
  '195,360 230,405 310,430 420,435 510,420 580,380 610,310 595,230 555,175 470,150 370,145 275,162 215,210 188,280'

export default function CaldraMap() {
  const [active, setActive] = useState(null)

  const activeSpot = HOTSPOTS.find((h) => h.id === active)

  return (
    <figure className="relative w-full" aria-label="Schematic map of the Yellowstone Caldera">
      {/* Map container */}
      <div className="relative w-full overflow-hidden border border-white/10" style={{ background: '#0D0D0D' }}>
        <svg
          viewBox="0 0 780 520"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          aria-hidden="true"
          role="img"
        >
          {/* ── Background grid (topo feel) ── */}
          <defs>
            <pattern id="topo-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
            </pattern>
            <radialGradient id="magma-core" cx="50%" cy="110%" r="70%">
              <stop offset="0%" stopColor="rgba(180,50,0,0.25)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <filter id="glow-filter">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect width="780" height="520" fill="url(#topo-grid)" />
          <rect width="780" height="520" fill="url(#magma-core)" />

          {/* Park outer boundary */}
          <rect
            x="30" y="25" width="720" height="470"
            fill="none"
            stroke="rgba(255,215,0,0.12)"
            strokeWidth="1"
            strokeDasharray="6 4"
          />

          {/* Topo contour rings (schematic) */}
          {[1.05, 1.1, 1.15].map((scale, i) => (
            <polygon
              key={i}
              points={CALDERA_POINTS}
              fill="none"
              stroke={`rgba(255,215,0,${0.04 + i * 0.02})`}
              strokeWidth="1"
              transform={`scale(${scale}) translate(${(780 * (1 - scale)) / 2 / scale}, ${(520 * (1 - scale)) / 2 / scale})`}
            />
          ))}

          {/* Caldera fill */}
          <polygon
            points={CALDERA_POINTS}
            fill="rgba(139,26,26,0.08)"
            stroke="rgba(255,215,0,0.35)"
            strokeWidth="1.5"
          />

          {/* Caldera label */}
          <text
            x="390" y="295"
            textAnchor="middle"
            fill="rgba(255,215,0,0.22)"
            fontFamily="'Noto Serif', serif"
            fontStyle="italic"
            fontSize="13"
            letterSpacing="3"
          >
            CALDERA RIM
          </text>

          {/* North indicator */}
          <g transform="translate(720, 60)">
            <line x1="0" y1="18" x2="0" y2="-2" stroke="rgba(255,215,0,0.5)" strokeWidth="1" />
            <polygon points="0,-8 -4,4 0,0 4,4" fill="rgba(255,215,0,0.7)" />
            <text
              x="0" y="28"
              textAnchor="middle"
              fill="rgba(255,255,255,0.35)"
              fontFamily="'Public Sans', sans-serif"
              fontSize="8"
              letterSpacing="2"
            >
              N
            </text>
          </g>

          {/* Scale bar */}
          <g transform="translate(50, 472)">
            <line x1="0" y1="0" x2="80" y2="0" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="0" y1="-4" x2="0" y2="4" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="80" y1="-4" x2="80" y2="4" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <text
              x="40" y="-7"
              textAnchor="middle"
              fill="rgba(255,255,255,0.3)"
              fontFamily="'Public Sans', sans-serif"
              fontSize="7"
              letterSpacing="1.5"
            >
              ~30 KM
            </text>
          </g>

          {/* Legend: Park boundary */}
          <g transform="translate(50, 440)">
            <line x1="0" y1="0" x2="20" y2="0" stroke="rgba(255,215,0,0.35)" strokeWidth="1" strokeDasharray="5 3" />
            <text x="26" y="4" fill="rgba(255,255,255,0.3)" fontFamily="'Public Sans', sans-serif" fontSize="7" letterSpacing="1">
              PARK BOUNDARY
            </text>
            <polygon points="0,14 20,14" fill="none" />
            <line x1="0" y1="14" x2="20" y2="14" stroke="rgba(255,215,0,0.5)" strokeWidth="1.5" />
            <text x="26" y="18" fill="rgba(255,255,255,0.3)" fontFamily="'Public Sans', sans-serif" fontSize="7" letterSpacing="1">
              CALDERA RIM
            </text>
          </g>

          {/* Hotspots */}
          {HOTSPOTS.map((spot) => (
            <g
              key={spot.id}
              transform={`translate(${spot.x}, ${spot.y})`}
              className="cursor-pointer"
              onClick={() => setActive(active === spot.id ? null : spot.id)}
              onMouseEnter={() => setActive(spot.id)}
              onMouseLeave={() => setActive(null)}
              role="button"
              aria-label={`${spot.label}: ${spot.detail}`}
            >
              {/* Pulse ring */}
              {active === spot.id && (
                <circle r="14" fill="none" stroke="rgba(255,215,0,0.4)" strokeWidth="1">
                  <animate attributeName="r" values="8;18;8" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
                </circle>
              )}
              {/* Dot */}
              <circle
                r={active === spot.id ? 6 : 4}
                fill={active === spot.id ? '#FFD700' : 'rgba(255,215,0,0.65)'}
                filter={active === spot.id ? 'url(#glow-filter)' : undefined}
                style={{ transition: 'r 0.2s, fill 0.2s' }}
              />
              {/* Label */}
              <text
                x="10" y="4"
                fill={active === spot.id ? '#FFD700' : 'rgba(255,255,255,0.55)'}
                fontFamily="'Public Sans', sans-serif"
                fontSize="8.5"
                letterSpacing="1.2"
                fontWeight={active === spot.id ? '500' : '300'}
                style={{ transition: 'fill 0.2s' }}
              >
                {spot.label.toUpperCase()}
              </text>
            </g>
          ))}
        </svg>

        {/* Tooltip / Info panel */}
        <AnimatePresence>
          {activeSpot && (
            <motion.div
              key={activeSpot.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.25 }}
              className="absolute bottom-4 left-4 right-4 md:left-auto md:right-6 md:w-72 border border-gold/30 p-4"
              style={{ background: 'rgba(17,11,5,0.92)', backdropFilter: 'blur(8px)' }}
              role="tooltip"
            >
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/60 mb-1">
                Hydrothermal Feature
              </p>
              <p className="font-serif italic text-white text-base mb-2 leading-snug">
                {activeSpot.label}
              </p>
              <p className="font-sans text-white/60 text-xs leading-relaxed font-light">
                {activeSpot.detail}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hint */}
        {!active && (
          <p className="absolute bottom-4 right-5 font-sans text-[9px] tracking-[0.25em] uppercase text-white/20 pointer-events-none">
            Hover a feature
          </p>
        )}
      </div>

      <figcaption className="mt-3 font-sans text-[10px] tracking-widest uppercase text-white/25 text-right">
        Schematic — Yellowstone Caldera, Wyoming
      </figcaption>
    </figure>
  )
}
