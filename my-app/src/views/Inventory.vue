<template>
  <div class="min-h-screen p-6 bg-[var(--color-background)]">
    <h1 class="text-2xl font-bold mb-6 text-[var(--color-primary)]">🍖 Snack Inventory</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div
        v-for="snack in snacks"
        :key="snack.id"
        class="bg-white p-4 rounded-xl shadow flex flex-col justify-between"
      >
        <div>
          <h2 class="text-lg font-semibold text-[var(--color-primary)]">{{ snack.name }}</h2>
          <p class="text-sm text-gray-600">Stock: {{ snack.stock }}</p>
        </div>
        <div class="mt-4 flex gap-2">
          <button @click="increaseStock(snack.id)" class="btn-increase">＋</button>
          <button @click="decreaseStock(snack.id)" class="btn-decrease">－</button>
          <button @click="removeSnack(snack.id)" class="btn-remove ml-auto">🗑</button>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <h2 class="text-lg font-semibold mb-2 text-[var(--color-primary)]">➕ Add New Snack</h2>
      <form @submit.prevent="addSnack" class="flex flex-wrap gap-4 items-center">
        <input
          v-model="newSnackName"
          type="text"
          placeholder="Snack name"
          class="p-2 border border-[var(--color-primary)] rounded"
          required
        />
        <button type="submit" class="button-primary">Add</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const snacks = ref([
  { id: 1, name: 'Dried Chicken', stock: 10 },
  { id: 2, name: 'Cow Ear Chews', stock: 5 },
  { id: 3, name: 'Beef Jerky', stock: 8 }
])

const newSnackName = ref('')

const addSnack = () => {
  if (!newSnackName.value) return
  const newId = snacks.value.length ? Math.max(...snacks.value.map(s => s.id)) + 1 : 1
  snacks.value.push({ id: newId, name: newSnackName.value, stock: 0 })
  newSnackName.value = ''
}

const increaseStock = id => {
  const snack = snacks.value.find(s => s.id === id)
  if (snack) snack.stock++
}

const decreaseStock = id => {
  const snack = snacks.value.find(s => s.id === id)
  if (snack && snack.stock > 0) snack.stock--
}

const removeSnack = id => {
  snacks.value = snacks.value.filter(s => s.id !== id)
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

.btn-increase,
.btn-decrease,
.btn-remove {
  background-color: #f3f4f6;
  border-radius: 6px;
  padding: 0.4rem 0.7rem;
  font-weight: bold;
  transition: background-color 0.2s ease;
}
.btn-increase:hover {
  background-color: #d1fae5;
}
.btn-decrease:hover {
  background-color: #fee2e2;
}
.btn-remove:hover {
  background-color: #fca5a5;
}
</style>
