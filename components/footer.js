import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
        
        {/* लेफ्ट साइड: कैफे का नाम और टैगलाइन */}
        <div>
          <h2 className="text-xl font-bold text-white tracking-widest uppercase">
            Dark <span className="text-purple-500">Cafe</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">Premium Cinematic Experience in Meerut</p>
        </div>
        
        {/* बीच में: एड्रेस और कांटेक्ट डिटेल */}
        <div className="text-gray-400 text-sm space-y-1">
          <p>📍 Main Market, Meerut, UP</p>
          <p>📞 +91 98765 43210</p>
        </div>

      </div>
      
      {/* सबसे नीचे: कॉपीराइट और आपकी एजेंसी का नाम */}
      <div className="mt-8 text-center text-gray-500 text-xs border-t border-gray-800 pt-6 max-w-7xl mx-auto px-4">
        &copy; {new Date().getFullYear()} Dark Cafe. All rights reserved. <br/>
        <span className="mt-2 inline-block">Designed & Developed by <strong className="text-purple-400">A S Tech Solutions</strong></span>
      </div>
    </footer>
  );
}
