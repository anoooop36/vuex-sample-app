import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalTvCount: 10, // The TV inventory
  },

  getters: {
    // Here we will create a getter
  },

  mutations: {
    // Here we will create Jenny
    removeTv(state, amount) {
        state.totalTvCount -= amount;
    },
  },

  actions: {
    // Here we will create Larry
    removeTvAction(context, amount) {
        if (context.state.totalTvCount >= amount) {
            context.commit('removeTv', amount);
        }
    },
  },
});
