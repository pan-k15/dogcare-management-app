<template>
  <div class="min-h-screen p-6 home-bg">
    <h1 class="text-2xl font-bold mb-6" style="color: var(--color-primary);">
      📊 Dashboard
    </h1>

    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div class="card-primary text-white">🐶 Today's Bookings</div>
      <div class="card-primary text-white">🛁 Services in Progress</div>
      <div class="card-primary text-white">🍖 Inventory Alerts</div>
    </div>
  </div>
</template>

<style scoped>
.home-bg {
  background-color: var(--color-background);
}

.card-accent {
  background-color: var(--color-accent);
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.card-neutral {
  background-color: var(--color-neutral);
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.card-primary {
  background-color: var(--color-primary);
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
