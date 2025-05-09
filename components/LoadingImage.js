import { useState, useEffect } from "react";
import { motion } from "motion/react";

const LoadingImage = ({
  src,
  alt,
  className,
  priority = false,
  objectPosition = "center",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
  }, [src]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.15 }}
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
