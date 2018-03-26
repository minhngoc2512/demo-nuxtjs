import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      status_ssr:false,
      status_check:false,
      data_menu: null,
      data_head_page : null

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
      },
      changeDataHeadPage(state,payload){
        state.data_head_page = payload.data
      }
    }
  })
}

export default createStore
