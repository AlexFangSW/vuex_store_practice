import { createStore } from 'vuex'
import axios from 'axios'
// Modules
import counter2 from './modules/counter2';

export default createStore({
  state: {
    count: 0,
    colorCode: '#000000',
  },
  mutations: {
    addNum(state, randNum) {
      state.count += randNum;
    },
    minusNum(state, randNum) {
      state.count -= randNum;
    },
    setColorCode(state, newColorCode) {
      state.colorCode = newColorCode;
    },
  },
  actions: {
    addNum({commit}) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then((json) => {
        commit('addNum', json.data);
      });
    },
    minusNum({commit}) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then((json) => {
        commit('minusNum', json.data);
      });
    },
    setColorCode({commit}, newColorCode) {
      commit( 'setColorCode', newColorCode);
    },
  },
  getters: {
    squaredCount(state) {
      return state.count**2;
    }
  },
  modules: {
    counter2,
  }
})
