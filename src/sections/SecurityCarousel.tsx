import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNxkF0DClxnt3G9AF52r2RTeGREzSpHE762g&s',
    title: 'Advanced Surveillance Systems'
  },
  {
    url: 'https://www.defenceweb.co.za/wp-content/uploads/security/civil-security/2009mar1720police20sandf20wc201020ex20shield20320084.jpg',
    title: 'Armed Response Teams'
  },
  {
    url: 'https://www.securitastechnology.com/sites/securitastechnology.com/files/styles/scroll_slider_630x633/public/2023-07/SecTech_2023_FR_France-Shoot_May-2023-1240.webp',
    title: '24/7 Monitoring Center'
  }
];

const SecurityCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true
  };

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <p className="text-red-600 font-medium text-lg">Our Capabilities</p>
          <h2 className="text-white font-bold text-4xl mt-2 text-center">
            State-of-the-Art Security Infrastructure
          </h2>
        </div>

        <div className="relative">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="relative h-[600px]">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${image.url})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-white text-3xl font-bold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SecurityCarousel;