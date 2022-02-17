<template>
	<v-row justify="center">
		<v-dialog v-model="isEditDialog" persistent max-width="60%">
			<v-card>
				<v-card-title>
					<span class="text-h5">Изменить</span>
				</v-card-title>
				<v-card-text>
					<v-container>
						<v-row>
							<v-col
								v-for="(field, i) in orderTemplate"
								:key="i"
								:sm="
									field.type === 'textarea' || field.type === 'file'
										? '12'
										: '4'
								"
							>
								<template v-if="field.type === 'input'">
									<v-text-field
										v-model="field.value"
										dense
										:label="field.title"
										outlined
									></v-text-field>
								</template>
								<template v-if="field.type === 'textarea'">
									<v-textarea
										v-model="field.value"
										auto-grow
										outlined
										rows="1"
										:label="field.title"
									></v-textarea>
								</template>
								
								<template v-if="field.type === 'select'">
									
									<v-select
										v-model="field.value"
										:items="options[field.item]"
										item-text="title"
										item-value="id"
										:label="field.title"
										dense
										outlined
										@click="GET_OPTIONS(field.item)"
									>
									</v-select>
								</template>
								<template v-if="field.type === 'file'">
									{{images}} {{field.value}}
									<v-col>
										<v-row class="mb-3" v-if="field.value">
											<v-col v-for="(img, i) in field.value" :key="i" cols="4" class="py-0">
												<v-hover v-slot="{ hover }">
													<v-card>
														<v-img :src="img" height="150">
															<v-overlay
																absolute="absolute"
																:value="hover"
															>
																<v-btn
																	icon
																>
																	<v-icon
																	>
																	mdi-delete
																	</v-icon>
																</v-btn>
															</v-overlay>
														</v-img>
													</v-card>
												</v-hover>
											</v-col>
											<v-col cols="4" class="d-flex justify-center align-center">
												
												<div>
													<v-file-input
														v-model="field.value"
														:rules="rules"
														multiple
														prepend-icon="mdi-image-plus"
														hide-input
													>
													</v-file-input>
												</div >
												
											</v-col>
										</v-row>
									</v-col>
								</template>
							</v-col>
							

						</v-row>
					</v-container>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="blue darken-1" text @click="closeIsEditDialog">
						Close
					</v-btn>
					<v-btn color="blue darken-1" text>
						Save
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-row>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
	data: () => ({
		images: []
	}),
	computed: {
		...mapState("order", [
			"isEditDialog",
			"order_view",
			"options",
			"templates",
		]),
		rules(v) {
			const rules = [];
			if (this.max) {
				const rule = (v) =>
					(v || "").length <= this.max || `Выберите максимум ${this.max} файла`;
				rules.push(rule);
			}
			return rules;
		},
		orderTemplate() {
			return this.templates.orderAdd.map((t) => {
				let data = t.field === 'type' 
							? {title: this.order_view.order_type_title, id: this.order_view.order_type}
							: {title: this.order_view[t.field], id:this.order_view[t.field + "_id"] }
				if (t.type === "select" && this.isEditDialog) {
					this.SET_OPTIONS({
						option: t.item, 
						data: [data]
					})
					return {
						...t,
						value: t.field === 'type' ? this.order_view.order_type:this.order_view[t.field + "_id"]
					};
				}
				else {
					return { ...t, value: this.order_view[t.field] };
				}
			});
		},
		// upload (){
		// 	return [...this.images, this.orderTemplate.map(t => t.field == 'images')]
		// },
	},
	methods: {
		...mapActions("order", ["GET_OPTIONS"]),
		...mapMutations("order", ["SET_IS_EDIT_DIALOG","SET_OPTIONS"]),
		closeIsEditDialog() {
			this.SET_IS_EDIT_DIALOG();
		},
		fileurl(furl) {
			return URL.createObjectURL(furl);
		},
	},
};
</script>

<style></style>
