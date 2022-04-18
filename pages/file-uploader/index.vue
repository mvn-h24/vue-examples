<template>
  <div class="p-5 flex justify-center">
    <file-uploader/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FileUploader from "~/components/file-uploader/file-uploader.vue";

export default Vue.extend({
  name: "FileUploaderIndex",
  components: {FileUploader}
})
</script>
