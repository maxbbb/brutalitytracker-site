import React from "react";
import { StyleSheet, css } from "aphrodite";

type Props = {
  link: string;
};

export default function Video(props: Props) {
  return (
    <video
      src={props.link}
      preload={"metadata"}
      className={css(styles.container, styles.mobileContainer)}
      controls
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: "20%",
    width: "100%",
    display: "flex",
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  mobileContainer: {
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
});
