<template>
  <div>
      <order :order="order_view" :shadow="0" cols="6" />
  </div>
</template>

<script>
import Order from '@/components/admin/Orders/Order.vue'

import {mapState, mapActions} from 'vuex'
export default {
	components: { 
    Order
  }, 
 computed: {
    ...mapState("order", ["order_view"]),
		...mapState("user", ["isAuth"]),
  },
  methods: {
		...mapActions("order", ["GET_ORDER_BY_ID"]),
	},
	mounted() {
		this.GET_ORDER_BY_ID({ id: this.$route.params.id, isAuth: this.isAuth });
	},
}
</script>

<style>

</style>