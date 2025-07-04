<template>
  <div class="min-h-screen p-6 bg-[var(--color-background)]">
    <h1 class="text-2xl font-bold mb-6 text-[var(--color-primary)]">⚙️ App Settings</h1>

    <!-- Opening Hours Section -->
    <div class="bg-white p-6 rounded-xl shadow mb-8 max-w-xl">
      <h2 class="text-lg font-semibold mb-4 text-[var(--color-primary)]">🕒 Opening Hours</h2>
      <div class="space-y-4">
        <div class="flex justify-between items-center">
          <label class="text-sm font-medium">Open</label>
          <input v-model="settings.openTime" type="time" class="p-2 border rounded w-40" />
        </div>
        <div class="flex justify-between items-center">
          <label class="text-sm font-medium">Close</label>
          <input v-model="settings.closeTime" type="time" class="p-2 border rounded w-40" />
        </div>
      </div>
    </div>

    <!-- Service Rates Section -->
    <div class="bg-white p-6 rounded-xl shadow max-w-xl">
      <h2 class="text-lg font-semibold mb-4 text-[var(--color-primary)]">💰 Service Rates</h2>
      <div class="space-y-4">
        <div v-for="(rate, key) in settings.serviceRates" :key="key" class="flex justify-between items-center">
          <label class="capitalize text-sm font-medium">{{ key }}</label>
          <input
            v-model.number="settings.serviceRates[key]"
            type="number"
            class="p-2 border rounded w-40 text-right"
            min="0"
          />
        </div>
      </div>
    </div>

    <!-- Save Button -->
    <div class="mt-8 text-right">
      <button @click="saveSettings" class="button-primary">💾 Save Settings</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const settings = ref({
  openTime: '09:00',
  closeTime: '18:00',
  serviceRates: {
    'grooming & bath': 350,
    'wash & dry': 200,
    'dog run & café': 150
  }
})

const saveSettings = () => {
  // TODO: Save to Firebase or localStorage
  console.log('Settings saved:', settings.value)
  alert('Settings saved successfully!')
}
</script>

<style scoped>
.button-primary {
  background-color: var(--color-soft-blue);
  color: var(--color-light-purple);
  padding: 0.5em 1.2em;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}
.button-primary:hover {
  background-color: #c4d4f5;
}
</style>
