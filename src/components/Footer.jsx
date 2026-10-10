import footerBg from "../assets/images/footer-bg.png";
import instaIcon from "../assets/images/insa.svg";
import xIcon from "../assets/images/x.svg";
import discordIcon from "../assets/images/discord.svg";

export default function Footer() {
  return (
    <footer
      style={{ backgroundImage: `url(${footerBg})` }}
      className="bg-center bg-cover bg-no-repeat pt-24 sm:pt-32 lg:pt-44.75 pb-10 sm:pb-14"
    >
      <div className="max-w-341.25 mx-auto px-4">
        <h2 className="text-center text-white text-4xl sm:text-[50px] font-normal">
          JOIN US
        </h2>
        <div className="flex justify-between flex-col md:flex-row gap-10">
          <div className="mt-16 sm:mt-20 md:mt-26.5 max-w-97 w-full">
            <span className="block mb-5.25 text-xl font-bold tracking-wider cursor-pointer">
              LOGO
            </span>
            <p className="text-base mb-4 text-white/80 leading-relaxed">
              Aenean arcu sed rhoncus sapien euismod cursus morbi lacus,
              blandit. Placerat tortor duis fames cras pellentesque dui
              adipiscing neque gravida. Sociis neque consectetur id quis
              pharetra.
            </p>
            <a
              href="mailto:Email@gmail.com"
              className="text-white hover:text-blue transition-colors underline"
            >
              Email@gmail.com
            </a>
          </div>

          <div className="max-w-84 w-full flex justify-between pt-0 md:pt-26.5">
            <div className="flex flex-wrap justify-between w-full gap-8">
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-lg mb-2">Resources</p>
                <a
                  href="#roadmap"
                  className="hover:text-blue transition-colors"
                >
                  Roadmap
                </a>
                <a href="#faq" className="hover:text-blue transition-colors">
                  FAQs
                </a>
                <a
                  href="#minting"
                  className="hover:text-blue transition-colors"
                >
                  Mint your Bully
                </a>
              </div>
              <div className="flex flex-col gap-5.25">
                <p className="font-semibold text-lg">Community</p>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <img
                      src={instaIcon}
                      alt="insta"
                      className="w-6 h-6 hover:opacity-80 transition-opacity"
                    />
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X"
                  >
                    <img
                      src={xIcon}
                      alt="x.com"
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
                      alt="discord"
                      className="w-6 h-6 hover:opacity-80 transition-opacity"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
