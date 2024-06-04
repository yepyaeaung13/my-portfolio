import React from "react";
import profilePhoto from "/profile-pic.png";
const Profile = () => {
  return (
    <div className="flex items-center gap-[1vw]">
      <img
        src={profilePhoto}
        alt="Profile Picture"
        className="md:w-[2vw] w-[6vw]"
      />
      <h1 className="text-white font-serif text-nowrap font-semibold tracking-widest md:text-[1.5vw] text-[3vw]">
        YE PYAE AUNG
      </h1>
    </div>
  );
};

export default Profile;
