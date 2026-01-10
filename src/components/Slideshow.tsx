import { useEffect, useState } from "react";

type SlideshowProps = {
  images: string[];
  intervalMs?: number; // valgfritt, default 3000
};

export default function Slideshow({
  images,
  intervalMs = 3000,
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
    <div className="relative w-full">
      <img
        src={images[currentIndex]}
        alt=""
        className="w-full object-cover"
      />
    </div>
  );
}
