<template>
		<v-card class="mt-2 px-2" :elevation="shadow">
			<v-card-title>{{order.title}}</v-card-title>
			<v-card-subtitle>{{order.order_type_title}}</v-card-subtitle>

					<v-carousel 
						cycle
						show-arrows-on-hover
						hide-delimiters
						class="carousel"
						height="300"
						>
							<v-carousel-item
								v-for="(item,idx) in order.images"
								:key="idx"
								:src="item"
								style="width:100%;box-sizing:border-box;"
							/>
					</v-carousel>
				<v-col cols="6">
					<v-row>
						<v-col cols="12">
							<div class="text-h5 font-weight-bold">
								{{order.price}} {{order.currency}}
							</div>
						</v-col>
						<v-row>
						<v-col>
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
						</v-col>



							<v-col>
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
						</v-col>


								<v-col>
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
						</v-col>



						

						
						</v-row>
					</v-row>
				</v-col>


			<div class="tools-container">
						<tools/>
			</div>

			
			<offer style="margin-top:30px;"/>
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

	mounted(){
		console.log(this.order,this.cols,this.shadow)
	}
};
</script>

<style scoped>
.carousel{
	display: flex;
	justify-content: center;
	width: 100%;
}
</style>
