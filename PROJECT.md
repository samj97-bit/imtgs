# 🌐 IMTGS — Industrial Material Transparency & Grading System
## Complete Project Documentation & Website User Guide

---

## 📑 Table of Contents
1. [Executive Summary](#1-executive-summary)
2. [Problem Statement & Solution](#2-problem-statement--solution)
3. [System Architecture (3-Layer Trust Platform)](#3-system-architecture-3-layer-trust-platform)
4. [Full Website Structure & Site Map](#4-full-website-structure--site-map)
5. [User Guide — How to Use the Website](#5-user-guide--how-to-use-the-website)
   - [5.1 Navigating the Public Portal](#51-navigating-the-public-portal)
   - [5.2 Operating the Live Interactive Simulator](#52-operating-the-live-interactive-simulator)
   - [5.3 Operating the Control Center Dashboard](#53-operating-the-control-center-dashboard)
   - [5.4 Managing Transactions & Compliance Reports](#54-managing-transactions--compliance-reports)
6. [Technology Stack & File Directory](#6-technology-stack--file-directory)
7. [Installation & Deployment Guide](#7-installation--deployment-guide)

---

## 1. Executive Summary

**IMTGS** (Industrial Material Transparency & Grading System) is an enterprise-grade material intelligence platform designed to eliminate opacity, fraud, and quality disputes across the **$800B global industrial scrap, metals, e-waste, and recycling supply chain**.

By pairing entry-gate **AI Computer Vision models** with **sensor-signed IoT load cell telemetry**, IMTGS automates quality classification, prevents weighbridge manipulation, and anchors every load into a tamper-proof cryptographic audit ledger from scrap yard to steel mill.

---

## 2. Problem Statement & Solution

### The Industry Challenge
- **Manual Grade Disputes**: Traditional scrapyard grading relies on visual guesswork, leading to 15-20% value variance disputes between suppliers and mills.
- **Weighbridge Fraud**: Phantom truck weight manipulation, tare tampering, and unverified paper weigh-slips cause billions in annual leakage.
- **Compliance Deficits**: Lack of chain-of-custody tracking complicates ESG compliance, carbon footprint tracking, and circular economy reporting.

### The IMTGS Solution
- **Automated AI Vision Grading**: Neural networks evaluate density, surface reflection, edge geometry, and contamination artifacts with 98% accuracy.
- **Hardware Cryptographic Telemetry**: Load cell telemetry is signed directly at the scale interface using `ed25519` cryptographic keys before transmission.
- **Immutable Ledger & PDF Certificates**: Every payload receives a unique SHA-256 digital certificate containing geospatial GPS locks, operator ID, time stamps, and grade records.

---

## 3. System Architecture (3-Layer Trust Platform)

```
┌──────────────────────────────────────────────────────────────────────────┐
│                      IMTGS 3-LAYER PLATFORM                              │
└──────────────────────────────────────────────────────────────────────────┘
                                   │
      ┌────────────────────────────┼────────────────────────────┐
      ▼                            ▼                            ▼
┌──────────────────┐    ┌────────────────────┐    ┌────────────────────┐
│ LAYER 1: HARDWARE│    │ LAYER 2: AI ENGINE │    │ LAYER 3: CONTROL   │
│ Optical Cameras  │    │ Computer Vision    │    │ Executive Dashboard│
│ Weighbridge Scale│ ──►│ Quality Scoring    │ ──►│ Audit Ledger       │
│ Load Cell Sensors│    │ SHA-256 Encryption │    │ Certified PDF Hub  │
└──────────────────┘    └────────────────────┘    └────────────────────┘
```

1. **Layer 1 (Edge Hardware Integration)**: Connects IP camera streams and weighbridge load cell sensors directly to edge gateway boxes.
2. **Layer 2 (AI Neural Engine & Cryptographic Seal)**: Runs real-time material classification inference and signs payload payloads with cryptographic hardware keys.
3. **Layer 3 (Enterprise Control Center)**: Provides live commodity price tickers, transactional audit tables, IoT health monitoring, and regulatory reporting exports.

---

## 4. Full Website Structure & Site Map

The website is divided into two main environments: the **Public Product Portal** and the **Enterprise Control Center Dashboard**.

### 🌐 Public Product Portal
- **Home (`/`)**: Main landing page featuring the Hero section, Live Interactive Engine, Core Capabilities, Technical Specifications, Scrapyard Workflow, Industry Sectors, and Pilot Program CTA.
- **Platform (`/platform`)**: Detailed breakdown of the 3-Layer Architecture (Vision, Telemetry, Ledger).
- **Solutions (`/solutions`)**: Specialized solutions for Metal Scrap, E-Waste Management, and Industrial By-Products.
- **Technology (`/technology`)**: Deep tech specs (IP cameras, sensor sampling frequency, cryptographic hashing).
- **How It Works (`/how-it-works`)**: 5-step yard operating sequence (Scan, Grade, Weigh, Verify, Anchor).
- **Impact (`/impact`)**: Financial yield improvement, ESG compliance, and fraud reduction metrics.
- **About (`/about`)**: Company background, leadership mission, and advisory board.
- **Contact (`/contact`)**: Support desk, contact information sidebar, and inquiry form.
- **Pilot Program (`/pilot`)**: Early validation program registration for scrapyards and processing mills.

### 📊 Control Center Dashboard Portal (`/app/`)
- **Dashboard Overview (`/app/dashboard`)**: Executive view with live commodity rate tickers (Ferrous, Copper, Aluminium, Lead), transaction volume area charts, material share donut charts, and live transaction feed.
- **Transaction Ledger (`/app/transactions`)**: Full searchable database of verified and pending transactions with AI confidence ratings and CSV export.
- **Material Catalog (`/app/materials`)**: Commodity index rate directory, grade guidelines, and 30-day index trends.
- **IoT Devices (`/app/devices`)**: Sensor network status monitor tracking device online/offline states, battery telemetry, and firmware versions.
- **Reports & Compliance (`/app/reports`)**: ESG compliance summary and official downloadable audit PDF certificates.

---

## 5. User Guide — How to Use the Website

### 5.1 Navigating the Public Portal

1. **Top Floating Navigation Bar**:
   - Hover over **Platform** or **Solutions** to reveal interactive mega-menus with sub-capability cards.
   - Click on **Technology**, **How It Works**, **Impact**, or **About** to explore dedicated deep-dive pages.
   - Click **Request Pilot** at any point to jump directly to the field validation enrollment form.
   - Click **Sign In** to launch the Control Center Dashboard (`/app/dashboard`).

2. **Mobile Menu**:
   - On smaller screens, tap the hamburger icon (`☰`) at the top right to open the mobile drawer.
   - Expand sub-items using the dropdown chevron arrows.

---

### 5.2 Operating the Live Interactive Simulator

Located on the Home page under the section **"See a Transaction in Real Time"**:

1. **Auto-Play Simulation**:
   - The engine automatically cycles through the 5 transaction stages (`Scan` ➔ `Grade` ➔ `Weight` ➔ `Verify` ➔ `Complete`).
   - Click **PAUSE** or **PLAY** in the top control bar to freeze or resume auto-play.

2. **Step Jumping**:
   - Click any step pill button (**1. Vision Scan**, **2. AI Classification**, **3. Telemetry Weight**, **4. Chain Verification**, **5. Immutable Record**) to inspect that specific stage.

3. **Interactive HUD Viewport**:
   - **Step 1 (Vision Scan)**: Observe the vertical laser scan line and bounding box target reticle evaluating the scrap specimen.
   - **Step 2 (AI Classification)**: View material grade assignment (e.g. HMS 1 Ferrous Scrap, 94% Confidence) and estimated market value.
   - **Step 3 (Telemetry Weight)**: Watch live load cell digit stabilization (`1,247.85 kg`) and gross/tare mass breakdown.
   - **Step 4 (Chain Verification)**: Review the green checkmark security matrix validating GPS coordinates, operator ID, and SHA-256 hash.
   - **Step 5 (Immutable Record)**: View the sealed digital pass certificate preview (`TXN #IMT-82941`).

---

### 5.3 Operating the Control Center Dashboard

Access the dashboard by navigating to `/app/dashboard` or clicking **Sign In** in the top navigation bar.

1. **Sidebar Navigation**:
   - Use the left sidebar to switch between **Overview**, **Transactions**, **Materials**, **IoT Devices**, and **Reports**.
   - Monitor the active network status badge (**AI SENSORS ONLINE 99.9%**).

2. **Topbar Controls**:
   - **Search Bar**: Type any TXN ID (e.g. `#82941`) or material name into the topbar search input. Press `⌘K` or click the search box.
   - **Date Range Toggles**: Toggle between `1D`, `7D`, `1M`, and `1Y` to filter chart timelines.
   - **Refresh Data**: Click the refresh icon (`↻`) to manually pull the latest sensor telemetry.
   - **Notifications**: Click the bell icon (`🔔`) to view popover notifications regarding verified transactions and model calibrations.

3. **Reading Dashboard Widgets**:
   - **Live Commodity Rate Tickers**: Top widgets show real-time per-tonne market prices for Ferrous, Copper, Aluminium, and Lead scrap.
   - **Stat Cards**: View total transaction volume, total tonnage verified, overall verification rate, and active sensor counts.
   - **Volume & Share Charts**: Hover over chart points in the **Verified Transaction Volume** or **Material Share** charts to view interactive tooltips.

---

### 5.4 Managing Transactions & Compliance Reports

1. **Filtering & Searching Transactions (`/app/transactions`)**:
   - Click the **Verified** or **Pending** pill buttons to filter transactions by verification status.
   - Search by location (e.g. "Andheri", "Navi Mumbai") or material grade.
   - Click **Export CSV** to download transaction data.

2. **Monitoring IoT Devices (`/app/devices`)**:
   - Check device connection states (**ONLINE**, **OFFLINE**, **SYNCING**).
   - Inspect hardware battery telemetry bars and firmware version tags (`v2.4.1`).

3. **Downloading PDF Audit Certificates (`/app/reports`)**:
   - Navigate to `/app/reports`.
   - Scroll down to **Official Certified Audit Reports**.
   - Click **Download File** next to any monthly audit or ESG compliance certificate to trigger the PDF download simulation.

---

## 6. Technology Stack & File Directory

### Core Stack
- **Framework**: Next.js 16.3.6 (App Router)
- **UI Runtime**: React 19.2.8 & TypeScript 5.0
- **Styling**: TailwindCSS v4.0 & Custom CSS Tokens (`globals.css`)
- **Animation Framework**: Framer Motion 13.4
- **Data Visualization**: Recharts 3.10
- **Icons**: Lucide React 1.48

### Directory Blueprint
```
imtgs/
├── PROJECT.md                  # Complete Project Documentation & User Guide
├── README.md                   # Repository README & Quick Start
├── package.json                # Project dependencies and npm scripts
├── src/
│   ├── app/
│   │   ├── globals.css         # Global design tokens, badges, & animations
│   │   ├── page.tsx            # Home Page
│   │   ├── about/page.tsx      # About Page
│   │   ├── contact/page.tsx    # Contact Page
│   │   ├── how-it-works/page.tsx # How It Works Page
│   │   ├── impact/page.tsx     # Impact & ESG Page
│   │   ├── pilot/page.tsx      # Pilot Program Page
│   │   ├── platform/page.tsx   # Platform Architecture Page
│   │   ├── solutions/page.tsx  # Solutions Page
│   │   ├── technology/page.tsx # Deep Tech Page
│   │   └── app/                # Dashboard Application Shell
│   │       ├── dashboard/page.tsx  # Main Dashboard Overview
│   │       ├── transactions/page.tsx # Audit Ledger
│   │       ├── materials/page.tsx    # Material Catalog
│   │       ├── devices/page.tsx      # IoT Device Manager
│   │       └── reports/page.tsx      # Compliance Reports
│   └── components/
│       ├── Navbar.tsx          # Enlarged Animated Navigation Bar
│       ├── HeroSection.tsx     # Hero Section
│       ├── LiveDemoSection.tsx # Interactive Real-Time Engine
│       ├── PlatformSection.tsx # 3-Layer Capability Cards
│       ├── TechSection.tsx     # Hardware & Vision Specs
│       ├── HowItWorksSection.tsx # 5-Step Workflow
│       ├── IndustriesSection.tsx # Sector Cards
│       ├── ProblemSection.tsx  # Pain Point Cards
│       ├── PilotSection.tsx    # Pilot CTA Banner
│       ├── Footer.tsx          # Global Footer
│       └── dashboard/
│           ├── DashSidebar.tsx # Dashboard Navigation Sidebar
│           └── DashTopbar.tsx  # Dashboard Header Bar
```

---

## 7. Installation & Deployment Guide

### Local Development Setup

1. **Clone Repository**:
   ```bash
   git clone https://github.com/samj97-bit/imtgs.git
   cd imtgs
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```

4. **Access Local Server**:
   Open browser at `http://localhost:3000`.

### Production Build

```bash
# Type check and build bundle
npm run build

# Start production server
npm run start
```

---

*IMTGS Documentation v2.0 — Developed for IMTGS Platform Engineers & Yard Operators.*
