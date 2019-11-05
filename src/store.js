import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: '',
    msg: '',
    token: '',
    show: false
  },
  mutations: {
    setshow() {
      if (this.state.show === false) {
        this.state.show = true;
      } else {
        this.state.show = false;
      }

    }
  },
  actions: {},
});
