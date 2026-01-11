const mapButtons = document.querySelectorAll(".mapBtn");
const scanButtons = document.querySelectorAll(".scanBtn");
const cameraModal = document.getElementById("cameraModal");
const reviewModal = document.getElementById("reviewModal");
const closeCamera = document.getElementById("closeCamera");
const simulateScan = document.getElementById("simulateScan");
const bins = document.querySelectorAll(".bin");
const submitReview = document.getElementById("submitReview");
const pickupList = document.getElementById("pickupList");
const noPickups = document.getElementById("noPickups");

let selectedRating = 0;
let videoStream = null;
let activeCard = null;

/* OPEN MAP */
mapButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    window.open("https://www.google.com/maps", "_blank");
  });
});

/* OPEN CAMERA */
scanButtons.forEach(btn => {
  btn.addEventListener("click", async (e) => {
    activeCard = e.target.closest(".pickup-card");
    cameraModal.style.display = "flex";

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoStream = stream;
      document.getElementById("video").srcObject = stream;
    } catch (err) {
      alert("Camera access denied or unavailable.");
    }
  });
});

/* CLOSE CAMERA */
closeCamera.addEventListener("click", () => {
  stopCamera();
  cameraModal.style.display = "none";
});

/* SIMULATE QR SCAN */
simulateScan.addEventListener("click", () => {
  stopCamera();
  cameraModal.style.display = "none";
  reviewModal.style.display = "flex";
});

/* STOP CAMERA */
function stopCamera() {
  if (videoStream) {
    videoStream.getTracks().forEach(track => track.stop());
    videoStream = null;
  }
}

/* BIN SELECTION */
bins.forEach(bin => {
  bin.addEventListener("click", () => {
    selectedRating = bin.dataset.score;
    bins.forEach(b => b.classList.remove("active"));
    for (let i = 0; i < selectedRating; i++) {
      bins[i].classList.add("active");
    }
  });
});

/* SUBMIT REVIEW */
submitReview.addEventListener("click", () => {
  if (selectedRating === 0) {
    alert("Please rate using the waste bins!");
    return;
  }

  reviewModal.style.display = "none";

  if (activeCard) {
    activeCard.remove();
    activeCard = null;
  }

  selectedRating = 0;
  bins.forEach(b => b.classList.remove("active"));

  checkIfEmpty();

  alert("Pickup completed and review submitted successfully!");
});

/* CHECK IF NO CARDS LEFT */
function checkIfEmpty() {
  const remainingCards = document.querySelectorAll(".pickup-card");
  if (remainingCards.length === 0) {
    pickupList.style.display = "none";
    noPickups.style.display = "block";
  }
}