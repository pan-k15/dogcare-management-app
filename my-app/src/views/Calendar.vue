<template>
  <div class="min-h-screen p-6 bg-[var(--color-background)]">
    <h1 class="text-2xl font-bold mb-4 text-[var(--color-primary)]">📆 Calendar View</h1>

    <FullCalendar
      :options="calendarOptions"
      class="bg-white rounded-lg shadow p-4"
    />
  </div>
</template>

<script setup>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import { ref } from 'vue'

const calendarOptions = ref({
  plugins: [dayGridPlugin],
  initialView: 'dayGridMonth',
  height: 'auto',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,dayGridWeek'
  },
  events: [
    { title: 'Dog Bath - Lucky', date: '2025-07-04' },
    { title: 'Grooming - Bella', date: '2025-07-07' },
    { title: 'Wash & Dry - Max', date: '2025-07-08' }
  ]
})
</script>

<style scoped>
.fc {
  --fc-border-color: #dee5d4;
  --fc-today-bg-color: #d2e0fb;
  --fc-button-bg-color: var(--color-soft-blue);
  --fc-button-text-color: var(--color-light-purple);
  --fc-button-hover-bg-color: #c4d4f5;
  --fc-daygrid-event-bg-color: var(--color-primary);
  --fc-daygrid-event-text-color: white;
}
</style>
