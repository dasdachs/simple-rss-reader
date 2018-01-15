import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { NavbarContainer } from './components/navbar';
import { ArticleFeedContainer } from './components/articlesFeed';

class App extends Component {
  

  render() {
    return (
      <MuiThemeProvider>
        <main>
          <NavbarContainer />
          <ArticleFeedContainer />
        </main>
      </MuiThemeProvider>

    );
  }
}

export default App;
