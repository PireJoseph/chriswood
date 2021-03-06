<template>
  <Layout>
    <h1 class="aka-section-heading">Contact</h1>

    <div class="flex flex-col lg:flex-row justify-between mt-16 mb-8">
      <div class="lg:w-1/2 lg:mr-10">
        <aside>
          <div class="flex flex-col justify-start items-end text-right">
            <p class="text-3xl">Crepin Christopher</p>
          </div>

          <div class="flex flex-col justify-start items-end my-8">
            <p class="flex items-center">
              {{ $page.contactData.edges[0].node.adress_street }}
              <span class="inline-flex justify-end w-8 items-center"
                ><MapPinIcon size="20" class="inline"
              /></span>
            </p>
            <p>
              {{ $page.contactData.edges[0].node.adress_city }}
              <span class="inline-flex justify-end w-8 items-center"></span>
            </p>
          </div>
          <div class="flex flex-col justify-start items-end my-8">
            <a
              :href="$page.contactData.edges[0].node.facebook_adress"
              target="blank"
              rel="noreferrer noopener"
              class="flex items-center"
            >
              {{ $page.contactData.edges[0].node.facebook_title }}
              <span class="inline-flex justify-end w-8 items-center"
                ><FacebookIcon size="20" class="inline" /></span
            ></a>

            <p class="flex items-center my-2">
              {{ $page.contactData.edges[0].node.email }}
              <span class="inline-flex justify-end w-8 items-center"
                ><MailIcon size="20" class="inline"
              /></span>
            </p>
            <p class="flex items-center">
              {{ $page.contactData.edges[0].node.phone }}
              <span class="inline-flex justify-end w-8 items-center"
                ><PhoneIcon size="20" class="inline"
              /></span>
            </p>
          </div>
          <div class="flex flex-col justify-start items-end">
            <p class="flex items-center">
              {{ $page.contactData.edges[0].node.vat }}
              <span class="inline-flex justify-end w-8 items-center"
                ><span class="contact-logo pl-2 font-bold text-xs"
                  >TVA</span
                ></span
              >
            </p>
          </div>
        </aside>
      </div>

      <div class="lg:w-1/2 lg:ml-10">
        <form
          action="https://formspree.io/f/mwkwjlra"
          method="POST"
          class="w-full md:w-5/6 mt-12 lg:mt-0"
        >
          <label for="name">Nom</label>
          <input type="text" name="name" />

          <label for="email">Email</label>
          <input type="email" name="_replyto" />

          <label for="phone">Téléphone</label>
          <input type="phone" name="telephon" />

          <label for="subject">Sujet</label>
          <input type="text" name="subject" />

          <label for="Message">Message</label>
          <textarea name="message" rows="10" />

          <button
            class="py-1 px-4 bg-primary dark:bg-secondary text-black w-full mt-2 rounded"
            type="submit"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query {
    contactData : allSanityContact { edges {node {email,	phone, facebook_title, facebook_adress, adress_street, adress_city,  vat }}}
  }
</page-query>

<script>
import {
  MapPinIcon,
  FacebookIcon,
  MailIcon,
  PhoneIcon,
  DollarSignIcon,
} from 'vue-feather-icons'

export default {
  metaInfo: {
    title: 'Contact',
  },
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
input,
textarea {
  @apply block w-full mb-4 rounded bg-footer;
}
svg,
.contact-logo {
  @apply text-primary dark:text-secondary;
}
</style>
