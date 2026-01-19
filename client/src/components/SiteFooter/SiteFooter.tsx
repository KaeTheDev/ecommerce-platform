const SiteFooter = () => {
    return (
      <footer className="w-full bg-gray-400 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          {/* Main content row */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Left: Brand + Description */}
            <div className="flex flex-col space-y-4 text-center lg:text-left items-center lg:items-start">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-linear-to-r from-white to-gray-200 bg-clip-text text-transparent">
                LUXARIST
              </h1>
  
              <p className="text-sm sm:text-base text-white leading-relaxed max-w-sm">
                Timeless elegance meets contemporary design in every piece we create.
              </p>
  
              {/* Social Media */}
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-white rounded-sm" />
                <div className="w-10 h-10 bg-white rounded-sm" />
                <div className="w-10 h-10 bg-white rounded-sm" />
              </div>
            </div>
  
            {/* Right: Link columns */}
            <div
              className="
                flex flex-col
                lg:flex-row
                gap-8 lg:gap-12
                lg:col-span-3
                text-center lg:text-left
                items-center lg:items-start
              "
            >
              {/* Shop */}
              <div className="flex flex-col space-y-4 items-center lg:items-start">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight">
                  Shop
                </h3>
                <a href="/collections/bracelets" className="text-sm hover:text-black transition-colors">Bracelets</a>
                <a href="/collections/earrings" className="text-sm hover:text-black transition-colors">Earrings</a>
                <a href="/collections/necklaces" className="text-sm hover:text-black transition-colors">Necklaces</a>
                <a href="/collections/rings" className="text-sm hover:text-black transition-colors">Rings</a>
                <a href="/collections/watches" className="text-sm hover:text-black transition-colors">Watches</a>
              </div>
  
              {/* About */}
              <div className="flex flex-col space-y-4 items-center lg:items-start">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight">
                  About
                </h3>
                <a href="#" className="text-sm hover:text-black transition-colors">Our Story</a>
                <a href="#" className="text-sm hover:text-black transition-colors">
                  Craftsmanship & Sustainability
                </a>
              </div>
  
              {/* Support */}
              <div className="flex flex-col space-y-4 items-center lg:items-start">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight">
                  Support
                </h3>
                <a href="#" className="text-sm hover:text-black transition-colors">Contact Us</a>
                <a href="#" className="text-sm hover:text-black transition-colors">Shipping & Returns</a>
                <a href="#" className="text-sm hover:text-black transition-colors">Size & Care Guide</a>
                <a href="#" className="text-sm hover:text-black transition-colors">FAQ</a>
              </div>
            </div>
          </div>
  
          {/* Divider */}
          <div className="border-t border-gray-800" />
  
          {/* Bottom */}
          <div className="pt-3 mt-3 text-center text-sm">
            © 2026 Luxarist. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default SiteFooter;  