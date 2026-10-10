import csImg from "../assets/images/cs_img.png";
import instaIcon from "../assets/images/insa.svg";
import xIcon from "../assets/images/x.svg";
import discordIcon from "../assets/images/discord.svg";

export default function MintSection() {
  return (
    <section id="minting" className="coming-soon mt-6.5 pb-20 lg:pb-31.75">
      <div className="max-w-302.5 w-full mx-auto px-4 flex justify-between flex-col lg:flex-row max-lg:gap-5 max-lg:items-center">
        <div className="left max-lg:max-w-fit">
          <img
            src={csImg}
            alt="img_for_sec_section"
            width="574"
            height="574"
            className="w-full max-w-143.5 h-auto"
          />
        </div>
        <div className="right w-full max-w-84.5">
          <h2 className="text-3xl sm:text-[42px] lg:text-[50px] font-semibold mb-8 lg:mb-12">
            Mint Your Bat
          </h2>
          <div className="mb-5.25">
            <p className="font-medium text-xl sm:text-[30px]">
              Minting: 1,5 SOL
            </p>
            <p className="font-normal text-[16px]">Before 2 SOL</p>
          </div>
          <div className="mb-5.25">
            <p className="font-medium text-xl sm:text-[30px]">
              Whitelist: 0,88 SOL
            </p>
            <p className="font-normal text-[16px]">Before 2 SOL</p>
          </div>
          <button
            type="button"
            className="group mt-10 lg:mt-18.25 mb-10 lg:mb-15.5 text-nowrap cursor-pointer relative h-11 w-37.25 bg-white text-dark overflow-hidden rounded-[23px] text-lg font-semibold leading-100 transition-all duration-300 ease-out border border-transparent hover:-translate-y-1 hover:scale-[1.03] hover:border-white active:translate-y-0 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-4 focus-visible:ring-offset-[#000A1A]"
          >
            <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-dark opacity-0 transition-all duration-500 ease-out group-hover:h-full group-hover:w-full group-hover:opacity-100 group-active:scale-95" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Coming soon
            </span>
          </button>
          <div className="svgs flex gap-[23.5px]">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img
                src={instaIcon}
                alt="Instagram"
                className="w-6 h-6 hover:opacity-80 transition-opacity"
              />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
            >
              <img
                src={xIcon}
                alt="X"
                className="w-6 h-6 hover:opacity-80 transition-opacity"
              />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
            >
              <img
                src={discordIcon}
                alt="Discord"
                className="w-6 h-6 hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
