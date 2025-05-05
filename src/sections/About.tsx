import React from 'react';
import { Shield, Users, Clock, Heading1 } from 'lucide-react';


const About = () => {
  return (
    <section id="about" className="bg-zinc-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <p className="text-white font-medium text-lg">Who We Are</p>
          <h2 className="text-white font-bold text-4xl mt-2 text-center">
            About Hollow Point Security
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-white text-lg mb-6">
              Welcome to Hollow Point Security Solutions, a proudly Black-owned company based in KwaZulu-Natal. We specialize in delivering top-tier security services tailored to meet the unique needs of each client. In addition to our core focus on safety and protection, we offer specialized consulting designed to provide strategic solutions that align with our clients’ goals. As a newly established company, we bring fresh energy, professionalism, and a client-first approach to every project. Our commitment extends beyond KwaZulu-Natal—we are ready to serve and support clients across South Africa with integrity, reliability, and excellence.
            </p>
            {/* Crime statistics section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="bg-black p-6 rounded-2xl">
                <h3 className="text-white font-bold text-xl mb-2">Hijackings</h3>
                <p className="text-gray-400">Approx. 2,000 incidents per year</p>
              </div>
              <div className="bg-black p-6 rounded-2xl">
                <h3 className="text-white font-bold text-xl mb-2">Carjackings</h3>
                <p className="text-gray-400">Approx. 1,500 incidents per year</p>
              </div>
              <div className="bg-black p-6 rounded-2xl">
                <h3 className="text-white font-bold text-xl mb-2">Kidnappings</h3>
                <p className="text-gray-400">Approx. 800 incidents per year</p>
              </div>
              <div className="bg-black p-6 rounded-2xl">
                <h3 className="text-white font-bold text-xl mb-2">Household Robberies</h3>
                <p className="text-gray-400">Approx. 12,000 incidents per year</p>
              </div>
            </div>
            {/* Products placeholder */}
            <h3 className="text-white font-bold text-2xl mb-4">These are the products that we offer</h3>
            <p className="text-gray-400">(Product list coming soon...)</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-black p-6 rounded-2xl">
              <Shield className="text-white w-12 h-12 mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">Expert Protection</h3>
              <p className="text-gray-400">Our team consists of highly trained security professionals with military and law enforcement backgrounds.</p>
            </div>
            
            <div className="bg-black p-6 rounded-2xl">
              <Users className="text-white w-12 h-12 mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">Client-Focused</h3>
              <p className="text-gray-400">We develop customized security solutions tailored to your specific needs and concerns.</p>
            </div>
            
            <div className="bg-black p-6 rounded-2xl">
              <Clock className="text-white w-12 h-12 mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">24/7 Service</h3>
              <p className="text-gray-400">Our security teams and monitoring services are available around the clock, every day of the year.</p>
            </div>
            
            <div className="bg-black p-6 rounded-2xl">
              <Heading1 className="text-white w-12 h-12 mb-4" />
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