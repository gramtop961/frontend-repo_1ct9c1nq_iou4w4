import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', role: '', phone: '', services: [], budget_range: '', message: '', source: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState(null)

  const serviceOptions = [
    'Architecture', 'Delivery Acceleration', 'Technology Advisory', 'AI Enablement'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const toggleService = (s) => {
    setForm((f) => {
      const exists = f.services.includes(s)
      return { ...f, services: exists ? f.services.filter(x => x !== s) : [...f.services, s] }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus(null)
    try {
      const base = import.meta.env.VITE_BACKEND_URL
      const res = await fetch(`${base}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Submission failed')
      setStatus({ type: 'success', message: 'Thanks! We will be in touch within 1 business day.' })
      setForm({ name: '', email: '', company: '', role: '', phone: '', services: [], budget_range: '', message: '', source: '' })
    } catch (e) {
      setStatus({ type: 'error', message: e.message })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Tell us about your goals</h2>
            <p className="mt-3 text-slate-300">Share a few details and we’ll propose a plan, timeline, and pricing. No obligation.</p>
            <div className="mt-6 space-y-3 text-slate-300 text-sm">
              <div className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-green-400"></span> Typical kickoff in 1-2 weeks</div>
              <div className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-green-400"></span> Flexible models: fixed-fee, sprint-based, or retainer</div>
              <div className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-green-400"></span> Remote-first, global coverage</div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300">Name</label>
                <input required name="name" value={form.name} onChange={handleChange} className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white"/>
              </div>
              <div>
                <label className="block text-sm text-slate-300">Email</label>
                <input required type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white"/>
              </div>
              <div>
                <label className="block text-sm text-slate-300">Company</label>
                <input name="company" value={form.company} onChange={handleChange} className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white"/>
              </div>
              <div>
                <label className="block text-sm text-slate-300">Role</label>
                <input name="role" value={form.role} onChange={handleChange} className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white"/>
              </div>
              <div>
                <label className="block text-sm text-slate-300">Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white"/>
              </div>
              <div>
                <label className="block text-sm text-slate-300">Budget</label>
                <select name="budget_range" value={form.budget_range} onChange={handleChange} className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white">
                  <option value="">Select</option>
                  <option value="< $10k">&lt; $10k</option>
                  <option value="$10k - $50k">$10k - $50k</option>
                  <option value="$50k - $150k">$50k - $150k</option>
                  <option value="> $150k">&gt; $150k</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <div className="text-sm text-slate-300">Services</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {serviceOptions.map((s) => (
                  <button type="button" key={s} onClick={() => toggleService(s)} className={`px-3 py-1.5 rounded-lg border text-sm ${form.services.includes(s) ? 'bg-blue-600 text-white border-blue-500' : 'bg-white/10 text-white border-white/10'}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm text-slate-300">Message</label>
              <textarea required name="message" rows="5" value={form.message} onChange={handleChange} className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white" />
            </div>

            <div className="mt-4">
              <label className="block text-sm text-slate-300">How did you hear about us?</label>
              <input name="source" value={form.source} onChange={handleChange} className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white"/>
            </div>

            {status && (
              <div className={`mt-4 rounded-lg px-3 py-2 text-sm ${status.type==='success' ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'}`}>
                {status.message}
              </div>
            )}

            <button disabled={submitting} className="mt-6 inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-white font-medium hover:bg-blue-500 disabled:opacity-60">
              {submitting ? 'Sending...' : 'Request a proposal'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
