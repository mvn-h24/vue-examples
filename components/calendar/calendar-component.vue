<template lang="html">
  <div class="wrapper bg-white rounded shadow w-full">
    <calendar-controls
      :selected-date="formattedDate"
      @prev-month-call="setPrevMonth"
      @next-month-call="setNextMonth"
    />
    <table class="w-full">
      <CalendarHead />
      <tbody>
      <tr
        v-for="(week, index) in weeksList"
        :key="index"
        class="text-center h-20"
      >
        <td
          v-for="(day, i) in week"
          :key="i"
          class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition ease"
          :class="isSameMonth(monthFirstDate, day) ? '' : ' bg-gray-100'"
        >
          <CalendarDay :date="day" >
            <slot name="calendarDayContent" :calendarDate="day"></slot>
          </CalendarDay>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CalendarControls from './calendar-controls.vue'
import CalendarDay from './calendar-day.vue'
import CalendarHead from './calendar-head.vue'
import CalendarComponent from "~/components/calendar/calendar.component.js";

export default Vue.extend({
  name: 'CalendarComponent',
  components: {
    CalendarControls,
    CalendarDay,
    CalendarHead,
  },
  mixins: [CalendarComponent]
})
</script>
