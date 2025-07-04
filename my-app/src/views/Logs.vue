<template>
  <div class="min-h-screen p-6 bg-[var(--color-background)]">
    <h1 class="text-2xl font-bold mb-6 text-[var(--color-primary)]">🗂️ Activity Logs</h1>

    <div class="bg-white rounded-xl shadow overflow-x-auto max-w-5xl mx-auto">
      <table class="min-w-full text-sm text-left">
        <thead class="bg-[var(--color-accent)] text-[var(--color-primary)]">
          <tr>
            <th class="p-3">Timestamp</th>
            <th class="p-3">Staff</th>
            <th class="p-3">Action</th>
            <th class="p-3">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="log in logs"
            :key="log.id"
            class="border-t hover:bg-[var(--color-bg)] transition"
          >
            <td class="p-3 whitespace-nowrap">{{ log.timestamp }}</td>
            <td class="p-3">{{ log.staff }}</td>
            <td class="p-3">{{ log.action }}</td>
            <td class="p-3">{{ log.details }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const logs = ref([
  {
    id: 1,
    timestamp: '2025-07-04 09:30',
    staff: 'Jane Doe',
    action: 'Checked in pet Lucky',
    details: 'Wash & Dry service'
  },
  {
    id: 2,
    timestamp: '2025-07-04 10:15',
    staff: 'John Smith',
    action: 'Updated grooming status',
    details: 'Pet Milo, Hair Trim done'
  },
  {
    id: 3,
    timestamp: '2025-07-04 11:00',
    staff: 'Jane Doe',
    action: 'Added new booking',
    details: 'Pet Bella, Dog Run & Café'
  }
])
</script>
