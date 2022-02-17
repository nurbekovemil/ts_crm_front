<template>
	<div>
		<template>
			<v-row justify="center">
				<v-dialog v-model="isAddDialog" persistent  max-width="800px">
					<v-card>
						<v-card-title>
							<span class="text-h5">Добавить заявку</span>
						</v-card-title>
						<v-card-text>
							
							<v-container>
								<v-row class="pa-3" cols="12">
									<!-- fields -->
									<v-col
										v-for="(field, i) in templates.orderAdd"
										:key="i"
										cols="12"
										sm="6"
										:md="
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
												:items="options[field.item]"
												v-model="field.value"
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
											<v-col>
												<v-row class="mb-3" v-if="field.value">
													<v-col
														v-for="(file, i) in field.value"
														:key="i"
														cols="4"
														class="py-0"
													>
													<v-hover v-slot="{ hover }">
													<v-card>
														<v-img :src="fileurl(file)" height="150">
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
														<!-- <v-card>
															<v-img
																
																:src="fileurl(file)"
																height="150"
															/>
														</v-card> -->
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
												<!-- <v-file-input
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
												</v-file-input> -->
											</v-col>
										</template>
									</v-col>
								</v-row>
							</v-container>
						</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn color="red" text @click="closeIsAddDialog">
								Отменить
							</v-btn>
							<v-btn color="success" @click="saveNewOrder">
								Добавить
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
			</v-row>
		</template>
	</div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import list from '../Catalog/Tnved/list.vue';

export default {
	components: { list },
	computed: {
		...mapState("order", ["isAddDialog", "options", "templates"]),
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
		...mapMutations("order", ["SET_IS_ADD_DIALOG"]),
		...mapActions("order", ["CREATE_ORDER", "GET_OPTIONS"]),
		closeIsAddDialog() {
			this.SET_IS_ADD_DIALOG();
		},
		fileurl: (furl) => {
			return URL.createObjectURL(furl)
			},
		saveNewOrder() {
			// formData.append('images', 'file')
			// let order = this.templates.orderAdd.reduce(
			// 	(prev, { field, value }) => ((prev[field] = value), prev),
			// 	{}
			// );
			const getFormData = this.templates.orderAdd.reduce(
				(formData, { field, value }) => (
					field == "images"
						? value.map((img) => formData.append(field, img))
						: formData.append(field, value),
					formData
				),
				new FormData()
			);
			this.CREATE_ORDER(getFormData);
		},
	}
};
</script>
<style></style>
