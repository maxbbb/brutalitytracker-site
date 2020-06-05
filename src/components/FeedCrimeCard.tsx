import React from "react";
import { StyleSheet, css } from "aphrodite";

type Props = {
  title: string;
  videos: string[];
};

export default function FeedCrimeCard(props: Props) {
  return (
    <div className={css(styles.container)}>
      <p>{props.title}</p>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    width: "90%",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  hover: {
    ":hover": {
      backgroundColor: "red",
    },
  },

  small: {
    "@media (max-width: 600px)": {
      backgroundColor: "red",
    },
  },
});
