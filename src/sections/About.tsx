import React from 'react';
import { Shield, Users, Clock, Heading1 } from 'lucide-react';
import Button from '../components/Button';

const About = () => {
  return (
    <section id="about" className="bg-zinc-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <p className="text-red-600 font-medium text-lg">Who We Are</p>
          <h2 className="text-white font-bold text-4xl mt-2 text-center">
            About Hollow Point Security
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 text-lg mb-6">
              Hollow Point Security was founded with a singular mission: to provide exceptional security services that protect what matters most. With decades of combined experience in military, law enforcement, and private security sectors, our team brings unparalleled expertise to every client engagement.
            </p>
            
            <p className="text-gray-300 text-lg mb-6">
              We understand that security needs vary greatly between clients, which is why we take a personalized approach to every situation. Whether you're looking to secure your home, business, or require personal protection, we develop tailored solutions that address your specific concerns.
            </p>
            
            <p className="text-gray-300 text-lg mb-10">
              Our commitment to excellence, integrity, and discretion has made us a trusted partner for clients ranging from high-profile individuals to international corporations.
            </p>

            <Button title="Learn More About Us" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-black p-6 rounded-2xl">
              <Shield className="text-red-600 w-12 h-12 mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">Expert Protection</h3>
              <p className="text-gray-400">Our team consists of highly trained security professionals with military and law enforcement backgrounds.</p>
            </div>
            
            <div className="bg-black p-6 rounded-2xl">
              <Users className="text-red-600 w-12 h-12 mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">Client-Focused</h3>
              <p className="text-gray-400">We develop customized security solutions tailored to your specific needs and concerns.</p>
            </div>
            
            <div className="bg-black p-6 rounded-2xl">
              <Clock className="text-red-600 w-12 h-12 mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">24/7 Service</h3>
              <p className="text-gray-400">Our security teams and monitoring services are available around the clock, every day of the year.</p>
            </div>
            
            <div className="bg-black p-6 rounded-2xl">
              <Heading1 className="text-red-600 w-12 h-12 mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">Industry Leader</h3>
              <p className="text-gray-400">We maintain the highest standards in the security industry through continuous training and innovation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;