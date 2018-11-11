import React from 'react';
import '../../../fontawesomeIconLibrary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProfileIcon.scss';

const ProfileIcon = ({ link, name }) => {
  return (
    <div className="profile-icon">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          className="profile-icon-icon"
          icon={name}
          // mask={['fa', 'circle']}
          // color="orange"
          transform="shrink-4"
          size="3x"
        />
      </a>
    </div>
  );
};

export default ProfileIcon;
