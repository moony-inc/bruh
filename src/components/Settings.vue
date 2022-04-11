<template>
  <div class="Settings">
    <div class="user_avatar-wrapper">
      <img src="@/assets/img/user_blank.jpg" alt="" class="user_avatar">
      <p class="username">{{ username }}</p>
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
  .Settings {
    background-color: #c0c0c0;
    width: 100%;
  }
  .user_avatar-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 3em;
    background-image: url(../assets/img/user_background.webp);
    background-size: cover;
    background-repeat: no-repeat;
  }
  .user_avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
  .username {
    font-size: 34px;
    user-select: none;
    color: #fff;
  }
</style>
