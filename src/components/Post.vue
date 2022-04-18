<template>
  <li>
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
</style>
