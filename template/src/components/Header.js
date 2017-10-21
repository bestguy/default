import React from 'react';
import { Link } from 'preact-router/match';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Preact App</h1>
        <nav>
          <Link activeClassName="active" href="/">Home</Link>
          <Link activeClassName="active" href="/profile">Me</Link>
          <Link activeClassName="active" href="/profile/john">John</Link>
        </nav>
      </header>
    );
  }
}
