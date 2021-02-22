<template>
  <Layout>
    <h1 class="aka-section-heading">Services</h1>
    <div class="blog-container">
      <ServiceList
        v-if="$page.services.edges.length"
        :services="$page.services.edges"
      />
      <div v-else>
        <h3>Nothing here yet...</h3>
      </div>
      <Pager
        ariaLabel="Blog pagination navigation"
        class="aka-pagination-navigation flex flex-row items-center justify-center py-4 mt-4 w-full"
        linkClass="font-medium mx-2 p-2"
        :info="$page.services.pageInfo"
      />
    </div>
  </Layout>
</template>

<page-query>
  query ($page: Int){
    services: allSanityService(sortBy: "order", order: ASC, perPage: 4, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          slug {
            current
          }
          title
          mainImage {
            asset {
              id
              localFile(width: 660, quality: 80)
              url
            }
          }
        }
      }
    }
  }
</page-query>

<script>
import { Pager } from 'gridsome'
import ServiceList from '@/components/Service/ServiceList'

export default {
  components: {
    Pager,
    ServiceList,
  },
  metaInfo: {
    title: 'service',
  },
}
</script>
