import { useState, useEffect } from "react";
import { motion } from "motion/react";

const LoadingImage = ({
  src,
  alt,
  className,
  priority = false,
  objectPosition = "center",
  delay = 0,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
  }, [src]);

  // Don't render anything until we're on the client
  if (!isMounted) {
    return <div className={`relative ${className}`} style={{ opacity: 0 }} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.15, delay }}
      className={`relative ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-contain object-${objectPosition}`}
        style={{ maxHeight: "inherit" }}
        loading={priority ? "eager" : "lazy"}
      />
    </motion.div>
  );
};

export default LoadingImage;
