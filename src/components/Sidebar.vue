<template>
  <div class="Sidebar">
    <div class="sidebar_header">
      <img src="../assets/img/user_blank.jpg" alt="" class="user_img-sm">
      <p class="sidebar_username">{{ username }}</p>
    </div>
    <div class="sidebar_main">
      <div class="sidebar_profile"><p>Profile</p></div>
      <div class="sidebar_messages"><p>Messages</p></div>
      <div class="sidebar_settings"><p>Settings</p></div>
      <div class="sidebar_logout"><p>Log Out</p></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'John Doe',
    }
  },
  methods: {
  },
}
</script>

<style lang="scss">
  .Sidebar {
    height: 100vh;
    min-width: max-content;
    width: 20vw;
    background-color: #181818;
    resize: horizontal;
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
    & div {
      font-size: 17px;
      padding: 0 2em;
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
