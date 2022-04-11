<template>
  <div class="UserProfile">

    <div class="user_avatar-wrapper">
      <img src="@/assets/img/user_blank.jpg" alt="" class="user_avatar">
      <p class="username">{{ username }}</p>
    </div>

    <div class="user_bio-wrapper">
      <p v-if="!isBioEditing" class="user_bio-text">{{ user_bio }}</p>
      <input v-else v-model="user_bio" type="text" class="user_bio-input">
      <button @click="toggleBioEditing" class="user_bio-toggleEditBtn">
        <span v-if="!isBioEditing" class="lnr lnr-pencil"></span>
        <span v-else class="lnr lnr-chevron-down-circle"></span>
      </button>
    </div>

    <Wall></Wall>

  </div>
</template>

<script>
import Wall from './Wall.vue'

export default {
  components: {
    Wall,
  },
  data() {
    return {
      username: 'John Doe',
      user_bio: 'I did not choose to be a doe, but i am a doe.',
      isBioEditing: false,
    }
  },
  methods: {
    toggleBioEditing() {
      this.isBioEditing = !this.isBioEditing
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
  .user_bio {
    &-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;
      padding: 0em 3em;
      background-color: #313131;
      color: #fff;
      box-shadow: 0px 5px 10px 5px rgba($color: #181818, $alpha: 1.0);
    }
    &-text {
      margin: 0;
      user-select: none;
    }
    &-toggleEditBtn {
      border: none;
      background: none;
      cursor: pointer;
      color: #fff;
      font-size: 1.2em;
      transition: 300ms;
      &:hover {
        transition: 300ms;
        transform: scale(1.2);
      }
    }
    &-input {
      margin-top: 2px;
      margin-left: -2px;
      font-size: 20px;
      background: none;
      border: 0;
      outline: 0;
      background: transparent;
      border-bottom: 2px solid #fff;
      color: #fff;
      width: 50%;
    }
  }
</style>
