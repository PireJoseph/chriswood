<template>
  <div
    class="aka-post-card bg-card relative flex flex-col h-full"
    :class="{ 'is-large': isLarge }"
  >
    <div class="relative flex flex-auto w-full">
      <g-link class="block w-full" :to="serviceUrl" :aria-label="service.title">
        <AppImage
          class="aka-card-image relative flex flex-auto w-full"
          image-classes="block w-full h-full object-cover absolute"
          :main-image="service.mainImage"
          placeholder
          :title="service.title"
        />
      </g-link>
    </div>
    <div class="post-card-content relative flex flex-col p-6 h-full w-full">
      <g-link
        class="post-card-link inline-flex font-medium text-base px-4 -ml-4"
        :to="serviceUrl"
      >
        <h2 class="post-card-heading font-bold text-lg leading-tight mb-auto">
          {{ service.title }}
        </h2>
      </g-link>
    </div>
  </div>
</template>

<script>
import AppImage from '@/components/AppImage'

export default {
  name: 'PostCard',
  components: {
    AppImage,
  },
  computed: {
    isLarge() {
      return this.index % 3 === 0
    },
    serviceUrl() {
      return `/services/${this.service.slug.current}`
    },
  },
  props: {
    service: Object,
    index: Number,
  },
}
</script>

<style lang="css" scoped>
.aka-post-card.is-large {
  @apply relative bg-secondary text-black;
}

.aka-post-card.is-large .post-card-heading {
  @apply font-bold leading-tight;
}

@screen xl {
  .aka-post-card.is-large {
    @apply grid;
    grid-template-columns: 60% 1fr;
  }

  .aka-post-card.is-large .post-card-heading {
    @apply text-2xl;
  }

  .aka-post-card.is-large .post-card-content {
    @apply justify-center;
  }
}
</style>
