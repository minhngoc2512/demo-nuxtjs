
export default function ({ store, redirect , route,req}) {
  if(store.state.status_check === false) {
    if (req.headers['user-agent'] === 'Googlebot/2.1 (+http://www.googlebot.com/bot.html)') {
      store.commit('changeStatusSsr');
    }
    store.commit('changeStatusCheck');
  }

}
