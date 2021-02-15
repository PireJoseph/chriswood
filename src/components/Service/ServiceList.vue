<template>
  <ul class="aka-blog-posts grid gap-8 items-stretch">
    <li v-for="(edge, index) in services" :key="edge.node.id">
      <ServiceCard :index="index" :service="edge.node" />
    </li>
  </ul>
</template>

<script>
import ServiceCard from '@/components/Service/ServiceCard'

export default {
  name: 'PostList',
  components: {
    ServiceCard,
  },
  props: {
    services: Array,
  },
}
</script>

<style scoped>
@screen md {
  .aka-blog-posts {
    grid-template-columns: 1fr 1fr;
  }
  .aka-blog-posts li {
    grid-column: auto/span 1;
  }
}

@screen xl {
  .aka-blog-posts li:nth-child(3n + 1) {
    grid-column: auto/span 2;
  }
}
</style>
