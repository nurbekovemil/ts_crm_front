import api from "./api";

export default {
  namespaced: true,
  state: {
    isAddProduct: false,
    isAddCategory: false,
    categories: [],
    category_orders: [],
    tnved_categories: [],
    latest_orders: [],
  },
  mutations: {
    SET_IS_DIALOG: (state, isState) => (state[isState] = !state[isState]),
    SET_TNVED: (state, data) => (state.tnved_categories = data),
    SET_CATEGORIES: (state, data) => (state.categories = data),
    SET_CATEGORY_ORDERS: (state, data) => (state.category_orders = data),
    SET_LATEST_ORDERS: (state, data) => (state.latest_orders = data),
  },
  actions: {
    GET_TNVED_CATEGORIES: async ({ commit }, page) => {
      try {
        const { data } = await api.getTnvedCategories(page);
        commit("SET_TNVED", data);
      } catch (error) {
        commit("message/ERROR_MESSAGE", error.response.data.error, {
          root: true,
        });
      }
    },
    GET_CATEGORIES: async ({ commit }) => {
      try {
        const { data } = await api.getCategories();
        commit("SET_CATEGORIES", data);
      } catch (error) {}
    },
    GET_CATEGORY_ORDERS: async ({ commit }, id) => {
      try {
        const { data } = await api.getCategoryOrders(id);
        commit("SET_CATEGORY_ORDERS", data);
      } catch (error) {
        commit("message/ERROR_MESSAGE", error.response.data.error, {
          root: true,
        });
      }
    },
    GET_LATESTORDERS: async ({ commit }, order_ids) => {
      try {
        const { data } = await api.getLatestOrders(order_ids);
        commit("SET_LATEST_ORDERS", data);
      } catch (error) {
        commit("message/ERROR_MESSAGE", error.response.data.error, {
          root: true,
        });
      }
    },
  },
};
