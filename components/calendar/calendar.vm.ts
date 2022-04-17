import Vue from 'vue'
import {
  CalendarModel,
  CalendarProps,
  ICalendarModel,
} from '~/components/calendar/calendar.model'
import CalendarService, {
  CalendarMethods,
} from '~/components/calendar/calendar.service'

interface CalendarVmComputed {
  navDate: Date
  monthFirstDate: Date
  monthLastDay: Date
  formattedDate: String
  weeksList: Array<Array<Date>>
}
export default Vue.extend<
  ICalendarModel,
  CalendarMethods & any,
  CalendarVmComputed,
  CalendarProps
>({
  mixins: [CalendarService, CalendarModel],
  computed: {
    navDate: {
      set(d: Date) {
        this.year = d.getFullYear()
        this.month = d.getMonth()
        this.date = 1
        this.hours = 0
        this.minutes = 0
        this.seconds = 1
        this.ms = 1
      },
      get(): Date {
        return new Date(
          this.year,
          this.month,
          this.date,
          this.hours,
          this.minutes,
          this.seconds,
          this.ms
        )
      },
    },
    monthFirstDate(): Date {
      return this.startOfMonth(this.navDate)
    },
    monthLastDay(): Date {
      return this.endOfMonth(this.navDate)
    },
    formattedDate: {
      get(): String {
        return `${this.navDate.getMonth() + 1}-${this.navDate.getFullYear()}`
      },
    },

    weeksList(): Array<Array<Date>> {
      const monthStart = this.monthFirstDate
      const monthEnd = this.monthLastDay
      const weeks: Array<Array<Date>> = [[]]
      const getFirstDay = () => weeks[0][0]
      const getLastWeek = () => weeks[weeks.length - 1]
      const getLastDay = () =>
        weeks[weeks.length - 1][weeks[weeks.length - 1].length - 1]
      for (let i = 0; i < monthEnd.getDate(); i++) {
        const weekDate = this.addDays(monthStart, i)
        if (weekDate.getDay() === 1 && weeks[0].length >= 1) {
          weeks.push([weekDate])
        } else {
          weeks[weeks.length - 1].push(weekDate)
        }
      }
      const firstDay = getFirstDay().getDay()
      if (firstDay !== 1) {
        for (let i = firstDay === 0 ? 7 : firstDay; i > 1; i--) {
          weeks[0].unshift(this.subDays(weeks[0][0], 1))
        }
      }
      const lastDay = getLastDay().getDay()
      if (lastDay !== 0) {
        for (let i = lastDay; i <= 6; i++) {
          getLastWeek().push(this.addDays(getLastDay(), 1))
        }
      }
      return weeks
    },
  },
  methods: {
    setNextMonth() {
      this.navDate = this.addMonths(this.navDate, 1)
    },
    setPrevMonth() {
      this.navDate = this.subMonths(this.navDate, 1)
    },
  },
})
