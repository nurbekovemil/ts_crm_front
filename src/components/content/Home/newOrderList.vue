<template>
  <v-container>
    <v-row>
      <v-col class="my-2">
        <v-row>
          <v-col cols="12">
            <v-simple-table border="1" width="100%">
              <thead>
                <tr>
                  <th>Дата</th>
                  <th>Заявка</th>
                  <th colspan="2">Наименование</th>
                  <th>Количество</th>
                  <th>Стоимость</th>
                  <th>Статус</th>
                  <th>
                    {{ type == 1 ? "Заявки на продажу" : "Заявки на покупку" }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="order in getOrderByType(type)"
                  :key="order.id"
                  style="padding: 50px 10px"
                >
                  <td>{{ order.created_at }}</td>
                  <td>{{ order.id }}</td>
                  <td colspan="2">
                    <p
                      class="
                        text-decoration-underline
                        font-weight-bold
                        ma-0
                        pa-0
                      "
                      style="cursor: pointer"
                      @click="viewOrder(order.id)"
                    >
                      {{ order.title }}
                    </p>
                    <p class="body-2 my-0">
                      ТН ВЭД ЕАЭС {{ order.code_tnved }}
                    </p>
                    <p class="caption ma-0">Создано {{ order.created_at }}</p>
                  </td>
                  <td>{{ order.amount }} {{ order.weight_title }}</td>
                  <td>{{ order.cost }}{{ order.currency_symbol }}</td>
                  <td>{{ order.status }}</td>
                  <td class="text-center">
                    <v-btn
                      class="white--text"
                      small
                      color="#78C3CC"
                      @click="offerTo(order.id)"
                    >
                      Подать заявку
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
            <v-pagination color="#78C3CC" v-model="page" :length="6">
            </v-pagination>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <offer />
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from "vuex";
import Offer from "../../admin/Orders/Offer.vue";
export default {
  components: { Offer },
  props: ["type", "order"],
  data: () => ({
    page: 1,
    limit: 10,
    url_api: process.env.VUE_APP_BACK_API,
  }),
  computed: {
    ...mapState("user", ["isAuth"]),
    ...mapGetters("order", ["getOrderByType"]),
  },
  methods: {
    ...mapActions("order", ["ALL_ORDER_LIST_HOME_PAGE", "GET_ORDER_BY_ID"]),
    ...mapMutations("deal", ["SET_IS_ADD_DEAL_DIALOG"]),
    viewOrder(id) {
      let latestorders =
        JSON.parse(localStorage.getItem("latest_orders")) || [];
      if (latestorders.length && latestorders.length > 10) {
        latestorders.pop();
      }
      if (latestorders.length) {
        let isViewed = latestorders.filter((el) => el == id);
        if (isViewed.length == 0) {
          latestorders.unshift(id);
        }
      } else {
        latestorders.unshift(id);
      }
      localStorage.setItem("latest_orders", JSON.stringify(latestorders));
      this.$router.push("/order/" + id);
    },
    offerTo(id) {
      this.GET_ORDER_BY_ID({ id, isAuth: this.isAuth });
      this.isAuth ? this.SET_IS_ADD_DEAL_DIALOG() : this.$router.push("/login");
    },
  },
  mounted() {
    this.ALL_ORDER_LIST_HOME_PAGE({ type: this.type });
  },
};
</script>