
export default function ({ store, redirect , route,req}) {

  if(req.headers['user-agent']==='Googlebot/2.1 (+http://www.googlebot.com/bot.html)'){
    store.commit('changeStatusSsr');
  }

}
