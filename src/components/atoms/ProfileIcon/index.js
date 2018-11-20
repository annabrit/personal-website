import React from 'react';
import '../../../fontawesomeIconLibrary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProfileIcon.scss';

const ProfileIcon = ({ link, name }) => {
  console.log(`${name[1]}-small-gradient`);
  return (
    <div className="profile-icon">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <svg className="svg-button">
          <defs>
            <radialGradient id={`${name[1]}-small-gradient`} r="100%">
              <stop offset="10%" stopColor="#C0DD5F" />
              <stop offset="70%" stopColor="#8DC403" />
              <stop offset="100%" stopColor="#C0DD5F" />
            </radialGradient>

            <animate
              xlinkHref={`#${name[1]}-small-gradient`}
              attributeName="r"
              dur="500ms"
              from="30%"
              to="100%"
              repeatCount="1"
              begin={`${name[1]}-grow-anim.begin+ 60ms`}
              fill="remove"
            />
            <animate
              xlinkHref={`#${name[1]}-button-circle`}
              attributeName="r"
              begin="mouseover"
              dur="500ms"
              repeatCount="1"
              restart="whenNotActive"
              from="40%"
              to="50%"
              id={`${name[1]}-grow-anim`}
              fill="freeze"
            />
            <animate
              xlinkHref={`#${name[1]}-button-circle`}
              attributeName="r"
              begin={`${name[1]}-grow-anim.end + 500ms`}
              dur="250ms"
              repeatCount="1"
              to="40%"
              fill="freeze"
            />
          </defs>
          <circle
            id={`${name[1]}-button-circle`}
            fill={`url(#${name[1]}-small-gradient)`}
            cx="50%"
            cy="50%"
            r="40%"
          />
          <svg className="svg-icon-wrapper" x="31%" y="31%">
            <FontAwesomeIcon
              className="icon"
              icon={name}
              height="40%"
              width="40%"
            />
          </svg>
        </svg>
      </a>
    </div>
  );
};

export default ProfileIcon;
