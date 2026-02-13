const products = [
  { name: 'The Inferno 4000', price: '$1,299', desc: '4-burner gas BBQ with side wok burner', tag: 'Best Seller', color: 'from-red-900 to-red-700' },
  { name: 'Smokemaster Pro', price: '$2,499', desc: 'Offset smoker for low-and-slow perfection', tag: 'Premium', color: 'from-amber-900 to-amber-700' },
  { name: 'Compact Flame 200', price: '$449', desc: 'Portable 2-burner, perfect for balconies', tag: 'Popular', color: 'from-orange-900 to-orange-700' },
  { name: 'The Beast 6X', price: '$3,199', desc: '6-burner stainless steel powerhouse', tag: 'Pro', color: 'from-stone-800 to-stone-600' },
  { name: 'Charcoal Classic', price: '$699', desc: 'Traditional kettle BBQ, 57cm diameter', tag: 'Classic', color: 'from-zinc-800 to-zinc-600' },
  { name: 'Kamado King', price: '$1,899', desc: 'Ceramic egg-style grill & smoker combo', tag: 'New', color: 'from-rose-900 to-rose-700' },
]

function BBQIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="32" cy="28" rx="22" ry="12" />
      <path d="M10 28v6c0 6.627 9.85 12 22 12s22-5.373 22-12v-6" />
      <line x1="20" y1="46" x2="16" y2="58" />
      <line x1="44" y1="46" x2="48" y2="58" />
      <line x1="32" y1="46" x2="32" y2="58" />
      {/* Steam lines */}
      <path d="M24 22c0-4 2-6 0-10" strokeLinecap="round" />
      <path d="M32 20c0-4 2-6 0-10" strokeLinecap="round" />
      <path d="M40 22c0-4 2-6 0-10" strokeLinecap="round" />
    </svg>
  )
}

export default function Products() {
  return (
    <section id="products" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-ember font-semibold tracking-[0.2em] uppercase text-sm mb-3">Our Range</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal mb-4">
            Built to <span className="text-ember">Sizzle</span>
          </h2>
          <p className="text-smoke text-lg max-w-2xl mx-auto">
            From compact portables to full outdoor kitchen setups — find your perfect grill.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(p => (
            <div key={p.name} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              {/* Product image area */}
              <div className={`aspect-[4/3] bg-gradient-to-br ${p.color} flex items-center justify-center relative overflow-hidden`}>
                <BBQIcon className="w-24 h-24 text-white/30 group-hover:scale-110 transition-transform duration-500" />
                <span className="absolute top-4 left-4 bg-white/90 text-charcoal text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {p.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-1">{p.name}</h3>
                <p className="text-ash text-sm mb-4">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-ember">{p.price}</span>
                  <button className="px-5 py-2 bg-charcoal hover:bg-ember text-white text-sm font-semibold rounded-full transition-colors duration-300">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
