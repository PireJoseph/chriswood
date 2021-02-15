<template>
  <Layout>
    <h1 class="aka-section-heading">Contact</h1>
    <g-image
      class="mb-10"
      src="@/assets/images/about-banner.jpeg"
      alt="Lit latern in a dark alley"
      quality="80"
      width="1600"
    />

    <form action="https://formspree.io/f/mwkwjlra" method="POST">
      <input type="text" name="name" />
      <input type="email" name="_replyto" />
      <input type="submit" value="Send" />
    </form>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact',
  },
}
</script>
