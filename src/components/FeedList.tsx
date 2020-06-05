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
  state: string;
  city: string;
  videos: string[];
  phoneTranscript: string;
  description: string;
  emailTemplate?: string;
  people: ContactPerson[];
  createdAt: string;
  name: string;
  id: string;
};

type Props = {
  crimes: Crime[];
};

export default function FeedList(props: Props) {
  return (
    <div className={css(styles.feedContainer)}>
      {props.crimes.map((crime) => (
        <FeedCrimeCard
          key={crime.id}
          title={crime.name}
          videos={crime.videos}
        />
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
  },
});
