<template>
  <div>
    <div class="MainPage">
      <Sidebar @change-page="changePage($event)"></Sidebar>
      <component :is="currentComponent"></component>
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
    display: flex;
    &:last-child {
      width: 80vw;
      float: right;
    }
  }
</style>
