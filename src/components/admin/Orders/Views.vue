<template>
	<div>
		<v-card class="mt-2">
			<v-row>
				<v-col cols="3" v-for="(value, name, i) in order_view" :key="i">
					<v-list-item two-line >
						<v-list-item-content>
							<v-list-item-title>{{ name | checkName }}</v-list-item-title>
							<v-list-item-subtitle>
								{{ value }}
							</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
				</v-col>
			</v-row>
			<tools />
		</v-card>
		<offer />
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Offer from "./Offer.vue";
import Tools from "./Tools.vue";

export default {
	components: { Tools, Offer },
	props: ["order_id"],
	computed: {
		...mapState("order", ["order_view"]),
		...mapState("user", ["isAuth"]),
	},
	filters: {
		checkName: (name) => (name != 'id', name)
	},
	methods: {
		...mapActions("order", ["GET_ORDER_BY_ID"]),
	},
	mounted() {
		this.GET_ORDER_BY_ID({ id: this.order_id, isAuth: this.isAuth });
	},
};
</script>

<style></style>
