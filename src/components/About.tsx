export default function About() {
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '50K+', label: 'Happy Customers' },
    { value: '200+', label: 'BBQ Models' },
    { value: '4.9★', label: 'Average Rating' },
  ]

  return (
    <section id="about" className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-charcoal-light to-charcoal overflow-hidden flex items-center justify-center">
              <svg className="w-32 h-32 text-ember/40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 000 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
              </svg>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-ember/10 rounded-2xl -z-10" />
          </div>

          {/* Text content */}
          <div>
            <p className="text-ember font-semibold tracking-[0.2em] uppercase text-sm mb-3">Our Story</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal mb-6 leading-tight">
              Born From a Love of <span className="text-ember">Fire & Flavour</span>
            </h2>
            <p className="text-smoke text-lg leading-relaxed mb-6">
              Since 2010, BBQs Is Us has been helping Australians create unforgettable outdoor cooking experiences. What started as a small family-run shop in Melbourne has grown into the country's go-to destination for premium barbecues, smokers, and accessories.
            </p>
            <p className="text-smoke text-lg leading-relaxed mb-10">
              We believe every backyard deserves a great grill. Our team of BBQ enthusiasts hand-picks every product, tests it on our own decks, and stands behind every piece of gear we sell.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map(s => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-extrabold text-ember">{s.value}</div>
                  <div className="text-xs text-ash uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
