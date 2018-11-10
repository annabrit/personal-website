import React from 'react';
import selfie from './IMG_4554.JPG';
import './ProfilePic.scss';
const ProfilePic = ({ image }) => {
  return (
    <div className="profile-pic">
      <img src={selfie} alt="me, standing in front of a birch tree graphic " />
    </div>
  );
};

export default ProfilePic;
