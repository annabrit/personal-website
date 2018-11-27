import React from 'react';
import { ProfileBackground } from '../../organisms';
import { ProfilePic, ProfileIcon } from '../../atoms';
import './ProfileSection.scss';

const ProfileSection = ({ children }) => {
  return (
    <div className="profile">
      <ProfileBackground>
        <h1>{children}</h1>
        <ProfilePic />
        <div className="profile-icon-wrapper">
          <ProfileIcon
            link="https://github.com/annabrit"
            name={['fab', 'github-alt']}
          />
          <ProfileIcon
            link="https://www.linkedin.com/in/annabrit/"
            name={['fab', 'linkedin-in']}
          />
          <ProfileIcon
            link="https://angel.co/annabrit"
            name={['fab', 'angellist']}
          />
        </div>
      </ProfileBackground>
    </div>
  );
};

export default ProfileSection;
