<template>
  <div class="Sidebar">
    <div class="sidebar_main">
      <div
        v-for="item in sidebarButtons"
        :key="item.name"
        class="sidebar_main-button"
        :class="{ sidebar_button_active: item.page === currentButton }"
        @click="setPage(item.page)"
      >
        <img
          v-if="item.page === 'UserProfile'"
          src="@/assets/img/user_blank.jpg"
          class="user_img-sm"
        >
        <span v-else :class="item.icon"></span>
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentButton: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      sidebarButtons: [
        {
          name: 'Profile',
          icon: 'lnr lnr-user',
          page: 'UserProfile',
        },
        {
          name: 'Messages',
          icon: 'lnr lnr-envelope',
          page: 'Messages',
        },
        {
          name: 'Settings',
          icon: 'lnr lnr-eye',
          page: 'Settings',
        },
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
    background-color: #181818;
    padding: 0.7em 0em;
    width: 7.3vw;
    position: fixed;
  }
  .sidebar {
    &_username {
      color: #fff;
      user-select: none;
    }
    &_main {
      display: flex;
      flex-direction: column;
      &-button {
        padding: 0.5em;
        color: rgb(199, 199, 199);
        transition: 300ms;
        user-select: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        cursor: pointer;
        &:hover {
          transition: 300ms;
          transform: scale(1.05);
          color: #fff;
        }
      }
      & span {
        font-size: 2em;
        margin: 0.2em 0;
      }
    }
    &_button_active {
      background-color: rgb(40, 163, 130);
      color: #fff;
    }
  }
  .user_img-sm {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-bottom: 1em;
  }
</style>
