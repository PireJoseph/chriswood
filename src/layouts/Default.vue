<template>
  <div>
    <div v-show="!showModal" class="layout flex flex-col relative min-h-screen">
      <header class="flex items-center mb-6 h-20">
        <div class="container flex items-center justify-between">
          <div class="app-logo">
            <g-link to="/" aria-label="accueil">
              <strong class="hidden md:inline-block">{{
                $static.metadata.siteName
              }}</strong>
              <HomeIcon class="md:hidden" size="24" />
            </g-link>
          </div>
          <ThemeToggle class="ml-auto lg:ml-0 order-2 lg:order-3" />

          <AppNav
            @open-modal="openModal"
            class="ml-6 lg:ml-auto order-3 lg:order-2"
          />
        </div>
      </header>

      <div class="app-slot container mb-16">
        <slot />
      </div>

      <AppFooter />
    </div>

    <AppModal v-if="showModal" @close-modal="closeModal" />
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<script>
import AppNav from '@/components/AppNav.vue'
import AppFooter from '@/components/AppFooter.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import { HomeIcon } from 'vue-feather-icons'
import AppModal from '../components/AppModal'

export default {
  components: {
    AppNav,
    AppFooter,
    ThemeToggle,
    HomeIcon,
    AppModal,
  },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    // toggleModal() {
    //   document.querySelector('body').classList.toggle('modal-active')
    //   console.log('modal')
    // },
    openModal() {
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
  },
}
</script>

<style>
.container {
  @apply relative mx-auto w-full;
}
</style>
