<template>
  <div>
    <template>
      <v-row justify="center">
        <v-dialog v-model="isAddDialog" persistent max-width="60%">
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
                        field.type === 'textarea' ||
                        field.type === 'file' ||
                        field.type === 'checkbox'
                          ? '12'
                          : field.type === 'auction_date' ||
                            field.type === 'auction_time'
                          ? '6'
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
                              : field.valid.type == 'number'
                              ? [rules.isNumber, rules.isEmpty]
                              : []
                          "
                          @change="calcField(field)"
                        ></v-text-field>
                      </template>
                      <template v-if="field.type === 'autocomplate'">
                        <v-autocomplete
                          v-model="field.value"
                          :items="options.order_tnveds"
                          :loading="isLoadingTnveds"
                          :search-input.sync="search"
                          item-text="title"
                          outlined
                          hide-selected
                          dense
                          item-value="id"
                          :label="field.title"
                          :rules="[rules.isSelecet]"
                          placeholder="Введите названия тнвед"
                        >
                          <template v-slot:item="data">
                            <v-list-item-content>
                              <v-list-item-title
                                v-html="data.item.id"
                              ></v-list-item-title>
                              <v-list-item-subtitle
                                v-html="data.item.title"
                              ></v-list-item-subtitle>
                            </v-list-item-content>
                          </template>
                        </v-autocomplete>
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
                            </v-col>
                            <v-col>
                              <div>
                                <v-file-input
                                  v-model="field.value"
                                  :label="field.title"
                                  :rules="field && [rules.isMaxFile]"
                                  multiple
                                  outlined
                                  dense
                                  :prepend-icon="
                                    field.field == 'certificate'
                                      ? 'mdi-certificate'
                                      : 'mdi-image-plus'
                                  "
                                >
                                </v-file-input>
                              </div>
                            </v-col>
                          </v-row>
                        </v-col>
                      </template>
                      <template v-if="field.type === 'checkbox'">
                        <v-checkbox
                          v-model="field.value"
                          :label="field.title"
                        ></v-checkbox>
                      </template>
                      <template v-if="field.type === 'date'">
                        <v-text-field
                          v-model="field.value"
                          :label="field.title"
                          type="date"
                          outlined
                          dense
                          :rules="[rules.isEmpty]"
                        ></v-text-field>
                      </template>
                      <template v-if="field.type === 'auction_time'">
                        <v-text-field
                          :label="field.title"
                          v-model="field.value"
                          type="time"
                          outlined
                          dense
                          :rules="[rules.isSelecet]"
                        ></v-text-field>
                      </template>
                      <template v-if="field.type === 'auction_date'">
                        <v-text-field
                          v-model="field.value"
                          :label="field.title"
                          type="date"
                          outlined
                          dense
                          :rules="[rules.isEmpty]"
                        ></v-text-field>
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
    search: "",
    tnved: "",
    debounce: null,
    rules: {
      isNumber: (v) =>
        (!isNaN(parseFloat(v)) && isFinite(v)) || "Введите число",
      isEmpty: (v) => {
        if (v == null || v == undefined || v == 0 || v == "") {
          return "Поле не может быть пустым.";
        } else {
          return true;
        }
      },
      isSelecet: (v) => !!v || "Выберите значение",
      isMaxFile: (v) => v.length <= 3 || `Выберите максимум 3 файла`,
    },
  }),
  computed: {
    ...mapState("order", [
      "isAddDialog",
      "options",
      "templates",
      "isLoadingTnveds",
    ]),
  },
  watch: {
    search: function (val) {
      val != "" && this.querySelections(val);
    },
  },
  methods: {
    ...mapMutations("order", ["SET_IS_ADD_DIALOG"]),
    ...mapActions("order", ["CREATE_ORDER", "GET_OPTIONS", "GET_ORDER_TNVED"]),

    calcField(field) {
      let calcfields = this.templates.orderAdd.filter(
        (f) =>
          f.field == "nds" ||
          f.field == "price" ||
          f.field == "amount" ||
          f.field == "cost"
      );

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
    },
    closeIsAddDialog() {
      this.SET_IS_ADD_DIALOG();
    },
    fileurl: (furl) => {
      return URL.createObjectURL(furl);
    },
    saveNewOrder() {
      let formData = new FormData();
      this.templates.orderAdd.map(({ field, value, valid }) => {
        if (
          (valid.required && value == "") ||
          (valid.required && value == null)
        ) {
          console.log("field", field);
          console.log("value", value);
          this.valid = false;
          return this.$refs.order.validate();
        } else if (field == "images" || field == "certificate") {
          value.map((img) => formData.append(field, img));
        } else {
          formData.append(field, value);
        }
      });
      this.valid && this.CREATE_ORDER(formData);
    },
    querySelections(v) {
      this.tnved = "";
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.tnved = v;
        this.GET_ORDER_TNVED(this.tnved);
      }, 1000);
    },
  },
};
</script>
<style></style>
