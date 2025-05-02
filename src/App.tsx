import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import SecurityCarousel from './sections/SecurityCarousel';
import DurbanInfo from './sections/DurbanInfo';
import Services from './sections/Services';
import About from './sections/About';
import Testimonials from './sections/Testimonials';
import Team from './sections/Team';
import Contact from './sections/Contact';
import Footer from './layout/Footer';

function App() {
  useEffect(() => {
    document.title = "Hollow Point Security";
  }, []);

  return (
    <div className="relative z-0 bg-black text-white">
      <Navbar />
      <Hero />
      <SecurityCarousel />
      <DurbanInfo />
      <Services />
      <About />
      <div className="relative bg-black py-16">
        <div className="absolute inset-0 bg-[url('https://www.moneyweb.co.za/wp-content/uploads/2014/10/ramaphosa-convoy-1024x684.jpg"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h2 className="text-white font-bold text-5xl text-center max-w-3xl">
            Professional Security Solutions for Your Peace of Mind
          </h2>
          <a
            href="#contact"
            className="mt-10 py-4 px-8 bg-red-600 text-white font-bold text-lg rounded-md hover:bg-red-700 transition-all duration-300"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;