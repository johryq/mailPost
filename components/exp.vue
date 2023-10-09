<template>
  <div class="calendar">
    <h2>{{ currentMonth }}</h2>
    <table>
      <thead>
        <tr>
          <th v-for="day in weekDays" :key="day">{{ day }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="week in weeks" :key="week">
          <td v-for="day in week" :key="day" :class="{ 'current-day': isCurrentDay(day) }">
            {{ day }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      currentDate: new Date(),
      weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    };
  },
  computed: {
    currentMonth(): string {
      const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      return monthNames[this.currentDate.getMonth()];
    },
    weeks(): Date[][] {
      const firstDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
      const lastDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);
      const weeks: Date[][] = [[]];
      let currentWeek = weeks[0];
      let currentDate = firstDayOfMonth;

      while (currentDate <= lastDayOfMonth) {
        currentWeek.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);

        if (currentDate.getDay() === 0 && currentDate <= lastDayOfMonth) {
          currentWeek = [];
          weeks.push(currentWeek);
        }
      }

      return weeks;
    },
  },
  methods: {
    isCurrentDay(date: Date): boolean {
      const today = new Date();
      return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      );
    },
  },
});
</script>

<style>
.calendar {
  text-align: center;
}

h2 {
  margin-bottom: 1rem;
}

table {
  margin: 0 auto;
  border-collapse: collapse;
}

th,
td {
  padding: 0.5rem;
  border: 1px solid #ccc;
}

.current-day {
  background-color: #ccc;
}
</style>