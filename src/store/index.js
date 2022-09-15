import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import user from "./user-store";
import message from "./message-store";
import catalog from "./catalog-store";
import dashboard from "./dashboard-store";
import order from "./order-store";
import deal from "./deal-store";
import report from "./report-store";
import transaction from "./transaction-store";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  modules: {
    message,
    dashboard,
    user,
    catalog,
    order,
    deal,
    report,
    transaction,
  },
});
