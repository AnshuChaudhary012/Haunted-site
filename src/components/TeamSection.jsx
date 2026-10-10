import t1 from "../assets/images/t1.png";
import t2 from "../assets/images/t2.png";
import t3 from "../assets/images/t3.png";

const TEAM_MEMBERS = [
  { img: t1, name: "Prime Bullister", role: "Pruduct Designer" },
  { img: t2, name: "Prime Bullister", role: "Pruduct Designer" },
  { img: t3, name: "Prime Bullister", role: "Pruduct Designer" },
];

export default function TeamSection() {
  return (
    <section id="team" className="our-team pb-10.5 pt-20 lg:pt-30.25">
      <h2 className="text-4xl sm:text-[50px] text-center mb-8 font-normal">Our Team</h2>
      <div className="max-w-261 w-full px-4 mx-auto flex justify-between flex-wrap max-md:flex max-md:justify-center gap-8">
        {TEAM_MEMBERS.map((member, idx) => (
          <div key={idx} className="flex flex-col max-w-77.75 w-full gap-5 sm:gap-8">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="flex gap-2 flex-center flex-col items-center">
              <p className="text-2xl sm:text-[30px] font-normal leading-tight text-center">{member.name}</p>
              <p className="text-[18px] text-gray-300">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
