import React from "react";
import { StyleSheet, css } from "aphrodite";

export default function HomeHeader() {
  return (
    <div className={css(styles.container)}>
      <h1 className={css(styles.mainText)}> Help Hold Police Accountable</h1>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "10%",
    width: "100%",
  },
  mainText: {
    fontSize: 24,
    width: "80%",
    textAlign: "center",
    color: "white",
  },
});
