import api from './api'

export default {
    namespaced: true,
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
                commit('SUCCESS_MESSAGE', data, {root: true})
                commit('SET_IS_ADD_DEAL_DIALOG')
            } catch (error) {
                commit('ERROR_MESSAGE', error.response.data.error, {root: true})
            }
        },
        GET_DEAL_LIST: async ({commit}, status) => {
            try {
                const {data} = await api.getDealList(status)
                // console.log(data)
                commit('SET_DEALS', data)
            } catch (error) {
                commit('ERROR_MESSAGE', error.response.data.error, {root: true})
            }
        },
        GET_DEAL_BY_ID: async ({commit}, id) => {
            try {
                const {data} = await api.getDealById(id)
                commit('SET_DEAL_VIEW', data)
            } catch (error) {
                commit('ERROR_MESSAGE', error.response.data.error, {root: true})
            }
        },
        UPDATE_DEAL_STATUS: async ({commit, dispatch}, status) => {
            try {
                const {data} = await api.updateDealStatus(status)
                dispatch('GET_DEAL_BY_ID', status.deal_id)
                commit('SUCCESS_MESSAGE', data, {root: true})
            } catch (error) {
                commit('ERROR_MESSAGE', error.response.data.error, {root: true})
            }
        }
    }
}