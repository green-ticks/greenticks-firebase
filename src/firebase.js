// Copy and paste these scripts into the bottom of your <body> tag, but before you use any Firebase services:

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.2.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/8.2.0/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>



// https://firebase.google.com/docs/cli/?authuser=0

// https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally


// https://firebase.google.com/docs/hosting/quickstart?authuser=0



import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  // apiKey: "AIzaSyCREQMYIbAYKscrS_JYvWP4KpMsF_jI5Bg",
  // authDomain: "react-slack-clone.firebaseapp.com",
  // databaseURL: "https://react-slack-clone.firebaseio.com",
  // projectId: "react-slack-clone",
  // storageBucket: "react-slack-clone.appspot.com",
	// messagingSenderId: "423395756405"
	

	// apiKey: "AIzaSyD5atTT_krmddqhvkRh47CbW8MWCdEGEP0",
  // authDomain: "greenticks-chatrooms.firebaseapp.com",
  // projectId: "greenticks-chatrooms",
  // storageBucket: "greenticks-chatrooms.appspot.com",
  // messagingSenderId: "799494353363",
  // appId: "1:799494353363:web:70d7406df8fb743b8bbf26",
  // measurementId: "G-EY6PP1DCZZ"



  
    apiKey: "AIzaSyCbuhgcIUMzk4okHKBMlIk47N8XzL2Bj4Y",
    authDomain: "green-ticks.firebaseapp.com",
    projectId: "green-ticks",
    storageBucket: "green-ticks.appspot.com",
    messagingSenderId: "422334640641",
    appId: "1:422334640641:web:a076fc3f9f158c717c4600",
    measurementId: "G-KX6TC2EE36"
  
};
firebase.initializeApp(config);

export default firebase;

//NEWWWWWWWWWWWWWWWWWW

// //For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD5atTT_krmddqhvkRh47CbW8MWCdEGEP0",
//   authDomain: "greenticks-chatrooms.firebaseapp.com",
//   projectId: "greenticks-chatrooms",
//   storageBucket: "greenticks-chatrooms.appspot.com",
//   messagingSenderId: "799494353363",
//   appId: "1:799494353363:web:70d7406df8fb743b8bbf26",
//   measurementId: "G-EY6PP1DCZZ"
// };