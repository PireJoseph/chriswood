<template>
  <div>
    <nav>
      <ul class="flex">
        <li @click="openModal" class="cursor-pointer lg:hidden">
          <MenuIcon />
        </li>
        <li
          v-for="item in nav"
          :key="'nav-item-' + item.label"
          class="hidden lg:inline-block"
        >
          <g-link class="font-semibold ml-6" :to="item.to">
            {{ item.label }}
          </g-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { MenuIcon, XIcon } from 'vue-feather-icons'

export default {
  components: { MenuIcon, XIcon },
  data() {
    return {
      nav: [
        {
          label: 'A propos',
          to: '/about',
        },
        {
          label: 'Services',
          to: '/services',
        },
        {
          label: 'Gallerie',
          to: '/gallerie',
        },
        {
          label: 'Contact',
          to: '/contact',
        },
      ],
      isModalOpen: false,
    }
  },
  methods: {
    openModal() {
      this.$emit('open-modal')
    },
  },
}
</script>
