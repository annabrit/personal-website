import React from 'react';
import '../../../fontawesomeIconLibrary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProfileIcon.scss';

const ProfileIcon = ({ link, name }) => {
  return (
    <div className="profile-icon">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <svg className="svg-button" width="98" height="98">
          <defs>
            <radialGradient id="smallGradient" r="100%">
              <stop offset="10%" stopColor="#88CCF1" />
              <stop offset="70%" stopColor="#2D6989" />
              <stop offset="100%" stopColor="#88CCF1" />
            </radialGradient>

            <animate
              xlinkHref="#smallGradient"
              attributeName="r"
              dur="500ms"
              from="30%"
              to="100%"
              repeatCount="1"
              begin="button-circle.mouseenter + 60ms"
              fill="remove"
            />
            <animate
              xlinkHref="#button-circle"
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
              xlinkHref="#button-circle"
              attributeName="r"
              begin="grow-anim.end + 500ms"
              dur="250ms"
              repeatCount="1"
              to="24"
              fill="freeze"
            />
          </defs>
          <circle
            id="button-circle"
            fill="url(#smallGradient)"
            cx="48"
            cy="48"
            r="24"
          />
          <svg x="34" y="34">
            <FontAwesomeIcon
              icon={['fab', 'github-alt']}
              color="white"
              height="28"
              width="28"
              id="fa-icon"
            >
              <animate
                attributeName="width"
                dur="250ms"
                begin="click"
                repeatCount="indefinite"
                from="24"
                to="48"
                fill="freeze"
              />
              <animate
                attributeName="width"
                begin="#button-circle.mouseleave"
                dur="250ms"
                repeatCount="1"
                to="24"
                fill="freeze"
              />
            </FontAwesomeIcon>
          </svg>
        </svg>
        {/* <FontAwesomeIcon
          className="profile-icon-icon"
          icon={name}
          // mask={['fa', 'circle']}
          // color="orange"
          transform="shrink-4"
          size="3x"
        /> */}
      </a>
    </div>
  );
};

export default ProfileIcon;
