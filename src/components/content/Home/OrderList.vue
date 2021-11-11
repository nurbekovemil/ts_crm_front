<template>
	<v-row>
		<v-col>
			<h3 class="py-3">
				{{ type == 1 ? "Заявки на продажу" : "Заявки на покупку" }}
			</h3>
			<v-sheet class="mx-auto" elevation="0" max-width="100%">
				<v-slide-group class="pa-4" show-arrows center-active>
					<v-slide-item
						v-for="(order) in getOrderByType(type)"
						:key="order.id"
					>
						<v-card class="ma-2" width="300">
							<v-img
								:src="order.images"
								gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
								dark
								height="200"
								contain
							>
								<v-card-title>
									{{ order.title }}
								</v-card-title>
								<v-card-text class="d-flex flex-column">
									<span>Цена:{{ order.price }} </span>
                  <span>Количество:{{
										order.amount
									}}</span>
									<span>Стоимость:{{ order.cost }}</span>
								</v-card-text>

								<v-card-actions>
									<v-btn 
									text 
									small 
									outlined 
									rounded
									@click="viewOrder(order.id)"
									>
										посмотреть
									</v-btn>
									<v-spacer />
									<span class="caption white--text">{{
										order.created_at
									}}</span>
								</v-card-actions>
							</v-img>
						</v-card>
					</v-slide-item>
				</v-slide-group>
			</v-sheet>
		</v-col>
	</v-row>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
	props: ["type"],
	data: () => ({
		model: null,
	}),
	computed: {
    ...mapState('user', ['isAuth']),
		...mapGetters("order", ["getOrderByType"]),
	},
	methods: {
		...mapActions("order", ["ALL_ORDER_LIST_HOME_PAGE"]),
		viewOrder(id){
			this.$router.push('/order/'+id)
		}
	},
	mounted() {
		this.ALL_ORDER_LIST_HOME_PAGE(this.type);
	},
};
</script>

<style></style>
