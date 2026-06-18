export default function Home() {
  return (
    // pt-20 इसलिए लगाया है ताकि हमारा नेविगेशन बार कंटेंट के ऊपर ओवरलैप न करे
    <div className="flex flex-col min-h-screen pt-20"> 
      
      {/* --- हीरो सेक्शन (Hero Section) --- */}
      <section className="relative w-full h-[85vh] flex items-center justify-center text-center px-4 bg-[url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat">
        
        {/* इमेज के ऊपर एक डार्क लेयर (Overlay) ताकि टेक्स्ट साफ दिखे और लुक सिनेमैटिक आए */}
        <div className="absolute inset-0 bg-black/75"></div>
        
        {/* मेन कंटेंट (टेक्स्ट और बटन्स) */}
        <div className="relative z-10 max-w-4xl mx-auto mt-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white uppercase drop-shadow-xl">
            Experience The <span className="text-purple-500 glow-effect">Cinematic</span> Vibe
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Meerut's most premium dark cafe and lounge. Perfect coffee, unforgettable
