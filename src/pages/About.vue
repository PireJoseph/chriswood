<template>
  <Layout>
    <div class="aka-project">
      <header>
        <h1 class="font-black leading-loose text-4xl mt-16 mb-10">A propos</h1>
      </header>
      <AppImage
        v-if="$page.allSanityAbout.edges[0].node.mainImage"
        class="project-banner"
        :main-image="$page.allSanityAbout.edges[0].node.mainImage"
      />
      <div class="project-content container mt-10 px-0">
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
