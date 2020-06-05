import React from "react";
import { StyleSheet, css } from "aphrodite";
import LocationTag from "./LocationTag";
import Video from "./Video";
import EmailTag from "./EmailTag";
import PhoneTag from "./PhoneTag";

type ContactPerson = {
  type: string;
  name: string;
  phoneNumber: string;
  email?: string;
};

type Crime = {
  id: string;
  state: string;
  city: string;
  videos: string[];
  phoneTranscript: string;
  descriptionShort: string;
  descriptionLong: string;
  emailTemplateSubject?: string;
  emailTemplateBody?: string;
  mainPhoneNumber: string;
  mainEmail: string;
  people: ContactPerson[];
  createdAt: string;
};

type Props = {
  crime: Crime;
};

export default function FeedCrimeCard(props: Props) {
  let crime = props.crime;
  return (
    <div className={css(styles.container)}>
      <Video link={crime.videos[0]} />
      <LocationTag state={crime.state} city={crime.city} />
      <EmailTag
        email={crime.mainEmail}
        templateSubject={crime.emailTemplateSubject}
        templateBody={crime.emailTemplateBody}
      />
      <PhoneTag phoneNumber={crime.mainPhoneNumber} />
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "90%",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 15,
  },
  hover: {
    ":hover": {
      backgroundColor: "red",
    },
  },
});
