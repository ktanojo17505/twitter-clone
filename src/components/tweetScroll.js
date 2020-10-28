import React, { Component } from "react";
import Tweet from "./tweet";

class TweetScroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        {
          id: 1,
          username: "RJ",
          tweet: "random tweet 1",
          timestamp: 12.0
        },
        {
          id: 2,
          username: "Shooky",
          tweet: "random tweet 2",
          timestamp: 12.01
        },
        {
          id: 3,
          username: "Koya",
          tweet: "random tweet 3",
          timestamp: 12.02
        },
        {
          id: 4,
          username: "Mang",
          tweet: "random tweet 4",
          timestamp: 12.03
        },
        {
          id: 5,
          username: "Chimmy",
          tweet: "random tweet 5",
          timestamp: 12.04
        },
        {
          id: 6,
          username: "Tata",
          tweet: "random tweet 6",
          timestamp: 12.05
        },
        {
          id: 7,
          username: "Cooky",
          tweet: "random tweet 7",
          timestamp: 12.06
        }
      ]
    };
  }
  render() {
    const { tweets } = this.state;
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
