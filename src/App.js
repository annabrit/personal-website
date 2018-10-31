import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './fontawesomeIconLibrary';

class App extends Component {
  render() {
    return (
      <div className="App">
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
