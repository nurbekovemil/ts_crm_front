import axios from "axios";

const api = axios.create({
  baseURL: process.env.VUE_APP_BACK_API,
});

api.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
      Accept: "application/json",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default {
  // user api
  userLogin: (data) => api.post("/users/login", data),
  userGetMe: () => api.get("/users/me"),
  userList: (query) => api.get("/users", { params: query }),
  createUser: (data) => api.post("/users", data),
  deleteUser: (id) => api.delete("/users/" + id),
  updateUser: (data) => api.put("/users", data),
  getUserRegisterTemplate: (type) =>
    api.get("/users/template", { params: { type } }),
  userRegister: (data) => api.post("/users/publuc/registration/", data),
  getUserById: (id) => api.get("/users/" + id),
  updateUserStatus: ({ status, user_id }) =>
    api.put("/users/status", {}, { params: { status, user_id } }),
  getProfile: () => api.get("/users/profile"),
  // order api private routes
  createOrderPrivate: (data) =>
    api.post("/orders/private/", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  getMyOrderListPrivate: (type) =>
    api.get("/orders/private/type/", { params: { type } }),
  getOrderByIdPrivate: (id) => api.get("/orders/private/" + id),
  getAllOrderListPrivate: () => api.get("/orders/private/"),
  updateOrderStatusPrivate: (data) =>
    api.put("/orders/private/", {}, { params: data }),
  deleteOrder: (id) => api.delete("/orders/private/" + id),
  uploadImage: (data) =>
    api.put("/orders/private/image", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  updateOrderData: (data) => api.post("/orders/private/update", data),
  deleteImage: (id) => api.delete("/orders/private/image/" + id),
  // order api public routes
  getAllOrderListPublic: (type) =>
    api.get("/orders/public/type/", { params: { type } }),
  getOrderByIdPublic: (id) => api.get("/orders/public/" + id),

  // Deal api
  createDeal: (data) => api.post("/deals", data),
  getDealById: (id) => api.get("/deals/" + id),
  getDealList: (status) => api.get("/deals/", { params: { status } }),
  getDealOrders: (id) => api.get("/deals/order/" + id),
  updateDealStatus: (status) => api.put("/deals/", status),

  // categories api
  getOptions: (option) =>
    api.get("/orders/private/options/", { params: { option } }),
  getTnvedCategories: (page) =>
    api.get("/catalog/", { params: { page: page } }),
  getCategories: () => api.get("/catalog/categories"),
  getCategoryOrders: (id) => api.get("/catalog/categories/" + id),
  getLatestOrders: (order_ids) => api.post("/catalog/latestorders", order_ids),
  // dashboard api

  getTableRows: (table) => api.get("/dashboard/rows/" + table),
};
