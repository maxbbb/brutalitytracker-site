import React, { Component } from "react";
import FeedApi from "../api/feed";
import FeedList from "../components/FeedList";
import HomeHeader from "../components/HomeHeader";
import { StyleSheet, css } from "aphrodite";

export default class MainFeed extends Component {
  state = {
    crimes: [],
  };

  async componentDidMount() {
    let crimes = await FeedApi.getMainCrimesFeed();
    this.setState({
      crimes: crimes,
    });
  }

  render() {
    return (
      <div className={css(styles.pageContainer)}>
        <HomeHeader />
        <FeedList crimes={this.state.crimes} />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#212121",
  },
});
