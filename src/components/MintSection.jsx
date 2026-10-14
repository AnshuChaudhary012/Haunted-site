import csImg from "../assets/images/cs_img.png";
import { MINT_CONTENT, MINT_PRICES, SOCIAL_LINKS } from "../utils/helper";

export default function MintSection() {
  return (
    <section id="minting" className="coming-soon pt-6.5 pb-20 lg:pb-31.75">
      <div className="max-w-302.5 w-full mx-auto px-4 flex justify-between flex-col lg:flex-row max-lg:gap-5 max-lg:items-center">
        <div className="left max-lg:max-w-fit">
          <img
            src={csImg}
            alt="img_for_sec_section"
            width="574"
            height="574"
            className="w-full max-w-143.5 h-auto "
          />
        </div>
        <div className="right w-full max-w-84.5 mt-32.5">
          <h2 className="text-3xl sm:text-[42px] lg:text-[50px] font-semibold mb-8 lg:mb-12 leading-136">
            {MINT_CONTENT.heading}
          </h2>
          {MINT_PRICES.map((price) => (
            <div className="mb-5.25" key={price.label}>
              <p className="font-medium text-xl sm:text-[30px] leading-136">
                {price.label}
              </p>
              <p className="font-normal text-[16px] leading-136 text-white/50 line-through">
                {price.previousPrice}
              </p>
            </div>
          ))}
          <button
            type="button"
            className="group mt-10 lg:mt-15.75 mb-10 lg:mb-13 text-nowrap cursor-pointer relative h-11 w-37.25 bg-white text-dark overflow-hidden rounded-[23px] text-lg font-semibold leading-100 transition-all duration-300 ease-out border border-transparent hover:-translate-y-1 hover:scale-[1.03] hover:border-white active:translate-y-0 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-4 focus-visible:ring-offset-[#000A1A]"
          >
            <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-dark opacity-0 transition-all duration-500 ease-out group-hover:h-full group-hover:w-full group-hover:opacity-100 group-active:scale-95" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              {MINT_CONTENT.buttonLabel}
            </span>
          </button>
          <div className="svgs flex gap-[23.5px]">
            {SOCIAL_LINKS.map((socialLink) => (
              <a
                key={socialLink.label}
                href={socialLink.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  socialLink.label === "X" ? "X / Twitter" : socialLink.label
                }
              >
                <img
                  src={socialLink.icon}
                  alt={socialLink.label}
                  className="w-8 h-8 hover:opacity-80 transition-opacity"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
