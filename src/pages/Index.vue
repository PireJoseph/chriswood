<template>
  <Layout>
    <AppBanner
      :heading="$page.allSanityIndex.edges[0].node.title"
      :subheading="$page.allSanityIndex.edges[0].node.subtitle"
      :main-image="$page.allSanityIndex.edges[0].node.mainImage"
    >
      <p class="p-sm mt-4">
        <g-link
          v-for="(service, key) in $page.allSanityService.edges"
          :key="key"
          :to="'/services/' + service.node.slug.current"
          class="inline-flex border-b-4 border-bg hover:border-primary mt-2 mr-2 h-12 md:h-auto md:mt-1"
        >
          {{ service.node.title
          }}<span v-if="key + 1 < $page.allSanityService.edges.length">, </span>
        </g-link>
      </p>
    </AppBanner>
    <section v-if="$page.services.edges.length" class="mx-auto pt-10">
      <h2 class="font-bold mb-4 text-3xl">Services</h2>
      <ServiceList :services="$page.services.edges" />
    </section>
    <section v-if="$page.projects.edges.length" class="mx-auto pt-10">
      <h2 class="font-bold mb-4 text-3xl">Gallerie</h2>
      <ProjectList :projects="$page.projects.edges" />
    </section>
  </Layout>
</template>

<page-query>
  query{
    services: allSanityService (sortBy: "order", order: ASC, limit: 3) {
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
    allSanityService(sortBy: "order", order: ASC) {
      edges {
        node {
          slug {
            current
          }
          title
        }
      }
    }
    projects: allSanityProject (sortBy: "completed" limit: 1) {
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
              localFile(width: 1100, quality: 80)
              url
            }
          }
        }
      }
    }
    allSanityIndex {
      edges {
        node {
          title, 
          subtitle, 
          mainImage {
            asset {
              id
              localFile(width: 1400, quality: 80)
              url
            }
          }
        }
      }
    }	
  }
</page-query>

<script>
import AppImage from '@/components/AppImage'
import AppBanner from '@/components/AppBanner'
import ProjectList from '@/components/Project/ProjectList'
import ServiceList from '@/components/Service/ServiceList'

export default {
  components: {
    AppImage,
    AppBanner,
    ServiceList,
    ProjectList,
  },
  metaInfo: {
    title: 'Home',
  },
}
</script>
