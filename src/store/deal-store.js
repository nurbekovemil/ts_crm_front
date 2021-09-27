import api from './api'

export default {
    state: {
        isAddDealDialog: false,
        deals: [],
        deal_view: []
    },
    mutations: {
        SET_IS_ADD_DEAL_DIALOG: (state) => state.isAddDealDialog = !state.isAddDealDialog,
        SET_DEAL_VIEW: (state, data) => state.deal_view = data,
        SET_DEALS: (state, data) => state.deals = data
    },
    actions: {
        CREATE_DEAL: async ({commit}, dealData) => {
            try {
                const {data} = await api.createDeal(dealData)
                commit('SUCCESS_MESSAGE', data)
                commit('SET_IS_ADD_DEAL_DIALOG')
            } catch (error) {
                commit('ERROR_MESSAGE', error.response.data.error)
            }
        },
        GET_DEAL_LIST: async ({commit}) => {
            try {
                const {data} = await api.getDealList()
                // console.log(data)
                commit('SET_DEALS', data)
            } catch (error) {
                commit('ERROR_MESSAGE', error.response.data.error)
            }
        },
        GET_DEAL_BY_ID: async ({commit}, id) => {
            try {
                const {data} = await api.getDealById(id)
                commit('SET_DEAL_VIEW', data)
            } catch (error) {
                commit('ERROR_MESSAGE', error.response.data.error)
            }
        },
        UPDATE_DEAL_STATUS: async ({commit}, offer) => {
            try {
                const {data} = await api.updateDealStatus(offer)
                commit('SUCCESS_MESSAGE', data)
            } catch (error) {
                commit('ERROR_MESSAGE', error.response.data.error)
            }
        }
    },
    getters: {
         getIsDealDialog: (state) => state.isAddDealDialog,
         getDeals: (state) => state.deals,
         getDealById: (state) => state.deal_view,

    }
}