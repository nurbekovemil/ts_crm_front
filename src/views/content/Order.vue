<template>
  <v-container class="pa-0 fill-height">
    <order :order="order_view" />
    <latest-orders />
  </v-container>
</template>

<script>
import Order from "@/components/admin/Orders/Order.vue";

import { mapState, mapActions } from "vuex";
import LatestOrders from "../../components/content/Сatalog/LatestOrders.vue";
export default {
  components: {
    Order,
    LatestOrders,
  },
  computed: {
    ...mapState("user", ["isAuth"]),
    ...mapState("order", ["order_view"]),
  },
  methods: {
    ...mapActions("order", ["GET_ORDER_BY_ID"]),
  },
  mounted() {
    this.GET_ORDER_BY_ID({ id: this.$route.params.id, isAuth: this.isAuth });
  },
};
</script>

<style>
</style>