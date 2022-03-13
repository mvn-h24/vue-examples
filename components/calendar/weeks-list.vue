<template>
  <thead>
    <tr>
      <th
        class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
      >
        <span class="xl:block lg:block md:block sm:block hidden"> Sunday </span>
        <span class="xl:hidden lg:hidden md:hidden sm:hidden block"> Sun </span>
      </th>
      <th
        class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
      >
        <span class="xl:block lg:block md:block sm:block hidden"> Monday </span>
        <span class="xl:hidden lg:hidden md:hidden sm:hidden block"> Mon </span>
      </th>
      <th
        class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
      >
        <span class="xl:block lg:block md:block sm:block hidden">
          Tuesday
        </span>
        <span class="xl:hidden lg:hidden md:hidden sm:hidden block"> Tue </span>
      </th>
      <th
        class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
      >
        <span class="xl:block lg:block md:block sm:block hidden">
          Wednesday
        </span>
        <span class="xl:hidden lg:hidden md:hidden sm:hidden block"> Wed </span>
      </th>
      <th
        class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
      >
        <span class="xl:block lg:block md:block sm:block hidden">
          Thursday
        </span>
        <span class="xl:hidden lg:hidden md:hidden sm:hidden block"> Thu </span>
      </th>
      <th
        class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
      >
        <span class="xl:block lg:block md:block sm:block hidden"> Friday </span>
        <span class="xl:hidden lg:hidden md:hidden sm:hidden block"> Fri </span>
      </th>
      <th
        class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
      >
        <span class="xl:block lg:block md:block sm:block hidden">
          Saturday
        </span>
        <span class="xl:hidden lg:hidden md:hidden sm:hidden block"> Sat </span>
      </th>
    </tr>
  </thead>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CalendarHead',
})
</script>
