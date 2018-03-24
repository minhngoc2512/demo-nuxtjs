import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      status_ssr:false,
      status_check:false,
      data_menu: null,
    },
    mutations: {
      changeStatusSsr (state) {
        state.status_ssr=true;
      },
      changeStatusCheck(state){
        state.status_check=true;
      },
      changeDataMenu(state,payload){
        state.data_menu = payload.data
      }
    }
  })
}

export default createStore
