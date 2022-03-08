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
            :class="isSameMonth(monthStart, day) ? '' : ' bg-gray-100'"
          >
            <CalendarDay :date="day" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue'
import CalendarControls from './calendar-controls.vue'
import CalendarDay from './calendar-day.vue'
import CalendarHead from './calendar-head.vue'

export default Vue.extend({
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
    monthStart(): Date {
      return this.startOfMonth(this.cDate)
    },
    monthEnd(): Date {
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
      const date = this.cDate
      const monthStart = this.monthStart
      const monthEnd = this.monthEnd
      let weeksBetweenMonths = 0
      let weeksFirstDay = monthStart
      let FirstWeek, LastWeek
      if (monthStart.getDay() !== 1) {
        FirstWeek = this.weekBetweenMonth(monthStart)
        weeksFirstDay = FirstWeek[FirstWeek.length - 1]
        weeksBetweenMonths++
      }
      if (monthEnd.getDay() !== 0) {
        LastWeek = this.weekBetweenMonth(monthEnd)
        weeksBetweenMonths++
      }
      const weeks = this.getWeeksCount(
        weeksFirstDay,
        this.getWeeksInMonth(date) - weeksBetweenMonths
      )
      if (FirstWeek) weeks.unshift(FirstWeek)
      if (LastWeek) weeks.push(LastWeek)
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
    isSameMonth(dLeft: Date, dRight: Date): boolean {
      return (
        dLeft.getFullYear() === dRight.getFullYear() &&
        dLeft.getMonth() === dRight.getMonth()
      )
    },
    endOfMonth(d: Date): Date {
      const date = new Date(
        d.getUTCFullYear(),
        d.getUTCMonth(),
        d.getUTCDay(),
        d.getUTCHours(),
        d.getUTCMinutes(),
        d.getUTCSeconds(),
        d.getUTCMilliseconds()
      )
      date.setUTCFullYear(d.getFullYear(), d.getMonth() + 1, 0)
      date.setUTCHours(23, 59, 59, 999)
      return date
    },
    startOfMonth(d: Date): Date {
      const date = new Date(
        d.getUTCFullYear(),
        d.getUTCMonth(),
        d.getUTCDay(),
        d.getUTCHours(),
        d.getUTCMinutes(),
        d.getUTCSeconds(),
        d.getUTCMilliseconds()
      )
      date.setUTCDate(1)
      date.setUTCHours(0, 0, 0, 0)
      return date
    },
    lastDayOfMonth(d: Date): Date {
      const date = new Date(
        d.getUTCFullYear(),
        d.getUTCMonth(),
        d.getUTCDay(),
        d.getUTCHours(),
        d.getUTCMinutes(),
        d.getUTCSeconds(),
        d.getUTCMilliseconds()
      )
      const month = date.getMonth()
      date.setUTCFullYear(date.getFullYear(), month + 1, 0)
      date.setUTCHours(0, 0, 0, 0)
      return date
    },
    differenceInCalendarWeeks(dLeft: Date, dRight: Date) {
      const timestampLeft = dLeft.getTime()
      const timestampRight = dRight.getTime()
      const MILLISECONDS_IN_WEEK = 604800000

      return Math.round((timestampRight - timestampLeft) / MILLISECONDS_IN_WEEK) //!
    },
    addMonths(d: Date, amount: number): Date {
      if (!amount) {
        return d
      }
      const dayOfMonth = d.getDate()
      const endOfDesiredMonth = new Date(d.getTime())
      endOfDesiredMonth.setMonth(d.getMonth() + amount + 1, 0)
      const daysInMonth = endOfDesiredMonth.getDate()
      if (dayOfMonth >= daysInMonth) {
        return endOfDesiredMonth
      } else {
        d.setFullYear(
          endOfDesiredMonth.getFullYear(),
          endOfDesiredMonth.getMonth(),
          dayOfMonth
        )
        return d
      }
    },
    subMonths(d: Date, amount: number): Date {
      return this.addMonths(d, -amount)
    },
    startOfWeek(d: Date): Date {
      return d
    },
    addDays(d: Date, amount: number) {
      const date = new Date(d.getTime())
      if (!amount) {
        return date
      }
      date.setDate(date.getDate() + amount)
      return date
    },
    subDays(d: Date, amount: number) {
      return this.addDays(d, -amount)
    },
    getTimezoneOffsetInMilliseconds(date: Date): number {
      const utcDate = new Date(
        Date.UTC(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          date.getHours(),
          date.getMinutes(),
          date.getSeconds(),
          date.getMilliseconds()
        )
      )
      utcDate.setUTCFullYear(date.getFullYear())
      return date.getTime() - utcDate.getTime()
    },

    getWeeksInMonth(d: Date) {
      return this.differenceInCalendarWeeks(
        this.startOfMonth(d),
        this.endOfMonth(d)
      )
    },
    weekBetweenMonth(date: Date) {
      return Array.from(
        Array.from(Array(date.getDay() !== 0 ? date.getDay() - 1 : 6).keys())
          .map((_v, i) => this.subDays(date, i + 1))
          .sort(() => -1)
      ).concat(
        Array.from(
          Array(date.getDay() === 0 ? 1 : 8 - date.getDay()).keys()
        ).map((_v, i) => this.addDays(date, i))
      )
    },
    getWeeksCount(startFrom: Date = new Date(), count: number) {
      let daysCount = 0
      return Array.from(
        Array.from(Array(count).keys()).map(() =>
          Array.from(
            Array.from(Array(7).keys()).map(() => {
              return this.addDays(startFrom, daysCount++)
            })
          )
        )
      )
    },
  },
})
</script>
