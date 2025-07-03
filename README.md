# 🐾 Dogcare Management App

A Vue.js-based web application for managing a dogcare facility with multiple services:
- 🐶 Dog Run
- ☕ Café
- 🧺 Wash & Dry
- 🛁 Grooming & Bath
- 🍖 Dog Snack Shop

---

## 🚀 Features

- Service booking (by customers)
- Admin dashboard (service overview, check-ins, schedule)
- Customer profile management
- Real-time availability status
- Multi-service booking
- Snack & product management
- Optional: QR code check-in/out

---

## 🛠 Tech Stack

| Frontend     | Backend           | Other            |
|--------------|-------------------|------------------|
| Vue 3        | Firebase / Supabase (optional) | TailwindCSS |
| Vue Router   | Node.js/Express (optional)    | Pinia (state management) |
| Composition API | Firestore (if Firebase) | VueUse |
| Vite         |                   |                |

---
## 📌 TODO – Internal Management Features

### 🗓️ Service & Schedule Management
- [ ] Booking system for internal use (staff input only)
- [ ] Calendar view for managing upcoming services
- [ ] Real-time availability/status tracking per zone/service

### 🧑‍💼 Admin Dashboard
- [ ] Overview dashboard (bookings, services, occupancy)
- [ ] Daily/weekly report view (downloadable)
- [ ] Staff activity tracking (optional)

### 🔐 Authentication & Roles
- [ ] Secure login for staff and managers
- [ ] Role-based access control (e.g., Admin vs General Staff)

### 🛁 Service Operation Modules
- [ ] Wash & Dry management
- [ ] Grooming & Bath tracking
- [ ] Dog Run & Café slot usage logs

### 🍖 Snack Inventory
- [ ] Add/remove snacks
- [ ] Track stock levels
- [ ] Sales summary view

### 🔔 Notifications (Internal)
- [ ] Task reminders for staff (via dashboard or LINE integration)
- [ ] Low inventory alerts

### 📁 Settings & Config
- [ ] Service pricing (editable by admin)
- [ ] Staff account management
- [ ] Operating hours config
