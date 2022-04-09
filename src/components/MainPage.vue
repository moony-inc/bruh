<template>
  <div>
    <div class="MainPage">
      <Sidebar></Sidebar>
      <UserProfile></UserProfile>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import UserProfile from './UserProfile.vue'

export default {
  components: {
    Sidebar,
    UserProfile,
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
  .MainPage {
    display: flex;
  }
</style>
