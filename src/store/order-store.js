import api from "./api";

export default {
  namespaced: true,

  state: {
    templates: {
      // template for add order
      orderAdd: [
        {
          field: "category",
          title: "Категория",
          value: null,
          type: "select",
          item: "order_categories",
          valid: {
            required: true,
          },
        },
        {
          field: "type",
          title: "Тип заявки",
          value: null,
          type: "select",
          item: "order_types",
          valid: {
            required: true,
          },
        },
        {
          field: "delivery",
          title: "Условия доставки",
          value: null,
          type: "select",
          item: "order_deliveries",
          valid: {
            required: true,
          },
        },
        {
          field: "payment",
          title: "Условие оплаты",
          value: null,
          type: "select",
          item: "order_payments",
          valid: {
            required: true,
          },
        },
        {
          field: "weight",
          title: "Единицы измерения",
          value: null,
          type: "select",
          item: "order_weights",
          valid: {
            required: true,
          },
        },
        {
          field: "currency",
          title: "Валюта",
          value: null,
          type: "select",
          item: "order_currencies",
          valid: {
            required: true,
          },
        },

        {
          field: "title",
          title: "Название продукта",
          value: "",
          type: "input",
          valid: {
            required: true,
          },
        },
        {
          field: "nds",
          title: "НДС",
          value: "",
          type: "input",
          valid: {
            required: true,
            type: "number",
          },
        },
        {
          field: "gost",
          title: "ГОСТ",
          value: "",
          type: "input",
          valid: {
            required: true,
          },
        },
        {
          field: "warranty",
          title: "Залоги и гарантии (в %)",
          value: "",
          type: "input",
          valid: {
            required: true,
          },
        },
        {
          field: "packing_form",
          title: "Форма упакови",
          value: "",
          type: "input",
          valid: {
            required: true,
          },
        },
        {
          field: "country",
          title: "Страна производителя",
          value: "",
          type: "input",
          valid: {
            required: true,
          },
        },
        {
          field: "special_conditions",
          title: "Особые условия",
          value: "",
          type: "textarea",
          valid: {
            required: false,
          },
        },
        {
          field: "code_tnved",
          title: "Код ТН ВЭД",
          value: "",
          type: "input",
          valid: {
            required: true,
          },
        },
        {
          field: "lot",
          title: "Лот",
          value: "",
          type: "input",
          valid: {
            required: true,
          },
        },
        {
          field: "product_lacation",
          title: "Местонахождение товара",
          value: "",
          type: "input",
          valid: {
            required: true,
          },
        },
        {
          field: "description",
          title: "Описание",
          value: "",
          type: "textarea",
          valid: {
            required: false,
          },
        },
        {
          field: "price",
          title: "Цена",
          value: "",
          type: "input",
          valid: {
            required: true,
            type: "number",
          },
        },
        {
          field: "amount",
          title: "Количество",
          value: "",
          type: "input",
          valid: {
            required: true,
            type: "number",
          },
        },
        {
          field: "cost",
          title: "Стоимость",
          value: "",
          type: "input",
          valid: {
            required: true,
            type: "number",
          },
        },
        {
          field: "images",
          title: "Изображение",
          value: [],
          type: "file",
          valid: {
            required: false,
          },
        },
      ],
    },
    options: {
      order_categories: [],
      order_deliveries: [],
      order_payments: [],
      order_types: [],
      order_weights: [],
      order_currencies: [],
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
    SET_OPTIONS(state, { option, data }) {
      return (state.options[option] = data);
    },
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
        commit("SET_OPTIONS", { option, data });
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
          : await api.getOrderByIdPublic(id);
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
        dispatch("GET_ORDER_BY_ID", {
          id: order.order_id,
          isAuth: order.isAuth,
        });
        commit("message/SUCCESS_MESSAGE", data, { root: true });
      } catch (error) {
        commit("message/ERROR_MESSAGE", error.response.data.error, {
          root: true,
        });
      }
    },
    DELETE_ORDER: async ({ commit, dispatch }, order) => {
      try {
        const { data } = await api.deleteOrder(order.id);
        dispatch("MY_ORDER_LIST", order.type);
        commit("message/SUCCESS_MESSAGE", data, { root: true });
      } catch (error) {
        commit("message/ERROR_MESSAGE", error.response.data.error, {
          root: true,
        });
      }
    },
    DELETE_IMAGE: async ({ commit, dispatch }, img) => {
      try {
        const { data } = await api.deleteImage(img.img_id);
        dispatch("GET_ORDER_BY_ID", { id: img.order_id, isAuth: img.isAuth });
        commit("message/SUCCESS_MESSAGE", data, { root: true });
      } catch (error) {
        commit("message/ERROR_MESSAGE", error.response.data.error, {
          root: true,
        });
      }
    },
    UPLOAD_IMAGE: async ({ commit, dispatch }, img) => {
      try {
        const { data } = await api.uploadImage(img.img);
        dispatch("GET_ORDER_BY_ID", { id: img.order_id, isAuth: img.isAuth });
        commit("message/SUCCESS_MESSAGE", data, { root: true });
      } catch (error) {
        commit("message/ERROR_MESSAGE", error.response.data.error, {
          root: true,
        });
      }
    },
    UPDATE_ORDER_DATA: async ({ commit, dispatch }, order) => {
      try {
        const { data } = await api.updateOrderData({
          order: order.order,
          id: order.order_id,
        });
        dispatch("GET_ORDER_BY_ID", {
          id: order.order_id,
          isAuth: order.isAuth,
        });
        dispatch("MY_ORDER_LIST", order.order.type);
        commit("SET_IS_EDIT_DIALOG");
        commit("message/SUCCESS_MESSAGE", data, { root: true });
      } catch (error) {
        commit("message/ERROR_MESSAGE", error.response.data.error, {
          root: true,
        });
      }
    },
  },
  getters: {
    getOrderByType: (state) => (type) =>
      type == 1 ? state.order_to_sell : state.order_to_buy,
  },
};
