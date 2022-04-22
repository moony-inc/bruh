<template>
  <div class="UserProfile">

    <div class="user_avatar-wrapper">
      <img src="@/assets/img/user_blank.jpg" alt="" class="user_avatar">
      <p class="username">{{ username }}</p>
    </div>

    <div class="user_bio-wrapper">
      <p v-if="!isBioEditing" class="user_bio-text">{{ user_bio }}</p>
        <div v-else class="user_bio-inputWrapper">
          <input
            v-model="$v.user_bio.$model"
            type="text"
            class="user_bio-input"
            :class="{ user_bioInputErr: this.$v.user_bio.$error }"
            @keyup.enter="submitBio"
          >
          <div class="user_bio-err" v-if="errorMessage">
            {{ errorMessage }}
          </div>
        </div>
        <div v-if="isBioEditing" class="user_bio-counter">
          {{ user_bio.length + '/' + maxBioLength }}
        </div>
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
import { errorMessages } from '@/utils/errors'
import { required, maxLength } from 'vuelidate/lib/validators'
import Wall from './Wall.vue'

const MAX_BIO_LENGTH = 50

export default {
  components: {
    Wall,
  },
  data() {
    return {
      username: 'John Doe',
      user_bio: 'Your bio here',
      isBioEditing: false,
      maxBioLength: MAX_BIO_LENGTH,
    }
  },
  validations: {
    user_bio: {
      required,
      maxLength: maxLength(MAX_BIO_LENGTH),
    },
  },
  computed: {
    errorMessage() {
      const failedValidator = Object.keys(this.$v.user_bio).find((key) => !key.includes('$') && !this.$v.user_bio[key])

      return errorMessages[failedValidator] || null
    },
  },
  methods: {
    enableBioEditing() {
      this.isBioEditing = true
    },
    submitBio() {
      if (!this.$v.user_bio.$error) {
        this.isBioEditing = false
      }
    },
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
      height: 35px;
      padding: 1em 3em;
      background-color: #313131;
      color: #fff;
      box-shadow: 5px 0px 10px 5px rgba($color: #000000, $alpha: 1.0);
    }
    &-inputWrapper {
      width: 80%;
    }
    &-text {
      margin: 0;
      user-select: none;
      font-size: 17px;
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
      width: 100%;
      margin-top: 2px;
      margin-left: -2px;
      font-size: 17px;
      background: none;
      border: 0;
      outline: 0;
      background: transparent;
      border-bottom: 2px solid #fff;
      color: #fff;
    }
    &-counter {
      font-size: 14px;
    }
    &InputErr {
      border-bottom: 2px solid #ff2a00;
    }
    &-err {
      font-size: 12px;
      color: #ff2a00;
      margin-bottom: -14px;
      margin-top: 1px;
    }
  }
</style>
