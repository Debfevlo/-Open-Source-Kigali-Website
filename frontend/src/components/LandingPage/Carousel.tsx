import  { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ContributionCard from "./ContributionCard";


const slides = [
  {
    type: "developer" as const,
    title: "Developer or Tester",
    description:
      "Write and review code, fix bugs, add new features, and ensure projects run smoothly. Your contributions keep open-source projects alive and evolving.",
  },
  {
    type: "designer" as const,
    title: "UI/UX Designer",
    description:
      "Create beautiful and user-friendly interfaces, design graphics, and improve the user experience for all community projects and gain a lot of experience.",
  },
  {
    type: "documentation" as const,
    title: "Documentation",
    description:
      "Write clear guides, tutorials, and documentation or translate project materials so that everyone can understand and contribute easily and more efficiently.",
  },
  {
    type: "moderator" as const,
    title: "Moderator",
    description:
      "Help grow and support the community, guide new contributors, and promote projects through events, social media, and mentorship.",
  },
];

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Embla viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.3333%]"
            >
              <ContributionCard
                type={slide.type}
                title={slide.title}
                description={slide.description}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation and pagination */}
      <div className="flex justify-center items-center mt-6 gap-4">
        {/* Previous button */}
        <button
          onClick={scrollPrev}
          className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-200"
        >
          &#60;
        </button>

        {/* Pagination dots */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === selectedIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={scrollNext}
          className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-200"
          >
          &#62;
        </button>

      </div>
    </div>
  );
};

export default Carousel;
