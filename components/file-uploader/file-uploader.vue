<template>
  <div>
    <transition name="fade">
      <uploader-modal v-show="ShowModal" @click-close="toggleModal" @input="(data) => $emit('uploaded', data)"/>
    </transition>
    <uploader-button @click="toggleModal"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import UploaderButton from "~/components/file-uploader/uploader-button.vue";
import UploaderModal from "~/components/file-uploader/uploader-modal.vue";

export default Vue.extend({
  name: "FileUploader",
  components: {UploaderModal, UploaderButton},
  data(){
    return {
      ShowModal: false
    }
  },
  methods: {
    toggleModal(): void{
      this.ShowModal = !this.ShowModal;
    }
  }
})
</script>

<!--suppress CssUnusedSymbol -->
<style>
.fade-enter-active {
  transition: opacity .2s ease-in-out;
}
.fade-leave-active {
  transition: opacity .5s linear;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
