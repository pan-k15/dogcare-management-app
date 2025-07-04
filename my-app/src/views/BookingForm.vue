<template>
    <div class="min-h-screen p-6 bg-[var(--color-background)]">
      <h1 class="text-2xl font-bold mb-6 text-[var(--color-primary)]">➕ New Booking</h1>
  
      <form @submit.prevent="handleSubmit" class="bg-white p-6 rounded-xl shadow max-w-xl mx-auto space-y-4">
        <div>
          <label class="block font-semibold mb-1 text-[var(--color-primary)]">Pet Name</label>
          <input
            v-model="form.pet"
            type="text"
            placeholder="Enter pet name"
            class="w-full p-2 border border-[var(--color-primary)] rounded"
            required
          />
        </div>
  
        <div>
          <label class="block font-semibold mb-1 text-[var(--color-primary)]">Service</label>
          <select
            v-model="form.service"
            class="w-full p-2 border border-[var(--color-primary)] rounded"
            required
          >
            <option value="">Select a service</option>
            <option value="Grooming & Bath">Grooming & Bath</option>
            <option value="Wash & Dry">Wash & Dry</option>
            <option value="Dog Run & Café">Dog Run & Café</option>
          </select>
        </div>
  
        <div>
          <label class="block font-semibold mb-1 text-[var(--color-primary)]">Date</label>
          <input
            v-model="form.date"
            type="date"
            class="w-full p-2 border border-[var(--color-primary)] rounded"
            required
          />
        </div>
  
        <div>
          <label class="block font-semibold mb-1 text-[var(--color-primary)]">Time</label>
          <input
            v-model="form.time"
            type="time"
            class="w-full p-2 border border-[var(--color-primary)] rounded"
            required
          />
        </div>
  
        <div class="text-right">
          <button type="submit" class="button-primary">📌 Save Booking</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const form = ref({
    pet: '',
    service: '',
    date: '',
    time: '',
  })
  
  const handleSubmit = () => {
    console.log('Submitted Booking:', form.value)
  
    // TODO: send to Firebase or backend
    alert(`Booking saved for ${form.value.pet}!`)
  
    // Reset form
    form.value = {
      pet: '',
      service: '',
      date: '',
      time: ''
    }
  }
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
  