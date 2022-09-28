import api from "./api";

export default {
  namespaced: true,
  actions: {
    async GET_CURRENT_EXCHANGE() {
        try {
          const res = await api.getCurrentExchange()
           return res
        } catch (err) {
          return err
        }
      },
  },
};
