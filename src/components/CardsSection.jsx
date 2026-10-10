import c1 from "../assets/images/c1.png";
import c2 from "../assets/images/c2.png";
import c3 from "../assets/images/c3.png";
import c4 from "../assets/images/c4.png";
import c5 from "../assets/images/c5.png";
import c6 from "../assets/images/c6.png";

const CARDS_DATA = [
  {
    img: c1,
    title: "ART COLLECTION",
    desc: "Complete the art collection in full with +70 unique traits, and publish our rarity chart on our webpage.",
    heightClass: "",
  },
  {
    img: c2,
    title: "SPECIAL BULLIES",
    desc: "20 Buddybullies {out of 10k} will have a very special and ersonalized resembling of famous people who are into NFTs {those will be available after the minting}.",
    heightClass: "",
  },
  {
    img: c3,
    title: "BREEDING",
    desc: "Our BuddyBullies will not come alone, as we will announce the breeding function after the minting and you will be able to get a PuppyBully { for free}.",
    heightClass: "",
  },
  {
    img: c4,
    title: "DIGITALMARKETS",
    desc: "Communicate with all the digital markets available in the Solana NFT world for getting our collection successfully listed.",
    heightClass: "",
  },
  {
    img: c5,
    title: "MERCH",
    desc: "The team is working on the future merch thet will be available for the community members directly on our webpage.",
    heightClass: "",
  },
  {
    img: c6,
    title: "CHARITY",
    desc: "We will be giving 30% of the royalties to charity permanently and we will keep spending on marketing, promotions and partnership.50% of the riyalties will go back to the community as rewards.",
    heightClass: "",
  },
];

export default function CardsSection() {
  return (
    <section className="cards">
      <div className="max-w-339.5 w-full mx-auto px-4">
        <div className="cards-in grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10.25">
          {CARDS_DATA.map((card, index) => (
            <div
              key={index}
              className={`card w-full min-h-96 p-6 sm:p-8 lg:p-10 rounded-[20px] bg-dark-blue flex flex-col`}
            >
              <img
                className="mb-8 w-[90px] h-auto sm:w-[117px]"
                src={card.img}
                alt={card.title}
                width="117"
                height="145"
              />
              <h3 className="text-2xl sm:text-[30px] mb-5 leading-tight font-normal">
                {card.title}
              </h3>
              <p className="text-base font-normal text-white/90">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
