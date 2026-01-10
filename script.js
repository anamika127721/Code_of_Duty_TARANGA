// 🔥 Firebase Config (ADD YOUR KEYS)
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// LOGIN
function login() {
  const email = email.value;
  const password = password.value;
  const role = localStorage.getItem("role");

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      if (role === "resident") window.location.href = "resident.html";
      if (role === "collector") alert("Collector page coming next");
      if (role === "admin") alert("Admin page coming next");
    })
    .catch(err => alert(err.message));
}

// Resident actions
function openPickup() {
  alert("Pickup Request Page");
}

function openCamera() {
  alert("Camera Upload Feature");
}

function openMarket() {
  alert("Buy & Sell Page");
}

function openComplaint() {
  alert("Complaint Box");
}

function openVolunteer() {
  alert("Volunteer Form");
}

function openMap() {
  alert("NASA Pollution API");
}