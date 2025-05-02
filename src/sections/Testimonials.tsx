import React from 'react';
import { testimonials } from '../constants';
import TestimonialCard from '../components/TestimonialCard';

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <p className="text-red-600 font-medium text-lg">Client Testimonials</p>
          <h2 className="text-white font-bold text-4xl mt-2 text-center">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              {...testimonial} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;