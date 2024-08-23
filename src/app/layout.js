
import "./globals.css";
import { Poppins } from 'next/font/google';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const poppins = Poppins({
  weight: ['400','500', '700'], 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Beanery",
  description: "Experience the finest culinary delights and warm ambiance at Beanery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={poppins.className}>
      <body >
        <Navbar/>
        {children}
       <Footer/>
        
        </body>
    </html>
  );
}
