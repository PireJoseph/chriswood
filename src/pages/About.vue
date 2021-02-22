<template>
  <Layout>
    <div class="aka-project">
      <h1 class="aka-section-heading">A propos</h1>
      <AppImage
        v-if="$page.allSanityAbout.edges[0].node.mainImage"
        class="project-banner mx-auto hidden md:block max-w-xs opacity-75"
        :main-image="$page.allSanityAbout.edges[0].node.mainImage"
        title="A propos"
      />
      <div class="project-content container mt-16 px-0">
        <BlockContent :blocks="$page.allSanityAbout.edges[0].node._rawBody" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query {
	  allSanityAbout {edges {node {
      _rawBody,  
      mainImage {
        asset {
          id
          localFile(width: 1400, quality: 80)
          url
        }
      }}}}	
  }
</page-query>

<script>
import AppImage from '@/components/AppImage'
import BlockContent from '@/components/BlockContent'

export default {
  metaInfo: {
    title: 'A propos',
  },
  components: {
    AppImage,
    BlockContent,
  },
}
</script>
