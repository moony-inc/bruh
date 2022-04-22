<template>
  <li class="post_listItem">
    <div class="post">
      <div class="post_header">
        <img class="user_img-xs" src="@/assets/img/user_blank.jpg" alt="">
        <h2>{{ postData.head }}</h2>
        <span
          @click.prevent="deletePost(postData.id)"
          class="lnr lnr-cross-circle post_header-delete"
        ></span>
      </div>
      <hr>
      <p style="white-space: pre-line;">{{ postData.body }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    postData: {
      type: Object,
      required: true,
      // default:
    },
  },
  methods: {
    deletePost(postId) {
      this.$emit('delete-post', postId)
    },
  },
}
</script>

<style lang="scss">
  .post {
    background-color: #fff;
    width: 75%;
    padding: 0.5em 2em;
    border-radius: 22px;
    margin: 1em;
    &_list {
      list-style: none;
      display: flex;
      flex-direction: column-reverse;
      padding-left: 0;
    }
    &_listItem {
      width: 100%;display: flex;
      justify-content: center;
    }
    &_header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      & h2 {
        margin: 0;
      }
      &-delete {
        transition: 300ms;
        &:hover {
          transition: 300ms;
          transform: scale(1.3);
          cursor: pointer;
        }
      }
    }
  }
  .user_img-xs {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 1em;
  }
</style>
