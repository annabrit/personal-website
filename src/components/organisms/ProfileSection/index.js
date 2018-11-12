import React from 'react';
import { ColorFall } from '../../molecules';
import './ProfileSection.scss';

const ProfileSection = ({ children }) => {
  return (
    <div>
      <div className="profile-pic">{children}</div>
      <ColorFall />
    </div>
  );
};

export default ProfileSection;
