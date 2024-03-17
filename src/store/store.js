import { createStore } from 'vuex';
import { fetchCurrentUser, fetchProductRequests } from '../api/mockApi.js';

export default createStore({
  state: {
    currentUser: null,
    productRequests: [],
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
    setProductRequests(state, productRequests) {
      state.productRequests = productRequests;
    },
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      const currentUser = await fetchCurrentUser();
      commit('setCurrentUser', currentUser);
    },
    async fetchProductRequests({ commit }) {
      const productRequests = await fetchProductRequests();
      commit('setProductRequests', productRequests);
    },
  },
  getters: {
    currentUser: state => state.currentUser,
    productRequests: state => state.productRequests,
  },
});