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
    <div className={css(styles.outterContainer)}>
      {/* <div className={css(styles.statusContainer)}>
      </div> */}

      <div className={css(styles.cardContainer)}>
        <StatusTag status={crime.status} />

        <Video link={crime.videos[0]} />

        <div className={css(styles.nonVideoContainer)}>
          <LocationTag state={crime.state} city={crime.city} />
          <div className={css(styles.infoSpacer)} />
          {props.crime.people.map((person) => (
            <ContactTag
              key={person.email}
              type={person.type}
              email={person.email}
              name={person.name}
              phoneNumber={person.phoneNumber}
              emailTemplateSubject={crime.emailTemplateSubject}
              emailTemplateBody={crime.emailTemplateBody}
              phoneTemplate={crime.phoneTranscript}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  outterContainer: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
  },
  cardContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    alignSelf: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 20,
    paddingBottom: 10,
  },
  locationAndStatusContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoSpacer: {
    height: 15,
  },
  nonVideoContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    marginTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  statusContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    alignSelf: "center",
    width: "100%",
  },
  hover: {
    ":hover": {
      backgroundColor: "red",
    },
  },
});
