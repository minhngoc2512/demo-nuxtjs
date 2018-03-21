<template lang="html">
  <div class="loading-page" v-if="loading">
   <img src="@/assets/images/loading.gif"/>.
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start () {
        this.loading = true
      },
      finish () {
        this.loading = false
      }
    }
  }
</script>

<style scoped>
  .loading-page {
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: white;
    align-content: center;
    display: flex;
    justify-content: center;
  }
  img{
    width: 100px;
    height: 100px;

  }
</style>
