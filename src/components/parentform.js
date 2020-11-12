import Form from "./form";
import TweetScroll from "./tweetScroll";
import React, { Component } from "react";
import uuidv4 from "uuid";

class ParentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }

  handleTweet = tweet => {
    this.setState({ tweets: [...this.state.tweets, tweet] });
  };

  render() {
    const { tweets, id } = this.state;
    var today = new Date();
    const timestamp =
      today.getHours() +
      ":" +
      (today.getMinutes() < 10 ? "0" : "") +
      today.getMinutes();
    console.log(this.state.tweets);
    if (tweets && tweets.length !== 0) {
      return (
        <div>
          <Form
            id={id}
            timestamp={timestamp}
            handleTweet={this.handleTweet}
          ></Form>
          <TweetScroll tweets={tweets}></TweetScroll>
        </div>
      );
    } else {
      return (
        <Form
          id={id}
          timestamp={timestamp}
          handleTweet={this.handleTweet}
        ></Form>
      );
    }
  }
}

export default ParentForm;
