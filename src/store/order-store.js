import api from './api'

export default {
    state: {
        isAddDialog: false,
        isAddOfferDialog: false,
        orders: [],
        order_types: [],
        order_to_buy: [],
        order_to_sell: [],
        order_view: {},
        offers: []
    },
    mutations: {
        SET_ALL_ORDER: (state, data) =>  state.orders = data,
        SET_ORDER: (state, {data, type}) => type == 1 ? state.order_to_sell = data : state.order_to_buy = data,
        SET_IS_ADD_DIALOG: (state) => state.isAddDialog = !state.isAddDialog, 
        SET_IS_ADD_OFFER_DIALOG: (state) => state.isAddOfferDialog = !state.isAddOfferDialog,
        SET_ORDER_VIEW: (state, data) => state.order_view = data,
        SET_OFFERS: (state, data) => state.offers = data
    },
    actions: {
        MY_ORDER_LIST: async ({commit}, type) =>{
            try {
                const {data} = await api.getMyOrderList(type)
                commit('SET_ORDER', {data, type})
            } catch (error) {
                commit('ERROR_MESSAGE', error.response.data.error)
            }
        },
        ALL_ORDER_LIST: async ({commit}) => {
            try {
                const {data} = await api.getAllOrderList()
                console.log(data)
                commit('SET_ALL_ORDER', data)
            } catch (error) {
                
            }
        },
        CREATE_ORDER: async ({commit, dispatch}, order) => {
            try {
                const {data} =  await api.createOrder(order)
                commit('SET_IS_ADD_DIALOG')
                commit('SUCCESS_MESSAGE', data)
                dispatch('MY_ORDER_LIST', order.order_type)

            } catch (error) {
                commit('ERROR_MESSAGE', error.response.data.error)                
            }
        },
        GET_ORDER_BY_ID: async ({commit}, id) => {
            try {
                const {data} = await api.getOrderById(id)
                // console.log(data)
                commit('SET_ORDER_VIEW', data)
            } catch (error) {
                commit('ERROR_MESSAGE', error.response.data.error)
            }
        },
        SEND_OFFER_ORDER: async ({commit}, offerData) => {
            try {
                const {data} = await api.sendOfferOrder(offerData)
                commit('SUCCESS_MESSAGE', data)
                commit('SET_IS_ADD_OFFER_DIALOG')
            } catch (error) {
                commit('ERROR_MESSAGE', error.response.data.error)
            }
        },
        GET_OFFERS_LIST: async ({commit}) => {
            try {
                const {data} = await api.getOffersList()
                // console.log(data)
                commit('SET_OFFERS', data)
            } catch (error) {
                commit('ERROR_MESSAGE', error.response.data.error)
            }
        },
        UPDATE_ORDER_STATUS: async ({commit, dispatch}, order) => {
            try {
                const {data} = await api.updateOrderStatus(order)
                dispatch('GET_ORDER_BY_ID', order.order_id)
                commit('SUCCESS_MESSAGE', data)
            } catch (error) {
                commit('ERROR_MESSAGE', error.response.data.error)
            }
        }
    },
    getters: {
        GET_ALL_ORDERS: (state) => state.orders,
        GET_MY_ORDERS: (state) => (type) => type == 1 ? state.order_to_sell : state.order_to_buy,
        GET_IS_ADD_DIALOG: (state) => state.isAddDialog,
        GET_IS_OFFER_DIALOG: (state) => state.isAddOfferDialog,
        GET_ORDER_VIEW: (state) => state.order_view,
        GET_OFFERS: (state) => state.offers
    }
}