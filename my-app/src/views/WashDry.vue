<template>
  <div class="min-h-screen p-6 bg-[var(--color-background)]">
    <h1 class="text-2xl font-bold mb-6 text-[var(--color-primary)]">🧺 Wash & Dry Queue</h1>

    <ul class="space-y-4">
      <li
        v-for="job in washQueue"
        :key="job.id"
        class="bg-white p-4 rounded-xl shadow flex justify-between items-center"
      >
        <div>
          <div class="font-semibold text-[var(--color-primary)]">{{ job.pet }}</div>
          <div class="text-sm text-gray-500">Owner: {{ job.owner }}</div>
          <div class="text-sm text-gray-500">Time: {{ job.time }}</div>
        </div>
        <div class="flex items-center gap-4">
          <span
            class="px-3 py-1 text-sm font-medium rounded-full"
            :class="{
              'bg-yellow-200 text-yellow-800': job.status === 'waiting',
              'bg-blue-200 text-blue-800': job.status === 'in progress',
              'bg-green-200 text-green-800': job.status === 'done'
            }"
          >
            {{ job.status }}
          </span>
          <button
            v-if="job.status !== 'done'"
            @click="markAsDone(job.id)"
            class="text-sm text-green-600 hover:text-green-800 font-semibold"
          >
            ✅ Done
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const washQueue = ref([
  { id: 1, pet: 'Lucky', owner: 'Panisa', time: '10:00', status: 'waiting' },
  { id: 2, pet: 'Milo', owner: 'Tawan', time: '11:30', status: 'in progress' },
  { id: 3, pet: 'Bella', owner: 'James', time: '13:00', status: 'done' }
])

const markAsDone = (id) => {
  const job = washQueue.value.find(j => j.id === id)
  if (job) job.status = 'done'
}
</script>
