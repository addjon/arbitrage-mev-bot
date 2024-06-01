const { initializeApp } =require("firebase/app") ;
const {getFirestore}=require('firebase/firestore');
const firebaseConfig = {
  apiKey: "",
  authDomain: "mev-bot-42230.firebaseapp.com",
  projectId: "mev-bot-42230",
  storageBucket: "mev-bot-42230.appspot.com",
  messagingSenderId: "455140240585",
  appId: "",
  measurementId: "G-071WZ327R6"
};

const app = initializeApp(firebaseConfig);
 const db = getFirestore();

module.exports={db}
