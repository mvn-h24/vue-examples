<template>
  <div class="p-5 flex justify-center">
    <file-uploader v-model="uploaded"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FileUploader from "~/components/file-uploader/file-uploader.vue";

type fileUploaderExampleState = {
  uploaded: Array<File>
}
export default Vue.extend({
  name: "FileUploaderIndex",
  components: {FileUploader},
  data(): fileUploaderExampleState{
    return {
      uploaded: []
    }
  }
})
</script>
