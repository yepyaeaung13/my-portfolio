import React from "react";
import profilePhoto from "/profile-pic.png";
const Profile = () => {
  return (
    <div className="flex items-center gap-3">
      <img src={profilePhoto} alt="Profile Picture" className="md:w-8 w-6" />
      <h1 className="text-white font-serif text-nowrap font-semibold tracking-widest md:text-md text-sm">
        YE PYAE AUNG
      </h1>
    </div>
  );
};

export default Profile;
