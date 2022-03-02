<template>
  <calendar-component />
</template>

<script lang="ts">
import Vue from 'vue'
import CalendarComponent from '~/components/calendar/calendar-component.vue'

export default Vue.extend({
  name: 'CalendarIndex',
  components: { CalendarComponent },
  props: {},
})
</script>
