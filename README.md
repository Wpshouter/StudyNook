# 📚 StudyNook – Study Room Booking Platform

<p align="center">
  <strong>A modern full-stack study room booking platform that enables students and library users to discover, manage, and reserve study spaces with real-time booking conflict prevention.</strong>
</p>

<p align="center">
  <a href="https://study-nook-one.vercel.app/">🌐 Live Demo</a>
</p>

---

# 📖 Overview

**StudyNook** is a full-stack web application designed to simplify the process of discovering and booking study rooms. Users can browse available rooms, filter by amenities, manage their own room listings, and reserve study spaces while the system automatically prevents overlapping bookings.

The application emphasizes **security**, **performance**, and **user experience**, making it a practical solution for universities, libraries, coworking spaces, and educational institutions.

---

# ✨ Key Features

## 🔐 Authentication & Security

* Secure JWT Authentication using HTTP-only cookies
* Protected private routes
* Session-based authentication
* Secure API communication

---

## 🏢 Study Room Management

* Create new study room listings
* Edit room information
* Delete owned rooms
* Upload room images
* Add room amenities
* Manage room availability

---

## 📅 Smart Booking System

* Reserve study rooms by selecting date and time
* Automatic booking conflict detection
* Prevent overlapping reservations
* View personal bookings
* Cancel upcoming bookings with confirmation
* Automatic booking cost calculation

---

## 🔍 Search & Filtering

Find the perfect study space by:

* Room name
* Wi-Fi
* Projector
* Whiteboard
* Quiet Zone
* Air Conditioning
* Power Outlets

---

## 📊 Personalized Dashboard

Each authenticated user can:

* Manage personal bookings
* Manage owned study rooms
* View booking history
* Track room activity

---

## 📱 Modern User Experience

* Fully responsive design
* Mobile-first layout
* Fast page navigation
* Clean and intuitive interface
* Toast notifications
* Modern UI components

---

# 🛠 Tech Stack

## Frontend

* Next.js
* React
* Tailwind CSS
* DaisyUI
* HeroUI
* React Toastify

---

## Backend

* Express.js
* MongoDB
* JWT Authentication
* CORS
* dotenv

---

# 📂 Project Structure

```text
src/
├── app/
├── components/
├── hooks/
├── lib/
├── actions/
├── middleware/
├── provider/
└── utils/
```

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone https://github.com/JaberWeb/StudyNook.git
```

## Navigate to the project

```bash
cd StudyNook
```

## Install dependencies

```bash
npm install
```

## Configure Environment Variables

Create a **.env.local** file.

```env
NEXT_PUBLIC_BACKEND_URL=

JWT_SECRET=

MONGODB_URI=
```

## Start the development server

```bash
npm run dev
```

Visit:

```text
http://localhost:3000
```

---

# 📸 Screenshots

> Consider adding screenshots for:

* 🏠 Home Page
* 📚 Room Listings
* 📄 Room Details
* 📅 Booking Modal
* 📊 User Dashboard
* 📱 Mobile View

---

# 🚀 Future Improvements

* Payment integration for premium rooms
* Email booking confirmations
* Calendar view for reservations
* Admin dashboard
* Room availability calendar
* Push notifications
* Favorite rooms
* Advanced analytics
* Multi-language support

---

# 👨‍💻 Developer

**Jaber Molla**

**Senior Full Stack Web Developer**

### Specializations

* PHP & MySQL
* Shopify App Development
* WordPress & WooCommerce
* Next.js & React
* Node.js & Express.js
* MongoDB
* REST API Development

**GitHub:** https://github.com/JaberWeb

**LinkedIn:** https://linkedin.com/in/your-linkedin

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub. Your support helps the project reach more developers and motivates future improvements.

---

# 📄 License

This project is licensed for educational and portfolio purposes.
