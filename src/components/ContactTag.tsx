import React from "react";
import { StyleSheet, css } from "aphrodite";
import EmailTag from "./EmailTag";
import PhoneTag from "./PhoneTag";

type Props = {
  type: string;
  email?: string;
  phoneNumber?: string;
  emailTemplateSubject?: string;
  emailTemplateBody?: string;
  phoneTemplate?: string;
};
export default function ContactTag(props: Props) {
  return (
    <div className={css(styles.container)}>
      <p>{props.type}: </p>
      {props.email && (
        <EmailTag
          email={props.email}
          templateSubject={props.emailTemplateSubject}
          templateBody={props.emailTemplateBody}
        />
      )}
      {props.phoneNumber && <PhoneTag phoneNumber={props.phoneNumber} />}
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 25,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 10,
  },
});
