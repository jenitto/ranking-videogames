import app from "firebase/app";
import firebaseConfig from "./config";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
      this.firestore = app.firestore();
      this.db = app.database();
    }
  }
}

// context con las operaciones crud de firebase
// const { firebase } = useContext(FirebaseContext);

// firebase.firestore.collection("platforms").add(element);

// const getPlatforms = () => {
//   firebase.firestore
//     .collection("platforms")
//     .orderBy("name", "desc")
//     .onSnapshot(handleSnaphsot);
// };
// function handleSnaphsot(snapshot) {
//   console.log(snapshot.docs);
// }

// firebase.db.ref("platforms/" + element.name).set(element);

// firebase.db
// .ref("/platforms")
// .orderByChild("name")
// .once("value")
// .then(function (snapshot) {
//   setPlatforms(Object.values(snapshot.val()));
// });

const firebase = new Firebase();
export default firebase;
