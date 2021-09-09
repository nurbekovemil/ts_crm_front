import api from './api'

export default {
    state: {
        isAddDialog: false,
        order_types: [],
        order_to_buy: [],
        order_to_sell: [],
        order_view: {}
    },
    mutations: {
        SET_ORDER: (state, {data, type}) => type == 1 ? state.order_to_sell = data : state.order_to_buy = data,
        SET_IS_ADD_DIALOG: (state) => state.isAddDialog = !state.isAddDialog, 
        SET_ORDER_VIEW: (state, data) => state.order_view = data,
    },
    actions: {
        ORDER_LIST: async ({commit}, type) =>{
            try {
                const {data} = await api.getAllOrderList(type)
                commit('SET_ORDER', {data, type})
            } catch (error) {
                
            }
        },
        CREATE_ORDER: async ({commit, dispatch}, order) => {
            try {
                const {data} =  await api.createOrder(order)
                commit('SET_IS_ADD_DIALOG')
                commit('SUCCESS_MESSAGE', data)
                dispatch('ORDER_LIST', order.order_type)

            } catch (error) {
                commit('ERROR_MESSAGE', error.response.data.error)                
            }
        },
        GET_ORDER_BY_ID: async ({commit}, id) => {
            try {
                const {data} = await api.getOrderById(id)
                commit('SET_ORDER_VIEW', data)
            } catch (error) {
                commit('ERROR_MESSAGE', error.response.data.error)
            }
        }
    },
    getters: {
        GET_ORDERS: (state) => (type) => type == 1 ? state.order_to_sell : state.order_to_buy,
        GET_IS_ADD_DIALOG: (state) => state.isAddDialog,
        GET_ORDER_VIEW: (state) => state.order_view
    }
}