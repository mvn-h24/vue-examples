<template>
  <ExpandCards :cards="CardsList" />
</template>

<script lang="ts">
import Vue from 'vue'
import { IExpandCard } from '~/components/expand-cards/ExpandCards.vue'

const cardList: Array<IExpandCard> = [
  {
    active: false,
    src: '/wallpapers/0.jpeg',
  },
  {
    active: false,
    src: '/wallpapers/1.jpeg',
  },
  {
    active: false,
    src: '/wallpapers/2.jpeg',
  },
  {
    active: false,
    src: '/wallpapers/3.jpeg',
  },
  {
    active: false,
    src: '/wallpapers/4.jpeg',
  },
  {
    active: false,
    src: '/wallpapers/5.jpeg',
  },
]
export default Vue.extend({
  name: 'ExpandingCardsIndex',
  data() {
    return {
      CardsList: cardList,
    }
  },
})
</script>

<style>
#__layout {
  height: 100vh;
}
</style>
