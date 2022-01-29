<template>
  <nuxt-link class="inline-block p-5 border-2 border-black rounded-full" :to="projectUrl"><slot/></nuxt-link>
</template>

<script>
export default {
  name: "LinkComponent",
  props:{
    projectUrl:{
      type: String,
      required: true
    }
  }
}
</script>
