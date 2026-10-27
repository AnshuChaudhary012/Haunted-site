import { TEAM_MEMBERS } from "../utils/helper";

export default function TeamSection() {
  return (
    <section id="team" className="our-team pb-0 pt-20 lg:pt-30.25">
      <h2 data-aos="fade-up" className="section-main-heading text-4xl sm:text-[50px] text-center mb-5 sm:mb-6.5 font-semibold leading-136">
        Our Team
      </h2>
      <div className="team-grid max-w-261 w-full px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12.75 justify-items-center">
        {TEAM_MEMBERS.map((member) => (
          <div
            key={member.img}
            data-aos="zoom-in-up"
            className="flex flex-col max-w-77.75 w-full"
          >
            <img
              src={member.img}
              alt={member.name}
              width={311}
              height={312}
              className="mb-5 sm:mb-8 block h-78 w-77.75 max-w-full object-cover rounded-lg"
            />
            <div className="flex gap-2 flex-center flex-col items-center">
              <p className="text-2xl sm:text-[30px] font-semibold leading-136 text-center">
                {member.name}
              </p>
              <p className="text-[18px] text-gray-300 font-normal leading-136">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
