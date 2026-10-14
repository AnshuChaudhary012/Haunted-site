import footerBg from "../assets/images/footer-bg.png";
import {
  FOOTER_CONTENT,
  FOOTER_RESOURCE_LINKS,
  SOCIAL_LINKS,
} from "../utils/helper";

export default function Footer() {
  return (
    <footer
      style={{ backgroundImage: `url(${footerBg})` }}
      className="bg-center bg-cover bg-no-repeat pt-24 sm:pt-32 lg:pt-44.75 pb-10 sm:pb-14"
    >
      <div className="max-w-341.25 mx-auto px-4">
        <h2 className="text-center text-white text-4xl sm:text-[50px] font-normal">
          {FOOTER_CONTENT.heading}
        </h2>
        <div className="flex justify-between flex-col md:flex-row gap-10">
          <div className="mt-16 sm:mt-20 md:mt-26.5 max-w-97 w-full">
            <span className="block mb-5.25 text-xl font-bold tracking-wider cursor-pointer">
              {FOOTER_CONTENT.logoLabel}
            </span>
            <p className="text-base mb-4 text-white/80 leading-relaxed">
              {FOOTER_CONTENT.description}
            </p>
            <a
              href={`mailto:${FOOTER_CONTENT.email}`}
              className="text-white hover:text-blue transition-colors underline"
            >
              {FOOTER_CONTENT.email}
            </a>
          </div>

          <div className="max-w-84 w-full flex justify-between pt-0 md:pt-26.5">
            <div className="flex flex-wrap justify-between w-full gap-8">
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-lg mb-2">
                  {FOOTER_CONTENT.resourcesHeading}
                </p>
                {FOOTER_RESOURCE_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="hover:text-blue transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-5.25">
                <p className="font-semibold text-lg">
                  {FOOTER_CONTENT.communityHeading}
                </p>
                <div className="flex gap-4">
                  {SOCIAL_LINKS.map((socialLink) => (
                    <a
                      key={socialLink.label}
                      href={socialLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={socialLink.label}
                    >
                      <img
                        src={socialLink.icon}
                        alt={socialLink.label}
                        className="w-6 h-6 hover:opacity-80 transition-opacity"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
