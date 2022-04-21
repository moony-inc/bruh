<template>
  <div>
    <div class="MainPage">
      <Sidebar
        :current-button="currentComponent"
        @change-page="changePage($event)"
      ></Sidebar>
      <component class="mainPage_main" :is="currentComponent"></component>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import UserProfile from './UserProfile.vue'
import Messages from './Messages.vue'
import Settings from './Settings.vue'

export default {
  components: {
    Sidebar,
    UserProfile,
    Messages,
    Settings,
  },
  data() {
    return {
      currentComponent: 'UserProfile',
    }
  },
  // watch: {
  //   currentComponent: {
  //     handler() {
  //       this.$emit('change-current-page', this.currentComponent)
  //     },
  //     deep: false,
  //     immediate: true,
  //   },
  // },
  methods: {
    changePage(currentComponent) {
      this.currentComponent = currentComponent
    },
  },
}
</script>

<style lang="scss">
  .MainPage {
    display: grid;
    grid-template-columns: 7.3vw auto;
  }
  .mainPage_main {
    grid-column-start: 2;
  }
</style>
