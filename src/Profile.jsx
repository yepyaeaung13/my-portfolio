import React from "react";
import profile from "./assets/profile-pic.png";
const Profile = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={profile} alt="Profile Picture" className="w-10" />
      <h1 className="text-white font-semibold tracking-widest">YE PYAE AUNG</h1>
    </div>
  );
};

export default Profile;
