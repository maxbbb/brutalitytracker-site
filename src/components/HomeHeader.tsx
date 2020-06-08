import React from "react";
import { StyleSheet, css } from "aphrodite";

export default function HomeHeader() {
  return (
    <div className={css(styles.container)}>
      <h1 className={css(styles.mainText)}>Hold Police Accountable</h1>
      <p className={css(styles.subText)}>
        Call and email representaives that can get these cops fired
      </p>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "10%",
    width: "100%",
  },
  mainText: {
    fontSize: 28,
    width: "95%",
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
    marginTop: 10,
  },
  subText: {
    fontSize: 18,
    width: "90%",
    textAlign: "center",
    color: "rgba(255,255,255, .8)",
    marginBottom: 15,
    lineHeight: 1.5,
  },
});
