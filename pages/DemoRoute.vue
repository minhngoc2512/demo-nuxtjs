<template>
  <div>
    <h1>Demo Route</h1>
    <app-logo></app-logo>
    <nuxt-link class="link-back" to="/">Back Home</nuxt-link>
  </div>
</template>

<script>
  import AppLogo from "@/components/AppLogo.vue";

  export default {
    asyncData(){
      return new Promise((res)=>{
        setTimeout(function(){
          res();
        },1000)
      })
    },
    name: "demo-route",
    components: {
      AppLogo: AppLogo
    }
  }
</script>

<style scoped>
.link-back{
  color: red;
  font-size: 40px;
}
</style>
