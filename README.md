# agent-profile-management-system
A secure, role-based agent and target profile management system built for classified operations with advanced access control and real-time tracking.


# 🛡️ SECURE_NET // PHANTOM UNIT E.W.U.
> **Advanced Cyber-Espionage Intelligence & Operative Dossier Management System**

[![Next.js](https://img.shields.io/badge/Next.js-14.1.0-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-API-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-Database-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)

---

## 🚀 System Overview & Architecture
**SECURE_NET** is a high-fidelity, modular cyber-warfare intelligence dashboard engineered specifically for the **Phantom Unit**. The system provides real-time global threat assessments, multi-tier clearance handling, and dynamic CRUD operations mapped directly to a normalized relational database. 

Designed with a world-class cyberpunk aesthetic, it features CRT grid lines, glowing tactical pulses, glassmorphism containers, and seamless state-managed UI switching between Admin and Viewer roles.

---

## 🗄️ Relational Database Schema
The backend architecture maps core intelligence entities across four normalized SQL tables:

1. **`target_identity`**: Stores primary biometric markers, physical attributes, personal history, alias details, and profile images.
2. **`operative_details`**: Tracks active field status, military/covert ranks, unit divisions, clearance levels, and deployment locations.
3. **`psychological_profile`**: Logs cognitive stability evaluations, stress tolerance thresholds, behavioral tendencies, and risk assessments.
4. **`users`**: Manages system authentication credentials, clearance grades, and role privileges (`admin` vs. `viewer`).

---

## 📁 Complete Directory Structure
```text
agent-profile-management-system/
└── agent-profile-dashboard/
    ├── controllers/
    │   ├── authController.js       # Handles secure authentication logic, sessions & tokens
    │   └── targetController.js     # Manages intelligence dossier queries and database CRUD operations
    │
    ├── routes/
    │   ├── authRoutes.js           # REST API routing endpoints for authentication
    │   └── targetRoutes.js         # REST API routing endpoints for operative dossiers
    │
    └── src/
        ├── app/
        │   ├── favicon.ico
        │   ├── globals.css         # Global cyber-tactical styles, keyframe animations & grid themes
        │   └── page.js             # Main Dashboard Controller, state routing & view manager
        ├── components/
        │   ├── TargetIdentity.js   # Biometric bio & target identification module
        │   ├── OperativeDetails.js # Tactical status, rank & location telemetry module
        │   ├── PsychProfile.js     # Psychological evaluation & stress analysis module
        │   └── SystemUsers.js      # RBAC user directory table management
        ├── context/                # React global context providers for session management
        ├── login/                  # Secure tactical authentication portal UI
        └── services/               # Axios / Fetch API service connectors for backend sync


Key Features & Capabilities
Modular Component Architecture: Decoupled UI blocks located in src/components/ ensuring clean code maintainability and scalability.

Role-Based Access Control (RBAC):

Viewer Mode: Read-only clearance for tactical files, general monitoring, and intelligence review.

Admin Mode: High-clearance editing permissions with interactive modal forms to update, modify, and commit records directly to the database.

Cyber-Tactical UI/UX: Built with Tailwind CSS featuring dark-mode glassmorphism, radar ping animations, CRT grid overlays, and responsive layouts.

Backend-Connected RESTful APIs: Fully integrated with dedicated controllers (targetController.js, authController.js) and routing logic (targetRoutes.js, authRoutes.js) for seamless data persistence.

 Advanced Security Protocols
Encryption Standards: Enforces AES-256-GCM data encryption protocols across all active telemetry links.

Session Protection: Guarded access endpoints preventing unauthorized data injection or extraction.

Automated Countermeasures: Integrated system alarms triggered upon unauthorized neural-net or administrative privilege escalation attempts.

 Installation & Setup Guide
Prerequisites
Ensure you have Node.js (v18+) and npm installed on your system.

1. Clone the Repository
Bash
git clone [https://github.com/shakibdev2-source/agent-profile-management-system.git](https://github.com/shakibdev2-source/agent-profile-management-system.git)
cd agent-profile-management-system/agent-profile-dashboard
2. Install Dependencies
Bash
npm install
3. Configure Environment Variables
Create a .env file in the root directory and configure your backend API and database credentials:

Code snippet
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=phantom_unit_db
NEXT_PUBLIC_API_URL=http://localhost:5000/api/phantom
4. Run the Development Server
Bash
npm run dev
Open http://localhost:3000 in your browser to access the secure tactical dashboard.

 API Controllers & Endpoints Reference
Authentication (/routes/authRoutes.js):

POST /api/auth/login - Authenticates user credentials and assigns clearance roles.

Intelligence Dossier (/routes/targetRoutes.js):

GET /api/phantom/data - Fetches unified JSON records across all operational tables.

POST /api/phantom/update - Commits administrative modifications to the database.
