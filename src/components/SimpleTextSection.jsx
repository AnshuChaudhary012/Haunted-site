import { INTERSTITIAL_CONTENT } from "../utils/helper";

export default function SimpleTextSection() {
  return (
    <section className="simple-text">
      <p data-aos="fade-up" className="text-xl sm:text-[30px] text-center max-w-200.5 w-full mx-auto font-medium px-5 mb-20 lg:mb-27.5 leading-150">
        {INTERSTITIAL_CONTENT}
      </p>
    </section>
  );
}
