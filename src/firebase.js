import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA5Ae-LO4YVU2IHvUpbtLymck6MTRfA12I",
  authDomain: "vue-auth-account-app.firebaseapp.com",
  projectId: "vue-auth-account-app",
  storageBucket: "vue-auth-account-app.appspot.com",
  messagingSenderId: "598358123439",
  appId: "1:598358123439:web:0f91eada2966e05dfd055a",
  measurementId: "G-J4XFZSQH7Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export default firebase.database();