import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StackIcon, ColorDrip, ProfilePic } from './components/atoms';
import { ColorFall } from './components/molecules';
import { ProjectList } from './components/ecosystems';
import './App.scss';
import './fontawesomeIconLibrary';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
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
