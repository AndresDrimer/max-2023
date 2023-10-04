"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

function Carrousel() {
  const carrouselImages = [
    {
      id: 0,
      imagePath: "/carrousel/carrousel1.jpg",
    },
    {
      id: 1,
      imagePath: "/carrousel/carrousel2.jpg",
    },
    {
      id: 2,
      imagePath: "/carrousel/carrousel3.jpg",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % carrouselImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-grow">
      <div className="md:mt-[10vh]">
        <Image
          src={carrouselImages[currentImage].imagePath}
          alt="imagen"        
          sizes="100vw"
          width={2480}
          height={2480}
          className=""
        />
      </div>
    </div>
  );
}

export default Carrousel;