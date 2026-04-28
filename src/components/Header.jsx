import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-secondary z-100 px-4 py-4 lg:px-10 flex justify-between items-center">
      <div className="flex gap-2">
        <h1 className="text-4xl lg:text-6xl">Port</h1>
        <h1 className="bg-primary rounded px-2 text-secondary text-4xl lg:text-6xl">folio</h1>
      </div>

      <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex absolute lg:relative top-full lg:top-0 left-0 w-full lg:w-auto lg:flex-row flex-col bg-secondary lg:bg-transparent p-4 lg:p-0 gap-8`}>
        <a href="tel:+50762868279" target="_blank" className="whitespace-nowrap">Movil</a>
        <a href="mailto:gaelpereira3@gmail.com" target="_blank" className="whitespace-nowrap">Correo</a>
        <a href="https://www.linkedin.com/in/gael-pereira-561a95222/" target="_blank" className="whitespace-nowrap">Linkedin</a>
      </nav>

      <button 
        className="lg:hidden flex flex-col gap-2 w-10 h-8 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className={`h-1 bg-gray-300 rounded transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`h-1 bg-gray-300 rounded transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`h-1 bg-gray-300 rounded transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
    </header>
  )
}