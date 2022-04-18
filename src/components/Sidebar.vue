<template>
  <div class="Sidebar">
    <div class="sidebar_header">
      <img src="@/assets/img/user_blank.jpg" alt="" class="user_img-sm">
      <p class="sidebar_username">{{ username }}</p>
    </div>
    <div class="sidebar_main">
      <div
        class="sidebar_main-button"
        v-for="item in sidebarButtons"
        :key="item.name"
        @click="setPage(item.page)"
      >
        <span :class="item.icon"></span>
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'John Doe',
      sidebarButtons: [
        { name: 'Profile', icon: 'lnr lnr-user', page: 'UserProfile' },
        { name: 'Messages', icon: 'lnr lnr-envelope', page: 'Messages' },
        { name: 'Settings', icon: 'lnr lnr-eye', page: 'Settings' },
        { name: 'Log Out', icon: 'lnr lnr-enter', page: null },
      ],
    }
  },
  methods: {
    setPage(currentPage) {
      this.$emit('change-page', currentPage)
    },
  },
}
</script>

<style lang="scss">
  .Sidebar {
    height: 100vh;
    min-width: max-content;
    width: 18vw;
    background-color: #181818;
    padding: 0.7em;
    position: fixed;
    left: 0;
  }
  .sidebar_header {
    display: flex;
    align-items: center;
  }
  .sidebar_username {
    color: #fff;
    user-select: none;
  }
  .user_img-sm {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 1em;
  }
  .sidebar_main {
    display: flex;
    flex-direction: column;
    &-button {
      padding: 0.5em 2em;
      color: rgb(199, 199, 199);
      transition: 300ms;
      user-select: none;
      cursor: pointer;
      &:hover {
        transition: 300ms;
        transform: scale(1.05);
        color: #fff;
      }
    }

  }
</style>
