# 🧑‍💻 Code of Duty – Hackathon Submission

> **Instructions:**  
> Please edit this README by filling in the required details.  
> Do **not** remove section headings.

---

## 📌 Team Information

- **Team Name:** Megatron 
- **Team Members:**  
  - Member 1 – Anamika K
  - Member 2 – Avani K S  
  - Member 3 – Amina Sali 
  - Member 4 – Abhimanue Anil

- **Problem Domain:**  Smart Waste Management & Environmental Sustainability
- **Selected Problem Statement:**  
Improper waste segregation and inefficient waste collection processes contribute to environmental pollution and health hazards. Lack of accountability, awareness, and tracking in waste handling results in poor segregation at source and ineffective collection practices
---

## 🧩 Problem Description

Rapid urbanization and increasing population density have led to a significant rise in solid waste generation in residential and urban areas. Existing waste management systems are largely manual, unorganized, and lack transparency, resulting in improper waste segregation, delayed or missed waste collection, illegal dumping, and increased environmental pollution. Residents often have no effective platform to track waste pickup, report issues, or provide feedback on collection services, while authorities struggle with limited real-time data and accountability.
Waste collectors face challenges such as unverified pickup records, inefficient route management, and lack of performance monitoring. Additionally, the absence of a structured feedback and rating mechanism makes it difficult to assess service quality or identify areas requiring improvement. Poor segregation practices further reduce recycling efficiency, increase landfill usage, and contribute to air, soil, and water pollution.
Traditional systems also fail to integrate modern technologies such as QR-based verification, data analytics, and user-friendly digital interfaces, which are essential for building sustainable and scalable smart city solutions. As a result, waste management remains inefficient, non-transparent, and environmentally harmful.
There is a critical need for a technology-driven, smart, and user-centric waste management platform that enables efficient waste collection, ensures accountability of collectors, promotes proper segregation, allows real-time monitoring, and encourages community participation through feedback, rewards, and awareness. Addressing these challenges is essential for improving public health, environmental sustainability, and the overall quality of urban living.
## 💡 Proposed Solution

Sortify
🔹 Approach

Sortify is a smart, community-centric web application designed to improve waste segregation and management at the locality level by actively involving residents, waste collectors, and administrators on a single digital platform. The system is divided into three dedicated interfaces—Resident, Collector, and Admin—each with clearly defined roles to ensure accountability, transparency, and efficiency in waste handling.
The Resident interface focuses on simplicity, engagement, and awareness, making waste segregation an easy and rewarding habit rather than a burden.

🔹 How It Solves the Problem

Improves Segregation at Source
Residents can request waste pickup, report improperly dumped waste using a geo-tagged camera, and track their contributions digitally. This encourages correct segregation at the source and discourages irresponsible disposal.

Creates Accountability & Transparency
Every waste handover and report is logged in the system. Uploaded images act as proof and are sent as real-time notifications to collectors, reducing negligence and ensuring timely action.

Encourages Participation Through Gamification
Residents earn points for proper waste segregation and regular participation. This reward-based system motivates continuous engagement, even appealing to children and families.

Raises Environmental Awareness
Live air pollution indicators and personalized messages educate residents on the real-time environmental impact of waste mismanagement, linking everyday actions to larger consequences.

Streamlines Collection & Monitoring
Visual dashboards display waste collected and disposed, helping administrators analyze trends and improve collection efficiency.

---

## ⚙️ Technology Stack

List the tools and technologies used:
- Programming Languages  
- Frameworks / Libraries  
- Tools / Platforms  

Example:
- HTML, CSS, JavaScript  
- React / Flutter / Node.js  
- Firebase / APIs (if any)

---

## 🖥️ Implementation Details

Explain how your project works:
- Overall workflow
  Sortify is a role-based smart waste management system that connects Residents, Collectors, and Admins on a single digital platform.
Users start from a common landing page and log in using their role.
Based on authentication, they are redirected to their respective dashboards.
Residents generate pickup requests, report waste, and interact with the reuse marketplace.
Collectors receive real-time pickup details, verify collection using QR scanning, and submit service feedback.
Admins monitor operations, analyze data, manage users, and optimize waste collection and segregation processes.
This workflow ensures transparency, accountability, and efficient waste handling.
- Key features implemented
 * Role-Based Dashboards for Residents, Collectors, and Admins
