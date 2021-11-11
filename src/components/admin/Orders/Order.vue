<template>
		<v-card class="mt-2 px-2" :elevation="shadow">
			<v-row>
				<v-col :cols="cols" class="d-flex align-center">
					<v-carousel 
						cycle
						show-arrows-on-hover
						hide-delimiters
						height="300"
						width="400"
						>
							<v-carousel-item
								v-for="(item,i) in orderView.images"
								:key="i"
								:src="item"
							/>
					</v-carousel>
				</v-col>
				<v-col :cols="cols">
					<v-row>
						<v-col cols="6" v-for="(value, name, i) in orderView" :key="i" class="py-0">
								<v-list-item two-line v-if="name != 'images'" dense>
									<v-list-item-content>
												<v-list-item-subtitle>
													{{ $t(`admin.order.order_view.${name}`)}}
												</v-list-item-subtitle>
												<v-list-item-title>
													{{value}}
												</v-list-item-title>
											</v-list-item-content>
								</v-list-item>
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</v-card>
</template>

<script>

export default {
	props: ["order", "cols", "shadow"],
	computed: {
		orderView() {
			const noshow = ['id', 'status', 'order_type', 'own', 'updated_at', 'user_id','category_id', 'delivery_id','payment_id','weight_id'];
			const filtered = Object.keys(this.order).filter(key => !noshow.includes(key)).reduce((obj, key) => (obj[key] = this.order[key], obj),{});
			return filtered
		}
	},
};
</script>
