"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const images = [
  "/images/1.webp",
  "/images/2.webp",
  "/images/3.webp",
  "/images/4.webp",
  "/images/5.webp",
  "/images/6.webp",
  "/images/7.webp",
  "/images/8.webp",
];

export default function Imageslider() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [animating, setAnimating] = useState(true);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const slideCount = images.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slideCount);
    setAnimating(false);
    setTimeout(() => setAnimating(true), 20); // restart animation
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slideCount) % slideCount);
    setAnimating(false);
    setTimeout(() => setAnimating(true), 20);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    touchEndX.current = e.clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    if (deltaX > 50) nextSlide();
    else if (deltaX < -50) prevSlide();
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* Image wrapper */}
      <div
        className="flex transition-transform duration-500 ease-in-out  md:h-[700px]"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="w-full flex-shrink-0">
            <img
              loading="lazy"
              src={src}
              alt={`Slide ${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-10 text-[#bb0117] hover:text-white text-4xl font-bold bg-white bg-opacity-20 rounded-full p-2 hover:bg-[#bb0117] transition"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="size-6 md:size-8" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-10 text-[#bb0117] hover:text-white text-4xl font-bold bg-white bg-opacity-20 rounded-full p-2 hover:bg-[#bb0117] transition"
        aria-label="Next Slide"
      >
        <ChevronRight className="size-6 md:size-8" />
      </button>

      {/* Dot Indicators with progress */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <div
            key={i}
            className="relative w-4 h-4 rounded-full bg-white bg-opacity-50 overflow-hidden"
            onClick={() => {
              setCurrent(i);
              setAnimating(false);
              setTimeout(() => setAnimating(true), 20);
            }}
          >
            {current === i && animating && (
              <div className="absolute top-0 left-0 h-full bg-[#bb0117] animate-progress w-full origin-left" />
            )}
          </div>
        ))}
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        .animate-progress {
          animation: progress 5s linear forwards;
          transform-origin: left;
        }
      `}</style>
    </div>
  );
}
