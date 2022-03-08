<template>
  <div class="container mx-auto my-10">
    <calendar-component>
      <template #calendarDayContent="state">
        <date-badge v-if="isSameDay(state.calendarDate, birthDay)" :$date="state.calendarDate"/>
      </template>
    </calendar-component>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CalendarComponent from '~/components/calendar/calendar-component.vue'

export default Vue.extend({
  name: 'CalendarIndex',
  components: { CalendarComponent },
  props: {
    birthDay:{
      type: Date,
      default: () => {
        const d = new Date();
        d.setDate(d.getDate() + 1);
        return d;
      }
    },
  },
  methods:{
    isSameDay(dLeft: Date, dRight: Date): boolean {
      return (
        dLeft.getFullYear() === dRight.getFullYear() &&
        dLeft.getMonth() === dRight.getMonth() &&
        dLeft.getDate() === dRight.getDate()
      )
    },
  }
})
</script>
