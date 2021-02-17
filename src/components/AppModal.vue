<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container m-0 py-6 px-8">
          <div class="flex justify-end">
            <XIcon @click="closeModal" class="mt-1 cursor-pointer" />
          </div>
          <div class="modal-header">Navigation</div>

          <div class="modal-body">
            <ul class="flex flex-col">
              <li v-for="(item, key) in nav" :key="key" class="ml-6 mb-4">
                <g-link class="font-semibold capitalize" :to="item.to">
                  {{ item.label }}
                </g-link>
              </li>
            </ul>
          </div>

          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { XIcon } from 'vue-feather-icons'

export default {
  components: {
    XIcon,
  },
  data() {
    return {
      nav: [
        {
          label: 'a propos',
          to: '/about',
        },
        {
          label: 'services',
          to: '/services',
        },
        {
          label: 'gallerie',
          to: '/gallerie',
        },
        {
          label: 'contact',
          to: '/contact',
        },
      ],
    }
  },
  methods: {
    closeModal() {
      this.$emit('close-modal')
    },
  },
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 100%;
  height: 100%;

  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
}

.modal-body {
  margin: 20px 0;
}
</style>
