<template>
  <v-container class="fill-height">
    <v-row>
      <v-col class="my-2">
        <div
          class="text-body-1 text-lg-h5 my-4 d-flex justify-space-between"
          @click="knowType()"
        >
          {{ type == 1 ? "Заявки на продажу" : "Заявки на покупку" }}
          <!-- <router-link :to="`/orders/${type}`" class="view-all"
            >Посмотреть еще</router-link
          > -->
        </div>
        <v-row>
          <v-col
            class="my-3"
            cols="6"
            sm="4"
            md="3"
            v-for="order in getOrderByType(type)"
            :key="order.id"
          >
            <v-card
              @click="viewOrder(order.id)"
              width="300"
              class="rounded-lg"
              outlined
            >
              <v-card-subtitle> {{ order.title }} </v-card-subtitle>

              <v-img
                :src="
                  order.images[0] !== null
                    ? `${url_api}/${order.images[0].path}`
                    : `${url_api}/static/images/default.png`
                "
                height="280px"
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
      </v-col>
    </v-row>
  </v-container>
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
