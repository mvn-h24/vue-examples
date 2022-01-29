<template>
  <nav>
    <ul>
      <li v-for="(link, index) in linksList" :key="index"><link-component :project-url="link.url">{{link.title}}</link-component></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import LinkComponent from "./Link.vue";

export default Vue.extend({
  name: "ListComposition",
  components: {
    LinkComponent,
  },
  props:{
    linksList: {
      type: Array,
      default: ()=> []
    }
  }
});
</script>
