<template>
  <ExpandCards >
    <slot>
      <nuxt-img src="/wallpapers/0.jpeg" />
    </slot>
    <slot>
      <nuxt-img src="/wallpapers/1.jpeg" />
    </slot>
    <v-slot>
      <nuxt-img src="/wallpapers/2.jpeg" />
    </v-slot>
    <v-slot>
      <nuxt-img src="/wallpapers/3.jpeg" />
    </v-slot>
  </ExpandCards>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "ExpandingCardsIndex",
  props:{

  }
})
</script>
