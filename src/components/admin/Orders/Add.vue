<template>
  <div>
    <template>
      <v-row justify="center">
        <v-dialog v-model="isAddDialog" persistent max-width="800px">
          <v-card>
            <v-form ref="order" v-model="valid" lazy-validation>
              <v-card-title>
                <span class="text-h5">Добавить заявку</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row cols="12" no-gutters>
                    <!-- fields -->
                    <v-col
                      v-for="(field, i) in templates.orderAdd"
                      :key="i"
                      cols="12"
                      class="px-2"
                      sm="6"
                      :md="
                        field.type === 'textarea' || field.type === 'file'
                          ? '12'
                          : '4'
                      "
                    >
                      <template v-if="field.type === 'input'">
                        <v-text-field
                          v-model.number="field.value"
                          dense
                          :label="field.title"
                          outlined
                          :rules="
                            field.valid.required && !field.valid.type
                              ? [rules.isEmpty]
                              : field.valid.type == 'number' && [rules.isNumber]
                          "
                          @change="
                            (field.field == 'cost' && calcCost(field)) ||
                              (field.field == 'price' && calcPrice(field)) ||
                              (field.field == 'amount' && calcAmount(field))
                          "
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
                          :rules="[rules.isSelecet]"
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
                            <v-col>
                              <div>
                                <v-file-input
                                  v-model="field.value"
                                  label="Загрузить изображении"
                                  :rules="field && [rules.isMaxFile]"
                                  multiple
                                  prepend-icon="mdi-image-plus"
                                >
                                </v-file-input>
                              </div>
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
                <v-btn color="success" @click="saveNewOrder"> Добавить </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import list from "../Catalog/Tnved/list.vue";

export default {
  components: { list },
  data: () => ({
    valid: true,
    rules: {
      isNumber: (v) =>
        (!isNaN(parseFloat(v)) && isFinite(v)) || "Введите число",
      isEmpty: (v) => !!v || "Поле не может быть пустым.",
      isSelecet: (v) => !!v || "Выберите значение",
      isMaxFile: (v) => v.length <= 3 || `Выберите максимум 3 файла`,
    },
  }),
  computed: {
    ...mapState("order", ["isAddDialog", "options", "templates"]),
  },
  methods: {
    ...mapMutations("order", ["SET_IS_ADD_DIALOG"]),
    ...mapActions("order", ["CREATE_ORDER", "GET_OPTIONS"]),
    calcPrice(v) {
      let calcfields = this.templates.orderAdd.filter(
        (f) => f.field == "cost" || f.field == "amount"
      );
      calcfields[1].value = Math.floor(v.value * calcfields[0].value);
    },
    calcAmount(v) {
      let calcfields = this.templates.orderAdd.filter(
        (f) => f.field == "cost" || f.field == "price"
      );
      if (calcfields[0].value > 0 || calcfields[0].value != "") {
        calcfields[1].value = Math.floor(v.value * calcfields[0].value);
      }
    },
    calcCost(v) {
      let calcfields = this.templates.orderAdd.filter(
        (f) => f.field == "price" || f.field == "amount"
      );
      if (calcfields[1].value != "" || calcfields[1].value > 0) {
        calcfields[0].value = Math.floor(v.value / calcfields[1].value);
      }
    },
    closeIsAddDialog() {
      this.SET_IS_ADD_DIALOG();
    },
    fileurl: (furl) => {
      return URL.createObjectURL(furl);
    },
    saveNewOrder() {
      // formData.append('images', 'file')
      // let order = this.templates.orderAdd.reduce(
      // 	(prev, { field, value }) => ((prev[field] = value), prev),
      // 	{}
      // );
      let formData = new FormData();
      this.templates.orderAdd.map(({ field, value, valid }) => {
        if (
          (valid.required && value == "") ||
          (valid.required && value == null)
        ) {
          this.valid = false;
          return this.$refs.order.validate();
        } else if (field == "images") {
          value.map((img) => formData.append(field, img));
        } else {
          formData.append(field, value);
        }
      });
      // const getFormData = this.templates.orderAdd.reduce(
      //   (formData, { field, value }) => (
      //     field == "images"
      //       ? value.map((img) => formData.append(field, img))
      //       : formData.append(field, value),
      //     formData
      //   ),
      //   new FormData()
      // );
      this.valid && this.CREATE_ORDER(formData);
    },
  },
};
</script>
<style></style>
