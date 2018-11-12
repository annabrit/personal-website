import React from 'react';
import '../../../fontawesomeIconLibrary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProfileIcon.scss';

const ProfileIcon = ({ link, name }) => {
  console.log(`${name[1]}-small-gradient`);
  return (
    <div className="profile-icon">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <svg className="svg-button" width="98" height="98">
          <defs>
            <radialGradient id={`${name[1]}-small-gradient`} r="100%">
              <stop offset="10%" stopColor="#88CCF1" />
              <stop offset="70%" stopColor="#2D6989" />
              <stop offset="100%" stopColor="#88CCF1" />
            </radialGradient>

            <animate
              xlinkHref={`#${name[1]}-small-gradient`}
              attributeName="r"
              dur="500ms"
              from="30%"
              to="100%"
              repeatCount="1"
              begin={`${name[1]}-button-circle.mouseenter + 60ms`}
              fill="remove"
            />
            <animate
              xlinkHref={`#${name[1]}-button-circle`}
              attributeName="r"
              begin="mouseover"
              dur="500ms"
              repeatCount="1"
              restart="whenNotActive"
              from="24"
              to="36"
              id="grow-anim"
              fill="freeze"
            />
            <animate
              xlinkHref={`#${name[1]}-button-circle`}
              attributeName="r"
              begin="grow-anim.end + 500ms"
              dur="250ms"
              repeatCount="1"
              to="24"
              fill="freeze"
            />
          </defs>
          <circle
            id={`${name[1]}-button-circle`}
            fill={`url(#${name[1]}-small-gradient)`}
            cx="48"
            cy="48"
            r="24"
          />
          <svg x="34" y="34">
            <FontAwesomeIcon icon={name} color="white" height="28" width="28" />
          </svg>
        </svg>
      </a>
    </div>
  );
};

export default ProfileIcon;
