<template>
  <div class="mt-3" v-if="latest_orders.length > 0">
    <v-sheet elevation="0">
      <div class="my-2">Недвно посмотрели</div>
      <v-slide-group>
        <v-slide-item v-for="order in latest_orders" :key="order.id">
          <v-card
            router
            :to="`/order/${order.id}`"
            width="250"
            class="rounded-lg ma-2"
          >
            <v-img
              :src="order && `${url_api}/${order.images[0].path}`"
              class="aaa white--text align-end fill-height bottom-gradient"
              gradient="to bottom, rgba(0,0,0,0) , rgba(0,0,0,0) , rgba(0,0,0,0),rgba(0,0,0,0.75)"
              height="280px"
            >
              <v-card-title> {{ order.title }} </v-card-title>
              <v-card-subtitle class="white--text">
                {{ order.price }} сом
              </v-card-subtitle>
            </v-img>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    url_api: process.env.VUE_APP_BACK_API,
  }),
  computed: {
    ...mapState("catalog", ["latest_orders"]),
  },
  methods: {
    ...mapActions("catalog", ["GET_LATESTORDERS"]),
    latestOrders() {
      let latestorders =
        JSON.parse(localStorage.getItem("latest_orders")) || [];
      if (latestorders.length > 0) {
        this.GET_LATESTORDERS({ order_ids: latestorders });
      }
    },
  },
  mounted() {
    this.latestOrders();
  },
};
</script>

<style>
</style>