export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-ember/5 rounded-full blur-[100px]" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-charcoal rounded-3xl p-10 md:p-16 text-center">
          <p className="text-ember font-semibold tracking-[0.2em] uppercase text-sm mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Ready to <span className="text-ember">Fire Up?</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-10">
            Drop us a line — whether you need help choosing a BBQ, want a quote on an outdoor kitchen, or just want to talk smoke rings.
          </p>

          <form className="max-w-lg mx-auto space-y-4" onSubmit={e => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="w-full px-5 py-3 bg-charcoal-light border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-ember focus:outline-none transition-colors" />
              <input type="email" placeholder="Email Address" className="w-full px-5 py-3 bg-charcoal-light border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-ember focus:outline-none transition-colors" />
            </div>
            <textarea rows={4} placeholder="Your Message" className="w-full px-5 py-3 bg-charcoal-light border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-ember focus:outline-none transition-colors resize-none" />
            <button type="submit" className="w-full sm:w-auto px-10 py-4 bg-ember hover:bg-ember-dark text-white font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-ember/30 text-sm uppercase tracking-wider">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
