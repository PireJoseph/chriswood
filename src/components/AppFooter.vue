<template>
  <footer class="aka-footer bg-footer mt-auto text-center text-xs text-gray">
    <div class="container flex flex-col lg:flex-row justify-between my-8">
      <section class="flex text-left mt-2 lg:w-1/3">
        <div class="lg:w-1/2"></div>
        <div class="lg:w-1/2">
          <h2 class="dark:text-white font-bold mb-4">Contact</h2>
          <p class="mt-2">
            {{ $static.contactData.edges[0].node.email }}
          </p>
          <p class="mt-2">
            {{ $static.contactData.edges[0].node.phone }}
          </p>
          <p class="mt-2">TVA : {{ $static.contactData.edges[0].node.vat }}</p>
        </div>
      </section>

      <section class="flex lg:w-1/3 mt-6 lg:mt-0 text-left">
        <div class="lg:w-1/2"></div>
        <div class="lg:w-1/2">
          <h2 class="dark:text-white font-bold mb-4">Site</h2>
          <a
            href="https://github.com/PireJoseph/chriswood"
            target="blank"
            rel="noreferrer noopener"
            class="block mt-2"
          >
            Code source
          </a>
          <g-link
            href="/sitemap.xml"
            target="blank"
            rel="noreferrer noopener"
            class="block mt-2"
          >
            Site map
          </g-link>
          <g-link
            href="/robot.txt"
            target="blank"
            rel="noreferrer noopener"
            class="block mt-2"
          >
            Robot
          </g-link>
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
            class="block mt-2"
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
