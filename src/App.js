import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  StackIcon,
  ColorDrip,
  ProfilePic,
  ProfileIcon
} from './components/atoms';
import { ColorFall } from './components/molecules';
import { ProjectList } from './components/ecosystems';
import './App.scss';
import './fontawesomeIconLibrary';

class App extends Component {
  render() {
    return (
      <div className="App">
        <svg>
          <defs>
            <radialGradient id="smallGradient" r="100%">
              <stop offset="10%" stop-color="#f7e69a" />
              <stop offset="70%" stop-color="#f4c708" />
              <stop offset="100%" stop-color="#f7c708" />
              {/* <stop offset="100%" stop-color="#f7e69a" /> */}
            </radialGradient>

            <animate
              xlinkHref="#smallGradient"
              attributeName="r"
              dur="2s"
              from="30%"
              to="100%"
              repeatCount="2"
              begin="button-circle.mouseover + 60ms"
              fill="remove"
            />
            <animate
              xlinkHref="#button-circle"
              attributeName="r"
              begin="mouseover"
              end="mouseout"
              dur="2s"
              repeatCount="1"
              from="24"
              to="48"
              id="grow-anim"
              fill="freeze"
            />
            <animate
              xlinkHref="#button-circle"
              attributeName="r"
              begin="mouseout"
              dur="500ms"
              repeatCount="1"
              to="24"
              fill="freeze"
            />
          </defs>
          <circle
            id="button-circle"
            fill="url(#smallGradient)"
            cx="50"
            cy="50"
            r="24"
          />
        </svg>
        <div>
          <ProfileIcon name={['fab', 'github-alt']} />
          <ProfilePic />
          <ColorFall />
        </div>
        <ProjectList
          projects={[
            {
              title: 'personal website',
              description: 'simple single page',
              techStack: [
                {
                  name: 'front-end',
                  techs: ['react', 'css modules'],
                  notes:
                    "even though this project didn't use any interactivity or need for state, I wanted to build something in React"
                },
                {
                  name: 'server-side',
                  techs: ['Express', 'Node'],
                  notes: 'These are just test data'
                }
              ]
            }
          ]}
        />
        <hr />
        <StackIcon name="database" />
        <StackIcon name="server-side" />
        <StackIcon name="front-end" />
        <FontAwesomeIcon
          icon={['fab', 'github-alt']}
          size="6x"
          style={{ backgroundImage: `linear-gradient(blue, green)` }}
          mask={['fa', 'circle']}
          transform="shrink-4"
        />
        <FontAwesomeIcon
          icon={['fab', 'github-alt']}
          size="6x"
          className="test"
          mask={['fa', 'circle']}
          transform="shrink-4"
        />
      </div>
    );
  }
}

export default App;
