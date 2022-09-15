import api from "./api";

export default {
  namespaced: true,
  state: {
    user: null,
    user_accounts: [],
    isTransaction: false,
    transactionTemplate: [
      {
        field: "transaction_type",
        title: "Выберите тип операции",
        value: null,
        type: "radio",
        types: [
          {
            type: 1,
            title: "Депонирование",
          },
          {
            type: 2,
            title: "Списание",
          },
        ],
        valid: {
          required: true,
        },
        col: "12",
      },
      {
        field: "amount",
        title: "Введите сумму",
        value: "",
        type: "input",
        valid: {
          required: true,
        },
        col: "12",
      },
    ],
  },
  mutations: {
    SET_USER_ACCOUNTS: (state, data) => (state.user_accounts = data),
    TOGGLE_IS_TRANSACTION: (state, data) => {
      state.user = data;
      state.isTransaction = !state.isTransaction;
    },
  },
  actions: {
    GET_USER_ACCOUNTS: async ({ commit }) => {
      try {
        const { data } = await api.getUserAccounts();
        commit("SET_USER_ACCOUNTS", data);
      } catch (error) {
        commit("message/ERROR_MESSAGE", error.response.data.error, {
          root: true,
        });
      }
    },
    CREATE_TRANSACTION: async ({ commit }, body) => {
      try {
        const { data } = await api.createTransaction(body);
        commit("message/SUCCESS_MESSAGE", data, { root: true });
      } catch (error) {
        commit("message/ERROR_MESSAGE", error.response.data.error, {
          root: true,
        });
      }
    },
  },
};
