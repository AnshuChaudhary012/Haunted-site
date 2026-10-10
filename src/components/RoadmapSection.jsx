import roadmapLine from "../assets/images/roadmap-line.svg";

const ROADMAP_ITEMS = [
  {
    id: "launch",
    quarter: "Q-1, 2022",
    desc: "Blandit sed penatibus elit tortor fermentum velit donec. Id eleifend volutpat dolor netus auctor at. Volutpat sed auctor non in commodo, felis viverra risus tristique.",
    isReversed: true,
  },
  {
    id: "community",
    quarter: "Q-4, 2021",
    desc: "Blandit sed penatibus elit tortor fermentum velit donec. Id eleifend volutpat dolor netus auctor at. Volutpat sed auctor non in commodo, felis viverra risus tristique.",
    isReversed: false,
  },
  {
    id: "growth",
    quarter: "Q-1, 2022",
    desc: "Blandit sed penatibus elit tortor fermentum velit donec. Id eleifend volutpat dolor netus auctor at. Volutpat sed auctor non in commodo, felis viverra risus tristique.",
    isReversed: true,
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="roadmap pt-20 lg:pt-32.75">
      <h2 className="text-4xl sm:text-[50px] text-center mb-12 lg:mb-15.75 font-normal">
        Roadmap
      </h2>
      <div className="max-w-234.5 mx-auto px-5">
        {ROADMAP_ITEMS.map((item, idx) => (
          <div
            key={item.id}
            className={`relative flex items-start md:items-center min-h-56 md:min-h-77 mb-8 last:mb-0 md:mb-0 ${
              item.isReversed ? "md:flex-row-reverse" : ""
            }`}
          >
            {idx < ROADMAP_ITEMS.length - 1 && (
              <img
                src={roadmapLine}
                alt=""
                aria-hidden="true"
                className="absolute left-4 md:left-1/2 top-5 sm:top-8 h-[calc(100%+2rem)] w-1 -translate-x-1/2 md:top-1/2 md:h-full"
              />
            )}

            <div
              className={`w-full pl-12 md:w-1/2 ${
                item.isReversed
                  ? "md:pl-10 md:pr-0"
                  : "md:pr-10 md:pl-0 md:text-right"
              }`}
            >
              <h3 className="text-white font-semibold text-xl sm:text-[30px]">
                {item.quarter}
              </h3>
              <p
                className={`mt-3 sm:mt-6 text-sm sm:text-base leading-relaxed text-gray-400 max-w-xs ${
                  !item.isReversed ? "md:ml-auto" : ""
                }`}
              >
                {item.desc}
              </p>
            </div>

            <span className="absolute size-10 sm:size-16.25 bg-blue/10 rounded-full left-4 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2">
              <span className="bg-blue size-6 sm:size-10.75 absolute rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[3.23px] border-white" />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
