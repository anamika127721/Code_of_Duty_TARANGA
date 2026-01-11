function login() {
  alert("Firebase login will be connected");
}

function openCamera() {
  alert("Camera upload coming next");
}

function openMap() {
  alert("NASA Pollution API");
}

function markCollected(btn) {
  btn.innerText = "Collected ✔";
  btn.disabled = true;
}

function rate(el) {
  el.classList.add("active");
}

function buy() {
  window.open("https://pay.google.com", "_blank");
}

function sell() {
  alert("Sell Product Page");
}

function submitComplaint() {
  alert("Complaint submitted");
}

function submitVolunteer() {
  alert("Volunteer request sent to admin");
}

function openVolunteerPage() {
  window.location.href = "volunteer.html";
}

