import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyD6nDq1PktlbfMlYkH2ceod9IaC1nmG7IQ",
  authDomain: "messaging-app-1d200.firebaseapp.com",
  projectId: "messaging-app-1d200",
  storageBucket: "messaging-app-1d200.appspot.com",
  databaseURL: "https://messaging-app-1d200.firebaseio.com",
  messagingSenderId: "826039067937",
  appId: "1:826039067937:web:98adffc4415aeef8210a60",
  measurementId: "G-61SS1XY54Y"
};
 
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

