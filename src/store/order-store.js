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
          value: "0",
          type: "input",
          valid: {
            required: false,
            type: "number",
          },
        },
        // {
        //   field: "gost",
        //   title: "ГОСТ",
        //   value: "",
        //   type: "input",
        //   valid: {
        //     required: true,
        //     type: "number",
        //   },
        // },
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
          type: "autocomplate",
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
        {
          field: "cd",
          title: "Расчеты через клиринговый центр",
          value: false,
          type: "checkbox",
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
      order_tnveds: [],
    },
    isAddDialog: false,
    isEditDialog: false,
    isLoadingTnveds: false,
    order_list: {
      rows: [],
      count: 0,
    },
    order_types: [],
    order_to_buy: {
      rows: [],
      count: 0,
    },
    order_to_sell: {
      rows: [],
      count: 0,
    },
    order_view: [],
  },
  mutations: {
    SET_ALL_ORDER: (state, data) => {
      state.order_list.rows = data.rows;
      state.order_list.count = data.count;
    },
    SET_ORDER: (state, { data, type }) => {
      if (type == 1) {
        state.order_to_sell.rows = data.rows;
        state.order_to_sell.count = data.count || 0;
      } else {
        state.order_to_buy.rows = data.rows;
        state.order_to_buy.count = data.count || 0;
      }
    },
    SET_IS_ADD_DIALOG: (state) => (state.isAddDialog = !state.isAddDialog),
    SET_IS_EDIT_DIALOG: (state) => (state.isEditDialog = !state.isEditDialog),
    SET_ORDER_VIEW: (state, data) => (state.order_view = data),
    SET_OPTIONS(state, { option, data }) {
      return (state.options[option] = data);
    },
    SET_ORDER_TNVED: (state, data) => (state.options.order_tnveds = data),
    SET_IS_LOADING_TNVEDS: (state, data) => (state.isLoadingTnveds = data),
  },
  actions: {
    MY_ORDER_LIST: async ({ commit }, order) => {
      try {
        const { data } = await api.getMyOrderListPrivate(order);
        commit("SET_ORDER", { data, type: order.type });
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
    ALL_ORDER_LIST: async ({ commit }, list) => {
      try {
        const { data } = await api.getAllOrderListPrivate(list);
        commit("SET_ALL_ORDER", data);
      } catch (error) {
        commit("message/ERROR_MESSAGE", error.response.data.error, {
          root: true,
        });
      }
    },
    ALL_ORDER_LIST_HOME_PAGE: async ({ commit }, order) => {
      try {
        const { data } = await api.getAllOrderListPublic(order);
        commit("SET_ORDER", { data, type: order.type });
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
        dispatch("MY_ORDER_LIST", { type: data.rows.order_type });
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
        dispatch("MY_ORDER_LIST", { type: order.type });
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
        dispatch("MY_ORDER_LIST", { type: order.order.type });
        commit("SET_IS_EDIT_DIALOG");
        commit("message/SUCCESS_MESSAGE", data, { root: true });
      } catch (error) {
        commit("message/ERROR_MESSAGE", error.response.data.error, {
          root: true,
        });
      }
    },
    GET_ORDER_TNVED: async ({ commit }, search) => {
      try {
        commit("SET_IS_LOADING_TNVEDS", true);
        const { data } = await api.getOrderTnved(search);
        commit("SET_ORDER_TNVED", data);
        commit("SET_IS_LOADING_TNVEDS", false);
      } catch (error) {
        commit("message/ERROR_MESSAGE", error.response.data.error, {
          root: true,
        });
      }
    },
  },
  getters: {
    getOrderByType: (state) => (type) =>
      type == 1 ? state.order_to_sell.rows : state.order_to_buy.rows,
    getOrderCountByType: (state) => (type) =>
      type == 1 ? state.order_to_sell.count : state.order_to_buy.count,
  },
};
