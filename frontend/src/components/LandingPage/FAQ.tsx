import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import coachImg from '../../assets/images/People.jpeg' // swap for a real avatar if available

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "Do I need prior experience to join Open Source Kigali?",
    answer:
      "Not at all. OSK is open to everyone — from complete beginners to seasoned engineers. We have beginner-friendly issues labelled 'Good First Issue', structured onboarding, and mentors who will guide you through your first contribution step by step.",
  },
  {
    id: 2,
    question: "How is OSK different from just learning on YouTube or Udemy?",
    answer:
      "Passive learning gives you knowledge; OSK gives you experience. You'll work on real projects used by real people, collaborate with a team, get your code reviewed, and build a GitHub profile that shows employers what you can actually do — not just what courses you've completed.",
  },
  {
    id: 3,
    question: "I'm a designer or technical writer, not a developer. Is there a place for me?",
    answer:
      "Absolutely. Open source isn't only about code. We actively need UI/UX designers to improve interfaces, technical writers to write documentation and tutorials, and community moderators to keep things running smoothly. Every role contributes directly to project quality.",
  },
  {
    id: 4,
    question: "How much time do I need to commit each week?",
    answer:
      "There's no hard minimum. Even a few hours a week is enough to make meaningful contributions. We have weekly technical sessions (Wednesday evenings), monthly meetups, and quarterly hackathons — but you can participate at whatever pace works for your schedule.",
  },
  {
    id: 5,
    question: "What happens after I join? Where do I start?",
    answer:
      "Once you join, you'll be welcomed into our Discord/WhatsApp community, paired with an onboarding guide, and pointed toward beginner issues on GitHub. Our community manager and mentors will help you find the right project and make your first contribution within your first two weeks.",
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <section className="py-20 px-4 md:px-20 bg-gray-50">
      <div className="max-w-3xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-5">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary-colour/40 bg-primary-colour/10 text-primary-colour text-xs font-semibold tracking-widest uppercase">
            Clear the Confusion
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-heading text-center mb-4">
          Frequently Asked Questions
        </h2>

        {/* Subtitle */}
        <p className="text-center text-text-supporting text-base md:text-lg mb-12 mx-auto">
          Everything you need to know about joining OSK, contributing to projects,
          and what to expect from the community.
        </p>

        {/* Accordion */}
        <div className="flex flex-col gap-3 mb-8">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-shadow duration-200 hover:shadow-sm"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-gray-900 font-medium text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <span className="shrink-0 w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                {/* Animated answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-gray-500 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="bg-white rounded-2xl border border-gray-100 flex flex-col sm:flex-row items-center justify-between px-6 py-5 gap-4 overflow-hidden relative">
          {/* Left accent border */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-colour rounded-l-2xl" />

          <div className="flex items-center gap-4 pl-4">
            {/* Avatar */}
            <img
              src={coachImg}
              alt="Community team"
              className="w-12 h-12 rounded-full object-cover shrink-0"
            />
            <div>
              <p className="font-semibold text-gray-900 text-sm sm:text-base">
                Still have questions?
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                Can't find the answer you're looking for? Let's chat.
              </p>
            </div>
          </div>

          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 bg-primary-colour text-white text-sm font-medium rounded-full hover:bg-gray-700 transition-colors duration-200"
          >
            Message the Community
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
