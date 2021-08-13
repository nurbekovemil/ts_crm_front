<template>
  <div>
    <order-to-buy />
    <order-to-sell />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import OrderToBuy from "../../components/admin/Dashboard/OrderToBuy.vue";
import OrderToSell from "../../components/admin/Dashboard/OrderToSell.vue";
export default {
  data: () => ({}),
  components: {
    OrderToBuy,
    OrderToSell,
  },
  computed: {},
  methods: {},
};
</script>
<style lang="">
</style>