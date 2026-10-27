import { useState } from "react";
import { NavbarIcon } from "../common/Icons";
import { FAQ_ITEMS } from "../utils/helper";
export default function FaqSection() {
  // Index 0 is initially open matching the original HTML
  const [openIndex, setOpenIndex] = useState(0);
  const toggleFaq = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };
  return (
    <section id="faq" className="faq">
      <h2
        data-aos="fade-up"
        className="text-4xl sm:text-[50px] text-center mb-8 sm:mb-11.75 font-semibold leading-136"
      >
        FAQs
      </h2>
      <div className="faq-wrapper mx-auto flex w-[calc(100%-32px)] max-w-207.5 flex-col gap-5">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={Math.min(idx * 80, 400)}
              className="faq-item"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
                id={`faq-question-${idx}`}
                className="faq-question max-w-207.5 w-full flex items-center justify-between gap-4 bg-[#06162B] rounded-2xl sm:rounded-full px-5 sm:px-8 py-4 sm:py-5 text-white cursor-pointer text-left transition-all duration-300 hover:bg-[#0a2340] hover:shadow-[0_0_24px_rgba(0,157,255,0.16)] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/50"
              >
                <span className="font-montserrat leading-120 text-base sm:text-20 font-medium">
                  {item.question}
                </span>
                <NavbarIcon
                  name="chevronDown"
                  className={`faq-icon w-5 h-5 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${idx}`}
                role="region"
                aria-labelledby={`faq-question-${idx}`}
                onClick={() => toggleFaq(idx)}
                className={`faq-answer px-7.5 pt-5 pb-5 cursor-pointer ${
                  isOpen ? "" : "hidden"
                }`}
              >
                <p className="font-montserrat text-white/60 leading-120 text-base font-medium">
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
