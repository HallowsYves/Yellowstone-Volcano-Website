import { motion } from 'framer-motion'

const STATS = [
  '2.1 Million Years Active',
  '3 Major Eruptions',
  '10,000+ Thermal Features',
]

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Yellowstone Supervolcano — hero"
      className="grain relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-charcoal"
    >
      {/* ── Magma glow backdrop ─────────────────────── */}
      <div
        className="lava-glow absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: [
            'radial-gradient(ellipse 70% 55% at 28% 72%, rgba(180,50,0,0.28) 0%, transparent 68%)',
            'radial-gradient(ellipse 55% 65% at 72% 32%, rgba(210,80,0,0.18) 0%, transparent 65%)',
            'radial-gradient(ellipse 90% 45% at 50% 85%, rgba(139,26,26,0.22) 0%, transparent 55%)',
          ].join(', '),
        }}
      />

      {/* ── Horizon line ────────────────────────────── */}
      <div
        className="absolute inset-x-0 pointer-events-none"
        aria-hidden="true"
        style={{ top: '62%', height: '1px', background: 'rgba(255,215,0,0.08)' }}
      />

      {/* ── Content ─────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">

        {/* Eyebrow label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.4 }}
          className="font-sans text-[10px] md:text-xs font-light tracking-[0.55em] uppercase text-gold/70 mb-10"
        >
          Wyoming, USA &ensp;·&ensp; 44.43°N &ensp;110.67°W
        </motion.p>

        {/* Top rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rule-gold w-full max-w-xs mb-10 origin-center"
          aria-hidden="true"
        />

        {/* Main title */}
        <div className="overflow-hidden mb-3">
          <motion.h1
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.3, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif font-black italic leading-none text-white"
            style={{ fontSize: 'clamp(3.2rem, 13vw, 10rem)', letterSpacing: '-0.02em' }}
          >
            Yellowstone
          </motion.h1>
        </div>

        {/* Bottom rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="rule-gold w-full mb-8 origin-center"
          aria-hidden="true"
        />

        {/* Subtitle */}
        <div className="overflow-hidden mb-10">
          <motion.p
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-extralight text-white/75"
            style={{
              fontSize: 'clamp(0.65rem, 2.5vw, 1.1rem)',
              letterSpacing: '0.65em',
            }}
          >
            S U P E R V O L C A N O
          </motion.p>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.6 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-2"
          aria-label="Key statistics"
        >
          {STATS.map((stat, i) => (
            <span
              key={i}
              className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/35"
            >
              {stat}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll cue ──────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        aria-hidden="true"
      >
        <span className="font-sans text-[9px] tracking-[0.45em] uppercase text-white/30">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, rgba(255,215,0,0.5), transparent)' }}
        />
      </motion.div>

      {/* ── Bottom gradient fade ─────────────────────── */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'linear-gradient(to bottom, transparent, #1A1A1A)' }}
      />
    </section>
  )
}
