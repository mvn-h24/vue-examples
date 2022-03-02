<template>
  <div
    className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden"
  >
    <div className="top h-5 w-full">
      <span className="text-gray-500">{{ calendarDay }}</span>
    </div>
    <div className="bottom flex-grow h-30 py-1 w-full overflow-y-auto">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
export default Vue.extend({
  name: 'CalendarDay',
  props: {
    date: {
      type: Date as PropType<Date>,
      required: true,
    },
  },
  computed: {
    calendarDay(): number {
      return this.date.getDate()
    },
  },
})
</script>

<style></style>
