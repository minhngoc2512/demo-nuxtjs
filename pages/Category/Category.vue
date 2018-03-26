<template>
  <div>
    <head-page :feature="head_page"></head-page>
    <page-name></page-name>
    <page-home></page-home>
  </div>
</template>
<script>
  let axios = require('axios');
  import HeadPage from "@/components/HeadPage/HeadPage.vue";
  import PageName from "@/components/PageName/PageName.vue";
  import PageHome from "@/components/PageHome/PageHome.vue";
  export default {
    // layout:'layouts_demo',
    validate ({ store,params }) {
      // Must be a number
      return true;
    },
    name: 'Category',
    async asyncData ({ store,params }) {
      return await axios.get('https://xe.vatgia.com/api/rewrites/'+params.category).then(response=>{
        return store.commit('changeDataHeadPage',{data:response.data.vehilce_feature});
      });
    },
    data() {
      return {
        head_page: null,
        route: this.$route,
        meta: []
      }
    },
    components: {
      HeadPage: HeadPage,
      PageName: PageName,
      PageHome: PageHome
    },
    watch: {
      // $route: function () {
      //   // this.getDatacategory();
      // }
    },
    mounted() {
      // this.getDatacategory();
      this.$nextTick(() => {
        this.$nuxt.$loading.start()

        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    },
    methods: {
      // getDatacategory() {
      //   this.route = this.$route.params.category;
      //   let category = this.route;
      //   axios.get('https://xe.vatgia.com/api/rewrites/' + category).then(response => {
      //     this.head_page = response.data.vehilce_feature;
      //     if(this.head_page==null){
      //       window.location.href= '/error/404';
      //     }
      //     this.meta = response.data.meta;
      //   }).catch(function(error){
      //     window.location= '/error/404';
      //   })
      // }
    },
    head () {
      return {
        meta: this.meta
      }
    }
  }
</script>
