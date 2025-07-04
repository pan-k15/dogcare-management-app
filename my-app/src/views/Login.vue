<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
        <h2 class="text-xl font-semibold mb-4 text-center">Staff Login</h2>
        <form @submit.prevent="handleLogin">
          <input v-model="email" type="email" placeholder="Email" class="w-full mb-3 p-2 border rounded" />
          <input v-model="password" type="password" placeholder="Password" class="w-full mb-3 p-2 border rounded" />
          <button type="submit" class="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">Log In</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const email = ref('')
  const password = ref('')
  
  const handleLogin = () => {
    // Add login logic
    console.log(`Logging in with: ${email.value}, ${password.value}`)
  }
  </script>
  