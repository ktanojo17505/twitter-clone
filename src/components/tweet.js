import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";

class Tweet extends Component {
  state = {};
  render() {
    const { username, tweet, timestamp } = this.props;
    return (
      <ListGroup>
        <ListGroup.Item>
          {username}
          <br />
          {tweet}
          <br />
          {timestamp}
        </ListGroup.Item>
      </ListGroup>
    );
  }
}

export default Tweet;
