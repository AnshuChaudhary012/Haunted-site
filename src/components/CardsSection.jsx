import { CARD_DATA_LIST } from "../utils/helper";

export default function CardsSection() {
  return (
    <section className="phase-two mx-auto max-w-341.5 px-5 pb-32.75 max-lg:pb-20 max-md:pb-15">
      <div className="cards-grid row-p-two -m-0.75 gap-x-6 gap-y-10.25">
        {CARD_DATA_LIST.map((card, idx) => (
          <article
            key={card.title}
            data-aos="zoom-out-up"
            data-aos-duration="500"
            data-aos-delay={Math.min(idx * 100, 400)}
            className="min-h-127.75 w-full cursor-pointer rounded-[20px] bg-space-blue p-[39px_39px_34px_40px] max-xl:relative max-lg:flex max-lg:flex-col max-lg:items-center max-sm:min-h-0 bg-dark-blue"
          >
            <img
              className="h-auto w-29.25"
              src={card.image}
              alt={card.title}
              width="117"
              height="145"
            />
            <h2 className="mb-6.25 mt-11 text-3xl font-semibold leading-100 text-white max-md:my-5 max-md:text-2xl max-sm:text-center">
              {card.title}
            </h2>
            <p
              className={`text-xl whitespace-pre-line font-medium leading-150 text-white/70 max-lg:text-center max-md:text-base ${
                idx === 1 ? "max-sm:text-sm max-sm:leading-5" : ""
              }`}
            >
              {card.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
