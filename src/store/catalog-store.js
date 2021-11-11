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
	},
	mutations: {
		SET_OPTIONS: (state, {option, data}) => (state[option] = data),
		SET_IS_DIALOG: (state, isState) => (state[isState] = !state[isState])
		
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
	}
};
