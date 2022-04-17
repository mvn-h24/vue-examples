import Vue from 'vue'

export interface CalendarMethods {
  isSameMonth(dLeft: Date, dRight: Date): boolean
  endOfMonth(d: Date): Date
  startOfMonth(d: Date): Date
  lastDayOfMonth(d: Date): Date
  differenceInCalendarWeeks(dLeft: Date, dRight: Date): any
  addMonths(d: Date, amount: number): Date
  subMonths(d: Date, amount: number): Date
  startOfWeek(d: Date): Date
  addDays(d: Date, amount: number): any
  subDays(d: Date, amount: number): any
  getTimezoneOffsetInMilliseconds(date: Date): number
  getWeeksInMonth(d: Date): any
  weekBetweenMonth(date: Date): any
  getWeeksCount(startFrom: Date, count: number): any
}
export default Vue.extend<unknown, CalendarMethods, unknown, unknown>({
  methods: {
    isSameMonth(dLeft: Date, dRight: Date): boolean {
      return (
        dLeft.getFullYear() === dRight.getFullYear() &&
        dLeft.getMonth() === dRight.getMonth()
      )
    },
    endOfMonth(d: Date): Date {
      const date = new Date(
        d.getFullYear(),
        d.getMonth(),
        d.getDate(),
        d.getHours(),
        d.getMinutes(),
        d.getSeconds(),
        d.getMilliseconds()
      )
      date.setFullYear(d.getFullYear(), d.getMonth() + 1, 0)
      date.setHours(23, 59, 59, 999)
      return date
    },
    startOfMonth(d: Date): Date {
      const date = new Date(
        d.getFullYear(),
        d.getMonth(),
        d.getDate(),
        d.getHours(),
        d.getMinutes(),
        d.getSeconds(),
        d.getMilliseconds()
      )
      date.setDate(1)
      date.setHours(0, 0, 0, 0)
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
