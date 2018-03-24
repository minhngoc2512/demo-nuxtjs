<template>
  <div>
    <div v-if="$store.state.status_ssr">
        <app-header></app-header>
        <nuxt/>
        <app-footer></app-footer>
    </div>
    <div v-if="$store.state.status_ssr===false">
      <no-ssr>
        <app-header></app-header>
      </no-ssr>
      <no-ssr>
        <nuxt/>
      </no-ssr>
      <no-ssr>
        <app-footer></app-footer>
      </no-ssr>
    </div>
  </div>
</template>
<script>
  import Header from "@/components/Header/Header.vue";
  import Footer from "@/components/Footer/Footer.vue";
  let axios = require('axios')
  export default {
    middleware: 'demo',
    data(){
      return{

      }
    },
    mounted(){
        this.getData();
    },
    methods:{
      getData(){
          axios
            .get("https://xe.vatgia.com/api/navigation")
            .then(response => {
            this.$store.commit('changeDataMenu',{data:response.data.data});
            });
      }
    },
    components: {
      appHeader: Header,
      appFooter: Footer
    }
  }
</script>

<style>
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }
</style>
