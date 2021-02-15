<template>
  <Layout>
    <div class="aka-blog-post">
      <article>
        <header class="mb-8">
          <h1
            class="font-black text-3xl leading-tight xl:text-center xl:text-5xl"
          >
            {{ $page.service.title }}
          </h1>
        </header>
        <AppImage
          v-if="$page.service.mainImage"
          class="blog-post-banner mb-8"
          :main-image="$page.service.mainImage"
        />

        <div class="blog-post-content container p-0">
          <!-- <div class="blog-post-meta font-semibold text-sm mb-4 text-gray">
            <span v-if="$page.post.author"
              >By: {{ $page.post.author.name }} /</span
            >
            Posted on: {{ $page.post.publishedAt }}
          </div> -->
          <BlockContent :blocks="$page.service._rawBody" />
          <ServicePagination
            :next="$page.nextService"
            :prev="$page.prevService"
          />
        </div>
      </article>
    </div>
  </Layout>
</template>

<page-query>
  query Service ($id: ID!, $nextID: ID!, $prevID: ID!) {

    service: sanityService (id: $id) {

      title
      _rawBody
      mainImage {
        asset {
          id
          localFile(width: 1400, quality: 80)
          url
        }
      }
    }

    nextService: sanityService (id: $nextID) {
      slug {
        current
      }
      title
    }

    prevService: sanityService (id: $prevID) {
      slug {
        current
      }
      title
    }
  }
</page-query>

<script>
import AppImage from '@/components/AppImage'
import BlockContent from '@/components/BlockContent'
import ServicePagination from '@/components/Service/ServicePagination'

export default {
  name: 'Post',
  components: {
    AppImage,
    BlockContent,
    ServicePagination,
  },
  metaInfo() {
    return {
      title: this.$page.service.title,
    }
  },
}
</script>

<style lang="css" scoped>
.blog-post-content {
  max-width: 1000px;
}
</style>
