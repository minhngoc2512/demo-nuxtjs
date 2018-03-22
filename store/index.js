import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      status_ssr:false,
      status_check:false
    },
    mutations: {
      changeStatusSsr (state) {
        state.status_ssr=true;
      },
      changeStatusCheck(state){
        state.status_check=true;
      }
    }
  })
}

export default createStore
