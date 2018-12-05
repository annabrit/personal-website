import React, { Component } from 'react';
import { ProjectSection, ProfileSection, AboutSection } from '../ecosystems';
import './App.scss';
import '../../fontawesomeIconLibrary';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProfileSection>hi!</ProfileSection>
        <div className="right-side-content">
          <AboutSection>
            I’m Anna-Brit Schlaepfer. I’m easily excitable and often intensely
            curious, and I aspire to be the sort of person who is always
            learning and tinkering. I enjoy the human side of software
            development- readable code, modular organization, and declarative
            code style.
          </AboutSection>
          <ProjectSection
            projects={[
              {
                title: 'personal website',
                description:
                  "I wanted a website to document my personal projects and the technologies I use to build them. I played around with a few themes before settling on moody blues and sour greens and yellows. I've been enjoying the abundance of blue tones, and I'll miss them when trends shift.",
                techStack: [
                  {
                    name: 'front-end',
                    techs: ['React', 'Sass'],
                    notes:
                      "Even though this project doesn't require any interactivity or have need for state, I wanted to build another project with React just because I enjoy the process of compartmentalizing visual elements. In a past project, I'd used the Styled Component library, but it tended to multiply named components, and I wanted to explore other styling options. I tried out Sass. It was a lot of fun, but CSS in JS would have been the better choice. Some of the SVGs needed in-line styling for animating, and splitting the styling between two different types of files wasn't ideal."
                  }
                ],
                links: {
                  code: 'https://github.com/annabrit/personal-website',
                  website: 'https://annabrit.github.io/personal-website'
                }
              }
            ]}
          />
        </div>
      </div>
    );
  }
}

export default App;
