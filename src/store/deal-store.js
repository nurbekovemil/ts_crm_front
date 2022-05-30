import api from "./api";
import router from "../router";

export default {
  namespaced: true,
  state: {
    isAddDealDialog: false,
    deals: [],
    deal_view: [],
    deal_orders: [],
  },
  mutations: {
    SET_IS_ADD_DEAL_DIALOG: (state) =>
      (state.isAddDealDialog = !state.isAddDealDialog),
    SET_DEAL_VIEW: (state, data) => (state.deal_view = data),
    SET_DEALS: (state, data) => (state.deals = data),
    SET_DEAL_ORDERS: (state, data) => (state.deal_orders = data),
  },
  actions: {
    CREATE_DEAL: async ({ commit }, { offer_type, getFormData, offer }) => {
      try {
        if (offer_type === 1) {
          const order = await api.createOrderPrivate(getFormData);
          offer.order_from = order.data.rows.id;
          const deal = await api.createDeal(offer);
          commit("message/SUCCESS_MESSAGE", deal.data, { root: true });
          commit("SET_IS_ADD_DEAL_DIALOG");
        } else {
          const deal = await api.createDeal(offer);
          commit("message/SUCCESS_MESSAGE", deal.data, { root: true });
          commit("SET_IS_ADD_DEAL_DIALOG");
        }
      } catch (error) {
        commit("message/ERROR_MESSAGE", error.response.data.error, {
          root: true,
        });
      }
    },
    GET_DEAL_LIST: async ({ commit }, status) => {
      try {
        const { data } = await api.getDealList(status);
        commit("SET_DEALS", data);
      } catch (error) {
        commit("message/ERROR_MESSAGE", error.response.data.error, {
          root: true,
        });
      }
    },
    GET_DEAL_ORDERS: async ({ commit, dispatch }, id) => {
      try {
        const { data } = await api.getDealOrders(id);
        commit("SET_DEAL_ORDERS", data);
        dispatch("GET_DEAL_BY_ID", id);
      } catch (error) {}
    },
    GET_DEAL_BY_ID: async ({ commit }, id) => {
      try {
        const { data } = await api.getDealById(id);
        commit("SET_DEAL_VIEW", data);
      } catch (error) {
        commit("message/ERROR_MESSAGE", error.response.data.error, {
          root: true,
        });
      }
    },
    UPDATE_DEAL_STATUS: async ({ commit, dispatch }, status) => {
      try {
        const { data } = await api.updateDealStatus(status);
        router.push(`/dashboard/deal/${status.deal_id}`);
        dispatch("GET_DEAL_BY_ID", status.deal_id);
        commit("message/SUCCESS_MESSAGE", data, { root: true });
      } catch (error) {
        commit("message/ERROR_MESSAGE", error.response.data.error, {
          root: true,
        });
      }
    },
  },
};
