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
      data-aos="fade-up"
      className="bg-center bg-cover bg-no-repeat pt-24 sm:pt-32 lg:pt-39.75 pb-10 sm:pb-14"
    >
      <div className="max-w-341.25 mx-auto px-4">
        <h2 className="text-4xl sm:text-[50px] text-center font-semibold leading-136">
          {FOOTER_CONTENT.heading}
        </h2>
        <div className="flex justify-between flex-col md:flex-row gap-10">
          <div className="mt-16 sm:mt-20 md:mt-26.5 max-w-97 w-full">
            <span className="block mb-5.25 text-[30px] font-medium leading-9.25 tracking-wider cursor-pointer">
              {FOOTER_CONTENT.logoLabel}
            </span>
            <p className="text-base mb-5 text-white/60 text-[16px] leading-150">
              {FOOTER_CONTENT.description}
            </p>
            <a
              href={`mailto:${FOOTER_CONTENT.email}`}
              className="link-underline text-white hover:text-blue transition-colors font-normal text-base leading-6 h-6"
            >
              {FOOTER_CONTENT.email}
            </a>
          </div>

          <div className="max-w-84 w-full flex justify-between pt-0 md:pt-26.5">
            <div className="flex  justify-between w-full ">
              <div className="flex flex-col gap-2.5">
                <p className="font-medium text-base">
                    {FOOTER_CONTENT.resourcesHeading}
                  </p>
                <div className="flex flex-col gap-1.5">
                
                  {FOOTER_RESOURCE_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="link-underline hover:text-blue transition-colors text-sm font-normal leading-4.75"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-5.25">
                <p className="text-base font-medium">
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
                      className="cursor-pointer"
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
