<template>
  <div>
    <head-page :feature="head_page"></head-page>
    <page-name></page-name>
    <page-home></page-home>
  </div>
</template>
<script>
  let axios = require('axios')
  import HeadPage from "@/components/HeadPage/HeadPage.vue";
  import PageName from "@/components/PageName/PageName.vue";
  import PageHome from "@/components/PageHome/PageHome.vue";

  export default {
    middleware: 'demo',
    name: 'Category',
    asyncData() {
      return new Promise((res) => {
        setTimeout(function () {
          res();
        }, 1000)
      })
    },
    data() {
      return {
        head_page: null,
        route: this.$route
      }
    },
    components: {
      HeadPage: HeadPage,
      PageName: PageName,
      PageHome: PageHome
    },
    watch: {
      $route: function () {
        this.getDatacategory();
      }
    },
    mounted() {
      this.getDatacategory();
    },
    methods: {
      getDatacategory() {
        this.route = this.$route.params.category;
        let category = this.route;
        console.log(process.env.meta)
        axios.get('https://xe.vatgia.com/api/rewrites/' + category).then(response => {
          this.head_page = response.data.vehilce_feature;
        })

      }
    },
  }
</script>