*Waste Pickup Requests with waste type selection
*QR Code Verification to confirm waste collection
*Collector Rating System using basket-based feedback
*Waste Reporting via image uploads
*Buy & Sell Marketplace for reusable and recyclable items
*Complaint & Volunteering Modules for community engagement
*Analytics Dashboard with charts and segregation statistics
*Pollution Monitoring using NASA’s Open API
*Mobile-Responsive UI with modern card-based design
- Any challenges faced and how you solved them
Challenge: Managing different user roles efficiently
Solution: Implemented role-based access and dashboard redirection.
Challenge: Ensuring pickup authenticity and accountability
Solution: Introduced QR code scanning and post-collection ratings.
Challenge: Presenting complex waste data clearly
Solution: Used interactive charts and visual dashboards for easy understanding.
Challenge: User engagement and adoption
Solution: Designed a clean, intuitive UI with icons, cards, and gamified elements.
---

## 📂 Project Structure
Sortify/
│
├── public/
│   ├── index.html                # Landing page (Resident / Collector / Admin selection)
│   ├── login.html                # Common login page
│
│   ├── resident/
│   │   ├── resident.html         # Resident dashboard
│   │   ├── pickup.html           # Waste pickup request page
│   │   ├── buysell.html          # Buy & Sell marketplace
│   │   ├── volunteer.html        # Volunteering form
│   │   └── complaint.html        # Complaints submission page
│
│   ├── collector/
│   │   └── collector.html        # Collector dashboard
│
│   ├── admin/
│   │   └── admin.html            # Admin dashboard
│
│   └── assets/
│       ├── images/               # Logos, icons, product images
│       ├── videos/               # Landing page videos
│       └── qr/                   # Generated QR codes
│
├── css/
│   ├── global.css                # Common styles
│   ├── login.css                 # Login page styles
│   ├── resident.css              # Resident UI styles
│   ├── collector.css             # Collector UI styles
│   └── admin.css                 # Admin UI styles
│
├── js/
│   ├── firebase-config.js        # Firebase initialization
│   ├── auth.js                   # Authentication & role routing
│
│   ├── resident/
│   │   ├── resident.js           # Resident dashboard logic
│   │   ├── pickup.js             # Pickup request logic
│   │   ├── buysell.js            # Buy & Sell logic
│   │   ├── volunteer.js          # Volunteering submissions
│   │   └── complaint.js          # Complaint handling
│
│   ├── collector/
│   │   └── collector.js          # Collector dashboard logic
│
│   └── admin/
│       ├── admin.js              # Admin dashboard logic
│       ├── analytics.js          # Charts & insights
│       └── fleet.js              # Fleet & route management
│
├── data/
│   └── sample-data.json          # Dummy/local data for testing
│
├── README.md                     # Project overview & setup guide
├── package.json                  # Dependencies (if extended)
└── .env                          # API keys (NASA, Firebase)


---

## 🧪 Screenshots / Demo



Mention them here:
- Screenshot 1 – Sortify empowers residents to recycle, reuse, and manage waste responsibly through a smart, eco-friendly digital platform.  
- Screenshot 2 – This screen displays the Top Eco-Warriors leaderboard, ranking users based on eco-friendly actions and waste segregation points to encourage healthy competition.
- Screenshot 3-  This page allows users to register as volunteers with Sortify by submitting personal details and their motivation to support waste management initiatives.
-Screenshot 4-This is the Sortify landing page, allowing users to select their role—Resident, Collector, or Admin—to access personalized dashboards for smart waste management.
-Screenshot 5-This image shows the Sortify Admin Dashboard, providing real-time insights on waste collection status, active fleet, critical alerts, air quality index, and segregation performance through visual cards and charts.
-Screenshot 6-This screen shows the Sortify Collector Dashboard, where collectors view assigned pickup requests with resident details, scan QR codes to confirm waste collection, and update pickup status in real time.
 

*(Screenshots are mandatory for evaluation)*

---



