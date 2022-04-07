<template>
  <div class="UserProfile">
    <div class="user_avatar-wrapper">
      <img src="../assets/img/user_blank.jpg" alt="" class="user_avatar">
      <p class="username">{{ username }}</p>
    </div>
    <div class="user_bio-wrapper">
      <p class="user_bio-text">{{ user_bio }}</p>
    </div>
    <ul>
      <li v-for="doge in doges" :key="doge in doges">
        {{ doge }}
      </li>
      <button v-on:click="hiddenDogge">show me doge</button>
    </ul>
    <img v-if="isDogeVisible" src="../assets/img/hiddenDoge.gif" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'John Doe',
      user_bio: 'I did not choose to be a doe, but i am a doe.',
      isDogeVisible: false,
      doges: [
        'click',
        'for',
        'doge',
      ],
    }
  },
  methods: {
    hiddenDogge() {
      this.isDogeVisible = true
    },
  },
}
</script>

<style scoped lang="scss">
  .UserProfile {
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
  .user_bio-wrapper {
    display: flex;
    padding: 0.3em 3em;
    background-color: #313131;
    color: #fff;
    box-shadow: 0px 5px 10px 5px rgba($color: #181818, $alpha: 1.0);
  }
</style>
