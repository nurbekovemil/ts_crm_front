<template>
  <v-row justify="center">
    <v-dialog v-model="isEditDialog" persistent max-width="60%">
      <v-card>
        <v-card-title>
          <span class="text-h5">Изменить</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row cols="12" no-gutters>
              <v-col
                v-for="(field, i) in orderTemplate"
                :key="i"
                class="px-2"
                :sm="
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
                    v-model="field.value"
                    dense
                    :label="field.title"
                    outlined
                  ></v-text-field>
                </template>
                <template v-if="field.type === 'autocomplate'">
                  <v-autocomplete
                    v-model="field.value"
                    :items="options.order_tnveds"
                    :loading="isLoadingTnveds"
                    :search-input.sync="search"
                    item-text="id"
                    outlined
                    hide-selected
                    dense
                    item-value="id"
                    :label="field.title"
                    :rules="[rules.isSelecet]"
                    placeholder="Поиск код тнвед"
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
                  <v-col>
                    <v-row class="mb-3" v-if="field && field.value">
                      <!-- images -->
                      <v-col
                        v-for="(img, i) in imageFilter(field.value)"
                        :key="i"
                        cols="4"
                        class="py-0"
                      >
                        <v-hover v-slot="{ hover }">
                          <v-card>
                            <v-img
                              :src="
                                img && img.path ? `${url_api}/${img.path}` : img
                              "
                              height="150"
                            >
                              <v-overlay absolute="absolute" :value="hover">
                                <v-btn @click="deleteImage(img.id)" icon>
                                  <v-icon> mdi-delete </v-icon>
                                </v-btn>
                              </v-overlay>
                            </v-img>
                          </v-card>
                        </v-hover>
                      </v-col>
                      <!-- upload image -->
                      <v-col
                        v-if="field.value.length < 3"
                        cols="4"
                        class="d-flex justify-center align-center"
                      >
                        <div>
                          <v-file-input
                            v-model="image"
                            :rules="[rules.isMaxFile]"
                            prepend-icon="mdi-image-plus"
                            hide-input
                            @change="uploadImage"
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
                    @change="methodThatForcesUpdate"
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
                <template v-if="orderTemplate[indexIsAuction].value">
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
                </template>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeIsEditDialog">
            Закрыть
          </v-btn>
          <v-btn color="green darken-1" dark @click="updateOrderData">
            Сохранить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import Vue from "vue";
export default {
  data: () => ({
    image: [],
    url_api: process.env.VUE_APP_BACK_API,
    search: "",
    tnved: null,
    debounce: null,
    is_auction: null,
    rules: {
      isSelecet: (v) => !!v || "Выберите значение",
      isMaxFile: (v) => v.length <= 3 || `Выберите максимум 3 файла`,
    },
  }),
  computed: {
    ...mapState("user", ["isAuth"]),
    ...mapState("order", [
      "isEditDialog",
      "order_view",
      "options",
      "templates",
      "isLoadingTnveds",
    ]),
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
        if (t.type == "select" && this.isEditDialog) {
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
    indexIsAuction() {
      return this.orderTemplate.findIndex((object) => {
        return object.field == "is_auction";
      });
    },
  },
  watch: {
    search: function (val) {
      val && this.querySelections(val);
    },
  },
  methods: {
    ...mapActions("order", [
      "GET_OPTIONS",
      "DELETE_IMAGE",
      "UPLOAD_IMAGE",
      "UPDATE_ORDER_DATA",
      "GET_ORDER_TNVED",
    ]),
    ...mapMutations("order", ["SET_IS_EDIT_DIALOG", "SET_OPTIONS"]),
    closeIsEditDialog() {
      this.SET_IS_EDIT_DIALOG();
    },
    methodThatForcesUpdate() {
      // ...
      this.$forceUpdate();
      // ...
    },
    deleteImage(id) {
      this.DELETE_IMAGE({
        img_id: id,
        order_id: this.order_view.id,
        isAuth: this.isAuth,
      });
    },
    uploadImage() {
      let formData = new FormData();
      formData.append("images", this.image);
      formData.append("order_id", this.order_view.id);
      let img = {
        order_id: this.order_view.id,
        isAuth: this.isAuth,
        img: formData,
      };
      this.UPLOAD_IMAGE(img);
    },
    updateOrderData() {
      const order = this.orderTemplate.reduce((acc, { field, value }) => {
        return { ...acc, [field]: value };
      }, {});
      this.UPDATE_ORDER_DATA({
        order,
        order_id: this.order_view.id,
        isAuth: this.isAuth,
      });
    },
    imageFilter(images) {
      return images.filter((el) => el != null);
    },
    querySelections(v) {
      this.tnved = null;
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
