
const firebaseConfig = {
  apiKey: "AIzaSyAvLHX99j62S2jaW7nH7KibI0aNrMx5KiE",
  authDomain: "falemos-3d2a5.firebaseapp.com",
  projectId: "falemos-3d2a5",
  databaseURL:"https://falemos-3d2a5-default-rtdb.firebaseio.com/",
  storageBucket: "falemos-3d2a5.appspot.com",
  messagingSenderId: "1098744431383",
  appId: "1:1098744431383:web:52c03fb237ad553ec02d52",
  measurementId: "G-4M1J9NWZDB"
};
    // Initialize Firebase
const app = initializeApp(firebaseConfig);
function danger(){
  userandom= localStorage.getItem("Name_of_the_user");
  document.getElementById("welcome").innerHTML="Welcome "+userandom+" !";
}

