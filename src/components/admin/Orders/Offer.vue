<template>
  <v-row justify="center">
    <v-dialog v-model="isAddDealDialog" persistent max-width="800px">
      <v-card>
        <v-card-title> Купить </v-card-title>

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
                <v-tabs v-model="selected_offer" left>
                  <v-tabs-slider color="primary" />
                  <!-- <v-tab>
										Выбрать
									</v-tab> -->
                  <v-tab> Купить </v-tab>
                </v-tabs>
                <v-tabs-items v-model="selected_offer">
                  <!-- select order -->
                  <!-- <v-tab-item class="pt-5">
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
                  </v-tab-item> -->
                  <!-- offer order -->
                  <v-tab-item class="pt-5">
                    <v-row>
                      <v-col
                        v-for="(field, i) in orderTemplate"
                        :cols="
                          field.type == 'file' || field.type == 'textarea'
                            ? '12'
                            : '4'
                        "
                        :key="i"
                      >
                        <template v-if="field.type === 'select'">
                          <v-select
                            :disabled="
                              field.field == 'type' || field.field == 'category'
                            "
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
                            @change="calcField(field)"
                          >
                          </v-text-field>
                        </template>
                        <!-- <template v-if="field.type === 'file'">
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
                        </template> -->
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
          <v-btn
            color="orange darken-1"
            text
            small
            @click="closeIsAddDealDialog"
          >
            Отмена
          </v-btn>
          <v-btn
            color="green darken-1"
            elevation="0"
            small
            dark
            @click="createDeal"
          >
            Отправить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
import Vue from "vue";

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
    orderTemplate() {
      return this.templates.orderAdd.map((t) => {
        let data =
          t.field === "type"
            ? {
                title: this.order_view.order_type_title,
                id: this.order_view.order_type,
              }
            : {
                title: this.order_view[t.field],
                id: this.order_view[t.field + "_id"],
              };
        if (t.type === "select") {
          this.SET_OPTIONS({
            option: t.item,
            data: [data],
          });
          return {
            ...t,
            value:
              t.field === "type"
                ? this.order_view.order_type
                : this.order_view[t.field + "_id"],
          };
        } else {
          return { ...t, value: this.order_view[t.field] };
        }
      });
    },
  },
  methods: {
    ...mapActions("order", ["MY_ORDER_LIST", "GET_OPTIONS"]),
    ...mapActions("deal", ["CREATE_DEAL"]),
    ...mapMutations("deal", ["SET_IS_ADD_DEAL_DIALOG"]),
    ...mapMutations("order", ["SET_OPTIONS"]),
    closeIsAddDealDialog() {
      this.SET_IS_ADD_DEAL_DIALOG();
    },
    fileurl: (furl) => URL.createObjectURL(furl),
    loadMyOrders() {
      this.MY_ORDER_LIST(this.handleOrderType);
    },
    calcField(field) {
      console.log(field);
      let calcfields = this.orderTemplate.filter(
        (f) =>
          f.field == "nds" ||
          f.field == "price" ||
          f.field == "amount" ||
          f.field == "cost"
      );
      console.log(calcfields);
      if (
        field.field == "nds" &&
        calcfields[1].value > 0 &&
        calcfields[2].value > 0
      ) {
        let nds =
          field.value > 0
            ? (calcfields[1].value * calcfields[2].value * field.value) / 100
            : 0;
        calcfields[3].value = calcfields[1].value * calcfields[2].value + nds;
      }
      if (field.field == "price" && calcfields[2].value > 0) {
        let nds =
          calcfields[0].value > 0
            ? (calcfields[2].value * field.value * calcfields[0].value) / 100
            : 0;
        calcfields[3].value = field.value * calcfields[2].value + nds;
        console.log(nds);
      }
      if (field.field == "amount") {
        let nds =
          calcfields[0].value > 0
            ? (calcfields[1].value * field.value * calcfields[0].value) / 100
            : 0;
        calcfields[3].value = field.value * calcfields[1].value + nds;
      }
      if (field.field == "cost") {
        let nds =
          calcfields[0].value > 0
            ? (calcfields[1].value *
                calcfields[2].value *
                calcfields[0].value) /
              100
            : 0;
        calcfields[1].value = Math.floor(
          (field.value - nds) / calcfields[2].value
        );
      }
      this.$forceUpdate();
    },
    createDeal() {
      const getFormData = this.orderTemplate.reduce(
        (formData, { field, value }) => {
          if (field == "images") {
            value.map((img) => formData.append(field, img));
          } else if (field === "type") {
            formData.append(field, this.handleOrderType);
          } else if (field === "category") {
            formData.append(field, this.order_view.category_id);
          } else {
            formData.append(field, value);
          }
          return formData;
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
      console.log(this.selected_offer);
      this.CREATE_DEAL({ offer_type: this.selected_offer, getFormData, offer });
    },
  },
};
</script>
