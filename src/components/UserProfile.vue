<template>
  <div class="UserProfile">
    <div class="user_avatar-wrapper">
      <img src="../assets/img/user_blank.jpg" alt="" class="user_avatar">
      <p>John Doe</p>
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

<style scoped lang="scss">
  .UserProfile {
    background-color: #c0c0c0;
  }
  .user_avatar-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3em 0;
  }
  .user_avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
</style>
