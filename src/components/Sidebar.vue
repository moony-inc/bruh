<template>
  <div class="Sidebar">
    <div class="sidebar_header">
      <img src="../assets/img/user_blank.jpg" alt="" class="user_img-sm">
      <p class="sidebar_username">John Doe</p>
    </div>
    <div class="sidebar_main">
      <div class="sidebar_profile">Profile</div>
      <div class="sidebar_messages">Messages</div>
      <div class="sidebar_settings">Settings</div>
      <div class="sidebar_logout">Log Out</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>

<style lang="scss">
  .Sidebar {
    height: 100vh;
    position: fixed;
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
      padding: 0.5em 2em;
      color: #fff;
      transition: 300ms;
      user-select: none;
      cursor: pointer;
      &:hover {
        transition: 300ms;
        transform: scale(1.05);
      }
    }
  }
</style>
