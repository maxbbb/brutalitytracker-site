import React from "react";
import { StyleSheet, css } from "aphrodite";

type Props = {
  state: string;
  city?: string;
};
export default function LocationTag(props: Props) {
  return (
    <div className={css(styles.container)}>
      <p className={css(styles.location)}>{`${props.city}, ${props.state}`}</p>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  location: {
    fontSize: 14,
    color: "rgba(0,0,0,.8)",
  },
});
