<template>
  <button type="button" class='group rounded-xl p-4 flex justify-center focus:outline-none text-white text-2xl uppercase font-bold transition-all ease-in bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-400 bg-size-200 bg-pos-0 hover:bg-pos-100' @click="$emit('click')">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 group-hover:animate-bounce " fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
    </svg>
    <div class="col-span-2 pt-1.5">upload file</div>
  </button>
</template>

<script>
export default {
  name: "UploaderButton"
}
</script>
