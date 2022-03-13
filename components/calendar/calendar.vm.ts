export const calendarVm = {
  setNextMonth() {
    this.cDate = this.addMonths(this.cDate, 1)
  },
  setPrevMonth() {
    this.cDate = this.subMonths(this.cDate, 1)
  },
}
