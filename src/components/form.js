import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

class TweetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      tweet: "Enter your tweet here!",
      timestamp: this.props.timestamp
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    console.log("handles changes");
    this.setState({ [event.target.name]: value });
  }

  handleSubmit(event) {
    console.log("handles submits");
    event.preventDefault();
    let tweet = {
      id: uuidv4(),
      username: this.state.username,
      tweet: this.state.tweet,
      timestamp: this.state.timestamp
    };
    this.props.handleTweet(tweet);
  }

  render() {
    const { username, tweet } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="createTweet">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            name="username"
            value={username}
            onChange={this.handleChange}
          ></Form.Control>
          <Form.Label>Tweet</Form.Label>
          <Form.Control
            type="tweet"
            name="tweet"
            value={tweet}
            onChange={this.handleChange}
          ></Form.Control>
          <Button type="submit">Submit</Button>
        </Form.Group>
      </Form>
    );
  }
}

export default TweetForm;
