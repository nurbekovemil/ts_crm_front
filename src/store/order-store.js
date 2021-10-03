import api from "./api";

export default {
  namespaced: true,
  state: {
    isAddDialog: false,
    order_list: [],
    order_types: [],
    order_to_buy: [],
    order_to_sell: [],
    order_view: {},
  },
  mutations: {
    SET_ALL_ORDER: (state, data) => (state.order_list = data),
    SET_ORDER: (state, { data, type }) => type == 1 ? (state.order_to_sell = data) : (state.order_to_buy = data),
    SET_IS_ADD_DIALOG: (state) => (state.isAddDialog = !state.isAddDialog),
    SET_ORDER_VIEW: (state, data) => (state.order_view = data),
  },
  actions: {
    MY_ORDER_LIST: async ({ commit }, type) => {
      try {
        const { data } = await api.getMyOrderList(type);
        commit("SET_ORDER", { data, type });
      } catch (error) {
        commit("ERROR_MESSAGE", error.response.data.error, {root: true});
        // commit('SET_LOADING')
      }
    },
    ALL_ORDER_LIST: async ({ commit }) => {
      try {
        const { data } = await api.getAllOrderList();
        commit("SET_ALL_ORDER", data);
      } catch (error) {
        commit("ERROR_MESSAGE", error.response.data.error, {root: true});
      }
    },
    ALL_ORDER_LIST_HOME_PAGE: async ({commit}) => {
      try {
        const {data} = await api.getAllOrderListHomePage();
        commit("SET_ALL_ORDER", data);
      } catch (error) {
        commit("ERROR_MESSAGE", error.response.data.error, {root: true});
      }
    },
    CREATE_ORDER: async ({ commit, dispatch }, order) => {
      try {
        const { data } = await api.createOrder(order);
        commit("SET_IS_ADD_DIALOG");
        commit("SUCCESS_MESSAGE", data, {root: true});
        dispatch("MY_ORDER_LIST", order.order_type);
      } catch (error) {
        commit("ERROR_MESSAGE", error.response.data.error, {root: true});
      }
    },
    GET_ORDER_BY_ID: async ({ commit }, id) => {
      try {
        const { data } = await api.getOrderById(id);
        // console.log(data)
        commit("SET_ORDER_VIEW", data);
      } catch (error) {
        commit("ERROR_MESSAGE", error.response.data.error, {root: true});
      }
    },
    UPDATE_ORDER_STATUS: async ({ commit, dispatch }, order) => {
      try {
        const { data } = await api.updateOrderStatus(order);
        dispatch("GET_ORDER_BY_ID", order.order_id);
        commit("SUCCESS_MESSAGE", data, {root: true});
      } catch (error) {
        commit("ERROR_MESSAGE", error.response.data.error, {root: true});
      }
    },
  },
  getters: {
    getMyOrders: (state) => (type) =>
      type == 1 ? state.order_to_sell : state.order_to_buy,
  },
};
