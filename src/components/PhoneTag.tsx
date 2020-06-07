import React from "react";
import { StyleSheet, css } from "aphrodite";

type Props = {
  phoneNumber: string;
};
export default function PhoneTag(props: Props) {
  let phoneHref = `tel:${props.phoneNumber}`;
  return (
    <a href={phoneHref} className={css(styles.container)}>
      <p>{`📞 Call`}</p>
    </a>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    textDecoration: "none",
  },
});
