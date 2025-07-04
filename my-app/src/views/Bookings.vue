<template>
  <div class="min-h-screen p-6 bg-[var(--color-background)]">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold text-[var(--color-primary)]">📋 Bookings Overview</h1>
      <router-link to="/bookings/new">
        <button class="button-primary">➕ New Booking</button>
      </router-link>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full bg-white rounded-xl shadow">
        <thead class="bg-[var(--color-accent)] text-[var(--color-primary)]">
          <tr>
            <th class="py-3 px-4 text-left">Date</th>
            <th class="py-3 px-4 text-left">Time</th>
            <th class="py-3 px-4 text-left">Service</th>
            <th class="py-3 px-4 text-left">Pet Name</th>
            <th class="py-3 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="booking in bookings"
            :key="booking.id"
            class="border-b hover:bg-[var(--color-bg)] transition"
          >
            <td class="py-3 px-4">{{ booking.date }}</td>
            <td class="py-3 px-4">{{ booking.time }}</td>
            <td class="py-3 px-4">{{ booking.service }}</td>
            <td class="py-3 px-4">{{ booking.pet }}</td>
            <td class="py-3 px-4">
              <span
                :class="[
                  'px-3 py-1 rounded-full text-sm font-medium',
                  booking.status === 'confirmed'
                    ? 'bg-green-200 text-green-800'
                    : booking.status === 'pending'
                    ? 'bg-yellow-200 text-yellow-800'
                    : 'bg-red-200 text-red-800'
                ]"
              >
                {{ booking.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const bookings = ref([
  {
    id: 1,
    date: '2025-07-04',
    time: '10:00',
    service: 'Grooming & Bath',
    pet: 'Lucky',
    status: 'confirmed'
  },
  {
    id: 2,
    date: '2025-07-05',
    time: '13:00',
    service: 'Wash & Dry',
    pet: 'Milo',
    status: 'pending'
  },
  {
    id: 3,
    date: '2025-07-06',
    time: '09:30',
    service: 'Dog Run & Café',
    pet: 'Bella',
    status: 'cancelled'
  }
])
</script>

<style scoped>
.button-primary {
  background-color: var(--color-soft-blue);
  color: var(--color-light-purple);
  padding: 0.6em 1.2em;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}
.button-primary:hover {
  background-color: #c4d4f5;
}
</style>
