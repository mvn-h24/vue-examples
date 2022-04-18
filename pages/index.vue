<template lang="html">
  <nav class="w-full min-h-screen flex items-center justify-center py-4">
    <ul class="grid gap-4">
      <li v-for="(link, index) in linksList" :key="index">
        <ProjectLink :project-url="link.url">{{ link.title }}</ProjectLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

const Projects = [
  {
    url: '/expanding-cards',
    title: 'Expanding cards',
  },
  {
    url: '/calendar',
    title: 'Calendar',
  },
  {
    url: '/file-uploader',
    title: 'File uploader',
  }
]
export default Vue.extend({
  name: 'IndexPage',
  layout: 'FullscreenLayout',
  data() {
    return {
      linksList: Projects,
    }
  },
})
</script>
