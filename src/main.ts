import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";
import { createPinia } from "pinia";
import VueAxios from "vue-axios";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import VueLodash from "vue-lodash";
import { useAuthStore } from "./stores/auth";
import router from "./router";
import Loading from './components/container/animation/Loading.vue'
// import { addressStore } from './stores/address';


const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID,
  };

  initializeApp(firebaseConfig);

getAuth().onAuthStateChanged((user) => {
  useAuthStore().me = user;
});

getAuth().onIdTokenChanged((user) => {
  useAuthStore().me = user;
  if (user) {
    getAuth()
      .currentUser?.getIdToken()
      .then((token) => {
        useAuthStore().idToken = token;
      });
  } else {
    useAuthStore().idToken = "";
  }
});

const app = createApp(App);

app.use(VueLodash);

app.use(createPinia());

app.use(VueAxios, axios);

app.use(router);

app.component('Loading', Loading);

app.mount("#app");
