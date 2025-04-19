"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/images/medlem.jpg",
    title: "Bli medlem i Arsenal Malmö",
    text: "Få tillgång till evenemang, biljetter och gemenskap.",
    buttonText: "Läs mer",
    buttonLink: "/medlemskap",
  },
  {
    id: 2,
    image: "/images/podcast.png",
    title: "Lyssna på vår podd",
    text: "Allt om Arsenal – varje vecka med våra lokala Gooners.",
    buttonText: "Till podden",
    buttonLink: "/podd",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [showArrows, setShowArrows] = useState(true);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Hantera visning av pilar via CustomEvent
  useEffect(() => {
    const handleToggle = (e: CustomEvent) => {
      setShowArrows(!e.detail); // e.detail = true → meny öppen → dölj pilar
    };

    window.addEventListener("menuToggle", handleToggle as EventListener);

    return () => {
      window.removeEventListener("menuToggle", handleToggle as EventListener);
    };
  }, []);

  return (
    <section className="relative w-full h-[500px] overflow-hidden z-0">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === current}
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center md:items-start text-white px-4 md:px-8 md:ml-28 text-center md:text-left max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
            <p className="text-lg mb-6">{slide.text}</p>
            <Link
              href={slide.buttonLink}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold"
            >
              {slide.buttonText}
            </Link>
          </div>
        </div>
      ))}

      {/* Pilar visas bara om meny inte är öppen */}
      {showArrows && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 z-10"
            aria-label="Föregående"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 z-10"
            aria-label="Nästa"
          >
            ▶
          </button>
        </>
      )}
    </section>
  );
}

