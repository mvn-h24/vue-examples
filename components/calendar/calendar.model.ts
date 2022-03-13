import Vue, { PropType } from 'vue'

export interface CalendarProps {
  currentDate: Date
}
export interface ICalendarModel {
  year: number
  month: number
  date: number
  hours: number
  minutes: number
  seconds: number
  ms: number
}

export const CalendarModel = Vue.mixin({
  props: {
    currentDate: {
      type: Date as PropType<Date>,
      default: () => new Date(),
    },
  },
  data() {
    return {
      year: this.currentDate.getFullYear(),
      month: this.currentDate.getMonth(),
      date: this.currentDate.getDate(),
      hours: this.currentDate.getHours(),
      minutes: this.currentDate.getMinutes(),
      seconds: this.currentDate.getSeconds(),
      ms: this.currentDate.getMilliseconds(),
    }
  },
})
export default CalendarModel
