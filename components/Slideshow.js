import { useEffect, useState } from "react";
import { urlFor } from "@/lib/sanity";
import Text from "@/components/Text";

const SECONDS_PER_SLIDE = 2;

// Full-screen slideshow that covers the page until the visitor clicks or hits
// a key. Advances on a timer with no transition — each slide simply replaces
// the last. Every image is rendered up front (hidden with visibility, not
// display) so the browser has them decoded before their turn.
const Slideshow = ({ slides, onClose }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return undefined;

    const interval = setInterval(
      () => setIndex((current) => (current + 1) % slides.length),
      SECONDS_PER_SLIDE * 1000
    );

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const handleKeyDown = () => onClose();
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Hold the page still underneath while the slideshow is covering it.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  return (
    <section
      onClick={onClose}
      className="fixed inset-0 z-50 w-full cursor-pointer select-none overflow-hidden bg-white"
    >
      {slides.map((slide, i) => (
        <img
          key={slide.key || i}
          src={urlFor(slide.image).width(2400).quality(80).url()}
          alt=""
          loading="eager"
          className={`absolute inset-0 h-full w-full object-cover ${
            i === index ? "visible" : "invisible"
          }`}
        />
      ))}
    </section>
  );
};

export default Slideshow;
