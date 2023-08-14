import React from "react";
import Image from "next/image";

interface IStaffCard {
  imageSrc: string;
  name: string;
  tag: string;
  role: string;
}

const StaffCard = ({ imageSrc, name, tag, role }: IStaffCard) => {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white/20">
      <Image className="w-full" src={imageSrc} alt="Staff" width={500} height={500} />
      <div className="px-6 py-4">
        <div className="font-bold text-white/90 text-xl">{name}</div>
        <div className="text-white/50 text-sm mb-3">{tag}</div>
        <p className="text-white/40 text-base">{role}</p>
      </div>
    </div>
  );
};

const Staffs = () => {
  const staffMembers = [
    {
      name: "Arken",
      tag: "_rac.14",
      role: "Founder of SegaMC",
      imageSrc: "https://cdn.discordapp.com/avatars/971080037942063114/067b1f066a12ae592384afc67803dfdf.png?size=1024",
    },
    {
      name: "wxlked",
      tag: "wxlked.",
      role: "Investor, Owner of SegaMC",
      imageSrc: "https://cdn.discordapp.com/avatars/997609984575668294/d82ee22c9ed8115878de69c5a10c3211.png?size=1024",
    },
    {
      name: "jack",
      tag: "jackaroo.x",
      role: "Senior/Main Developer",
      imageSrc: "https://cdn.discordapp.com/avatars/318272839918813184/69286f3771da379a4de20fa12ded1656.png?size=1024",
    },
    {
      name: "Hitesh",
      tag: "hvlxh",
      role: "Website & Bot Developer",
      imageSrc: "https://cdn.discordapp.com/avatars/749560311312285696/902d3239204c82d4bf4e2835c6ed6d7f.png?size=1024",
    },
  ];

  return (
    <div className="bg-white/10 mx-4 mb-4 max-sm:py-3 py-4 rounded-lg">
      <h1 className="text-center text-white font-bold text-3xl">Staffs</h1>
      <div className="px-5 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {staffMembers.map((staff, index) => (
          <StaffCard
            key={index}
            name={staff.name}
            tag={staff.tag}
            role={staff.role}
            imageSrc={staff.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Staffs;
