import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Contact />
        <footer className="border-t border-white/5 py-10 text-center text-slate-400">
          © {new Date().getFullYear()} Flames Consulting — Outcome-driven architecture, delivery, and advisory
        </footer>
      </main>
    </div>
  )
}

export default App
