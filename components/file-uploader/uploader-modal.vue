<template>
  <div
    class="fixed z-10 top-0 left-0 w-full h-full flex bg-black bg-opacity-60"
    @drop="PreventDragOpen"
    @dragleave="PreventDragOpen"
    @dragover="PreventDragOpen"
  >
    <div class="extraOutline p-4 bg-white w-max bg-whtie m-auto rounded-lg" @drop="DragNDropHandler">
      <div class="p-5 relative border-4 border-dotted border-gray-300 rounded-lg">
        <svg class="text-indigo-500 w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
        <div class="input_field flex flex-col w-max mx-auto text-center">
          <label class="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
            <input class="hidden" type="file" multiple @change="UploadHandler">
            <span>Select</span>
          </label>
          <div class="title text-indigo-500 uppercase">or drop files here</div>
        </div>
        <button
          class="absolute -top-8 -right-8 bg-white p-2 cursor-pointer hover:bg-gray-100 text-gray-600 rounded-full rotate-45 transform"
          @click="CloseCall">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UploaderModal",
  methods:{
    PreventDragOpen(e: Event): void{
      e.preventDefault();
      e.stopPropagation();
    },
    DragNDropHandler(e: DragEvent): void{
      if(e.dataTransfer){
        this.$emit('input', e.dataTransfer.files);
      }else{
        this.$emit('input', []);
      }
      this.CloseCall()
    },
    UploadHandler(e: InputEvent): void{
      const files = (e.target as HTMLInputElement).files
      if(files){
        this.$emit('input', files);
      }else{
        this.$emit('input', []);
      }
      this.CloseCall()
    },
    CloseCall(): void {
      this.$emit('click-close')
    }
  }
})
</script>
