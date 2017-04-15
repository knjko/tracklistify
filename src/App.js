import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Tracklistify from './Tracklistify';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Tracklistify />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
