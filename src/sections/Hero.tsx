import React from 'react';
import { ShieldAlert, Clock, AlertTriangle, TrendingUp } from 'lucide-react';
import Button from '../components/Button';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen mx-auto bg-[url('https://static.euronews.com/articles/stories/07/55/03/04/1024x538_cmsv2_344051ce-43d5-5e56-accb-cb1b473e6dba-7550304.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      
      <div className="relative inset-0 max-w-7xl mx-auto flex flex-col items-start justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-20">
        <div className="w-full max-w-4xl">
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="text-red-600 w-8 h-8" />
            <span className="text-red-600 font-bold text-lg">SECURITY ALERT</span>
          </div>

          <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl mb-6">
            Durban's Security Crisis:<br />
            <span className="text-red-600">Protect What Matters Most</span>
          </h1>

          <p className="text-gray-300 text-lg mb-8 max-w-3xl">
            The rising crime rates in Durban, South Africa pose serious threats to both businesses and residential properties. Recent statistics show a significant increase in break-ins, armed robberies, and property violations across the region.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-zinc-800">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-red-600 w-6 h-6" />
                <span className="text-white font-bold">54% increase</span>
              </div>
              <p className="text-gray-300">in home invasions in the past year</p>
            </div>

            <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-zinc-800">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-red-600 w-6 h-6" />
                <span className="text-white font-bold">38% increase</span>
              </div>
              <p className="text-gray-300">in business theft compared to previous years</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-16">
            <Button title="Get Protected Now" />
            <a 
              href="#services" 
              className="py-4 px-6 bg-transparent text-white border border-white rounded-md font-bold text-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300 flex items-center"
            >
              <ShieldAlert className="mr-2" />
              Our Solutions
            </a>
          </div>

          <div>
            <h2 className="text-white font-bold text-2xl mb-6">How Hollow Point Security Responds</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-black bg-opacity-50 p-4 rounded-lg border border-zinc-800">
                <Clock className="text-red-600 w-6 h-6 mb-2" />
                <p className="text-white">Armed response within 4-8 minutes</p>
              </div>
              <div className="bg-black bg-opacity-50 p-4 rounded-lg border border-zinc-800">
                <Clock className="text-red-600 w-6 h-6 mb-2" />
                <p className="text-white">24/7 monitoring services</p>
              </div>
              <div className="bg-black bg-opacity-50 p-4 rounded-lg border border-zinc-800">
                <Clock className="text-red-600 w-6 h-6 mb-2" />
                <p className="text-white">Custom security assessments</p>
              </div>
              <div className="bg-black bg-opacity-50 p-4 rounded-lg border border-zinc-800">
                <Clock className="text-red-600 w-6 h-6 mb-2" />
                <p className="text-white">Advanced alarm and surveillance systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;