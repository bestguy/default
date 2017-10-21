import React from 'react';
import { Router } from 'preact-router';

import Header from './Header.js';
import Home from '../routes/Home.js';
import Profile from '../routes/Profile.js';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
  /**
   * Gets fired when the route changes.
   * @param {Object} event The "change" event from [preact-router](http://git.io/preact-router)
   * @param {string} event.url The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Profile path="/profile/" user="me" />
          <Profile path="/profile/:user" />
        </Router>
      </div>
    );
  }
}
