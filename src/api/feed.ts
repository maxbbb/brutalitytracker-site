import * as firebase from "firebase/app";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyA3Pqifro--DQvelOHxt3KLSw5haUn-NEg",
  authDomain: "brutality-tracking.firebaseapp.com",
  databaseURL: "https://brutality-tracking.firebaseio.com",
  projectId: "brutality-tracking",
  storageBucket: "brutality-tracking.appspot.com",
  messagingSenderId: "300068144517",
  appId: "1:300068144517:web:80fec6e42306adfbd330ec",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

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
  descriptionShort: string;
  descriptionLong: string;
  emailTemplateSubject?: string;
  emailTemplateBody?: string;
  mainPhoneNumber: string;
  mainEmail: string;
  people: ContactPerson[];
  createdAt: string;
};

class FeedApi {
  static async getMainCrimesFeed() {
    let feedCollection = db.collection("crimes");
    let feedDocRef = feedCollection.orderBy("createdAt", "desc");
    let documentSnapshots = await feedDocRef.get();

    let crimes: Crime[] = [];
    documentSnapshots.docs.forEach((crimeSnapshot) => {
      let crime = crimeSnapshot.data() as Crime;
      crimes.push(crime);
    });
    return crimes;
  }
}

export default FeedApi;
