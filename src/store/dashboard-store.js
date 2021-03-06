import api from "./api";

export default {
  namespaced: true,
  state: {
    table_rows: {
      orders: {
        count: null,
        title: "Все заявки",
        icon: "mdi-file-document-multiple",
      },
      users: {
        count: null,
        title: "Все пользователи",
        icon: "mdi-account-multiple",
      },
      deals: {
        count: null,
        title: "Все сделки",
        icon: "mdi-handshake",
      },
    },
  },
  mutations: {
    SET_TABLE_ROWS: (state, { table, data }) => {
      state.table_rows[table].count = data.count;
    },
  },
  actions: {
    async GET_TABLE_ROWS({ commit }, table) {
      try {
        const { data } = await api.getTableRows(table);
        commit("SET_TABLE_ROWS", { data, table });
      } catch (error) {
        commit("message/ERROR_MESSAGE", error.response.data.error, {
          root: true,
        });
      }
    },
  },
  getters: {
    getRows: (state) => (table) => state.table_rows[table],
  },
};
