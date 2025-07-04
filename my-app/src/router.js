// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Bookings from './views/Bookings.vue'
import BookingForm from './views/BookingForm.vue'
import Calendar from './views/Calendar.vue'
import Member from './views/Member.vue'
import WashDry from './views/WashDry.vue'
import Grooming from './views/Grooming.vue'
import DogRunCafe from './views/DogRunCafe.vue'
import Inventory from './views/Inventory.vue'
import Reports from './views/Reports.vue'
import Logs from './views/Logs.vue'
import Profile from './views/Profile.vue'
import StaffRoles from './views/StaffRoles.vue'
import Settings from './views/Settings.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'Login', component: Login },
  { path: '/home', name: 'Home', component: Home },
  { path: '/bookings', name: 'Bookings', component: Bookings },
  { path: '/bookings/new', name: 'BookingForm', component: BookingForm },
  { path: '/calendar', name: 'Calendar', component: Calendar },
  { path: '/members', name: 'Member', component: Member },
  { path: '/wash-dry', name: 'WashDry', component: WashDry },
  { path: '/grooming', name: 'Grooming', component: Grooming },
  { path: '/dog-run-cafe', name: 'DogRunCafe', component: DogRunCafe },
  { path: '/inventory', name: 'Inventory', component: Inventory },
  { path: '/reports', name: 'Reports', component: Reports },
  { path: '/logs', name: 'Logs', component: Logs },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/staff-roles', name: 'StaffRoles', component: StaffRoles },
  { path: '/settings', name: 'Settings', component: Settings },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
