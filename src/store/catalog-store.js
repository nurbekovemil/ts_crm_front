import api from "./api";

export default {
	namespaced: true,
	state: {
		isAddProduct: false,
		isAddCategory: false,
		order_categories: [],
		order_deliveries: [],
		order_payments: [],
		order_types: [],
		order_weights: [],
		tnved_categories: []
	},
	mutations: {
		SET_OPTIONS: (state, {option, data}) => (state[option] = data),
		SET_IS_DIALOG: (state, isState) => (state[isState] = !state[isState]),
		SET_TNVED: (state, data) => (state.tnved_categories = data)
	},
	actions: {
		GET_OPTIONS: async ({ commit }, option) => {
			try {
				const { data } = await api.getOptions(option);
				commit("SET_OPTIONS", {option, data});
			} catch (error) {
				commit("message/ERROR_MESSAGE", error.response.data.error, {
					root: true,
				});
			}
		},
		GET_TNVED_CATEGORIES: async ({commit}, page) => {
			try {
				const { data } = await api.getTnvedCategories(page)
				commit('SET_TNVED', data)
			} catch (error) {
				commit("message/ERROR_MESSAGE", error.response.data.error, {
					root: true,
				});
			}
		}
	}
};
