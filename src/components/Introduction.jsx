import { motion } from 'framer-motion'
import CaldraMap from './CaldraMap'

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

export default function Introduction() {
  return (
    <section
      id="introduction"
      aria-labelledby="intro-heading"
      className="relative bg-charcoal overflow-hidden"
    >
      {/* ── Section label bar ──────────────────────── */}
      <div className="border-t border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex items-center gap-5">
          <span className="font-sans text-[9px] tracking-[0.45em] uppercase text-gold/60">
            01
          </span>
          <div className="h-px flex-1 bg-white/8" aria-hidden="true" />
          <span
            id="intro-heading"
            className="font-sans text-[9px] tracking-[0.45em] uppercase text-white/35"
          >
            Introduction
          </span>
        </div>
      </div>

      {/* ── Main editorial block ─────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-16 items-start">

          {/* Left: oversized pull quote */}
          <div className="lg:col-span-5 mb-12 lg:mb-0">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              custom={0}
            >
              <div className="rule-gold w-12 mb-8" aria-hidden="true" />
              <blockquote>
                <p
                  className="font-serif font-light italic text-white leading-tight mb-8"
                  style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)' }}
                >
                  "A restless giant — shaped by forces deep beneath the continent."
                </p>
              </blockquote>
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold/50">
                Yellowstone Volcano Observatory
              </p>
            </motion.div>
          </div>

          {/* Right: body copy */}
          <div className="lg:col-span-7">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              custom={0.15}
              className="space-y-6"
            >
              <p
                className="font-sans font-light text-white/80 leading-relaxed"
                style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
              >
                Yellowstone is a caldera-forming supervolcano located in Wyoming,
                fueled by a deep mantle plume. It is part of a volcanic track
                created as the North American plate moves southwest over a
                stationary hotspot in Earth's mantle.
              </p>

              <div className="rule-gold w-full opacity-10" aria-hidden="true" />

              {/* Inline factoids */}
              <div className="grid grid-cols-2 gap-px border border-white/8">
                {[
                  { value: '~640,000', label: 'Years since last eruption' },
                  { value: '8,000 km²', label: 'Park area covered' },
                  { value: '~8 km', label: 'Magma chamber depth' },
                  { value: '16 km/yr', label: 'Hotspot plate motion' },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="px-5 py-5 border border-white/8"
                    style={{ background: '#111' }}
                  >
                    <p
                      className="font-serif font-bold text-gold leading-none mb-2"
                      style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)' }}
                    >
                      {value}
                    </p>
                    <p className="font-sans text-[10px] tracking-widest uppercase text-white/40 leading-snug font-light">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Caldera map ──────────────────────────── */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          custom={0.1}
          className="mt-20"
        >
          <div className="flex items-end justify-between mb-5">
            <div>
              <p className="font-sans text-[9px] tracking-[0.45em] uppercase text-gold/55 mb-1">
                Caldera Schematic
              </p>
              <p className="font-serif italic text-white/60 text-sm">
                Interactive overview of key thermal features
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-white/20">
              <div className="w-3 h-3 border border-gold/30" />
              <span className="font-sans text-[9px] tracking-widest uppercase">
                Click a hotspot
              </span>
            </div>
          </div>
          <CaldraMap />
        </motion.div>
      </div>
    </section>
  )
}
