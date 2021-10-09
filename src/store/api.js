import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3132",
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

	// order api private
	createOrderPrivate: (data) => api.post("/orders/private/", data),
	getMyOrderListPrivate: (type) => api.get("/orders/private/type/" + type),
	getOrderByIdPrivate: (id) => api.get("/orders/private/id/" + id),
	getAllOrderListPrivate: () => api.get("/orders/private/"),
	updateOrderStatusPrivate: (data) => api.put("/orders/private/status/", data),
  // order api public
	getAllOrderListPublic: (type) => api.get("/orders/public/type/" + type),
	getOrderByIdPublic: (id) => api.get("/orders/public/id/" + id),


	// Deal api
	createDeal: (data) => api.post("/deals", data),
	getDealById: (id) => api.get("/deals/by/" + id),
	getDealList: (status) => api.get("/deals/" + status),
	updateDealStatus: (status) => api.put("/deals/", status),

	// get templates
	getTemplate: id => api.get("/orders/private/templates/"+id)
};
