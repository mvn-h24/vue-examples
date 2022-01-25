<template>
  <ul>
    <li v-for="(card,  index) of cards"  :key="index"></li>
  </ul>
</template>

<script lang="ts">
import Vue, {PropOptions} from "vue";

export default Vue.extend({
  name: "ExpandCards",
  props: {
    cards: {
      type: Array,
      required: true
    } as PropOptions<Array<unknown>>
  }
});
</script>

<style scoped>

</style>
