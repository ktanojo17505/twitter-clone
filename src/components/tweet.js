import React, { Component } from "react";

class Tweet extends Component {
  state = {};
  render() {
    const { username, tweet, timestamp } = this.props;
    return (
      <div>
        <p>{username}</p>
        <p>{tweet}</p>
        <p>{timestamp}</p>
      </div>
    );
  }
}

export default Tweet;
