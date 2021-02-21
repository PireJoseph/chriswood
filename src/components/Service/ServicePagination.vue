<template>
  <footer
    class="blog-post-pagination relative grid gap-8 grid-cols-2 w-full mt-10 py-4"
  >
    <div class="post-pagination-item is-prev relative text-sm">
      <g-link
        class="inline-block leading-snug py-2"
        :to="`/services/${prev.slug.current}`"
        :aria-label="`Service précédent : ${next.title}`"
      >
        <span class="block font-semibold text-tiny leading-loose text-primary"
          >précédent</span
        >
        {{ prev.title }}
      </g-link>
    </div>
    <div class="post-pagination-item is-next text-right">
      <g-link
        class="inline-block leading-snug py-2"
        :to="`/services/${next.slug.current}`"
        :aria-label="`Service suivant: ${next.title}`"
      >
        <span class="block font-semibold text-tiny leading-loose text-primary"
          >suivant</span
        >
        {{ next.title }}
      </g-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'ServicePagination',
  props: {
    prev: Object,
    next: Object,
  },
}
</script>
