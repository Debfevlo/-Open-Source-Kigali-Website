import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  initials: string;
  avatarColor: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amina Uwase",
    role: "Software Developer, Andela",
    initials: "AU",
    avatarColor: "bg-blue-100 text-blue-600",
    quote:
      "OSK gave me a clear path into open source. Within two months of joining, I had my first merged pull request on a real project. The mentorship here is unlike anything I found online.",
  },
  {
    id: 2,
    name: "Jean-Paul Hakizimana",
    role: "Computer Science Student, UR",
    initials: "JH",
    avatarColor: "bg-green-100 text-green-600",
    quote:
      "I came in knowing very little about collaboration. The weekly sessions and code reviews transformed how I think about software. OSK doesn't just teach you to code — it teaches you to build.",
  },
  {
    id: 3,
    name: "Clarisse Iradukunda",
    role: "UI/UX Designer",
    initials: "CI",
    avatarColor: "bg-purple-100 text-purple-600",
    quote:
      "As a designer, I wasn't sure open source was for me. OSK changed that. My contributions to the community projects have become my strongest portfolio pieces and led to a freelance opportunity.",
  },
  {
    id: 4,
    name: "Emile Nshimyimana",
    role: "Backend Engineer, Rwanda Coding Academy",
    initials: "EN",
    avatarColor: "bg-orange-100 text-orange-600",
    quote:
      "The hackathons OSK runs are top tier. You work on real problems, get real feedback, and build real connections. I met my current co-founder at an OSK event.",
  },
  {
    id: 5,
    name: "Solange Mukamana",
    role: "Technical Writer & Contributor",
    initials: "SM",
    avatarColor: "bg-pink-100 text-pink-600",
    quote:
      "OSK showed me that contribution isn't just about code. My documentation work has helped dozens of new contributors get started. It's incredibly fulfilling to give back to the community.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const visibleCount = 3; // how many cards to show on large screens
  const getVisible = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(testimonials[(current + i) % testimonials.length]);
    }
    return result;
  };

  return (
    <section className="py-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-5">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary-colour/40 bg-primary-colour/10 text-primary-colour text-xs font-semibold tracking-widest uppercase">
            Community Voices
          </span>
        </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-heading">
            What Our Contributors Say
          </h2>
          <p className="mt-4 text-text-supporting text-base md:text-lg max-w-2xl mx-auto">
            Real stories from real people who've grown through Open Source Kigali.
          </p>
        </div>

        {/* Cards — hidden on mobile, show one; show 3 on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getVisible().map((t, i) => (
            <div
              key={`${t.id}-${current}-${i}`}
              className={`bg-gray-50 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 transition-all duration-300 ${
                i === 0 ? "block" : i === 1 ? "hidden md:flex" : "hidden lg:flex"
              }`}
            >
              <Quote size={28} className="text-blue-400" />
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 mt-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${t.avatarColor}`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center mt-10 gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? "bg-blue-500" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
