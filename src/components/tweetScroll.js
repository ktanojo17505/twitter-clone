import React, { Component } from "react";
import Tweet from "./tweet";
import InfiniteScroll from "react-infinite-scroll-component";

class TweetScroll extends Component {
  render() {
    const { tweets } = this.props;
    console.log("GOES TO TWEET SCROLL");
    return (
      <div>
        {tweets.map((item, index) => (
          <Tweet
            key={item.id}
            username={item.username}
            tweet={item.tweet}
            timestamp={item.timestamp}
          />
        ))}
      </div>
    );
  }
}

export default TweetScroll;
