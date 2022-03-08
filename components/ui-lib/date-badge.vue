<template>
  <div class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
    {{formattedDate}}
    {{text}}
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "DateBadge",
  props: {
    $date: {
      type: Date,
      required: true
    },
    text: {
      type:String,
      default: ()=> 'Date info'
    }
  },
  computed: {
    formattedDate(): string {
      const d = this.$props.$date;
      return `${d.getUTCHours()}:${d.getMinutes()}${d.getSeconds()}`;
    }
  }
})
</script>
