import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'results', label: 'Results' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/flame-icon.svg" alt="Logo" className="w-8 h-8" />
          <span className="text-white font-semibold tracking-tight">Flames Consulting</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((n) => (
            <button key={n.id} onClick={() => scrollTo(n.id)} className="text-slate-300 hover:text-white transition-colors">
              {n.label}
            </button>
          ))}
          <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}} className="ml-4 inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-500 transition-colors">Get a quote</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 text-slate-200">
          <span className="sr-only">Toggle menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-slate-900/90">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="block w-full text-left text-slate-300 hover:text-white py-2">
                {n.label}
              </button>
            ))}
            <button onClick={() => scrollTo('contact')} className="mt-2 inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-500">Get a quote</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
