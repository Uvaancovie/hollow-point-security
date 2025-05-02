import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <p className="text-red-600 font-medium text-lg">Get In Touch</p>
          <h2 className="text-white font-bold text-4xl mt-2 text-center">
            Contact Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-white text-2xl font-bold mb-6">
              We're Here To Help
            </h3>
            <p className="text-gray-300 mb-8">
              Whether you need a security consultation, want to learn more about our services, or are ready to implement a security solution, our team is standing by to assist you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-bold">Phone</h4>
                  <p className="text-gray-300">+27 63 083 5453</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-bold">Email</h4>
                  <p className="text-gray-300">sohanmarajh@hollowpointsecurity.co.za</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-bold">Address</h4>
                  <p className="text-gray-300">Durban South Africa</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-bold">Hours</h4>
                  <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM<br />24/7 Emergency Response Available</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h3 className="text-white text-2xl font-bold mb-6">
              Send Us a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;