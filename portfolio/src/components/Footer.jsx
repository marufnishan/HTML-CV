import { ArrowUp } from 'lucide-react'

export default function Footer({ profile }) {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 transition hover:text-white">
          Back to top <ArrowUp className="size-4" />
        </a>
      </div>
    </footer>
  )
}
