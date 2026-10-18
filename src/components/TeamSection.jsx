import { TEAM_MEMBERS } from "../utils/helper";

export default function TeamSection() {
  return (
    <section id="team" className="our-team pb-10.5 pt-20 lg:pt-30.25">
      <h2 data-aos="fade-up" className="text-4xl sm:text-[50px] text-center mb-8 sm:mb-11.75 font-semibold leading-136">
        Our Team
      </h2>
      <div className="max-w-261 w-full px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12.75 justify-items-center">
        {TEAM_MEMBERS.map((member) => (
          <div
            key={member.img}
            data-aos="zoom-in-up"
            className="flex flex-col max-w-77.75 w-full gap-5 sm:gap-8"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="flex gap-2 flex-center flex-col items-center">
              <p className="text-2xl sm:text-[30px] font-normal leading-tight text-center">
                {member.name}
              </p>
              <p className="text-[18px] text-gray-300">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
