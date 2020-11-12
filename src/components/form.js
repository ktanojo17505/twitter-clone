import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class Form extends Component {
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
    this.setState({ [event.target.name]: value });
  }

  handleSubmit(event) {
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
      <form onSubmit={this.handleSubmit}>
        <label>
          username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          Tweet:
          <textarea
            name="tweet"
            value={tweet}
            onChange={this.handleChange}
          ></textarea>
        </label>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}

export default Form;
