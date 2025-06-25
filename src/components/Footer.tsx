export default function Footer() {
    return (
      <footer className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            {/* Logo Column */}
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-8">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <span className="text-xl font-semibold text-emerald-500">Eign</span>
              </div>
            </div>
  
            {/* Solutions Column */}
            <div className="col-span-1">
              <h3 className="text-emerald-500 font-semibold text-lg mb-6">Solutions</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Use Case</a></li>
                <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Products</a></li>
                <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Industries</a></li>
                <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">APIs</a></li>
              </ul>
            </div>
  
            {/* Resources Column */}
            <div className="col-span-1">
              <h3 className="text-emerald-500 font-semibold text-lg mb-6">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">News</a></li>
              </ul>
            </div>
  
            {/* About & Developers Columns */}
            <div className="col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* About Column */}
              <div>
                <h3 className="text-emerald-500 font-semibold text-lg mb-6">About</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Company</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Data</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Customers</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Events</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Careers</a></li>
                </ul>
              </div>
  
              {/* Developers Column */}
              <div>
                <h3 className="text-emerald-500 font-semibold text-lg mb-6">Developers</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Documentation</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Support</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Terms and Conditions</a></li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Bottom Footer */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              {/* Copyright */}
              <div className="text-gray-500 text-sm">
                © 2025 Eign
              </div>
  
              {/* Legal Links */}
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">Terms & conditions</a>
                <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">Privacy</a>
                <div className="flex items-center space-x-1">
                  <span className="text-orange-500">🍪</span>
                  <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">Cookies</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }