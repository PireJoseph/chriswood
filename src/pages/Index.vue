<template>
  <Layout>
    <AppBanner
      heading="Chris Wood"
      subheading="Menuiseries intérieures et extérieures"
    >
      <p class="p-sm">
        Placards sur mesure, Cuisines, Dressings, Escaliers, Salles de bain,
        <a
          class="inline-flex border-b-4 border-primary leading-tight"
          href="https://fabrx.co/brightkit/"
          target="_blank"
          rel="noopener noreferrer"
          >Parquets</a
        >
        Chassis, Bois, PVC, Alu, Terrasses, Bardages
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
    services: allSanityService (sortBy: "title" limit: 3) {
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
  }
</page-query>

<script>
import AppBanner from '@/components/AppBanner'
import ProjectList from '@/components/Project/ProjectList'
import ServiceList from '@/components/Service/ServiceList'

export default {
  components: {
    AppBanner,
    ServiceList,
    ProjectList,
  },
  metaInfo: {
    title: 'Home',
  },
}
</script>
