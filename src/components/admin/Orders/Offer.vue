<template>
	<v-row justify="center">
		<v-dialog v-model="isAddDealDialog" persistent max-width="700px">
			<v-card>
				<v-card-title>
					Предложить
				</v-card-title>
                
				<v-card-text>
					<v-container>
						<v-row>
							<v-col cols="12" sm="6" md="12">
								<span class="text-h5">
									{{ order_view.title }}
								</span>
								<span class="subtitle-1">
									• {{ order_view.order_type_title }}
								</span>
							</v-col>
						</v-row>
                        <v-row>
                            <v-col>
                                <v-tabs v-model="selected_offer" fixed-tabs>
                                    <v-tabs-slider color="primary"/>
                                    <v-tab >
                                        Выбрать
                                    </v-tab>
                                    <v-tab >
                                        Предложить
                                    </v-tab>
                                </v-tabs>
                                <v-tabs-items v-model="selected_offer">
                                    <!-- select order -->
                                    <v-tab-item class="pt-5">
                                        <v-select
                                            :items="getOrderByType(handleOrderType)"
                                            v-model="order_from"
                                            item-text="title"
                                            item-value="id"
                                            label="Выберите вашу заявку"
                                            dense
                                            outlined
                                            @click="loadMyOrders"
                                        ></v-select>
                                    </v-tab-item>
                                    <!-- offer order -->
                                    <v-tab-item class="pt-5">
                                        <v-row>
                                            <v-col cols="6" v-for="(field, i) in templates.orderAdd" :key="i">
                                                <template v-if="field.type === 'select' && field.field === 'category' || field.field ==='type' ">
                                                    <v-text-field
                                                        :label="field.title"
                                                        outlined
                                                        :value="order_view[field.field]"
                                                        disabled
                                                        dense
                                                    >
                                                    </v-text-field>
                                                </template>
                                                <template v-else-if="field.type === 'select'">
                                                    <v-select
                                                        :items="options[field.item]"
                                                        v-model="field.value"
                                                        item-text="title"
                                                        item-value="id"
                                                        :label="field.title"
                                                        dense
                                                        outlined
                                                        @click="GET_OPTIONS(field.item)"
                                                    >
                                                        <option :value="null">Please select one</option>
                                                    </v-select>
                                                </template>
                                                
                                                <template v-if="field.type === 'input' || field.type === 'textarea'">
                                                    <v-text-field
                                                        :label="field.title"
                                                        outlined
                                                        dense
                                                        :value="order_view[field.field]"
                                                    >
                                                    </v-text-field>
                                                </template>
                                            </v-col>
                                            
                                        </v-row>
                                    </v-tab-item>
                                </v-tabs-items>
                            </v-col>
                        </v-row>
					</v-container>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="blue darken-1" text @click="closeIsAddDealDialog">
						Отмена
					</v-btn>
					<v-btn color="blue darken-1" text @click="createDeal">
						Отправить
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-row>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
	data: () => ({
		order_from: null,
        selected_offer: null,
        template: [
            {field: 'title', type: 'input', value: null},
            {field: 'category', type: 'select', disabled: true, value: null},
            {field: 'order_type', type: 'select', disabled: true, value: null},
            {field: 'description', type: 'textarea', value: null},
            {field: 'price', type: 'input', value: null},
            {field: 'amount', type: 'input', value: null},
            {field: 'cost', type: 'input', value: null},
            {field: 'delivery', type: 'select', value: null},
            {field: 'payment', type: 'select', value: null},
            {field: 'weight', type: 'select', value: null},
        ]

	}),
	computed: {
		...mapState("order", ["order_view","templates","options"]),
		...mapState("deal", ["isAddDealDialog"]),
		...mapGetters("order", ["getOrderByType"]),
		handleOrderType() {
			return this.order_view.order_type == 1 ? 2 : 1;
		},

	},
	methods: {
		...mapActions("order", ["MY_ORDER_LIST","GET_OPTIONS"]),
		...mapActions("deal", ["CREATE_DEAL"]),
		...mapMutations("deal", ["SET_IS_ADD_DEAL_DIALOG"]),
		closeIsAddDealDialog() {
			this.SET_IS_ADD_DEAL_DIALOG();
		},
		loadMyOrders() {
			this.MY_ORDER_LIST(this.handleOrderType);
		},
		createDeal() {
			const offer = {
				user_to: this.order_view.user_id,
				order_from: this.order_from,
				order_to: this.order_view.id,
			};
			this.CREATE_DEAL(offer);
		},

	},
};
</script>
