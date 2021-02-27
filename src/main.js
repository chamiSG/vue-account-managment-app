import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./vee-validate";
import router from "./routes/index";
import firebase from "firebase";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
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

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
