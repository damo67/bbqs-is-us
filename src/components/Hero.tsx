export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal opacity-90" />
      {/* Decorative fire glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-ember/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-1/3 w-[300px] h-[300px] bg-gold/10 rounded-full blur-[80px]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Flame icon */}
        <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-ember/20 border border-ember/30">
          <svg className="w-10 h-10 text-ember" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 23c-3.5 0-7-2.5-7-7 0-3.5 2-6 4-8l1 3c.5-2 2-4 3-5.5C13.5 4 14 2.5 14 1c3 2 6 6 6 10 0 5-3 12-8 12zm0-2c3 0 5-4 5-8 0-2.5-1.5-5-3-7-.5 1.5-1.5 3-3 4.5L10 8c-1 1.5-2 3-2 5 0 3 1.5 8 4 8z"/>
          </svg>
        </div>

        <p className="text-ember font-semibold tracking-[0.3em] uppercase text-sm mb-4">Premium Outdoor Cooking</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-6">
          Fire Up Your<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-ember via-gold to-ember-light">Backyard</span>
        </h1>
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Australia's most trusted barbecue specialists. From sizzling steaks to slow-smoked brisket, we've got the gear to make every cook legendary.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#products" className="px-8 py-4 bg-ember hover:bg-ember-dark text-white font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-ember/30 text-sm uppercase tracking-wider">
            Shop BBQs
          </a>
          <a href="#about" className="px-8 py-4 border-2 border-white/20 hover:border-ember text-white font-bold rounded-full transition-all duration-300 text-sm uppercase tracking-wider">
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
