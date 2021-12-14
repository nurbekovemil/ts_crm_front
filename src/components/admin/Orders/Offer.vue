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
									<v-tabs-slider color="primary" />
									<v-tab>
										Выбрать
									</v-tab>
									<v-tab>
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
										/>
									</v-tab-item>
									<!-- offer order -->
									<v-tab-item class="pt-5">
										<v-row>
											<v-col
												v-for="(field, i) in templates.orderAdd"
												:cols="field.type == 'file'?'12':'6'"
												:key="i"
											>
												<template
													v-if="
														field.type === 'select' &&
															field.field != 'type' &&
															field.field != 'category'
													"
												>
													<v-select
														:items="options[field.item]"
														v-model="field.value"
														item-text="title"
														item-value="id"
														:label="field.title"
														dense
														outlined
														@click="GET_OPTIONS(field.item)"
													/>
												</template>

												<template
													v-if="
														field.type === 'input' || field.type === 'textarea'
													"
												>
													<v-text-field
														v-model="field.value"
														:label="field.title"
														outlined
														dense
													>
													</v-text-field>
												</template>
												<template v-if="field.type === 'file'">
													<v-col>
														<v-row class="mb-3" v-if="field.value">
															<v-col
																v-for="(file, i) in field.value"
																:key="i"
																cols="4"
															>
																<v-card>
																	<v-img
																		contain
																		:src="fileurl(file)"
																		height="150"
																	/>
																</v-card>
															</v-col>
														</v-row>
														<v-file-input
															v-model="field.value"
															label="Загрузить фотографии"
															:rules="rules"
															multiple
															counter="3"
															prepend-icon="mdi-image-plus"
															outlined
															dense
														>
															<template v-slot:selection="{ text }">
																<v-chip small label color="primary">
																	{{ text }}
																</v-chip>
															</template>
														</v-file-input>
													</v-col>
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
					<v-btn color="orange darken-1" text small @click="closeIsAddDealDialog">
						Отмена
					</v-btn>
					<v-btn color="green darken-1" elevation="0" small dark @click="createDeal">
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
	}),
	computed: {
		...mapState("order", ["order_view", "templates", "options"]),
		...mapState("deal", ["isAddDealDialog"]),
		...mapGetters("order", ["getOrderByType"]),
		handleOrderType() {
			return this.order_view.order_type == 1 ? 2 : 1;
		},
		rules(v) {
			const rules = [];
			if (this.max) {
				const rule = (v) =>
					(v || "").length <= this.max || `Выберите максимум ${this.max} файла`;
				rules.push(rule);
			}
			return rules;
		},
	},
	methods: {
		...mapActions("order", ["MY_ORDER_LIST", "GET_OPTIONS"]),
		...mapActions("deal", ["CREATE_DEAL"]),
		...mapMutations("deal", ["SET_IS_ADD_DEAL_DIALOG"]),
		closeIsAddDealDialog() {
			this.SET_IS_ADD_DEAL_DIALOG();
		},
		fileurl: (furl) => URL.createObjectURL(furl),
		loadMyOrders() {
			this.MY_ORDER_LIST(this.handleOrderType);
		},
		createDeal() {
			const getFormData = this.templates.orderAdd.reduce(
				(formData, { field, value }) => {
					if(field == "images"){
						value.map((img) => formData.append(field, img))
          }else if (field === "type"){
						formData.append(field, this.handleOrderType);
          }else if (field === "category"){
						formData.append(field, this.order_view.category_id);
          }else {
						formData.append(field, value);
          }
					return formData
        },
				new FormData()
			);
			// let offer_order = this.templates.orderAdd.reduce(
			// 	(prev, { field, value }) => {
			// 		if (field === "type") {
			// 			prev[field] = this.handleOrderType;
			// 		} else if (field === "category") {
			// 			prev[field] = this.order_view.category_id;
			// 		} else {
			// 			prev[field] = value;
			// 		}
			// 		return prev;
			// 	},
			// 	{}
			// );
			let offer = {
				user_to: this.order_view.user_id,
				order_from: this.order_from,
				order_to: this.order_view.id,
			};
			// console.log({offer_type: this.selected_offer, offer_order,offer})
			this.CREATE_DEAL({ offer_type: this.selected_offer, getFormData, offer });
		},
	},
};
</script>
