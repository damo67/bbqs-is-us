const testimonials = [
  { name: 'Dave M.', location: 'Sydney, NSW', text: "Best BBQ I've ever owned. The Inferno 4000 heats up in minutes and the even heat distribution is unreal. My steaks have never been better.", stars: 5 },
  { name: 'Sarah K.', location: 'Melbourne, VIC', text: "The team at BBQs Is Us helped me pick the perfect smoker for our small backyard. Six months in and I'm obsessed with smoking brisket every weekend.", stars: 5 },
  { name: 'Tom R.', location: 'Brisbane, QLD', text: "Delivery was lightning fast and the setup guide was super clear. My Kamado King is the centrepiece of every family gathering now. Absolute legend of a grill.", stars: 5 },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-ember font-semibold tracking-[0.2em] uppercase text-sm mb-3">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal mb-4">
            What Our <span className="text-ember">Grill Masters</span> Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.name} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-500">
              <Stars count={t.stars} />
              <p className="text-smoke leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ember to-gold flex items-center justify-center text-white font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-charcoal text-sm">{t.name}</div>
                  <div className="text-ash text-xs">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
