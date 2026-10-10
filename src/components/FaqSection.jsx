import { useState } from "react";
const FAQ_ITEMS = [
  {
    question: "What’s the blockchain the buddybullies call home?",
    answer:
      "Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis.",
  },
  {
    question: "What’s the blockchain the buddybullies call home?",
    answer:
      "Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis.",
  },
  {
    question: "What’s the blockchain the buddybullies call home?",
    answer:
      "Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis.",
  },
  {
    question: "What’s the blockchain the buddybullies call home?",
    answer:
      "Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis.",
  },
];
export default function FaqSection() {
  // Index 0 is initially open matching the original HTML
  const [openIndex, setOpenIndex] = useState(0);
  const toggleFaq = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };
  return (
    <section id="faq" className="faq">
      <h2 className="text-4xl sm:text-[50px] text-center mb-8 sm:mb-11.75 font-normal">FAQs</h2>
      <div className="faq-wrapper max-w-207.5 mx-auto flex flex-col gap-6.5 px-4">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="faq-item">
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
                id={`faq-question-${idx}`}
                className="faq-question w-full flex items-center justify-between gap-4 bg-[#06162B] rounded-2xl sm:rounded-full px-5 sm:px-8 py-4 sm:py-5 text-white cursor-pointer text-left transition-all duration-300 hover:bg-[#0a2340] hover:shadow-[0_0_24px_rgba(0,157,255,0.16)] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/50"
              >
                <span className="text-base sm:text-20 font-medium leading-120">
                  {item.question}
                </span>
                <svg
                  className={`faq-icon w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </button>
              <div
                id={`faq-answer-${idx}`}
                role="region"
                aria-labelledby={`faq-question-${idx}`}
                onClick={() => toggleFaq(idx)}
                className={`faq-answer px-7.5 pt-5 pb-5 cursor-pointer ${isOpen ? "" : "hidden"
                  }`}
              >
                <p className="text-white/60 leading-relaxed text-sm">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
