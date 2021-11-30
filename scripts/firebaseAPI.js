const firebaseConfig = {
  apiKey: "AIzaSyAd_62KNof2HJ5TOsr4rUHX6B0WpV25lz4",
  authDomain: "dtc-05.firebaseapp.com",
  databaseURL: "https://dtc-05-default-rtdb.firebaseio.com",
  projectId: "dtc-05",
  storageBucket: "dtc-05.appspot.com",
  messagingSenderId: "1030154546951",
  appId: "1:1030154546951:web:8ba0da876c6fd73d781fa2"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
var storage = firebase.storage();
  