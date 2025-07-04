<template>
  <div>
    <header class="bg-lightpurple p-4 font-bold">
      Dogcare Management
    </header>
    <nav class="bg-[var(--color-success)] p-4 text-sm">
    <!-- Top Bar -->
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2">
    <h1 class="font-bold text-[var(--color-primary)] text-lg flex items-center">
      🐾 Dogcare Admin
    </h1>
    <!-- Profile icon -->
    <div
      class="w-8 h-8 rounded-full bg-[var(--color-light-purple)] text-white flex items-center justify-center text-lg font-semibold select-none"
      title="Profile"
    >
          <router-link to="/profile" class="block md:inline-block hover:underline">👤</router-link>


    </div>
  </div>
        <button
        class="md:hidden text-[var(--color-primary)]"
        @click="toggleMenu"
      >
        ☰
      </button>
    </div>

    <!-- Menu Links -->
    <div
      :class="[
        'mt-2 space-y-2 md:space-y-0 md:flex md:items-center md:space-x-4',
        showMenu ? 'block' : 'hidden md:block'
      ]"
    >
      <router-link to="/home" class="block md:inline-block hover:underline">Dashboard</router-link>
      <router-link to="/bookings" class="block md:inline-block hover:underline">Bookings</router-link>
      <router-link to="/calendar" class="block md:inline-block hover:underline">Calendar</router-link>
      <router-link to="/inventory" class="block md:inline-block hover:underline">Inventory</router-link>
      <router-link to="/members" class="block md:inline-block hover:underline">Members</router-link>
      <router-link to="/staff-roles" class="block md:inline-block hover:underline">Staffs</router-link>
      <router-link to="/wash-dry" class="block md:inline-block hover:underline">Wash&Dry</router-link>
      <router-link to="/grooming" class="block md:inline-block hover:underline">Grooming</router-link>
      <router-link to="/dog-run-cafe" class="block md:inline-block hover:underline">Dog Run Cafe</router-link>
      <router-link to="/logs" class="block md:inline-block hover:underline">Logs</router-link>
      <router-link to="/reports" class="block md:inline-block hover:underline">Reports</router-link>
      <router-link to="/settings" class="block md:inline-block hover:underline">Settings</router-link>
    </div>
  </nav>
    <main class="p-6">
      <router-view />
    </main>
  </div>
</template>

<style>
:root {
  --lightpurple: #8EACCD;
  --pastelgreen: #DEE5D4;
}
</style>
<script setup>
import { ref } from 'vue'
const showMenu = ref(false)
const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
</script>