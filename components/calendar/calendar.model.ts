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

export const CalendarModel = Vue.extend({
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
      date: 1,
      hours: 0,
      minutes: 0,
      seconds: 1,
      ms: 1,
    }
  },
})
export default CalendarModel
