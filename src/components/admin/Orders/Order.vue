<template>
		<v-card class="mt-2" :elevation="shadow">
			<v-row>
				<v-col :cols="cols" v-for="(value, name, i) in orderView" :key="i">
					<v-list-item two-line >
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
		</v-card>
</template>

<script>

export default {
	props: ["order", "cols", "shadow"],
	computed: {
		orderView() {
			const noshow = ['id', 'status', 'order_type', 'own', 'updated_at', 'user_id'];
			const filtered = Object.keys(this.order).filter(key => !noshow.includes(key)).reduce((obj, key) => (obj[key] = this.order[key], obj),{});
			return filtered
		}
	},
};
</script>
