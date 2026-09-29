# ⚡ IMTGS — Material Intelligence & Transparency Platform

> **Industrial Material Transparency & Grading System** — Next-generation AI computer vision, IoT telemetry weighbridge verification, and immutable cryptographic audit ledger for industrial scrap, metals, e-waste, and recycling yards.

![IMTGS Platform Banner](https://img.shields.io/badge/IMTGS-Material%20Intelligence-orange?style=for-the-badge&logo=react)
![Next.js 16](https://img.shields.io/badge/Next.js-16.3.6-black?style=for-the-badge&logo=next.js)
![React 19](https://img.shields.io/badge/React-19.2.8-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS v4](https://img.shields.io/badge/TailwindCSS-v4.0-38BDF8?style=for-the-badge&logo=tailwindcss)

---

## 🌟 Overview

**IMTGS** addresses the multi-billion dollar opacity issue in the industrial metal and scrap recovery supply chain. By pairing high-speed **AI Computer Vision models** at camera entry gates with **cryptographically signed IoT load cell telemetry**, IMTGS automates quality grading, prevents weighbridge fraud, and anchors immutable transaction logs from scrapyard to steel mill.

---

## ✨ Key Platform Features

### 👁️ AI Computer Vision Material Grading
- **Instant Classification**: Real-time identification of Ferrous Scrap (HMS 1, HMS 2), Non-Ferrous Metals (Copper Bright Wire, Aluminium Extrusions, Stainless Steel 304), and E-Waste PCB streams.
- **Confidence Scoring & Bounding Box Overlays**: Live visual bounding boxes with confidence scores (up to 98% accuracy) and contamination level detection.

### ⚖️ IoT Telemetry & Weighbridge Verification
- **Cryptographic Hardware Stamps**: Load cell sensors sign weight telemetry directly at the hardware interface using `ed25519` cryptographic keys.
- **Fraud Prevention**: Eliminates manual weight tampering, phantom loads, and tare weight manipulation.

### 🛡️ Immutable Audit Ledger
- **SHA-256 Chain of Custody**: Generates a tamper-proof digital certificate for every single transaction.
- **GPS & Time Lock**: Locks exact Geospatial coordinates, operator ID, time stamp, and material grade into an audit-ready ledger.

### 📊 Enterprise Control Center Dashboard
- **Live Commodity Price Index**: Real-time market rate tracking for Ferrous, Copper, Aluminium, and Lead battery scrap.
- **Interactive Analytics**: Area charts for transaction volume streams, donut charts for material composition share, and bar charts for weekly yard performance.
- **IoT Hardware Monitor**: Real-time status tracking (Online, Offline, Syncing), battery levels, and firmware version management across weighbridge terminals.

### 🧪 Live Interactive Simulation Engine
- **Step-by-Step Terminal**: Experience the complete flow in real-time — from camera vision scan to AI grading, IoT weight stabilization, cryptographic verification, and sealed PDF certificate export.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI & Logic**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/), Custom Design System CSS
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Charts & Data Viz**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Repository Structure

```
imtgs/
├── src/
│   ├── app/
│   │   ├── about/             # About IMTGS Mission & Team
│   │   ├── app/               # Control Center Dashboard
│   │   │   ├── dashboard/     # Main Overview & Analytics
│   │   │   ├── devices/       # IoT Hardware Network Monitor
│   │   │   ├── materials/     # Material Catalog & Price Index
│   │   │   ├── reports/       # Audit & ESG Compliance PDF Reports
│   │   │   └── transactions/  # Immutable Transaction Audit Ledger
│   │   ├── contact/           # Contact & Support Page
│   │   ├── how-it-works/      # Technical Architecture & Pipeline
│   │   ├── impact/            # ESG, Fraud Reduction & Yield Metrics
│   │   ├── pilot/             # MSME Field Validation Program Registration
│   │   ├── platform/          # Core Platform Architecture
│   │   ├── solutions/         # Industry Solutions (Scrap, E-Waste, By-Products)
│   │   ├── technology/        # Deep Tech (Computer Vision & IoT Telemetry)
│   │   ├── globals.css        # Custom Design System Tokens & Animations
│   │   └── page.tsx           # Home Landing Page
│   ├── components/
│   │   ├── dashboard/         # DashSidebar & DashTopbar
│   │   ├── Navbar.tsx         # Enlarged & Animated Floating Desktop/Mobile Nav
│   │   ├── HeroSection.tsx    # Premium Hero with Live AI Scan Engine Demo
│   │   ├── LiveDemoSection.tsx # Interactive Real-Time Transaction Engine
│   │   ├── PlatformSection.tsx# 3-Layer Platform Capabilities
│   │   ├── TechSection.tsx    # Technical Specs & Hardware Architecture
│   │   ├── HowItWorksSection.tsx # Step-by-Step Yard Workflow
│   │   ├── IndustriesSection.tsx # Sector Breakdown
│   │   ├── ProblemSection.tsx # Industry Pain Points & Solutions
│   │   ├── PilotSection.tsx   # Field Program CTA
│   │   └── Footer.tsx         # Global Footer
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/samj97-bit/imtgs.git
   cd imtgs
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open Application**:
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚡ Deployment & Production Build

To test a production-ready bundle:

```bash
# Type check and build
npm run build

# Start production server
npm run start
```

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more details.

Developed with ❤️ by the IMTGS Engineering Team.
