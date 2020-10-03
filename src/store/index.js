import Vue from 'vue';
import Vuex from 'vuex';

import { SAVE_TO_FAVOURITES, SAVE_FAVOURITE } from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favourites: [],
  },
  mutations: {
    [SAVE_TO_FAVOURITES](state, payload) {
      state.favourites.push(payload);
    },
    [SAVE_FAVOURITE](state, payload) {
      const favIndex = state.favourites.findIndex(
        (favourite) => favourite.id === payload.id
      );
      state.favourites[favIndex] = {
        ...state.favourites[favIndex],
        baseAmount: payload.baseAmount,
        baseCurrency: payload.baseCurrency,
        targetCurrency: payload.targetCurrency,
      };
    },
  },
  actions: {
    saveToFavourites(context, payload) {
      context.commit('SAVE_TO_FAVOURITES', payload);
    },
    saveFavourite(context, payload) {
      context.commit('SAVE_FAVOURITE', payload);
    },
  },
  modules: {},
});
