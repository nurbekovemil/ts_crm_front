<template>
	<div class="mt-5">
		<!-- private template for admin -->
		<template v-if="user.role === 'ADMIN'">
			<template v-if="order_view.status === 1">
				<v-btn
					text
					small
					color="orange darken-1"
					@click="confirmOrReject(order_view.id, 4)"
				>
					Отклонить
				</v-btn>
				<v-btn
					color="green darken-1"
					dark
			elevation="0"
			small
					
					@click="confirmOrReject(order_view.id, 2)"
				>
					Принять
				</v-btn>
			</template>
		</template>

		<template v-if="user.role === 'USER'">
			<template v-if="order_view.status === 4">
				<v-btn
					color="orange darken-1"
					dark
			elevation="0"
				small
					@click="confirmOrReject(order_view.id, 1)"
				>
					Повторно отправить
				</v-btn>
			</template>
			<!-- here more buttons  -->
		</template>

		<!-- private template -->
		<v-btn
			dark
			class="ma-0"
			elevation="0"
			small
			v-if="user.role != 'ADMIN' && !order_view.own && order_view.status == 2"
			color="green darken-1"
			@click="openIsAddOfferDialog"
			>Предложить</v-btn>
		<!-- public template -->
	</div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";

export default {
	computed: {
		...mapState("user", ["user", "isAuth"]),
		...mapState("order", ["order_view"]),
	},
	methods: {
		...mapMutations("deal", ["SET_IS_ADD_DEAL_DIALOG"]),
		...mapActions("order", ["UPDATE_ORDER_STATUS"]),
		openIsAddOfferDialog() {
			this.isAuth ? this.SET_IS_ADD_DEAL_DIALOG() : this.$router.push("/login");
		},
		confirmOrReject(order_id, status) {
			this.UPDATE_ORDER_STATUS({ order_id, status });
		},
	},
};
</script>

<style></style>
