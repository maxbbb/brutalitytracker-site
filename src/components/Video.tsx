import React from "react";
import { StyleSheet, css } from "aphrodite";

type Props = {
  link: string;
};

export default function Video(props: Props) {
  return (
    <div className={css(styles.container, styles.mobileContainer)}>
      <video
        className={css(styles.video)}
        src={props.link}
        preload={"metadata"}
        controls
      />
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    backgroundColor: "transparent",
  },
  mobileContainer: {
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
  video: {
    width: "100%",
    height: "100%",
    // borderTopLeftRadius: 5,
    // borderTopRightRadius: 5,
  },
});
