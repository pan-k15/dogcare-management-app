<template>
  <div class="min-h-screen p-6 bg-[var(--color-background)] max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-6 text-[var(--color-primary)]">👤 Profile</h1>

    <form @submit.prevent="updateProfile" class="bg-white p-6 rounded-xl shadow space-y-5">
      <div>
        <label class="block mb-1 font-medium text-gray-700">Name</label>
        <input
          v-model="profile.name"
          type="text"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div>
        <label class="block mb-1 font-medium text-gray-700">Email</label>
        <input
          v-model="profile.email"
          type="email"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <h2 class="text-lg font-semibold mt-6 mb-3 text-[var(--color-primary)]">Change Password</h2>

      <div>
        <label class="block mb-1 font-medium text-gray-700">Current Password</label>
        <input
          v-model="passwords.current"
          type="password"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div>
        <label class="block mb-1 font-medium text-gray-700">New Password</label>
        <input
          v-model="passwords.new"
          type="password"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div>
        <label class="block mb-1 font-medium text-gray-700">Confirm New Password</label>
        <input
          v-model="passwords.confirm"
          type="password"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <button type="submit" class="button-primary w-full py-2 mt-4">Save Changes</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const profile = reactive({
  name: 'Panisa Kraiwattanapong',
  email: 'panisa@example.com'
})

const passwords = reactive({
  current: '',
  new: '',
  confirm: ''
})

const updateProfile = () => {
  if (passwords.new !== passwords.confirm) {
    alert("New passwords don't match.")
    return
  }
  // TODO: Call API or Firebase to update profile and password securely
  alert('Profile updated successfully!')
  // Clear password fields
  passwords.current = ''
  passwords.new = ''
  passwords.confirm = ''
}
</script>

<style scoped>
.button-primary {
  background-color: var(--color-soft-blue);
  color: var(--color-light-purple);
  font-weight: 600;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}
.button-primary:hover {
  background-color: #c4d4f5;
}
</style>
