import React from "react";
import { StyleSheet, css } from "aphrodite";

const statusToColors = {
  Nothing: "red",
  Investigating: "blue",
  Fired: "green",
  Arrested: "gold",
};

const statusToText = {
  Nothing: "No Action",
  Investigating: "Active Investigation",
  Fired: "Officers Fired",
  Arrested: "Officers Arrested",
};

type Props = {
  status: "Nothing" | "Investigating" | "Fired" | "Arrested";
};

export default function StatusTag(props: Props) {
  return (
    <div
      className={css(styles.container)}
      style={{ backgroundColor: statusToColors[props.status] }}
    >
      <p className={css(styles.statusText)}>{`${
        statusToText[props.status]
      }`}</p>
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
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 1,
    paddingBottom: 1,
  },
  statusText: {
    color: "white",
  },
});
