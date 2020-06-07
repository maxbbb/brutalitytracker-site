import React from "react";
import FeedCrimeCard from "./FeedCrimeCard";
import { StyleSheet, css } from "aphrodite";

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
  crimes: Crime[];
};

export default function FeedList(props: Props) {
  return (
    <div className={css(styles.feedContainer)}>
      {props.crimes.map((crime) => (
        <FeedCrimeCard key={crime.id} crime={crime} />
      ))}
    </div>
  );
}

const styles = StyleSheet.create({
  feedContainer: {
    display: "flex",
    height: "90%",
    overflowY: "scroll",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 10,
  },
});
