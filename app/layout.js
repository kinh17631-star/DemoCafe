import "./globals.css";
// Small letters mein file paths ka dhyan rakha hai
import Navbar from "@/components/navbar"; 
import Footer from "@/components/footer"; 

export const metadata = {
  title: "The Dark Cafe | Premium Experience",
  description: "Meerut's finest cinematic cafe and lounge experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased selection:bg-purple-500 selection:text-white">
        {/* Har page par top par dikhne wala menu */}
        <Navbar /> 
        
        {/* Har page ka alag-alag content yahan load hoga */}
        <main min-h-screen>{children}</main> 
        
        {/* Website ka sabse neeche ka hissa */}
        <Footer /> 
      </body>
    </html>
  );
}
