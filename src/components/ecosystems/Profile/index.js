import React from 'react';
import { ProfileBackground } from '../../organisms';
import { ProfilePic, ProfileIcon } from '../../atoms';
import './Profile.scss';

const Profile = ({ children }) => {
  return (
    <div className="profile">
      <ProfileBackground>
        <h1>{children}</h1>
        <ProfilePic />
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
        >
          <ProfileIcon name={['fab', 'github-alt']} />
          <ProfileIcon name={['fab', 'linkedin-in']} />
          <ProfileIcon name={['fab', 'angellist']} />
        </div>
      </ProfileBackground>
    </div>
  );
};

export default Profile;
