import React from 'react';
import { ColorFall } from '../../molecules';
import './ProfileBackground.scss';

const ProfileBackground = ({ children }) => {
  return (
    <div>
      <div className="profile-background">{children}</div>
      <ColorFall />
    </div>
  );
};

export default ProfileBackground;
