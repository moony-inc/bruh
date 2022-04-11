<template>
  <div class="Wall">

    <form class="post_form">
      <div class="post_form-header">
        <img class="user_img-xs" src="@/assets/img/user_blank.jpg" alt="">
        <input v-model="postHead" type="text" placeholder="start something beautiful">
      </div>
      <textarea v-model="postBody" cols="10" rows="3"></textarea>
      <button class="post_form-submit" @click.prevent="addPost" type="submit"> Submit </button>
    </form>

    <ul class="post_list">
      <li v-for="post in posts" :key="post.id">
        <div class="post">
          <div class="post_header">
            <img class="user_img-xs" src="@/assets/img/user_blank.jpg" alt="">
            <h2>{{ post.head }}</h2>
            <span
              @click.prevent="deletePost(post.id)"
              class="lnr lnr-cross-circle post_header-delete"
            ></span>
          </div>
          <hr>
          <p>{{ post.body }}</p>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
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
    }
    &_header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-delete {
        transition: 300ms;
        &:hover {
          transition: 300ms;
          transform: scale(1.3);
          cursor: pointer;
        }
      }
    }
    &_list {
      list-style: none;
    }
  }
  .user_img-xs {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 1em;
  }
</style>
