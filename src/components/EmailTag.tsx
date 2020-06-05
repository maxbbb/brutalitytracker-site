import React from "react";
import { StyleSheet, css } from "aphrodite";

type Props = {
  email: string;
  templateSubject?: string;
  templateBody?: string;
};
export default function EmailTag(props: Props) {
  let emailHref = `mailto:${props.email}?subject=${props.templateSubject}&body=${props.templateBody}`;
  return (
    <a href={emailHref} className={css(styles.container)}>
      <p>{`✉️ Email`}</p>
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
  },
});
