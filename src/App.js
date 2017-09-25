import React, { Component } from 'react';
import './index.scss';

import Button from './components/button.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="dark" />
      </div>
    );
  }
}

export default App;
