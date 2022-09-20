import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

const firebaseConfig = {
  apiKey: "AIzaSyDMXNpFJB198UIhDsVXyjs-Ux84rmsnZH8",
  authDomain: "smit-76a9c.firebaseapp.com",
  projectId: "smit-76a9c",
  storageBucket: "smit-76a9c.appspot.com",
  messagingSenderId: "588373229842",
  appId: "1:588373229842:web:f40326935eb197294b33cb",
  measurementId: "G-8STX40T1YK",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// const auth = getAuth();

let button = document.getElementById("btn");

button.addEventListener("click", function func() {
  var email1 = document.getElementById("email12");
  var password1 = document.getElementById("password12");
  console.log(email1.value);
  console.log(password1.value);
});

// window.register = func;
