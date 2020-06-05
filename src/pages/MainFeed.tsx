import React, { Component } from "react";
import FeedApi from "../api/feed";
import FeedList from "../components/FeedList";

export default class MainFeed extends Component {
  state = {
    crimes: [],
  };

  async componentDidMount() {
    console.log("Main feed mounting");
    let crimes = await FeedApi.getMainCrimesFeed();
    this.setState({
      crimes: crimes,
    });
  }

  render() {
    return (
      <div>
        <FeedList crimes={this.state.crimes} />
      </div>
    );
  }
}
