import { motion } from 'framer-motion'

// Pre-computed values for thermal bubble animation (stable across renders)
const THERMAL_HEIGHTS = [22, 14, 30, 18, 36, 24, 12, 28, 16, 32, 20, 26]
const THERMAL_DURATIONS = [2.1, 1.8, 2.6, 1.6, 2.4, 2.0, 1.9, 2.3, 1.7, 2.5, 2.2, 1.5]

// Seismograph path: a repeating waveform pattern
const SEISMO_D =
  'M0,25 L20,25 L28,15 L34,35 L40,8 L46,42 L52,25 L60,22 L66,30 L72,25 L85,25 L92,12 L98,38 L104,20 L110,30 L116,25 L130,25 L137,16 L143,34 L149,10 L155,40 L161,25 L170,23 L176,28 L180,25 L200,25'

const PANELS = [
  {
    id: 'seismicity',
    index: '01',
    category: 'Seismicity',
    value: '1,500 – 3,000',
    unit: 'earthquakes per year',
    detail:
      'Yellowstone records thousands of small earthquakes annually — most imperceptible to humans. Swarms are common and closely monitored by the YVO seismic network.',
    visual: 'seismo',
  },
  {
    id: 'hydrothermal',
    index: '02',
    category: 'Hydrothermal',
    value: '10,000+',
    unit: 'thermal features',
    detail:
      'Geysers, hot springs, mud pots, and fumaroles make Yellowstone home to more than half the world\'s hydrothermal features. The system circulates 2,000 litres of boiling water per second.',
    visual: 'thermal',
  },
  {
    id: 'status',
    index: '03',
    category: 'Alert Level',
    value: 'NORMAL',
    unit: 'color code: green',
    detail:
      'As of early 2026, the Yellowstone Volcano Observatory reports no unusual activity. The background level of seismicity, ground deformation, and hydrothermal output remains within normal ranges.',
    visual: 'status',
  },
]

export default function CurrentActivity() {
  return (
    <section
      id="activity"
      aria-labelledby="activity-heading"
      className="relative bg-charcoal"
    >
      {/* ── Section label bar ─────────────────────── */}
      <div className="border-t border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex items-center gap-5">
          <span className="font-sans text-[9px] tracking-[0.45em] uppercase text-gold/60">
            03
          </span>
          <div className="h-px flex-1 bg-white/8" aria-hidden="true" />
          <span
            id="activity-heading"
            className="font-sans text-[9px] tracking-[0.45em] uppercase text-white/35"
          >
            Current Activity
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
                Yellowstone Volcano Observatory
              </p>
              <h2
                className="font-serif font-black italic text-white leading-none"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
              >
                A Restless<br />System
              </h2>
            </div>
            <div>
              <div className="rule-gold w-full mb-6 opacity-20" aria-hidden="true" />
              <p className="font-sans text-white/55 leading-relaxed font-light text-sm">
                Yellowstone is continuously monitored around the clock by a network
                of seismometers, GPS stations, and gas sensors. The system is
                active but not exhibiting signs of an imminent eruption.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Monitoring panels ─────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-white/8">
          {PANELS.map((panel, i) => (
            <MonitorPanel key={panel.id} panel={panel} delay={i * 0.12} />
          ))}
        </div>

        {/* ── YVO note ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="mt-12 pt-8 border-t border-white/8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8"
        >
          <div className="h-px hidden md:block flex-1 bg-white/8" aria-hidden="true" />
          <p className="font-sans text-[10px] tracking-widest uppercase text-white/20">
            Data: Yellowstone Volcano Observatory (YVO) — USGS
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function MonitorPanel({ panel, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      className="p-8 border border-white/8 flex flex-col gap-6"
      style={{ background: '#0F0F0F' }}
      aria-labelledby={`panel-${panel.id}-heading`}
    >
      {/* Index + Category */}
      <div className="flex items-center justify-between">
        <span className="font-sans text-[9px] tracking-[0.45em] uppercase text-white/20">
          {panel.index}
        </span>
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/50">
          {panel.category}
        </span>
      </div>

      {/* Visual indicator */}
      <VisualIndicator type={panel.visual} />

      {/* Value */}
      <div>
        <p
          id={`panel-${panel.id}-heading`}
          className="font-serif font-bold text-white leading-none mb-2"
          style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
        >
          {panel.value}
        </p>
        <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/35 font-light">
          {panel.unit}
        </p>
      </div>

      {/* Rule */}
      <div className="rule-gold opacity-15" aria-hidden="true" />

      {/* Detail */}
      <p className="font-sans text-white/50 text-xs leading-relaxed font-light">
        {panel.detail}
      </p>
    </motion.div>
  )
}

function VisualIndicator({ type }) {
  if (type === 'seismo') {
    return (
      <div
        className="w-full overflow-hidden border border-white/8"
        style={{ height: '52px', background: '#0A0A0A' }}
        aria-label="Seismograph waveform animation"
        role="img"
      >
        <svg viewBox="0 0 200 50" className="w-full h-full" preserveAspectRatio="none">
          {/* Background grid */}
          <line x1="0" y1="25" x2="200" y2="25" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
          <line x1="100" y1="0" x2="100" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />

          {/* Animated seismograph line */}
          <motion.path
            d={SEISMO_D}
            fill="none"
            stroke="#FFD700"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0.6 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              pathLength: { duration: 2.5, ease: 'easeInOut' },
              opacity: { duration: 0.5 },
            }}
          />

          {/* Scrolling dashes */}
          <path
            d={SEISMO_D}
            fill="none"
            stroke="rgba(255,215,0,0.15)"
            strokeWidth="8"
            strokeLinecap="round"
            className="seismo-path"
          />
        </svg>
      </div>
    )
  }

  if (type === 'thermal') {
    return (
      <div
        className="w-full border border-white/8 flex items-center justify-center gap-3"
        style={{ height: '52px', background: '#0A0A0A' }}
        aria-label="Hydrothermal feature count visualization"
        role="img"
      >
        {/* Bubble columns representing thermal features */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="bg-amber-500/40"
            style={{ width: 3, borderRadius: 0 }}
            initial={{ height: 4 }}
            whileInView={{
              height: [4, THERMAL_HEIGHTS[i % THERMAL_HEIGHTS.length], 4],
            }}
            viewport={{ once: false }}
            transition={{
              duration: THERMAL_DURATIONS[i % THERMAL_DURATIONS.length],
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.12,
            }}
          />
        ))}
      </div>
    )
  }

  if (type === 'status') {
    return (
      <div
        className="w-full border border-white/8 flex items-center justify-center"
        style={{ height: '52px', background: '#0A0A0A' }}
        aria-label="Alert status: Normal / Green"
        role="img"
      >
        <div className="flex items-center gap-4">
          {/* Pulsing ring */}
          <span className="relative flex h-5 w-5 items-center justify-center flex-shrink-0">
            <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
          </span>
          <div>
            <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-green-400/80 font-medium">
              Normal / Green
            </p>
            <p className="font-sans text-[8px] tracking-widest uppercase text-white/25 mt-0.5">
              As of 2026
            </p>
          </div>
        </div>
      </div>
    )
  }

  return null
}
