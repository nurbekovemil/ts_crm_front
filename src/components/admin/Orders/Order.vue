<template>
	<v-card class="mt-2 px-2" width="100%" :elevation="shadow">
		<v-card-title>{{ order.title }}</v-card-title>
		<template v-if="order.own">
			<v-card-subtitle class="blue--text"
				> Ваша • {{ order.order_type_title }}</v-card-subtitle
			>
		</template>
		<template v-else>
			<v-card-subtitle>{{ order.order_type_title }}</v-card-subtitle>
		</template>
		<v-row>
			<v-col cols="6" class="pl-7">
				<v-carousel
					cycle
					show-arrows-on-hover
					hide-delimiters
					class="carousel"
					height="300"
				>
					<v-carousel-item
						v-for="(item, idx) in order.images"
						:key="idx"
						:src="item"
						style="width:100%;box-sizing:border-box;"
					/>
				</v-carousel>
			</v-col>
			<v-col cols="6">
				<v-col>
					<div class="text-h5 font-weight-bold">
						{{ order.price }} {{ order.currency }}
					</div>
				</v-col>
				<v-col>
					<div class="text-caption">
						<span class="grey--text"
							>{{ $t(`admin.order.order_view.amount`) }}:</span
						>
						{{ order.amount }}
						<span>{{ order.weight }}</span>
					</div>
				</v-col>
				<v-col>
					<div class="text-caption">
						<span class="grey--text"
							>{{ $t(`admin.order.order_view.cost`) }}: </span
						>{{ order.cost }}
					</div>
				</v-col>
				<v-col>
					<div class="text-caption">
						<span class="grey--text"
							>{{ $t(`admin.order.order_view.delivery`) }}: </span
						>{{ order.delivery }}
					</div>
				</v-col>
				<v-col>
					<div class="text-caption">
						<span class="grey--text"
							>{{ $t(`admin.order.order_view.payment`) }}: </span
						>{{ order.payment }}
					</div>
				</v-col>
				<v-col>
					<tools />
				</v-col>
			</v-col>
		</v-row>
		<offer style="margin-top:30px;" />
	</v-card>
</template>

<script>
import Offer from "./Offer.vue";
import Tools from "./Tools.vue";

export default {
	components: { Tools, Offer },
	props: ["order", "cols", "shadow"],
};
</script>

<style scoped></style>
