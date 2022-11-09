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
  updateUserStatus: (data) => api.put("/users/status", {}, { params: data }),
  getProfile: () => api.get("/users/profile"),
  updateUserData: (data) => api.put("/users/user", data),
  // order api private routes
  createOrderPrivate: (data) =>
    api.post("/orders/private/", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  getMyOrderListPrivate: ({ type, page, limit }) =>
    api.get("/orders/private/type/", { params: { type, page, limit } }),
  getOrderByIdPrivate: (id) => api.get("/orders/private/" + id),
  getAllOrderListPrivate: ({ page, limit, type }) =>
    api.get("/orders/private/", { params: { page, limit, type } }),
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
  deleteImage: (data) => api.post("/orders/private/files", data),
  copyOrder: (id) => api.post("/orders/private/copy", id),
  // order api public routes
  getAllOrderListPublic: ({ type, limit }) =>
    api.get("/orders/public/type/", { params: { type, limit } }),
  getOrderByIdPublic: (id) => api.get("/orders/public/" + id),
  // Deal api
  createDeal: (data) => api.post("/deals", data),
  getDealById: (id) => api.get("/deals/" + id),
  getDealList: (status) => api.get("/deals/", { params: { status } }),
  getDealOrders: (id) => api.get("/deals/order/" + id),
  updateDealStatus: (status) => api.put("/deals/", status),
  updateDealStatusWithComment: (data) =>
    api.put("/deals/comment", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  getOfferHistory: (id) => api.get("/deals/history/", { params: { id } }),
  deleteOfferById: (id) => api.delete("/deals/" + id),
  getTradeList: (date) => api.get("/deals/trade-list/" + date),
  getTradeById: (id) => api.get("/deals/trade/" + id),
  getDepoDeals: (date) => api.get("/deals/depo-deals/" + date),
  // categories api
  getOptions: (option) =>
    api.get("/orders/private/options/", { params: { option } }),
  getTnvedCategories: (page) =>
    api.get("/catalog/", { params: { page: page } }),
  getCategories: () => api.get("/catalog/categories"),
  getCategoryOrders: (id) => api.get("/catalog/categories/" + id),
  getLatestOrders: (order_ids) => api.post("/catalog/latestorders", order_ids),
  getOrderTnved: (search) =>
    api.get("/catalog/order_tnved", { params: { search } }),
  getCatalogByTable: (table) =>
    api.get("/catalog/table", { params: { table } }),
  updateCatalogItem: (data) => api.put("/catalog/table", data),
  createCatalogItem: (data) => api.post("/catalog/table", data),
  deleteCatalogItem: (data) => api.delete("/catalog/table", { data: data }),
  // dashboard api
  getTableRows: (table) => api.get("/dashboard/rows/" + table),
  getInProcessingOffers: () => api.get("/dashboard/offers"),
  // reports
  getDealReports: (data) => api.post("/reports/deals", data),
  // transactions
  getUserAccounts: () => api.get("/transfers/accounts"),
  createTransaction: (data) => api.post("/transfers", data),
  getCurrentExchange() {
    return axios({
      method: "GET",
      // url: "https://www.nbkr.kg/XML/daily.xml",
      url: "https://www.kse.kg/moneyTS.php",
    });
  },
  updateTransactionStatus: (data) => api.put("/transfers", data),
  getTransactionList: (query) => api.get("/transfers", { params: query }),
  getTransactionById: (id) => api.get("/transfers/" + id),
  // blog
  createBlog: (data) => api.post("/blogs", data),
  getBlogById: (id) => api.get("/blogs/" + id),
  getBlogList: () => api.get("/blogs"),
  deleteBlogById: (id) => api.delete("/blogs/" + id),
  // tenders
  createTender: (data) => api.post("/tenders", data),
  getTenderList: () => api.get("/tenders"),
  getTenderById: (id) => api.get("/tenders/" + id),
  getTenderAllList: (i) => api.get("/tenders/all"),
};
