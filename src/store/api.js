import axios from "axios";

const api = axios.create({
	baseURL: "https://kse.nsp.kg",
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
	userList: () => api.get("/users"),
	createUser: (data) => api.post("/users", data),
	deleteUser: (id) => api.delete("/users/" + id),
	updateUser: (data) => api.put("/users", data),
	// order api private routes
	createOrderPrivate: (data) => api.post("/orders/private/", data, {
		headers: {
		 'Content-Type': 'multipart/form-data'
		}
	}
),
	getMyOrderListPrivate: (type) => api.get("/orders/private/type/", {params: {type}}),
	getOrderByIdPrivate: (id) => api.get("/orders/private/" + id),
	getAllOrderListPrivate: () => api.get("/orders/private/"),
	updateOrderStatusPrivate: (data) => api.put("/orders/private/",{},{params: data}),
  // order api public routes
	getAllOrderListPublic: (type) => api.get("/orders/public/type/", {params: {type}}),
	getOrderByIdPublic: (id) => api.get("/orders/public/" + id),


	// Deal api
	createDeal: (data) => api.post("/deals", data),
	getDealById: (id) => api.get("/deals/" + id),
	getDealList: (status) => api.get("/deals/", {params: {status}}),
	getDealOrders: (ids) => api.get("/deals/order/", {params: ids}),
	updateDealStatus: (status) => api.put("/deals/", status),

	// categories api
	getOptions: option => api.get("/orders/private/options/", {params: {option}}),
	getTnvedCategories: (page) =>  api.get('/catalog/', {params: {page: page}})
};
