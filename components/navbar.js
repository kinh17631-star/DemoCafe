import Link from "next/link";

export default function Navbar() {
  return (
    // यह नेविगेशन बार हमेशा स्क्रीन के टॉप पर फिक्स रहेगा और पीछे का बैकग्राउंड हल्का ब्लर दिखेगा
    <nav className="w-full bg-black/80 backdrop-blur-md fixed top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* लेफ्ट साइड: कैफे का लोगो या नाम */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white tracking-widest uppercase">
              Dark <span className="text-purple-500">Cafe</span>
            </Link>
          </div>
          
          {/* राइट साइड: मेन्यू के लिंक्स */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white hover:glow-effect transition-colors px-3 py-2 text-sm font-medium">Home</Link>
              <Link href="#menu" className="text-gray-300 hover:text-white hover:glow-effect transition-colors px-3 py-2 text-sm font-medium">Menu</Link>
              <Link href="#gallery" className="text-gray-300 hover:text-white hover:glow-effect transition-colors px-3 py-2 text-sm font-medium">Gallery</Link>
              
              {/* बुकिंग के लिए एक स्पेशल ग्लो करने वाला बटन */}
              <Link href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md text-sm font-bold transition-all shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                Book Table
              </Link>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}
