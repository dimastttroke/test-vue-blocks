import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    blocks: [
      { text: 'Умеет менять цвет', clicked: false, extends: true, color: 0 },
      { text: 'Умеет менять цвет', clicked: false, extends: true, color: 0 },
      { text: 'Умеет менять цвет', clicked: false, extends: true, color: 0 },
      { text: 'Умеет менять цвет', clicked: false, extends: true, color: 0 },
      { text: 'Просто существует', clicked: false, extends: false, color: 0 },
      { text: 'Просто существует', clicked: false, extends: false, color: 0 },
      { text: 'Просто существует', clicked: false, extends: false, color: 0 },
      { text: 'Просто существует', clicked: false, extends: false, color: 0 }
    ]
  },
  getters: {
    totalCount: state => {
      return state.blocks.length;
    },
    clickedBlocks: state => {
      return state.blocks.filter(block => block.clicked).length;
    },
    redBlocks: state => {
      return state.blocks.filter(block => block.color === 1).length;
    },
    greenBlocks: state => {
      return state.blocks.filter(block => block.color === 2).length;
    },
  },
  mutations: {
    ADD_BLOCK(state, block) {
      state.blocks.push(block);
    },
    REMOVE_BLOCK(state, index) {
      state.blocks.splice(index, 1);
    },
    ADD_BORDER(state, index) {
      let item = state.blocks[index];
      item.clicked = true;
      if (item.extends && item.color == 0) {
        item.color = 1;
      }
    },
    CHANGE_COLOR(state, index) {
      let item = state.blocks[index];
      if (item.color === 1) {
        item.color++;
      } else {
        item.color--;
      }
    }
  },
  actions: {
    addBlock({commit}, block) {
      commit('ADD_BLOCK', block)
    },
    removeBlock({commit}, index) {
      commit('REMOVE_BLOCK', index)
    },
    addBorder({commit}, index) {
      commit('ADD_BORDER', index)
    },
    changeColor({commit}, index) {
      commit('CHANGE_COLOR', index)
    }
  }
});

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
