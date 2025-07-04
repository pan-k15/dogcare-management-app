<template>
    <div class="min-h-screen p-6 bg-[var(--color-background)]">
      <h1 class="text-2xl font-bold mb-6 text-[var(--color-primary)]">👥 Staff / Member Management</h1>
  
      <ul class="space-y-3 mb-8">
        <li
          v-for="member in members"
          :key="member.id"
          class="bg-white p-4 rounded-xl shadow flex justify-between items-center"
        >
          <div>
            <div class="font-semibold text-[var(--color-primary)]">{{ member.name }}</div>
            <div class="text-sm text-gray-500">{{ member.role }}</div>
          </div>
          <button
            @click="removeMember(member.id)"
            class="text-sm text-red-600 hover:text-red-800 font-medium"
          >
            🗑 Remove
          </button>
        </li>
      </ul>
  
      <form @submit.prevent="addMember" class="max-w-md bg-white p-4 rounded-xl shadow space-y-4">
        <h2 class="text-lg font-semibold text-[var(--color-primary)]">➕ Add New Member</h2>
        <div>
          <input
            v-model="newMember.name"
            type="text"
            placeholder="Full name"
            class="w-full p-2 border border-[var(--color-primary)] rounded"
            required
          />
        </div>
        <div>
          <input
            v-model="newMember.role"
            type="text"
            placeholder="Role (e.g. Groomer)"
            class="w-full p-2 border border-[var(--color-primary)] rounded"
            required
          />
        </div>
        <div class="text-right">
          <button type="submit" class="button-primary">Add Member</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const members = ref([
    { id: 1, name: 'Jane Doe', role: 'Groomer' },
    { id: 2, name: 'John Smith', role: 'Receptionist' }
  ])
  
  const newMember = ref({
    name: '',
    role: ''
  })
  
  const addMember = () => {
    if (!newMember.value.name || !newMember.value.role) return
    const newId = members.value.length ? Math.max(...members.value.map(m => m.id)) + 1 : 1
    members.value.push({
      id: newId,
      name: newMember.value.name,
      role: newMember.value.role
    })
    newMember.value.name = ''
    newMember.value.role = ''
  }
  
  const removeMember = id => {
    members.value = members.value.filter(member => member.id !== id)
  }
  </script>
  
  <style scoped>
  .button-primary {
    background-color: var(--color-soft-blue);
    color: var(--color-light-purple);
    padding: 0.5em 1em;
    border-radius: 8px;
    font-weight: 600;
    transition: background-color 0.3s ease;
  }
  .button-primary:hover {
    background-color: #c4d4f5;
  }
  </style>
  