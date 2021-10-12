<template>
  <div>
      <views :order="order_view" cols="3" shadow="1"/>
			<tools/>
		  <offer />
  </div>
</template>

<script>
import Views from '@/components/admin/Orders/Views.vue';
import Offer from "@/components/admin/Orders/Offer.vue";
import Tools from "@/components/admin/Orders/Tools.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    Views,
    Offer,
    Tools
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
};
</script>