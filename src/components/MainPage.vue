<template>
  <div>
    <div class="MainPage">
      <Sidebar @change-page="changePage($event)"></Sidebar>
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
    grid-template-columns: 7.2vw auto;
  }
  .mainPage_main {
    grid-column-start: 2;
  }
</style>
