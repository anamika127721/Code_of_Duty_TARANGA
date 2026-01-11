/*******************************
 * SORTIFY – RESIDENT SCRIPT
 * script1.js
 *******************************/

/* ---------- SLIDER ---------- */
document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".netflix-slider")) {
        new Swiper(".netflix-slider", {
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            autoplay: {
                delay: 7000,
                disableOnInteraction: false
            }
        });
    }
});

/* ---------- WASTE DONUT CHART (Professional Dashboard Style) ---------- */
document.addEventListener("DOMContentLoaded", () => {
    const chartCanvas = document.getElementById("wasteChart");
    
    if (chartCanvas) {
        const ctx = chartCanvas.getContext('2d');

        // 1. Define the "Center Text" Plugin
        const centerTextPlugin = {
            id: 'centerText',
            beforeDraw: function(chart) {
                if (chart.config.type !== 'doughnut') return;
                
                var width = chart.width,
                    height = chart.height,
                    ctx = chart.ctx;
                
                ctx.restore();
                
                // Font settings
                var fontSize = (height / 100).toFixed(2); // Dynamic size based on height
                ctx.font = "bold " + 1.2 + "em sans-serif"; 
                ctx.textBaseline = "middle";
                ctx.fillStyle = "#1e293b"; // Dark Gray text
                
                // The Text to display (e.g., the value of the first dataset)
                var text = "70%"; 
                var textX = Math.round((width - ctx.measureText(text).width) / 2);
                var textY = height / 2 + 2; // Slight adjustment for visual center
                
                ctx.fillText(text, textX, textY);
                ctx.save();
            }
        };

        // 2. The Chart Configuration
        new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Recycled", "Remaining"],
                datasets: [{
                    data: [70, 30],
                    // Professional Colors: Emerald Green vs. Light Slate Gray
                    backgroundColor: ["#10b981", "#cbd5e1"], 
                    hoverBackgroundColor: ["#059669", "#94a3b8"],
                    borderWidth: 2,
                    borderColor: '#ffffff', // White border to separate segments cleanly
                    borderRadius: 50, // Fully rounded ends
                    cutout: '80%', // Thickness of the ring
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }, // Hide legend (Clean look)
                    tooltip: {
                        enabled: true,
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        padding: 10,
                        cornerRadius: 8,
                        displayColors: false, // Hides the little color box in tooltip
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.raw + '%';
                            }
                        }
                    }
                }
            },
            plugins: [centerTextPlugin] // Register the plugin we created above
        });
    }
});

/* ---------- NAVIGATION FUNCTIONS ---------- */

// Volunteer Page
function openVolunteerPage() {
    window.location.href = "volunteer.html";
}

// Pickup Page
function openPickupPage() {
    window.location.href = "pickup.html";
}

// Buy & Sell Page
function openBuySellPage() {
    window.location.href = "buysell.html";
}

// Complaint Page (future)
function openComplaintPage() {
    window.location.href = "complaint.html";
}

// Support / Contact
function openSupport() {
    alert("Support page coming soon 📞");
}

/* ---------- CAMERA / REPORT FEATURE ---------- */
document.addEventListener("DOMContentLoaded", () => {
    const cameraBtn = document.getElementById("cameraBtn");
    const fileInput = document.getElementById("wasteInput");

    if (cameraBtn && fileInput) {
        // 1. When icon is clicked, trigger the hidden file input
        cameraBtn.addEventListener("click", () => {
            fileInput.click();
        });

        // 2. When a file is selected (Photo taken or chosen)
        fileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            
            if (file) {
                const reader = new FileReader();
                
                // Convert image to text string (Base64) to save it
                reader.onload = function(event) {
                    const imageData = event.target.result;
                    
                    // Create the Notification Object
                    const newReport = {
                        id: Date.now(),
                        image: imageData,
                        date: new Date().toLocaleDateString(),
                        time: new Date().toLocaleTimeString(),
                        status: "Pending Pickup",
                        location: "Locality A (Geo-tag)" // You can add real geo-logic here later
                    };

                    // Get existing reports from memory, add new one, save back
                    let reports = JSON.parse(localStorage.getItem('collectorNotifications')) || [];
                    reports.push(newReport);
                    localStorage.setItem('collectorNotifications', JSON.stringify(reports));

                    // Success Message
                    alert("✅ Image Uploaded! Notification sent to Collector.");
                };
                
                reader.readAsDataURL(file);
            }
        });
    }
});
/* ---------- AQI / MAP PLACEHOLDER ---------- */
function openMapAQI() {
    window.open("https://maps.google.com", "_blank");
    // Future:
    // Fetch NASA AQI API and update .aqi-bar dynamically
}

/* ---------- AI BOT ---------- */
document.addEventListener("DOMContentLoaded", () => {
    const aiBot = document.querySelector(".ai-bot");
    if (aiBot) {
        aiBot.addEventListener("click", () => {
            alert("Hi 👋 I'm SortiBot! AI assistance coming soon 🤖");
        });
    }
});


