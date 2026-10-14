import { INTERSTITIAL_CONTENT } from "../utils/helper";

export default function SimpleTextSection() {
  return (
    <section className="simple-text">
      <p className="text-xl sm:text-[30px] text-center max-w-196.5 w-full mx-auto font-medium px-5 pt-24 lg:pt-35.25 pb-20 lg:pb-27.5 leading-relaxed">
        {INTERSTITIAL_CONTENT}
      </p>
    </section>
  );
}
