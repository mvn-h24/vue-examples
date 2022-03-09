<template>
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
import {PropType} from 'vue'
import CalendarControls from './calendar-controls.vue'
import CalendarDay from './calendar-day.vue'
import CalendarHead from './calendar-head.vue'
import CalendarDateCore from './calendar-date-core.vue'

export default CalendarDateCore.extend({
  name: 'CalendarComponent',
  components: {
    CalendarControls,
    CalendarDay,
    CalendarHead,
  },
  props: {
    currentDate: {
      type: Date as PropType<Date>,
      default: () => new Date(),
    },
  },
  data() {
    return {
      cDateState: { src: this.$props.currentDate },
    }
  },
  computed: {
    monthFirstDate(): Date {
      return this.startOfMonth(this.cDate)
    },
    monthLastDay(): Date {
      return this.endOfMonth(this.cDate)
    },
    formattedDate: {
      get(): String {
        return `${this.cDate.getMonth() + 1}-${this.cDate.getFullYear()}`
      },
    },
    cDate: {
      set(d: Date) {
        this.cDateState = { src: d }
      },
      get(): Date {
        return this.cDateState.src
      },
    },
    weeksList(): Array<Array<Date>> {
      const monthStart = this.monthFirstDate
      const monthEnd = this.monthLastDay
      const daysCount = monthEnd.getDate();
      const weeks: Array<Array<Date>> = [[]];
      const getFirstDay = () => weeks[0][0]
      const getLastWeek = () => weeks[weeks.length - 1]
      const getLastDay = () => weeks[weeks.length - 1][weeks[weeks.length - 1].length -1]
      
      for(let i = 0; i < daysCount ;i ++){
        const weekDate = this.addDays(monthStart, i);
        if(weekDate.getDay() === 1 && weeks[0].length > 1){
          weeks.push([weekDate])
        }else{
          weeks[weeks.length - 1].push(weekDate)
        }
      }
      const firstDay = getFirstDay().getDay();
      if(firstDay !== 1){
        for(let i = firstDay; i > 1;i--){
          weeks[0].unshift(this.subDays(weeks[0][0], 1));
        }
      }
      const lastDay = getLastDay().getDay();
      if(lastDay !== 0){
        for(let i = lastDay; i <= 6;i++){
          getLastWeek().push(this.addDays(getLastDay(), 1));
        }
      }
      return weeks
    },
  },
  methods: {
    setNextMonth() {
      this.cDate = this.addMonths(this.cDate, 1)
    },
    setPrevMonth() {
      this.cDate = this.subMonths(this.cDate, 1)
    },

  },
})
</script>
