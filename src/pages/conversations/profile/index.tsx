import React from "react";
import ProfileData from "./profileData";
import RingTone from "./ringTone";
import AdvanceSetting from "./advanceSetting";

const Profile = () => {
  return (
    <div className="mx-20 my-5 h-[100vh] overflow-y-scroll scrollbar-hide pb-[5%] ">
      <ProfileData />
      <RingTone />
      <AdvanceSetting />
    </div>
  );
};

export default Profile;
