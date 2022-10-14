<template>
  <v-row>
    <v-col>
      <h2
        class="d-flex justify-space-between"
        @click="knowType()"
        style="color: #868d94"
      >
        {{ type == 1 ? "Заявки на продажу" : "Заявки на покупку" }}
        <!-- <router-link :to="`/orders/${type}`" class="view-all"
            >Посмотреть еще</router-link
          > -->
      </h2>
      <v-row v-if="getOrderByType(type).length > 0">
        <v-col
          class="my-3"
          cols="12"
          sm="4"
          md="3"
          v-for="order in getOrderByType(type)"
          :key="order.id"
        >
          <v-card @click="viewOrder(order.id)" class="rounded-lg" outlined>
            <v-card-title class="text-subtitle-2 font-weight-black"
              ><span
                style="
                  max-height: 22px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                "
                >{{ order.title }}</span
              >
            </v-card-title>

            <v-img
              :src="
                order.images[0] !== null
                  ? `${url_api}/${order.images[0].path}`
                  : `${url_api}/static/images/default.png`
              "
              height="220px"
            >
            </v-img>
            <v-card-actions>
              <div class="ml-2">
                {{ order.price }} {{ order.currency_symbol }}
              </div>
              <v-spacer></v-spacer>

              <v-btn color="#78C3CC" small text @click="viewOrder(order.id)">
                Посмотреть
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col>
          <h4>Заявки отсутствуют</h4>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  props: ["type"],
  data: () => ({
    url_api: process.env.VUE_APP_BACK_API,
  }),
  computed: {
    ...mapState("user", ["isAuth"]),
    ...mapGetters("order", ["getOrderByType"]),
  },
  methods: {
    ...mapActions("order", ["ALL_ORDER_LIST_HOME_PAGE"]),
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
  },
  mounted() {
    this.ALL_ORDER_LIST_HOME_PAGE({ type: this.type, limit: 7 });
  },
};
</script>

<style scoped>
.view-all {
  color: grey;
  text-decoration: none;
  font-size: 17px;
}
</style>
