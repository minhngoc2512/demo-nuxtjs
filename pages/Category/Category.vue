<template>
  <div>
    <no-ssr>
    <head-page :feature="head_page"></head-page>
    </no-ssr>
    <no-ssr>
    <page-name></page-name>
    </no-ssr>
    <no-ssr>
    <page-home></page-home>
    </no-ssr>
  </div>
</template>
<script>
  let axios = require('axios');
  let http = require('http');
  import HeadPage from "@/components/HeadPage/HeadPage.vue";
  import PageName from "@/components/PageName/PageName.vue";
  import PageHome from "@/components/PageHome/PageHome.vue";
  const {detect} = require('detect-browser');
  const browser = detect();
  export default {
    middleware: 'demo',
    name: 'Category',
    asyncData() {
      return new Promise((res) => {
        // console.log(browser);
        console.log(this);
        // var server = http.createServer(function(req, res){
        //
        //   var userAgent = req.headers['user-agent'];
        //   console.log(userAgent)
        //
        // });
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
        console.log(process.env.meta);

        console.log(navigator);
        console.log(browser);
        axios.get('https://xe.vatgia.com/api/rewrites/' + category).then(response => {
          this.head_page = response.data.vehilce_feature;
        })

      }
    },
  }
</script>
