/* Slider */
let slides = document.querySelectorAll('.slider img');
let index = 0;
setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 3000);

/* Navigation */
function goToPickup() {
  alert("Pickup Page (to be implemented)");
}

function goToBuySell() {
  alert("Buy & Sell Page (to be implemented)");
}

function openMap() {
  window.open("https://maps.google.com", "_blank");
}

/* Camera */
function openCamera() {
  document.getElementById('cameraInput').click();
}

/* Charts */
new Chart(document.getElementById('collectedChart'), {
  type: 'pie',
  data: {
    labels: ['Organic', 'Plastic', 'E-waste'],
    datasets: [{
      data: [60, 30, 10],
      backgroundColor: ['#4CAF50','#FFC107','#F44336']
    }]
  }
});

new Chart(document.getElementById('disposedChart'), {
  type: 'pie',
  data: {
    labels: ['Recycled', 'Composted', 'Landfill'],
    datasets: [{
      data: [50, 30, 20],
      backgroundColor: ['#2196F3','#8BC34A','#9E9E9E']
    }]
  }
});
