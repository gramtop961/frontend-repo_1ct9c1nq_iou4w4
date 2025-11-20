import { useEffect, useState } from 'react'

function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL
        const res = await fetch(`${base}/api/services`)
        if (!res.ok) throw new Error('Failed to load services')
        const data = await res.json()
        setServices(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="services" className="relative py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Services</h2>
        <p className="mt-3 text-slate-300 max-w-2xl">From advisory to delivery, we partner across strategy, architecture, and enablement to drive measurable business results.</p>

        {loading && <p className="text-slate-400 mt-8">Loading...</p>}
        {error && <p className="text-red-400 mt-8">{error}</p>}

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.id} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <h3 className="text-white font-semibold text-lg">{s.title}</h3>
              <p className="text-slate-300 mt-2 text-sm">{s.description}</p>
              <div className="mt-4">
                <div className="text-xs uppercase text-slate-400">For</div>
                <div className="mt-1 flex flex-wrap gap-2">
                  {s.audience.map((a) => (
                    <span key={a} className="px-2 py-1 rounded bg-blue-600/20 text-blue-200 text-xs border border-blue-500/20">{a}</span>
                  ))}
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {s.highlights.map((h, idx) => (
                  <li key={idx} className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 mt-0.5 text-green-400"><path d="M5 12l5 5L20 7"/></svg>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
