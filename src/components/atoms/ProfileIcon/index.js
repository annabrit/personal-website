import React from 'react';
import '../../../fontawesomeIconLibrary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Circle = () => {
  return <div />;
};

const ProfileIcon = ({ link, name }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Circle>
        <FontAwesomeIcon icon={name} />
      </Circle>
    </a>
  );
};

export default ProfileIcon;
