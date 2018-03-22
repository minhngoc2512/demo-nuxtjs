import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      status_ssr:false
    },
    mutations: {
      changeStatusSsr (state) {
        state.status_ssr=true;
      }
    }
  })
}

export default createStore
