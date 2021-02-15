<template>
  <section
    class="aka-banner-wrapper relative w-full py-4 mb-8 md:grid md:gap-8 md:items-center md:mx-auto"
  >
    <div class="text-left">
      <p class="font-semibold text-xl leading-snug m-0 mb-2">
        {{ subheading }}
      </p>
      <h1 class="font-black text-5xl leading-none mb-2">{{ heading }}</h1>
      <slot />
    </div>
    <div class="aka-banner-image hidden md:block">
      <WorkLogo class="block w-full h-auto" />
    </div>
  </section>
</template>

<script>
import WorkLogo from '@/assets/images/undraw_under_construction_46pa.svg?inline'

export default {
  components: {
    WorkLogo,
  },
  props: {
    heading: String,
    subheading: String,
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
