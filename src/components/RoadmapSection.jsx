import roadmapLine from "../assets/images/roadmap-line.svg";
import { ROADMAP_ITEMS } from "../utils/helper";

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="roadmap">
      <h2 data-aos="fade-up" className="section-main-heading text-4xl sm:text-[50px] text-center mb-12 lg:mb-15.75 font-semibold leading-17">
        Roadmap
      </h2>
      <div className="max-w-238.5 mx-auto px-4">
        {ROADMAP_ITEMS.map((item, idx) => (
          <div
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={idx * 120}
            className={`relative flex items-start md:items-center pb-12 md:pb-36.5 mb-8 last:mb-0 md:mb-0 ${
              item.isReversed ? "md:flex-row-reverse" : ""
            }`}
          >
            {idx < ROADMAP_ITEMS.length - 1 && (
              <img
                src={roadmapLine}
                alt="roadmap_img"
                aria-hidden="true"
                className="absolute left-4 md:left-1/2 top-5 sm:top-8 h-[calc(100%+2rem)] w-1 -translate-x-1/2 md:top-1 md:h-full"
              />
            )}

            <div
              className={`w-full pl-12 sm:pl-24 md:w-1/2 ${
                item.isReversed
                  ? "md:pl-16 md:pr-0"
                  : "md:pr-16 md:pl-0 md:text-right"
              }`}
            >
              <h3 className="text-white font-semibold text-xl sm:text-[30px] leading-11.25">
                {item.quarter}
              </h3>
              <p
                className={`mt-3 sm:mt-6 text-sm sm:text-base text-white/70 leading-181 ${
                  !item.isReversed ? "md:ml-auto" : ""
                }`}
              >
                {item.desc}
              </p>
            </div>
            <span className="absolute size-10 sm:size-16.25 bg-blue/10 rounded-full left-4 md:left-1/2 top-0 md:top-[7%] -translate-x-1/2 md:-translate-y-1/2">
              <span className="bg-blue size-6 sm:size-10.75 absolute rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[3.23px] border-white" />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
