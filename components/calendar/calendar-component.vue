<template>
  <div class="wrapper bg-white rounded shadow w-full">
    <month-scroll
      :selected-date="formattedDate"
      @prev-month-call="setPrevMonth"
      @next-month-call="setNextMonth"
    />
    <table class="w-full">
      <weeks-list />
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
            <date-container :date="day">
              <slot name="calendarDayContent" :calendarDate="day"></slot>
            </CalendarDay>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import MonthScroll from './month-scroll.vue'
import DateContainer from './date-container.vue'
import WeeksList from './weeks-list.vue'
import CalendarVm from './calendar.vm.ts'

export default CalendarVm.extend({
  name: 'CalendarComponent',
  components: {
    MonthScroll,
    DateContainer,
    WeeksList,
  },
})
</script>
