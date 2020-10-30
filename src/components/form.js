import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
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
      id: this.state.id,
      username: this.state.username,
      tweet: this.state.tweet,
      timestamp: this.state.timestamp
    };
    this.props.handleTweet(tweet);
    // event.preventDefault();
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
