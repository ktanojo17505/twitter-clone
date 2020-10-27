import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      tweet: "Enter your tweet here!"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;

    this.setState({ [event.target.name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <label>
          username:
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          Tweet:
          <textarea
            name="tweet"
            value={this.state.tweet}
            onChange={this.handleChange}
          ></textarea>
        </label>
        <input type="submit" onChange={this.handleSubmit}></input>
      </form>
    );
  }
}

export default Form;
