<template>
	<div>
		<!-- if deal status is rejected or sent -->
		<template v-if="deal_view.status == 1 || deal_view.status == 3">
			<v-row>
				<v-col v-for="order in deal_orders" :key="order.id" cols="6">
					<order :order="order" cols="12" :shadow="1" />
				</v-col>
			</v-row>
			
		</template>
		<!-- if deal status is accepted -->
		<template v-else-if="deal_view.status == 2">
			<deal :deal="deal_view" :order="deal_orders[0]" />
		</template>

		<template>
			<v-row>
				<v-col>
					<v-card>
						<v-card-actions>
							<v-chip
								:color="deal_view.status_color && deal_view.status_color"
								text-color="white"
							>
								Статус: {{ deal_view.status_title }}
							</v-chip>
							<v-spacer />

							<template v-if="!deal_view.own">
								<v-btn
									v-if="
										deal_view.status == 2 || deal_view.status == 1
									"
									text
									color="orange"
									small
									@click="updateDealStatus(3)"
								>
									Отклонить
								</v-btn>

								<v-btn
									v-if="deal_view.status == 1"
									color="success"
									small
									@click="updateDealStatus(2)"
								>
									Принять
								</v-btn>
							</template>
							<template v-if="deal_view.own && deal_view.status == 3">
								<v-btn color="success" small @click="updateDealStatus(1)">
									Повторно отправить
								</v-btn>
							</template>
							<v-btn v-if="deal_view.status == 2" color="success" small>
								Печать
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</template>
	</div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Deal from "@/components/admin/Deals/Deal";
import Order from "../../components/admin/Orders/Order.vue";
export default {
	components: {
		Deal,
		Order,
	},
	computed: {
		...mapState("deal", ["deal_view", "deal_orders"]),
	},
	methods: {
		...mapActions("deal", ["GET_DEAL_BY_ID", "GET_DEAL_ORDERS", "UPDATE_DEAL_STATUS"]),
		updateDealStatus(status){
      this.UPDATE_DEAL_STATUS({status, deal_id: this.$route.params.id})
    },
	},
	async mounted() {
		await this.GET_DEAL_BY_ID(this.$route.params.id)
	},
};
</script>

<style></style>
