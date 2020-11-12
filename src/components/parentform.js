import TweetForm from "./form";
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
          <TweetForm
            id={id}
            timestamp={timestamp}
            handleTweet={this.handleTweet}
          ></TweetForm>
          <TweetScroll tweets={tweets}></TweetScroll>
        </div>
      );
    } else {
      return (
        <TweetForm
          id={id}
          timestamp={timestamp}
          handleTweet={this.handleTweet}
        ></TweetForm>
      );
    }
  }
}

export default ParentForm;
