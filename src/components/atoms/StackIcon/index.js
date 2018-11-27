import React from 'react';
import '../../../fontawesomeIconLibrary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './StackIcon.scss';

const StackIcon = ({ name }) => {
  const iconNamesRef = {
    'front-end': ['fa', 'laptop'],
    'server-side': ['fa', 'server'],
    database: ['fa', 'database']
  };
  var icon = iconNamesRef[name];
  if (!icon) {
    console.warn(
      'name for StackIcon needs to be one of front-end, server-side, or database'
    );
  }
  return (
    <FontAwesomeIcon className="stack-icon" icon={icon} size="6x" fixedWidth />
  );
};

export default StackIcon;
