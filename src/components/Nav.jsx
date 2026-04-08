import { motion, useScroll, useTransform } from 'framer-motion'

const links = [
  { label: 'Introduction', href: '#introduction' },
  { label: 'Eruption History', href: '#history' },
  { label: 'Current Activity', href: '#activity' },
]

export default function Nav() {
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: `rgba(26,26,26,${bgOpacity})` }}
    >
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-x-0 bottom-0 h-px bg-gold/20"
      />
      <nav
        className="max-w-7xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between"
        aria-label="Primary navigation"
      >
        {/* Logo mark */}
        <a
          href="#hero"
          className="font-serif font-bold italic text-gold text-sm tracking-widest uppercase select-none"
          aria-label="Yellowstone Supervolcano — back to top"
        >
          YVO
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="font-sans text-[11px] font-medium tracking-[0.25em] uppercase text-white/50 hover:text-gold transition-colors duration-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}
