import { defineStore } from "pinia";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  OAuthProvider,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import type User from "../types/User";
import { user_info } from "../services/auth";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    me: null as User | null,
    idToken: "" as string,
    user_info: {
      id: "" as string,
      name: "" as string,
      email: "" as string,
      tel: "" as string,
      created_at: 0 as number,
      updated_at: 0 as number,
      organization: "" as string,
      role: {
        name: "" as string,
      },
    },
  }),
  getters: {
    authenticated: (state) => state.me?.uid,
    verified: (state) => state.me?.emailVerified,
    getUser_info: (state) => state.user_info,
    get_id_user: (state) => state.user_info?.id,
    get_id_token: (state) => state.idToken,
  },
  actions: {
    getUserInfo() {
      return new Promise((resolve, reject) => {
        user_info
          .get({
            include: "role,organization",
            [`filter[own]`]: 1,
          })
          .then((res) => {
            this.user_info = res.data.data[0];
            resolve(this.user_info);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    loginByEmail(email: string, password: string) {
      return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(getAuth(), email, password)
          .then(() => {
            this.me = getAuth().currentUser;

            resolve(this.me);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    loginByGoogle() {
      return new Promise((resolve, reject) => {
        signInWithPopup(getAuth(), new GoogleAuthProvider())
          .then(() => {
            this.me = getAuth().currentUser;
            resolve(this.me);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    loginByApple() {
      return new Promise((resolve, reject) => {
        signInWithPopup(getAuth(), new OAuthProvider("apple.com"))
          .then(() => {
            this.me = getAuth().currentUser;
            resolve(this.me);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    authenticate() {
      return new Promise((resolve, reject) => {
        getAuth().onAuthStateChanged((user) => {
          if (user) {
            this.me = user;
            resolve(user);
          } else {
            reject();
          }
        });
      });
    },


    async getIdToken() {
      await getAuth()
        .currentUser?.getIdToken()
        .then((token) => {
          useAuthStore().idToken = token;

        });
      return useAuthStore().idToken;
    },

    logout() {
      return getAuth().signOut();
    },

    resetPassWord(email: string) {
      return sendPasswordResetEmail(getAuth(), email);
    },

    createUser(email: string, password: string) {
      return new Promise((resolve, reject) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
            this.me = getAuth().currentUser;
            resolve(this.me);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});
