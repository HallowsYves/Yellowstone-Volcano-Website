import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-surface" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0"
        >
          {/* Brand column */}
          <div>
            <p className="font-serif font-bold italic text-gold text-xl mb-3">
              Yellowstone
            </p>
            <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-white/25 font-light">
              Supervolcano &mdash; Wyoming, USA
            </p>
          </div>

          {/* Navigation column */}
          <div className="md:text-center">
            <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-white/20 mb-4">
              Sections
            </p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2" role="list">
                {[
                  ['Introduction', '#introduction'],
                  ['Eruption History', '#history'],
                  ['Current Activity', '#activity'],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="font-sans text-xs text-white/35 hover:text-gold transition-colors duration-200 font-light"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Credit column */}
          <div className="md:text-right">
            <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-white/20 mb-4">
              Data Source
            </p>
            <p className="font-sans text-xs text-white/35 font-light leading-relaxed">
              Yellowstone Volcano Observatory<br />
              (YVO) — United States Geological<br />
              Survey (USGS)
            </p>
          </div>
        </motion.div>

        {/* Bottom rule + copyright */}
        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/15 font-light">
            Educational resource — not affiliated with USGS or NPS
          </p>
          <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-white/15 font-light">
            &copy; {new Date().getFullYear()} Yellowstone Supervolcano Project
          </p>
        </div>
      </div>
    </footer>
  )
}
