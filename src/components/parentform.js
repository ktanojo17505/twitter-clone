import Form from "./form";
import TweetScroll from "./tweetScroll";
import React, { Component } from "react";

class ParentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }

  handleTweet = tweet => {
    this.setState({ tweets: [...this.state.tweets, tweet] });
    // console.log(this.state.tweets);
  };

  render() {
    const { tweets } = this.state;
    console.log(tweets && tweets.length !== 0);
    const id =
      tweets && tweets.length !== 0 ? tweets[tweets.length - 1].id + 1 : 1; // set the id to either 1 or the latest id + 1
    const day = new Date();
    const timestamp = day.getTime();
    // console.log(tweets);
    console.log(this.state.tweets);
    if (tweets && tweets.length !== 0) {
      // console.log(tweets);
      // console.log(tweets && tweets.length !== 0);
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
