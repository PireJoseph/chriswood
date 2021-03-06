<template>
  <footer
    class="aka-footer bg-footer mt-auto text-center text-sm text-black dark:text-gray"
  >
    <div class="container flex flex-col lg:flex-row justify-between my-8">
      <section class="flex text-left mt-2 lg:w-1/3">
        <div class="lg:w-1/2"></div>
        <div class="lg:w-1/2">
          <h2 class="dark:text-white font-bold mb-4">Contact</h2>
          <a
            :href="'mailto:' + $static.contactData.edges[0].node.email"
            class="footer-link ucfirst"
          >
            {{ $static.contactData.edges[0].node.email }}
          </a>
        </div>
      </section>

      <section class="flex lg:w-1/3 mt-6 lg:mt-0 text-left">
        <div class="lg:w-1/2"></div>
        <div class="lg:w-1/2">
          <h2 class="dark:text-white font-bold mb-4">Site</h2>
          <a href="/sitemap.xml" class="footer-link">Site map</a>
        </div>
      </section>

      <section class="flex text-left mt-6 lg:mt-0 lg:w-1/3">
        <div class="lg:w-1/2"></div>
        <div class="lg:w-1/2">
          <h2 class="dark:text-white font-bold mb-4">Social</h2>
          <a
            :href="$static.contactData.edges[0].node.facebook_adress"
            target="blank"
            rel="noreferrer noopener"
            class="footer-link"
          >
            Facebook
          </a>
        </div>
      </section>
    </div>
  </footer>
</template>

<static-query>
  query {
    contactData : allSanityContact { edges {node {email,	phone, facebook_title, facebook_adress, adress_street, adress_city,  vat }}}
  }
</static-query>

<script>
import {
  MapPinIcon,
  FacebookIcon,
  MailIcon,
  PhoneIcon,
  DollarSignIcon,
} from 'vue-feather-icons'

export default {
  components: {
    MapPinIcon,
    FacebookIcon,
    MailIcon,
    PhoneIcon,
    DollarSignIcon,
  },
}
</script>

<style scoped>
.footer-link {
  @apply block mt-2 mr-2 h-12;
}

.ucfirst:first-letter {
  text-transform: uppercase;
}
</style>
