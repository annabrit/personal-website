import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StackIcon } from './components/atoms';
import { ProjectList, Profile, About } from './components/ecosystems';
import './App.scss';
import './fontawesomeIconLibrary';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile>hi!</Profile>
        <div className="right-side-content">
          <About>I'm Anna-Brit.</About>
          <ProjectList
            projects={[
              {
                title: 'personal website',
                description:
                  "I wanted a website to document my personal projects and the technologies I use to build them. I played around with a few themes before settling on moody blues and sour greens and yellows. I've been enjoying the abundance of smokey blues, and I'll miss them when trends shift.",
                techStack: [
                  {
                    name: 'front-end',
                    techs: ['React', 'Sass'],
                    notes:
                      "Even though this project doesn't require any interactivity or have need for state, I wanted to build something in React. I enjoyed the process of deciding which visual elements would be components and how to structure the information flow. In a past project, I'd used the Styled Component library, but it tended to multiply named components, and I wanted to explore other styling options. I tried out Sass. It was a lot of fun, but CSS in JS would have been the better choice. Some of the SVGs needed in-line styling for animating, and splitting the styling between two different types of files wasn't ideal."
                  }
                ]
              }
            ]}
          />
        </div>
        {/* <hr />
        <StackIcon name="database" />
        <StackIcon name="server-side" />
        <StackIcon name="front-end" /> */}
      </div>
    );
  }
}

export default App;
