<template>
  <thead>
    <tr>
      <th
        v-for="(day, index) in daysList"
        :key="index"
        class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
      >
        <span class="xl:block lg:block md:block sm:block hidden"> {{day.name}} </span>
        <span class="xl:hidden lg:hidden md:hidden sm:hidden block"> {{ day.shorten }} </span>
      </th>
    </tr>
  </thead>
</template>

<script lang="ts">
import Vue from 'vue'

interface WeekDay {
  name: string;
  shorten: string
}
type WeekDaysList = Array<WeekDay>

interface CalendarHeadData {
  daysList: WeekDaysList
}
export default Vue.extend({
  name: 'CalendarHead',
  data(): CalendarHeadData{
    return  {
      daysList: [
        {
          name: 'Monday',
          shorten: 'Mon'
        },
        {
          name: 'Tuesday',
          shorten: 'Tue'
        },
        {
          name: 'Wednesday',
          shorten: 'Wed'
        },
        {
          name: 'Thursday',
          shorten: 'Thu'
        },
        {
          name: 'Friday',
          shorten: 'Fri'
        },
        {
          name: 'Saturday',
          shorten: 'Sat'
        },
        {
          name: 'Sunday',
          shorten: 'Sun'
        }
      ]
    }
  }
})
</script>
