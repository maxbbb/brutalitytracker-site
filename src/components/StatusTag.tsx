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
      <h3 className={css(styles.statusText)}>{`${
        statusToText[props.status]
      }`}</h3>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 25,
    width: "100%",
    display: "flex",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 0,
    // paddingLeft: 7.5,
    // paddingRight: 7.5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  statusText: {
    color: "white",
    fontWeight: "bold",
  },
});
