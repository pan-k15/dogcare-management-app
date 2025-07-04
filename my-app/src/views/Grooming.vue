<template>
  <div class="min-h-screen p-6 bg-[var(--color-background)]">
    <h1 class="text-2xl font-bold mb-6 text-[var(--color-primary)]">🛁 Grooming & Bath Tracker</h1>

    <ul class="space-y-6">
      <li
        v-for="pet in groomingList"
        :key="pet.id"
        class="bg-white p-4 rounded-xl shadow space-y-2"
      >
        <div>
          <div class="font-semibold text-[var(--color-primary)]">{{ pet.name }}</div>
          <div class="text-sm text-gray-500">Owner: {{ pet.owner }}</div>
        </div>

        <ul class="space-y-1">
          <li
            v-for="(task, index) in pet.tasks"
            :key="index"
            class="flex justify-between items-center border-t pt-2"
          >
            <span>{{ task.name }}</span>
            <button
              v-if="!task.done"
              @click="markTaskDone(pet.id, index)"
              class="text-sm text-green-600 hover:text-green-800 font-medium"
            >
              ✅ Done
            </button>
            <span v-else class="text-green-600 text-sm font-semibold">✔ Completed</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const groomingList = ref([
  {
    id: 1,
    name: 'Lucky',
    owner: 'Panisa',
    tasks: [
      { name: 'Brushing', done: false },
      { name: 'Hair Trim', done: false },
      { name: 'Shampoo', done: false },
      { name: 'Blow Dry', done: false }
    ]
  },
  {
    id: 2,
    name: 'Milo',
    owner: 'Tawan',
    tasks: [
      { name: 'Brushing', done: true },
      { name: 'Hair Trim', done: false },
      { name: 'Shampoo', done: false },
      { name: 'Blow Dry', done: false }
    ]
  }
])

const markTaskDone = (petId, taskIndex) => {
  const pet = groomingList.value.find(p => p.id === petId)
  if (pet) pet.tasks[taskIndex].done = true
}
</script>
