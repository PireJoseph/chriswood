<template>
  <section
    class="aka-banner-wrapper relative w-full py-4 my-12 flex items-center"
  >
    <div class="text-left lg:w-1/2">
      <p class="font-semibold text-xl leading-snug m-0 mb-2">
        {{ subheading }}
      </p>
      <h1 class="font-black text-5xl leading-none mb-2">{{ heading }}</h1>
      <slot />
    </div>
    <div
      class="aka-banner-image hidden lg:block lg:w-1/2 max-w-xs flex justify-end items-end ml-auto"
    >
      <AppImage
        v-if="mainImage"
        class="block w-full h-auto"
        :main-image="mainImage"
      />
    </div>
  </section>
</template>

<script>
import AppImage from '@/components/AppImage'

export default {
  components: {
    AppImage,
  },
  props: {
    heading: String,
    subheading: String,
    mainImage: Object,
  },
}
</script>

<style lang="css" scoped>
@screen md {
  .aka-banner-wrapper {
    grid-template-columns: 45% 1fr;
  }
}
</style>
