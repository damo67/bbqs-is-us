export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="text-2xl font-extrabold mb-4">
              <span className="text-ember">BBQs</span>
              <span className="text-white"> Is Us</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Australia's premier barbecue destination. Fuelling backyards since 2010.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-2 text-white/40 text-sm">
              <li><a href="#" className="hover:text-ember transition-colors">Gas BBQs</a></li>
              <li><a href="#" className="hover:text-ember transition-colors">Charcoal BBQs</a></li>
              <li><a href="#" className="hover:text-ember transition-colors">Smokers</a></li>
              <li><a href="#" className="hover:text-ember transition-colors">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2 text-white/40 text-sm">
              <li><a href="#" className="hover:text-ember transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-ember transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-ember transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-ember transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Connect</h4>
            <ul className="space-y-2 text-white/40 text-sm">
              <li><a href="#" className="hover:text-ember transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-ember transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-ember transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-ember transition-colors">TikTok</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 text-center text-white/30 text-sm">
          © {new Date().getFullYear()} BBQs Is Us. All rights reserved. 🔥
        </div>
      </div>
    </footer>
  )
}
