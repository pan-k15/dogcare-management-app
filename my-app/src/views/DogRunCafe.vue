<template>
    <div class="min-h-screen p-6 bg-[var(--color-background)]">
      <h1 class="text-2xl font-bold mb-6 text-[var(--color-primary)]">🏃‍♂️ Dog Run & ☕ Café Zone</h1>
  
      <!-- Activity Log Table -->
      <div class="bg-white p-4 rounded-xl shadow overflow-x-auto max-w-3xl">
        <table class="min-w-full text-sm text-left">
          <thead class="bg-[var(--color-accent)] text-[var(--color-primary)]">
            <tr>
              <th class="p-2">Pet</th>
              <th class="p-2">Owner</th>
              <th class="p-2">Check-In</th>
              <th class="p-2">Check-Out</th>
              <th class="p-2">Fed</th>
              <th class="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="entry in activityLog"
              :key="entry.id"
              class="border-t hover:bg-[var(--color-bg)] transition"
            >
              <td class="p-2">{{ entry.pet }}</td>
              <td class="p-2">{{ entry.owner }}</td>
              <td class="p-2">{{ entry.checkIn }}</td>
              <td class="p-2">{{ entry.checkOut || '-' }}</td>
              <td class="p-2">
                <span
                  :class="entry.fed ? 'text-green-600 font-medium' : 'text-gray-400 italic'"
                >
                  {{ entry.fed ? '✔ Yes' : '✘ No' }}
                </span>
              </td>
              <td class="p-2 space-x-2">
                <button
                  v-if="!entry.checkOut"
                  @click="markCheckOut(entry.id)"
                  class="text-sm text-blue-600 hover:underline"
                >
                  ⏹ Check-Out
                </button>
                <button
                  v-if="!entry.fed"
                  @click="markFed(entry.id)"
                  class="text-sm text-green-600 hover:underline"
                >
                  🍖 Mark Fed
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const activityLog = ref([
    {
      id: 1,
      pet: 'Lucky',
      owner: 'Panisa',
      checkIn: '10:00',
      checkOut: '',
      fed: false
    },
    {
      id: 2,
      pet: 'Milo',
      owner: 'Tawan',
      checkIn: '11:30',
      checkOut: '13:00',
      fed: true
    }
  ])
  
  const markCheckOut = (id) => {
    const entry = activityLog.value.find(e => e.id === id)
    if (entry && !entry.checkOut) {
      const now = new Date()
      entry.checkOut = now.getHours().toString().padStart(2, '0') + ':' +
                       now.getMinutes().toString().padStart(2, '0')
    }
  }
  
  const markFed = (id) => {
    const entry = activityLog.value.find(e => e.id === id)
    if (entry && !entry.fed) {
      entry.fed = true
    }
  }
  </script>
  