<template>
  <ul>
    <li
      v-for="(card, index) of cards"
      :key="index"
      :class="{ active: activeCard === index }"
      @click="expand(index)"
    >
      <div>
        <img :src="card.src" alt="card-1" />
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export interface IExpandCard {
  src: string
  active: boolean
}
export default Vue.extend({
  name: 'ExpandCards',
  props: {
    cards: {
      type: Array,
      required: true,
    } as PropOptions<Array<IExpandCard>>,
  },
  data() {
    return {
      activeCard: undefined,
    }
  },
  methods: {
    expand(num: number) {
      if (this.$data.activeCard === num) {
        this.$data.activeCard = undefined
      } else {
        this.$data.activeCard = num
      }
    },
  },
})
</script>

<style scoped>
ul {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 1% 0;
}

ul li {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  max-height: 100%;
  overflow: hidden;
  border-radius: 50% / 10%;
  cursor: pointer;
  position: relative;
  transition: 0.5s linear;
}
ul li:not(:first-child) {
  margin-left: 1%;
}
ul li:hover {
  box-shadow: 0 0 10px red;
}
ul li:active {
  box-shadow: 0 0 5px black;
}
ul li.active {
  flex: 5;
  border-radius: 5% / 10%;
  box-shadow: 0 0 5px black;
}
ul li div {
  width: 100%;
  position: absolute;
  height: 100%;
}
img {
  width: auto;
  min-height: 100%;
  min-width: 100%;
  max-width: none;
}
</style>
