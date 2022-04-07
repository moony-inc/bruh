<template>
  <div>
    <div class="MainPage">
      <Sidebar></Sidebar>
      <UserProfile></UserProfile>
    </div>
  </div>
</template>

<script>
import UserProfile from './UserProfile.vue'
import Sidebar from './Sidebar.vue'

export default {
  components: {
    UserProfile,
    Sidebar,
  },
}
</script>

<style lang="scss">
  .MainPage {
    display: flex;
  }
</style>
