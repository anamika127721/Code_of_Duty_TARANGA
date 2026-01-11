/* ============================================
   Sortify Admin Dashboard - JavaScript Logic
   ============================================ */

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeCharts();
});

/* ============================================
   Navigation Logic
   ============================================ */

function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');

            // Show corresponding section
            const targetSection = this.getAttribute('data-section');
            const sectionElement = document.getElementById(targetSection);
            if (sectionElement) {
                sectionElement.classList.add('active');
            }
        });
    });

    // Set initial active section (Dashboard)
    const dashboardSection = document.getElementById('dashboard');
    if (dashboardSection) {
        dashboardSection.classList.add('active');
    }
}

/* ============================================
   Chart Initialization
   ============================================ */

let segregationChart = null;
let compositionChart = null;
let recoveryChart = null;

function initializeCharts() {
    // Wait a bit for Chart.js to be fully loaded
    setTimeout(() => {
        initSegregationChart();
        initCompositionChart();
        initRecoveryChart();
    }, 100);
}

// Segregation Meter Pie Chart (Wet vs. Dry vs. Mixed)
function initSegregationChart() {
    const ctx = document.getElementById('segregationChart');
    if (!ctx) return;

    const chartData = {
        labels: ['Wet Waste', 'Dry Waste', 'Mixed Waste'],
        datasets: [{
            data: [45, 35, 20],
            backgroundColor: [
                '#28a745',  // Green for Wet
                '#007bff',  // Blue for Dry
                '#ffc107'   // Yellow for Mixed
            ],
            borderColor: [
                '#218838',
                '#0056b3',
                '#e0a800'
            ],
            borderWidth: 2,
            hoverOffset: 8
        }]
    };

    segregationChart = new Chart(ctx, {
        type: 'pie',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: {
                            family: 'Poppins',
                            size: 12,
                            weight: '500'
                        },
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    titleFont: {
                        family: 'Poppins',
                        size: 14,
                        weight: '600'
                    },
                    bodyFont: {
                        family: 'Poppins',
                        size: 13
                    },
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            return `${label}: ${value}%`;
                        }
                    }
                }
            }
        }
    });
}

