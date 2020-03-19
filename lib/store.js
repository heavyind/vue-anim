

const state = {
  flag: false,
  initFlag: false,
  durationRegister: [],
  explicitDuration: null
};

const mutations = {

  _enter (state) {

  },

  _leave (state) {

  },

  _registerDuration (state, t) {
    state.durationRegister.push(t);
  },

  _clearDurationRegister (state) {
    state.durationRegister = [];
  }
};

const actions = {

  enter ({ commit }) {

  },
  
  leave ({ commit }) {

  },

  registerDuration ({ commit }, t) {
    commit("_registerDuration", t);
  }
};

const getters = {

};

export default {
  state,
  mutations,
  actions,
  getters
};
