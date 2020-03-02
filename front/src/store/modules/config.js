export const Config = {
    namespaced: true,
  
    state: {

    },
  
    mutations: {
      SET_NODE_DATA(state, value) {
        state.node = value;
      },

    },
  
    actions: {
      setNode({ commit }, { value }) {
        commit("SET_NODE_DATA", value);
      },
    },
  
    getters: {}
  };
  