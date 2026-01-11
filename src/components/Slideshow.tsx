import { useEffect, useState } from "react";

type SlideshowProps = {
  images: string[];
  intervalMs?: number;
  className?: string;
};

export default function Slideshow({
  images,
  intervalMs = 4000,
  className = "",
}: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(id);
  }, [images, intervalMs]);

  if (images.length === 0) return null;

  return (
    <div 
      className={`relative w-full h-full ${className}`} 
      style={{ overflow: "hidden" }}
    >
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: index === currentIndex ? 1 : 0,
            transition: "opacity 1000ms ease-in-out",
            pointerEvents: index === currentIndex ? "auto" : "none",
          }}
        />
      ))}
    </div>
  );
}
