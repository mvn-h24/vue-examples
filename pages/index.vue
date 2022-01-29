<template lang="html">
  <list-composition class="w-full h-full" :links-list="linksList"/>
</template>

<script lang="ts">
import Vue from 'vue'
import ListComposition from "~/components/ui-lib/Project/ListComposition.vue";

const Projects = [
  {
    url:'/expanding-cards',
    title:'Expanding cards'
  },{
    url:'/cinema-cc',
    title:'Cinema CC'
  },
]
export default Vue.extend({
  name: 'IndexPage',
  components: {ListComposition},
  layout: 'FullscreenLayout',
  data() {
    return {
      linksList:Projects
    };
  }
})
</script>
