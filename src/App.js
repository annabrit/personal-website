import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StackIcon } from './components/atoms';
import { StackSection } from './components/molecules';

import './fontawesomeIconLibrary';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StackSection
          name="database"
          techs={['react', 'css modules']}
          notes="this is a test"
        />

        <StackIcon name="database" />
        <StackIcon name="server-side" />
        <StackIcon name="front-end" />
        <FontAwesomeIcon
          icon={['fab', 'github-alt']}
          size="6x"
          style={{ color: 'red', backgroundColor: 'blue' }}
          mask={['fa', 'circle']}
          transform="shrink-4"
        />
      </div>
    );
  }
}

export default App;
