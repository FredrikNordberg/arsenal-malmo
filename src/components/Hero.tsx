"use client";

import { useState } from "react";
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

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
    <section className="relative w-full h-[500px] overflow-hidden">
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
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-12 md:px-20 py-10 text-white max-w-2xl space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {slide.title}
            </h2>
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

      {/* Vänsterpil */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-50 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
        aria-label="Föregående"
      >
        ◀
      </button>

      {/* Högerpil */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-50 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
        aria-label="Nästa"
      >
        ▶
      </button>
      
    </section>
    <div className="w-full h-1 bg-[#44B154]" />
    </>
  );
}
