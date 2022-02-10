import api from "./api";

export default {
	namespaced: true,
	state: {
		templates: {
			orderAdd:[
				{field: 'category', title:'Категория', value: null, type: 'select', item:'order_categories'},
				{field: 'type', title:'Тип заявки', value: null, type: 'select', item: 'order_types'},
				{field: 'delivery',title:'Условия доставки', value: null, type: 'select', item: 'order_deliveries'},
				{field: 'payment',title:'Условие оплаты', value: null, type: 'select', item: 'order_payments'},
				{field: 'weight',title:'Единицы измерения', value: null, type: 'select', item: 'order_weights'},
				{field: 'title', title:'Название продукта', value: '', type:'input'},
				{field: 'description', title:'Описание', value: '', type:'textarea'},
				{field: 'price', title:'Цена', value: 0, type: 'input'},
				{field: 'amount', title:'Количество', value: 0, type: 'input'},
				{field: 'cost', title:'Стоимость', value: 0, type: 'input'},
				{field: 'images', value: [], type: 'file'},
			]
		},
		options: {
			order_categories: [],
			order_deliveries: [],
			order_payments: [],
			order_types: [],
			order_weights: [],
		},
		isAddDialog: false,
		isEditDialog: false,
		order_list: [],
		order_types: [],
		order_to_buy: [],
		order_to_sell: [],
		order_view: [],
	},
	mutations: {
		SET_ALL_ORDER: (state, data) => (state.order_list = data),
		SET_ORDER: (state, { data, type }) =>
			type == 1 ? (state.order_to_sell = data) : (state.order_to_buy = data),
		SET_IS_ADD_DIALOG: (state) => (state.isAddDialog = !state.isAddDialog),
		SET_IS_EDIT_DIALOG: (state) => (state.isEditDialog = !state.isEditDialog),
		SET_ORDER_VIEW: (state, data) => (state.order_view = data),
		SET_OPTIONS: (state, {option, data}) => (state.options[option] = data),
	},
	actions: {
		MY_ORDER_LIST: async ({ commit }, type) => {
			try {
				const { data } = await api.getMyOrderListPrivate(type);
				commit("SET_ORDER", { data, type });
			} catch (error) {
				commit("message/ERROR_MESSAGE", error.response.data.error, {
					root: true,
				});
				// commit('SET_LOADING')
			}
		},
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
		ALL_ORDER_LIST: async ({ commit }) => {
			try {
				const { data } = await api.getAllOrderListPrivate();
				commit("SET_ALL_ORDER", data);
			} catch (error) {
				commit("message/ERROR_MESSAGE", error.response.data.error, {
					root: true,
				});
			}
		},
		ALL_ORDER_LIST_HOME_PAGE: async ({ commit }, type) => {
			try {
				const { data } = await api.getAllOrderListPublic(type);
				commit("SET_ORDER", { data, type });
			} catch (error) {
				commit("message/ERROR_MESSAGE", error.response.data.error, {
					root: true,
				});
			}
		},
		CREATE_ORDER: async ({ commit, dispatch }, order) => {
			try {
				const { data } = await api.createOrderPrivate(order);
				console.log(data)
				commit("SET_IS_ADD_DIALOG");
				commit("message/SUCCESS_MESSAGE", data, { root: true });
				dispatch("MY_ORDER_LIST", data.rows.order_type);
			} catch (error) {
				commit("message/ERROR_MESSAGE", error.response.data.error, {
					root: true,
				});
			}
		},
		GET_ORDER_BY_ID: async ({ commit }, { id, isAuth }) => {
			try {
				const { data } = isAuth
					? await api.getOrderByIdPrivate(id)
					: await api.getOrderByIdPublic(id)
					console.log(data)
				commit("SET_ORDER_VIEW", data);
			} catch (error) {
				commit("message/ERROR_MESSAGE", error.response.data.error, {
					root: true,
				});
			}
		},
		UPDATE_ORDER_STATUS: async ({ commit, dispatch }, order) => {
			try {
				const { data } = await api.updateOrderStatusPrivate(order);
				dispatch("GET_ORDER_BY_ID", {id: order.order_id});
				commit("message/SUCCESS_MESSAGE", data, { root: true });
			} catch (error) {
				commit("message/ERROR_MESSAGE", error.response.data.error, {
					root: true,
				});
			}
		},
	},
	getters: {
		getOrderByType: (state) => (type) =>type == 1 ? state.order_to_sell : state.order_to_buy,
	},
};
