import React from 'react';

export default class Profile extends React.Component {

  render() {
    const { user } = this.props;

    return (
      <div>
        <h1>Profile: {user}</h1>
        <p>This is the user profile for a user named {user}.</p>
      </div>
    );
  }
}
