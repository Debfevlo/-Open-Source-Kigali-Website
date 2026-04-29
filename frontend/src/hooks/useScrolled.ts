import { useState, useEffect } from "react";

/**
 * Returns true when the page has scrolled past `threshold` pixels.
 * Default threshold is 50px.
 *
 * Usage:
 *   const scrolled = useScrolled();
 *   const scrolled = useScrolled(100); // custom threshold
 */
export const useScrolled = (threshold = 50): boolean => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    // Check immediately on mount in case page loads mid-scroll
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
};