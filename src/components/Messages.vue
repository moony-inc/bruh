<template>
  <div class="Messages">
    <h1>
      {{ message }}
      <span class="lnr lnr-neutral"></span>
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'no messages',
    }
  },
  methods: {
  },
}
</script>

<style lang="scss">
  .Messages {
    height: 100vh;
    background-color: rgb(40, 163, 130);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 100%;
  }
</style>