// Waste Composition Bar Chart (Wet vs. Dry)
function initCompositionChart() {
    const ctx = document.getElementById('compositionChart');
    if (!ctx) return;

    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        datasets: [
            {
                label: 'Wet Waste (Tons)',
                data: [12, 15, 18, 14, 16, 20, 17, 19, 22, 18, 16],
                backgroundColor: '#28a745',
                borderColor: '#218838',
                borderWidth: 2,
                borderRadius: 6,
                borderSkipped: false
            },
            {
                label: 'Dry Waste (Tons)',
                data: [8, 10, 12, 9, 11, 14, 12, 13, 15, 12, 10],
                backgroundColor: '#007bff',
                borderColor: '#0056b3',
                borderWidth: 2,
                borderRadius: 6,
                borderSkipped: false
            }
        ]
    };

    compositionChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        padding: 15,
                        font: {
                            family: 'Poppins',
                            size: 12,
                            weight: '500'
                        },
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    titleFont: {
                        family: 'Poppins',
                        size: 14,
                        weight: '600'
                    },
                    bodyFont: {
                        family: 'Poppins',
                        size: 13
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        font: {
                            family: 'Poppins',
                            size: 11
                        },
                        callback: function(value) {
                            return value + 'T';
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    ticks: {
                        font: {
                            family: 'Poppins',
                            size: 11
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Resource Recovery Line Chart
function initRecoveryChart() {
    const ctx = document.getElementById('recoveryChart');
    if (!ctx) return;

    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        datasets: [
            {
                label: 'Recycled Materials (%)',
                data: [62, 65, 68, 64, 67, 72, 69, 71, 74, 70, 68],
                borderColor: '#28a745',
                backgroundColor: 'rgba(40, 167, 69, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 7,
                pointBackgroundColor: '#28a745',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2
            },
            {
                label: 'Recovery Rate (%)',
                data: [58, 61, 64, 60, 63, 68, 65, 67, 70, 66, 64],
                borderColor: '#007bff',
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 7,
                pointBackgroundColor: '#007bff',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2
            }
        ]
    };

    recoveryChart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        padding: 15,
                        font: {
                            family: 'Poppins',
                            size: 12,
                            weight: '500'
                        },
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    titleFont: {
                        family: 'Poppins',
                        size: 14,
                        weight: '600'
                    },
                    bodyFont: {
                        family: 'Poppins',
                        size: 13
                    },
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.parsed.y}%`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 50,
                    max: 80,
                    ticks: {
                        font: {
                            family: 'Poppins',
                            size: 11
                        },
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    ticks: {
                        font: {
                            family: 'Poppins',
                            size: 11
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

/* ============================================
   User Management Functions
   ============================================ */

function generateQR(userId) {
    // Placeholder function for QR code generation
    console.log(`Generating QR code for user: ${userId}`);
    
    // Simulate QR generation
    alert(`QR Code generated successfully for Resident ID: ${userId}\n\nThis would typically open a QR code modal or trigger a download.`);
    
    // In a real application, this would:
    // 1. Make an API call to generate QR code
    // 2. Display QR code in a modal
    // 3. Allow download/printing of QR code
}

function flagUser(userId) {
    // Placeholder function for flagging/fining users
    console.log(`Flagging/Fining user: ${userId}`);
    
    const confirmed = confirm(`Are you sure you want to flag/fine Resident ID: ${userId}?\n\nThis action will be recorded in the system.`);
    
    if (confirmed) {
        alert(`User ${userId} has been flagged and a fine has been issued.\n\nThis would typically:\n- Send notification to resident\n- Record violation in system\n- Update user segregation score`);
        
        // In a real application, this would:
        // 1. Make API call to flag user
        // 2. Update database with violation
        // 3. Send notification email/SMS
        // 4. Refresh user table
    }
}

/* ============================================
   Logistics Functions
   ============================================ */

function generateDailyRoute() {
    // Placeholder function for route optimization
    console.log('Generating daily route optimization...');
    
    // Simulate route generation
    const loadingMessage = 'Optimizing routes based on:\n- Collection schedules\n- Traffic patterns\n- Bin locations\n- Fleet availability\n\nThis may take a few moments...';
    
    alert(loadingMessage);
    
    // Simulate delay
    setTimeout(() => {
        alert('Daily route generated successfully!\n\n✓ 12 optimized routes created\n✓ Estimated time saved: 2.5 hours\n✓ Fuel efficiency improved by 15%\n✓ All zones covered\n\nThe routes have been sent to all drivers.');
    }, 1500);
    
    // In a real application, this would:
    // 1. Fetch all pending collections
    // 2. Apply route optimization algorithm
    // 3. Display optimized routes on map
    // 4. Send routes to drivers via app/SMS
    // 5. Update database with route assignments
}

/* ============================================
   Pollution Data Function (NASA API Placeholder)
   ============================================ */

async function fetchPollutionData() {
    // Placeholder function for NASA API integration
    console.log('Fetching pollution data from NASA API...');
    
    const aqiValueElement = document.querySelector('.aqi-value');
    const aqiLabelElement = document.querySelector('.aqi-label');
    const refreshBtn = document.querySelector('.refresh-btn');
    
    if (!aqiValueElement) return;
    
    // Disable button during fetch
    if (refreshBtn) {
        refreshBtn.disabled = true;
        refreshBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    }
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock data - In production, this would fetch from NASA API
    const mockAQI = Math.floor(Math.random() * 100) + 100; // Random AQI between 100-200
    let aqiLabel = '';
    let aqiColor = '';
    
    if (mockAQI <= 50) {
        aqiLabel = 'Good';
        aqiColor = '#28a745';
    } else if (mockAQI <= 100) {
        aqiLabel = 'Moderate';
        aqiColor = '#ffc107';
    } else if (mockAQI <= 150) {
        aqiLabel = 'Unhealthy for Sensitive Groups';
        aqiColor = '#fd7e14';
    } else if (mockAQI <= 200) {
        aqiLabel = 'Unhealthy';
        aqiColor = '#dc3545';
    } else {
        aqiLabel = 'Very Unhealthy';
        aqiColor = '#6f42c1';
    }
    
    // Update UI
    aqiValueElement.textContent = mockAQI;
    aqiValueElement.style.color = aqiColor;
    
    if (aqiLabelElement) {
        aqiLabelElement.textContent = aqiLabel;
        
        // Update background color based on AQI
        if (mockAQI <= 50) {
            aqiLabelElement.style.backgroundColor = '#d4edda';
            aqiLabelElement.style.color = '#155724';
        } else if (mockAQI <= 100) {
            aqiLabelElement.style.backgroundColor = '#fff3cd';
            aqiLabelElement.style.color = '#856404';
        } else if (mockAQI <= 150) {
            aqiLabelElement.style.backgroundColor = '#ffeaa7';
            aqiLabelElement.style.color = '#856404';
        } else {
            aqiLabelElement.style.backgroundColor = '#f8d7da';
            aqiLabelElement.style.color = '#721c24';
        }
    }
    
    // Re-enable button
    if (refreshBtn) {
        refreshBtn.disabled = false;
        refreshBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh';
    }
    
    console.log(`AQI updated: ${mockAQI} - ${aqiLabel}`);
    
    // In a real application, this would:
    // 1. Make API call to NASA's OpenAQ or similar service
    // 2. Parse response data
    // 3. Update AQI display
    // 4. Store historical data
    // 5. Handle errors gracefully
    
    /* Example NASA API Integration (when ready):
    
    async function fetchPollutionData() {
        try {
            const apiKey = 'YOUR_NASA_API_KEY';
            const lat = 28.7041; // Example: New Delhi coordinates
            const lon = 77.1025;
            const url = `https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&api_key=${apiKey}`;
            
            // Note: NASA doesn't have direct AQI API, but you can use:
            // - OpenAQ API: https://api.openaq.org/v2/latest
            // - AirVisual API: https://www.airvisual.com/api
            // - Or combine with weather APIs
            
            const response = await fetch(url);
            const data = await response.json();
            
            // Process and update AQI display
            // ...
        } catch (error) {
            console.error('Error fetching pollution data:', error);
            alert('Failed to fetch pollution data. Please try again later.');
        }
    }
    */
}

/* ============================================
   Utility Functions
   ============================================ */

// Handle window resize to update charts
window.addEventListener('resize', function() {
    if (segregationChart) segregationChart.resize();
    if (compositionChart) compositionChart.resize();
    if (recoveryChart) recoveryChart.resize();
});

// Smooth scroll for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ============================================
   Auto-refresh AQI data every 5 minutes
   ============================================ */

// Uncomment to enable auto-refresh (optional)
// setInterval(fetchPollutionData, 5 * 60 * 1000); // 5 minutes