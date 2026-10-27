import { HERO_CONTENT } from "../utils/helper";

export default function Hero() {
  return (
    <section className="hero pt-24 sm:pt-32 lg:pt-[261.38px] pb-24 sm:pb-32 lg:pb-80.25">
      <div className="section-container text-white">
        <div className="max-w-136.75 max-sm:mx-auto max-sm:text-center" data-aos="fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-70 font-normal leading-tight lg:leading-124 mb-6.75">
            {HERO_CONTENT.heading} <br />{" "}
            <span className="font-bold">{HERO_CONTENT.emphasizedHeading}</span>
          </h1>
          <p className="text-base sm:text-lg ms-0.75 lg:text-20 font-medium leading-relaxed lg:leading-205 text-white/70">
            {HERO_CONTENT.description}
          </p>
          <button
            type="button"
            className="group ms-0.75 max-sm:mx-auto max-sm:block max-sm:w-30 lg:max-w-56.25 w-full mt-8 sm:mt-11.5 text-nowrap cursor-pointer relative h-14 sm:h-17.25 sm:w-63.75 bg-white text-dark overflow-hidden rounded-[45.5px] text-lg font-semibold leading-100 transition-all duration-300 ease-out border border-transparent hover:-translate-y-1 hover:border-white active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-4 focus-visible:ring-offset-[#000A1A]"
          >
            <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-dark opacity-0 transition-all duration-500 ease-out group-hover:h-full group-hover:w-full group-hover:opacity-100" />
            <span
              className="relative z-10 inline-block transition-colors duration-300 group-hover:text-white text-base lg:text-[25px] font-medium text-dark"
              style={{ height: "38px", lineHeight: "38px" }}
            >
              {HERO_CONTENT.buttonLabel}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
