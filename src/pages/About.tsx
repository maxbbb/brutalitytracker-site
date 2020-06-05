import React from "react";
import { StyleSheet, css } from "aphrodite";

const whyText = `Bad cops are exposing themselves right now, to the point that
it’s difficult to keep track of them all. It seems only the ones that go
super viral on Twitter get anything done about them, but every cop in
every one of these videos needs to be at the very minimum fired. Twitter
is a good medium for news, but can be hard for making clear call to
actions that let everyone help in actually putting pressure on the
people in power. By making this singular site go viral, we can make sure
fewer videos just get buried in the Twitter TL.`;

export default function About() {
  return (
    <div className={css(styles.pageContainer)}>
      <h1 className={css(styles.sectionHeaderText)}>Why?</h1>
      <p className={css(styles.longText)}>{whyText}</p>
    </div>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#212121",
  },
  pageTitle: {},
  sectionHeaderText: {
    color: "white",
  },
  longText: {
    fontSize: 16,
    width: "90%",
    lineHeight: 2,
    color: "white",
  },
});
