import React, { Component } from "react";
import Tweet from "./tweet";
import InfiniteScroll from "react-infinite-scroll-component";

class TweetScroll extends Component {
  render() {
    const { tweets, id } = this.props;
    const tweet = tweets.map(item => (
      <Tweet
        key={item.id}
        username={item.username}
        tweet={item.tweet}
        timestamp={item.timestamp}
      />
    ));
    return <div>{tweet}</div>;
  }
}

export default TweetScroll;
