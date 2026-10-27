import { createElement } from "react";
import artCollectionImage from "../assets/images/c1.png";
import specialBulliesImage from "../assets/images/c2.png";
import breedingImage from "../assets/images/c3.png";
import digitalMarketsImage from "../assets/images/c4.png";
import merchImage from "../assets/images/c5.png";
import charityImage from "../assets/images/c6.png";
import instaIcon from "../assets/images/insa.svg";
import xIcon from "../assets/images/x.svg";
import discordIcon from "../assets/images/discord.svg";
import teamMemberOneImage from "../assets/images/t1.png";
import teamMemberTwoImage from "../assets/images/t2.png";
import teamMemberThreeImage from "../assets/images/t3.png";

// Card artwork and descriptions for the cards section.
export const CARD_DATA_LIST = [
  {
    image: artCollectionImage,
    title: "ART COLLECTION",
    description:
      "Complete the art collection in full with +70 unique traits, and publish our rarity chart on our webpage.",
  },
  {
    image: specialBulliesImage,
    title: "SPECIAL BULLIES",
    description: [
      "20 Buddyblies ",
      createElement(
        "span",
        { className: "", key: "quantity" },
        "(out of 10,000) will have a very",
      ),
      "special and ersonalized resembling of famous people who are into NFTs {those will be available \n after the minting}.",
    ],
  },
  {
    image: breedingImage,
    title: "BREEDING",
    description:
      "Our BuddyBullies will not come alone, as we will announce the breeding function after the minting and you will be able to get a PuppyBully { for free}.",
  },
  {
    image: digitalMarketsImage,
    title: "DIGITALMARKETS",
    description:
      "Communicate with all the\n digital markets available in the  Solana NFT world for getting our collection successfully listed.",
  },
  {
    image: merchImage,
    title: "MERCH",
    description:
      "The team is working on the future merh that will be available for the community members directly on our webpage.",
  },
  {
    image: charityImage,
    title: "CHARITY",
    description:
      "We will be giving 30% of the royalties to charity permanently and will keep spending on marketing, promotions, and partnerships. 50% of the royalties will go back to the community as rewards.",
  },
];

// Copy and labels used by the hero, mint, interstitial, and footer sections.
export const HERO_CONTENT = {
  heading: "Vitae nunc,",
  emphasizedHeading: "blandit a odio",
  description:
    "Semper in egestas risus id tempus. Pellentesque dolor eros sollicitudin feugiat ut odio semper. Mattis fermentum eget ut vestibulum dolor diam",
  buttonLabel: "Get Started",
};

export const MINT_CONTENT = {
  heading: "Mint Your Bat",
  buttonLabel: "Coming soon",
};

export const INTERSTITIAL_CONTENT =
  "And this just the begining , the team is working on more suprises for our community. Buddybullies stronger together !!";

export const FOOTER_CONTENT = {
  heading: "JOIN US",
  logoLabel: "LOGO",
  description:
    "Aenean arcu sed rhoncus sapien euismod cursus morbi lacus, blandit. Placerat tortor duis fames cras pellentesque dui adipiscing neque gravida. Sociis neque consectetur id quis pharetra.",
  email: "Email@gmail.com",
  resourcesHeading: "Resources",
  communityHeading: "Community",
};

// Questions and answers displayed by the FAQ section.
export const FAQ_ITEMS = [
  {
    question: "What’s the blockchain the buddybullies call home?",
    answer:
      "Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.",
  },
  {
    question: "What’s the blockchain the buddybullies call home?",
    answer:
      "Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.",
  },
  {
    question: "What’s the blockchain the buddybullies call home?",
    answer:
      "Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.",
  },
  {
    question: "What’s the blockchain the buddybullies call home?",
    answer:
      "Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.",
  },
  
];

// Footer resource links and shared social links used by footer and mint sections.
export const FOOTER_RESOURCE_LINKS = [
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQs", href: "#faq" },
  { label: "Mint your Bully", href: "#minting" },
];

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: instaIcon,
  },
  {
    label: "X",
    href: "https://x.com",
    icon: xIcon,
  },
  {
    label: "Discord",
    href: "https://discord.com",
    icon: discordIcon,
  },
];
// Display and previous prices for public and whitelist minting.
export const MINT_PRICES = [
  { label: "Minting: 1,5 SOL", previousPrice: "Before 2 SOL" },
  { label: "Whitelist: 0,88 SOL", previousPrice: "Before 1 SOL" },
];
// Main navigation links, including the join-us footer anchor.
export const NAV_LINKS = [
  { label: "Minting", href: "#minting" },
  { label: "Road Map", href: "#roadmap" },
  { label: "Faq", href: "#faq" },
  { label: "Team", href: "#team" },
  { label: "Join Us", href: "#joinUs" },
];
// Roadmap milestones and their desktop text alignment.
export const ROADMAP_ITEMS = [
  {
    id: "launch",
    quarter: "Q-1, 2022",
    desc: "Blandit sed penatibus elit tortor fermentum velit donec. Id eleifend volutpat dolor netus auctor at. Volutpat sed auctor non in commodo, felis viverra risus tristique.",
    isReversed: true,
  },
  {
    id: "community",
    quarter: "Q-4, 2021",
    desc: "Blandit sed penatibus elit tortor fermentum velit donec. Id eleifend volutpat dolor netus auctor at. Volutpat sed auctor non in commodo, felis viverra risus tristique.",
    isReversed: false,
  },
  {
    id: "growth",
    quarter: "Q-1, 2022",
    desc: "Blandit sed penatibus elit tortor fermentum velit donec. Id eleifend volutpat dolor netus auctor at. Volutpat sed auctor non in commodo, felis viverra risus tristique.",
    isReversed: true,
  },
];

// Team portraits, names, and roles.
export const TEAM_MEMBERS = [
  { img: teamMemberOneImage, name: "Prime Bullister", role: "Pruduct Designer" },
  { img: teamMemberTwoImage, name: "Solvador Bulli", role: "Artist" },
  { img: teamMemberThreeImage, name: "Meta Bully", role: "Developer" },
];
