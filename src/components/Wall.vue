<template>
  <div class="Wall">

    <form class="post_form" @submit.prevent="addPost">
      <div class="post_form-header">
        <img class="user_img-xs" src="@/assets/img/user_blank.jpg" alt="">
        <input v-model="postHead" type="text" placeholder="your ad here" required>
      </div>
      <textarea v-model="postBody" cols="10" rows="3" required></textarea>
      <button class="post_form-submit" type="submit"> Submit </button>
    </form>

    <ul class="post_list">
      <Post
        v-for="post in posts"
        :key="post.id"
        :post-data="post"
        @delete-post="deletePost($event)"
      ></Post>
    </ul>

  </div>
</template>

<script>
import Post from './Post.vue'

export default {
  components: {
    Post,
  },
  data() {
    return {
      postHead: '',
      postBody: '',
      posts: [],
    }
  },
  methods: {
    addPost() {
      const newPost = {
        id: this.createPostId(),
        head: this.postHead,
        body: this.postBody,
      }

      this.posts.push(newPost)
      this.postHead = ''
      this.postBody = ''
    },
    createPostId() {
      return this.posts.length ? this.posts[this.posts.length - 1].id + 1 : 0
    },
    deletePost(postId) {
      this.posts = this.posts.filter((post) => post.id !== postId)
    },
  },
}
</script>

<style lang="scss">
  .Wall {
    width: 100%;
    padding: 2em 0;
    background-color: #cdcdcd;
  }
  .post {
    background-color: #fff;
    width: 70%;
    padding: 0.5em 2em;
    border-radius: 22px;
    margin: 1em;
    &_form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & textarea {
        margin: 1em 0;
        resize: none;
        border-radius: 10px;
        outline: none;
        font-size: 1.1em;
        border: 2px solid #313131;
      }
      & input, & textarea {
        width: 70%;
        padding: 0.7em;
      }
      &-header {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 92%;
        & input {
        border: none;
        padding: 0.5em;
        border: none;
        outline: none;
        background: transparent;
        color: #313131;
        border-bottom: 2px solid #313131;
        font-size: 1.3em;
        }
      }
      &-submit {
        font-size: 1em;
        border: 2px solid #313131;
        outline: none;
        padding: 0.3em;
        width: 20%;
        min-width: max-content;
        border-radius: 9px;
        background-color: #dbdbdb;
        cursor: pointer;
        transition: 300ms;
        &:hover {
          transition: 300ms;
          transform: scale(1.05);
        }
      }
    }
    &_list {
      list-style: none;
      display: flex;
      flex-direction: column-reverse;
    }
  }
</style>
