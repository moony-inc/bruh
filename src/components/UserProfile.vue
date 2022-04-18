<template>
  <div class="UserProfile">

    <div class="user_avatar-wrapper">
      <img src="@/assets/img/user_blank.jpg" alt="" class="user_avatar">
      <p class="username">{{ username }}</p>
    </div>

    <div class="user_bio-wrapper">
      <p v-if="!isBioEditing" class="user_bio-text">{{ user_bio }}</p>
      <input
        v-else
        @keyup.enter="submitBio"
        v-model.lazy="user_bio"
        type="text"
        class="user_bio-input"
        :class="{ inputErrFilled: !isBioFilled, inputErrLength: !isBioLengthOk}"
      >
      <button
        v-if="!isBioEditing"
        @click="enableBioEditing"
        class="user_bio-toggleEditBtn"
      >
        <span class="lnr lnr-pencil"></span>
      </button>
      <button
        v-else
        @click="submitBio"
        class="user_bio-toggleEditBtn"
      >
        <span class="lnr lnr-chevron-down-circle"></span>
      </button>
    </div>

    <Wall></Wall>

  </div>
</template>

<script>
import Wall from './Wall.vue'

const MAX_BIO_LENGTH = 50

export default {
  components: {
    Wall,
  },
  data() {
    return {
      username: 'John Doe',
      user_bio: 'I did not choose to be a doe, but i am a doe.',
      isBioEditing: false,
      isBioFilled: true,
      bioCounter: 0,
      errMessage: '',
    }
  },
  computed: {
    isBioLengthOk() {
      return this.user_bio.length <= MAX_BIO_LENGTH
    },
  },
  methods: {
    enableBioEditing() {
      this.isBioEditing = true
    },
    submitBio() {
      this.isBioFilled = Boolean(this.user_bio)
      if (this.isBioFilled && this.isBioLengthOk) {
        this.isBioEditing = false
      } else {
        this.showErr()
      }
    },
    showErr() {
      if (!this.isBioFilled) {
        this.errMessage = 'Please, fill bio'
      } else if (!this.isBioLengthOk) {
        this.errMessage = 'Bio must be 50 symbols long'
      }
      alert(this.errMessage)
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
    background-image: url(../assets/img/user_background.png);
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
      box-shadow: 5px 0px 10px 5px rgba($color: #000000, $alpha: 1.0);
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
  .inputErrFilled {
    border-bottom: 2px solid red;
  }
  .inputErrLength {
    border-bottom: 2px solid red;
  }
</style>
