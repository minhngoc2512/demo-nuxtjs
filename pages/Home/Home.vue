<template>
  <div>
      <!--<h1>{{title}}</h1>-->
  </div>
</template>
<script>
// import Hello from "../../components/Hello.vue";
// import HeadPage from "@/components/HeadPage/HeadPage.vue";
// import PageName from "@/components/PageName/PageName.vue";
// import PageHome from "@/components/PageHome/PageHome.vue";
// import Header from "@/components/Header/Header.vue";
import axios from 'axios';

export default {
  async asyncData ({ store,params }) {
    return await axios.get(`https://xe.vatgia.com/api/navigation`).then(response=>{
      return store.commit('changeDataMenu',{data:response.data.data});
    });
  },
  data(){
    return{
      meta:null
    }
  },
  mounted(){
    this.getData();
  },
  methods:{
    getData(){
    }
  }
}
</script>

