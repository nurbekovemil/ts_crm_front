<template>
		<v-card class="mt-2 px-2" :elevation="shadow">
			<v-card-title>{{order.title}}</v-card-title>
			<v-card-subtitle>{{order.order_type_title}}</v-card-subtitle>
			<v-row>

				<v-col :cols="cols" class="d-flex align-center">
					<v-carousel 
						cycle
						show-arrows-on-hover
						hide-delimiters
						width="400"
						>
							<v-carousel-item
								v-for="(item,i) in order.images"
								:key="i"
								:src="item"
							/>
					</v-carousel>
				</v-col>
				
				<v-col cols="6">
					<v-row>
						<v-col cols="12">
							<div class="text-h3 font-weight-bold">
								{{order.price}} {{order.currency}}
							</div>
						</v-col>
						<v-col cols="12">
							<div class="text-caption">
								<span class="grey--text">{{$t(`admin.order.order_view.amount`)}}:</span>
									{{order.amount}}
								<span>{{order.weight}}</span>
							</div>
						</v-col>
						<v-col cols="12">
							<div class="text-caption">
								<span class="grey--text">{{$t(`admin.order.order_view.cost`)}}: </span>{{order.cost}}
							</div>
						</v-col>
						<v-col cols="12">
							<div class="text-caption">
								<span class="grey--text">{{$t(`admin.order.order_view.delivery`)}}: </span>{{order.delivery}}
							</div>
						</v-col>
						<v-col cols="12">
							<div class="text-caption">
								<span class="grey--text">{{$t(`admin.order.order_view.payment`)}}: </span>{{order.payment}}
							</div>
						</v-col>
						<v-col cols="12">
							<tools/>
						</v-col>
					</v-row>
					<!-- <v-row>
						<v-col cols="6" v-for="(value, name, i) in orderView" :key="i" class="py-0">
								<v-list-item two-line v-if="name != 'images' && name != 'title'" dense>
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
					</v-row> -->
				</v-col>
			
			</v-row>
			<offer/>
		</v-card>
</template>

<script>
import Offer from './Offer.vue';
import Tools from './Tools.vue';

export default {
	components: { Tools, Offer },
	props: ["order", "cols", "shadow"],
	// computed: {
	// 	orderView() {
	// 		const noshow = ['id', 'status', 'order_type', 'own', 'updated_at', 'user_id','category_id', 'delivery_id','payment_id','weight_id'];
	// 		const filtered = Object.keys(this.order).filter(key => !noshow.includes(key)).reduce((obj, key) => (obj[key] = this.order[key], obj),{});
	// 		return filtered
	// 	}
	// },
};
</script>
