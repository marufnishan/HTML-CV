import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ name }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled || open ? 'border-b border-white/8 bg-ink/80 backdrop-blur-lg' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-bold text-white">
          <span className="grid size-8 place-items-center rounded-lg bg-linear-to-br from-primary to-accent text-sm text-ink">
            MN
          </span>
          {name}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  active === link.id ? 'bg-white/6 text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hire-btn group relative hidden items-center gap-1.5 overflow-hidden rounded-lg px-4 py-2 text-sm font-semibold text-ink transition hover:scale-105 md:inline-flex"
        >
          Hire me
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </a>

        <button
          type="button"
          className="rounded-md p-2 text-zinc-200 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <ul className="px-4 pb-4 md:hidden">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="hire-btn relative flex items-center justify-center gap-1.5 overflow-hidden rounded-lg px-4 py-2.5 text-sm font-semibold text-ink"
            >
              Hire me <ArrowRight className="size-4" />
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
