import React from 'react';
import selfie from './IMG_4554.JPG';
import './ProfilePic.scss';
const ProfilePic = ({ image }) => {
  return (
    <img
      className="profile-image"
      src={selfie}
      alt="me, standing in front of a birch tree graphic "
    />
  );
};

export default ProfilePic;
