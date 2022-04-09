<template>
  <div>
    <div class="MainPage">
      <Sidebar></Sidebar>
      <Messages></Messages>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import Messages from './Messages.vue'

export default {
  components: {
    Sidebar,
    Messages,
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
