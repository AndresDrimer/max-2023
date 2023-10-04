carrousel////////////////

import Image from 'next/image';
import { useState, useEffect } from 'react';
import classNames from 'classnames';

const BackgroundImage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          layout="fill"
          objectFit="cover"
          className={classNames(
            'absolute top-0 left-0',
            {
              'opacity-100': index === currentImage,
              'opacity-0': index !== currentImage,
              'transition-opacity duration-500': true,
            }
          )}
          alt={`Image ${index}`}
        />
      ))}
    </div>
  );
};

export default BackgroundImage;

////transiciones////////
en tailwind config:
module.exports = {
  // Otras configuraciones...
  theme: {
    extend: {
      transitionProperty: {
        'opacity': 'opacity',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
};