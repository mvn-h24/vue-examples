import { CombinedVueInstance } from 'vue/types/vue'
import Vue, { PropType } from 'vue'

export interface CalendarProps {
  currentDate: Date
}
export const calendarProps = {
  currentDate: {
    type: Date as PropType<Date>,
    default: () => new Date(),
  },
}
export interface CalendarState {
  year: number
  month: number
  date: number
  hours: number
  minutes: number
  seconds: number
  ms: number
}
export const initialState = (
  vm: CombinedVueInstance<Vue, CalendarState, unknown, unknown, CalendarProps>
): CalendarState => ({
  year: vm.currentDate.getFullYear(),
  month: vm.currentDate.getMonth(),
  date: vm.currentDate.getDate(),
  hours: vm.currentDate.getHours(),
  minutes: vm.currentDate.getMinutes(),
  seconds: vm.currentDate.getSeconds(),
  ms: vm.currentDate.getMilliseconds(),
})
