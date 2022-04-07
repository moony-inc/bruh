<template>
  <div id="app">
    <UserProfile></UserProfile>
    <Sidebar></Sidebar>
  </div>
</template>

<script>
import UserProfile from './components/UserProfile.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    UserProfile,
    Sidebar,
  },
}
</script>
