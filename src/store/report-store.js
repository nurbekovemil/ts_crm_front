import api from "./api";

export default {
  namespaced: true,
  state: {
    deals: [],
  },
  mutations: {
    SET_DEAL_REPORTS: (state, data) => (state.deals = data),
  },
  actions: {
    GET_DEAL_REPORTS: async ({ commit }, filters) => {
      try {
        const { data } = await api.getDealReports(filters);
        commit("SET_DEAL_REPORTS", data);
      } catch (error) {
        commit("message/ERROR_MESSAGE", error.response.data.error, {
          root: true,
        });
      }
    },
  },
};
