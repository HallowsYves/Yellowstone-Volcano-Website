import { motion } from 'framer-motion'

const ERUPTIONS = [
  {
    index: '01',
    name: 'Huckleberry Ridge',
    age: '2.1 Ma',
    ageLabel: '2,100,000 years ago',
    volume: 2450,
    unit: 'km³',
    description:
      'The largest eruption in Yellowstone\'s history deposited 2,450 cubic kilometres of ash across the American continent — enough to bury all of Texas under several metres of volcanic material.',
    colorClass: 'bg-gold',
    textColor: 'text-gold',
  },
  {
    index: '02',
    name: 'Mesa Falls',
    age: '1.3 Ma',
    ageLabel: '1,300,000 years ago',
    volume: 280,
    unit: 'km³',
    description:
      'A smaller but still colossal event, Mesa Falls deposited 280 cubic kilometres of ash and formed the Henrys Fork Caldera in what is now eastern Idaho.',
    colorClass: 'bg-lava',
    textColor: 'text-lava',
  },
  {
    index: '03',
    name: 'Lava Creek',
    age: '640 Ka',
    ageLabel: '640,000 years ago',
    volume: 1000,
    unit: 'km³',
    description:
      'The most recent supereruption formed the current Yellowstone Caldera, ejecting 1,000 cubic kilometres of material. Ash fallout has been detected as far as the Gulf of Mexico.',
    colorClass: 'bg-ember',
    textColor: 'text-amber-500',
  },
]

const MAX_VOLUME = 2450

export default function EruptionHistory() {
  return (
    <section
      id="history"
      aria-labelledby="history-heading"
      className="relative"
      style={{ background: '#111111' }}
    >
      {/* ── Section label bar ──────────────────────── */}
      <div className="border-t border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex items-center gap-5">
          <span className="font-sans text-[9px] tracking-[0.45em] uppercase text-gold/60">
            02
          </span>
          <div className="h-px flex-1 bg-white/8" aria-hidden="true" />
          <span
            id="history-heading"
            className="font-sans text-[9px] tracking-[0.45em] uppercase text-white/35"
          >
            Eruption History
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-20">

        {/* ── Title block ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <div>
              <p className="font-sans text-[9px] tracking-[0.45em] uppercase text-gold/55 mb-4">
                2.1 Million Years of Activity
              </p>
              <h2
                className="font-serif font-black italic text-white leading-none"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
              >
                Three<br />Supereruptions
              </h2>
            </div>
            <div>
              <div className="rule-gold w-full mb-6 opacity-20" aria-hidden="true" />
              <p className="font-sans text-white/55 leading-relaxed font-light text-sm">
                The Yellowstone system has produced three cataclysmic eruptions over the past
                2.1 million years. Each event released enough material to alter global climate
                and reshape the landscape of the American West.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Eruption timeline ─────────────────────── */}
        <div className="space-y-0">
          {ERUPTIONS.map((eruption, i) => (
            <EruptionRow key={eruption.index} eruption={eruption} delay={i * 0.12} />
          ))}
        </div>

        {/* ── Volume scale legend ──────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 pt-8 border-t border-white/8"
        >
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-sans text-[9px] tracking-[0.35em] uppercase text-white/25">
              Bar width scaled to ash volume (km³)
            </span>
            <div className="h-px flex-1 bg-white/8" aria-hidden="true" />
            <span className="font-sans text-[9px] tracking-[0.35em] uppercase text-white/25">
              Max: 2,450 km³
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function EruptionRow({ eruption, delay }) {
  const barPct = (eruption.volume / MAX_VOLUME) * 100

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      className="group border-t border-white/8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
      aria-label={`Eruption event: ${eruption.name}`}
    >
      {/* Index + Date column */}
      <div className="lg:col-span-2 flex lg:flex-col gap-4 lg:gap-3">
        <span className="font-sans text-[9px] tracking-[0.45em] uppercase text-white/25">
          {eruption.index}
        </span>
        <div>
          <p
            className={`font-serif font-black italic ${eruption.textColor} leading-none`}
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            {eruption.age}
          </p>
          <p className="font-sans text-[9px] tracking-widest uppercase text-white/25 mt-1 font-light">
            {eruption.ageLabel}
          </p>
        </div>
      </div>

      {/* Name + description + bar */}
      <div className="lg:col-span-10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-8">
          <h3
            className="font-serif font-bold text-white"
            style={{ fontSize: 'clamp(1.3rem, 2.8vw, 2.2rem)' }}
          >
            {eruption.name}
          </h3>
          <span
            className={`font-serif font-bold italic ${eruption.textColor}`}
            style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}
          >
            {eruption.volume.toLocaleString()} {eruption.unit}
          </span>
        </div>

        <p className="font-sans text-white/55 font-light leading-relaxed text-sm max-w-2xl">
          {eruption.description}
        </p>

        {/* Volume bar */}
        <div className="space-y-2">
          <div className="h-px bg-white/8 w-full relative overflow-hidden" aria-hidden="true">
            <motion.div
              className={`absolute left-0 top-0 h-full ${eruption.colorClass}`}
              initial={{ width: 0 }}
              whileInView={{ width: `${barPct}%` }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: delay + 0.3 }}
            />
          </div>
          {/* Thicker bar */}
          <div
            className="h-1.5 bg-white/5 relative overflow-hidden"
            aria-label={`Volume: ${eruption.volume} km³ — ${barPct.toFixed(0)}% of maximum`}
          >
            <motion.div
              className={`absolute left-0 top-0 h-full ${eruption.colorClass} opacity-70`}
              initial={{ width: 0 }}
              whileInView={{ width: `${barPct}%` }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: delay + 0.2 }}
            />
          </div>
        </div>
      </div>
    </motion.article>
  )
}
