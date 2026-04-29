import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background border-b border-primary/20 z-50 px-4 py-4 lg:px-10 flex justify-between items-center">
      
      {/* Logo */}
      <div className="flex gap-2 items-baseline">
        <h1 className="text-h2 lg:text-h1 font-bold text-text">Port</h1>
        <h1 className="text-h2 lg:text-h1 font-bold bg-primary text-secondary rounded px-2">folio</h1>
      </div>

      {/* Nav desktop */}
      <nav className={`
        ${isMenuOpen ? 'flex' : 'hidden'} lg:flex
        absolute lg:relative top-full lg:top-0 left-0
        w-full lg:w-auto
        flex-col lg:flex-row
        bg-background lg:bg-transparent
        border-t border-primary/20 lg:border-none
        p-6 lg:p-0 gap-6 lg:gap-8
      `}>
        {[
          { label: 'Móvil',    href: 'tel:+50762868279' },
          { label: 'Correo',   href: 'mailto:gaelpereira3@gmail.com' },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gael-pereira-561a95222/' },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text/70 hover:text-primary transition-colors duration-200 whitespace-nowrap text-sm font-medium tracking-wide"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Hamburger */}
      <button
        className="lg:hidden flex flex-col justify-center gap-[6px] w-8 h-8 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block h-[2px] bg-primary rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block h-[2px] bg-primary rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
        <span className={`block h-[2px] bg-primary rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

    </header>
  )
}