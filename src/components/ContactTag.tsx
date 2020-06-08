import React from "react";
import { StyleSheet, css } from "aphrodite";
import EmailTag from "./EmailTag";
import PhoneTag from "./PhoneTag";

const typeToString: any = {
  da: "D.A",
  mayor: "Mayor",
};

type Props = {
  type: string;
  name: string;
  email?: string;
  phoneNumber?: string;
  emailTemplateSubject?: string;
  emailTemplateBody?: string;
  phoneTemplate?: string;
};

export default function ContactTag(props: Props) {
  return (
    <div className={css(styles.container)}>
      <p className={css(styles.typeText)}>
        {`${typeToString[props.type]} - ${props.name}: `}
      </p>
      <div className={css(styles.spacer)} />

      {props.email && (
        <EmailTag
          email={props.email}
          templateSubject={props.emailTemplateSubject}
          templateBody={props.emailTemplateBody}
        />
      )}
      <div className={css(styles.spacer)} />
      {props.phoneNumber && <PhoneTag phoneNumber={props.phoneNumber} />}
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  typeText: {},
  spacer: {
    width: 10,
  },
});
