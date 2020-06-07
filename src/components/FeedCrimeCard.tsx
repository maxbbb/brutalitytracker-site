import React from "react";
import { StyleSheet, css } from "aphrodite";
import LocationTag from "./LocationTag";
import Video from "./Video";
import ContactTag from "./ContactTag";
import StatusTag from "./StatusTag";
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
  status: "Nothing" | "Investigating" | "Fired" | "Arrested";
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
      <div className={css(styles.nonVideoContainer)}>
        <div className={css(styles.locationAndStatusContainer)}>
          <LocationTag state={crime.state} city={crime.city} />
          <StatusTag status={crime.status} />
        </div>
        {props.crime.people.map((person) => (
          <ContactTag
            type={person.type}
            email={person.email}
            phoneNumber={person.phoneNumber}
            emailTemplateSubject={crime.emailTemplateSubject}
            emailTemplateBody={crime.emailTemplateBody}
            phoneTemplate={crime.phoneTranscript}
          />
        ))}
      </div>
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
  locationAndStatusContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  nonVideoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    paddingTop: 20,
    paddingBottom: 20,
  },
  hover: {
    ":hover": {
      backgroundColor: "red",
    },
  },
});
