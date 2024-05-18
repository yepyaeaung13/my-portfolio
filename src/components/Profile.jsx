import React from "react";
import profilePhoto from "../assets/profile-pic.png";
const Profile = () => {
  return (
    <div className="flex items-center gap-[1vw]">
      <img src={profilePhoto} alt="Profile Picture" className="w-[2vw]" />
      <h1 className="text-white font-serif text-nowrap font-semibold tracking-widest text-[1.5vw]">
        YE PYAE AUNG
      </h1>
    </div>
  );
};

export default Profile;
