function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-400/20 blur-3xl rounded-full" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            One-stop solutions for modern product delivery
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300">
            Strategy, architecture, and hands-on enablement for developers, business owners, architects, and consultants. We help you ship faster, scale safely, and focus on outcomes.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white font-medium shadow hover:bg-blue-500 transition-colors">Start a project</a>
            <a href="#services" className="inline-flex items-center justify-center rounded-lg bg-white/10 px-6 py-3 text-white font-medium hover:bg-white/20 border border-white/10 transition-colors">Explore services</a>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[['3-10x','Average ROI'],['< 6 wks','Time-to-Value'],['72','Client NPS'],['120+','Engagements']].map(([num,label])=> (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="text-2xl sm:text-3xl font-bold text-white">{num}</div>
                <div className="text-xs text-slate-300 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
