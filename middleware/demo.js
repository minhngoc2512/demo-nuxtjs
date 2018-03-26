import axios from 'axios';
export default function ({ store,req}) {
  if(store.state.status_check === false) {
    axios.get(`https://xe.vatgia.com/api/navigation`).then(response=>{
      return store.commit('changeDataMenu',{data:response.data.data});
    });
    // async asyncData ({ store,params }) {
    //   return await axios.get(`https://xe.vatgia.com/api/navigation`).then(response=>{
    //     return store.commit('changeDataMenu',{data:response.data.data});
    //   });
    // },
    if (req.headers['user-agent'] === 'Googlebot/2.1 (+http://www.googlebot.com/bot.html)') {
      store.commit('changeStatusSsr');
    }
    store.commit('changeStatusCheck');
  }
}
