<template>
  <div class="min-h-screen p-6 bg-[var(--color-background)]">
    <h1 class="text-2xl font-bold mb-6 text-[var(--color-primary)]">📈 Reports</h1>

    <section class="bg-white rounded-xl shadow p-6 max-w-4xl mx-auto space-y-6">
      <div>
        <h2 class="text-lg font-semibold mb-2">📅 Daily Summary</h2>
        <p class="text-gray-600">Total bookings: <strong>{{ dailyStats.bookings }}</strong></p>
        <p class="text-gray-600">Total income: <strong>฿{{ dailyStats.income }}</strong></p>
      </div>

      <div>
        <h2 class="text-lg font-semibold mb-2">🗓 Weekly Summary</h2>
        <p class="text-gray-600">Total bookings: <strong>{{ weeklyStats.bookings }}</strong></p>
        <p class="text-gray-600">Total income: <strong>฿{{ weeklyStats.income }}</strong></p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Dummy data - replace with actual fetching logic
const dailyStats = ref({
  bookings: 12,
  income: 5200
})

const weeklyStats = ref({
  bookings: 80,
  income: 34800
})

// Example placeholder: fetch stats from API or Firebase
onMounted(() => {
  // fetchStats().then(data => {
  //   dailyStats.value = data.daily
  //   weeklyStats.value = data.weekly
  // })
})
</script>
