<template>
  <v-row justify="center">
    <v-dialog v-model="isEditDialog" persistent max-width="1000px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Редактировать пользователя</span>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col></v-col>
          </v-row>
          <v-row v-for="field in user_view.info" :key="field.field" no-gutters>
            <v-col cols="12" md="12" class="pb-5 pl-2">
              <div class="body-1">{{ field.title }}</div>
            </v-col>
            <v-col
              cols="12"
              md="4"
              v-for="item in field.items"
              :key="item.field"
              class="px-2"
            >
              <template v-if="item.type == 'input'">
                <v-text-field
                  v-model="item.value"
                  :label="item.title"
                  value="uguguyx"
                  outlined
                  dense
                ></v-text-field>
              </template>
              <template v-if="item.type == 'date'">
                <v-text-field
                  v-model="item.value"
                  :label="item.title"
                  type="date"
                  outlined
                  dense
                ></v-text-field>
              </template>
              <template v-if="item.type == 'select'">
                <v-select
                  v-model="item.value"
                  :items="item.options"
                  :label="item.title"
                  dense
                  outlined
                ></v-select>
              </template>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" small text @click="closeEditUserDialog">
            Закрыть
          </v-btn>
          <v-btn color="#78C3CC" dark small @click="updateUserData">
            Сохранить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapState("user", ["isEditDialog", "user", "user_view", "template"]),
    // userEditHandler() {
    //   let type = this.user_view.type;
    //   if (this.user_view.info == null) {
    //     console.log(type);
    //     this.GET_USER_REGISTER_TEMPLATE(type);
    //     if (type && this.template.length > 0) {
    //       this.user_view.info = this.template;
    //     }
    //   }
    //   return this.user_view;
    // },
  },
  methods: {
    ...mapActions("user", [
      "UPDATEUSER",
      "GET_USER_REGISTER_TEMPLATE",
      "UPDATE_USER_DATA",
    ]),
    ...mapMutations("user", ["TOGGLE_EDIT_DIALOG"]),
    closeEditUserDialog() {
      this.TOGGLE_EDIT_DIALOG();
    },
    updateUserData() {
      let updateData = {
        id: this.userEditHandler.id,
        login: "",
        password: "",
        info: null,
      };
      updateData.info = JSON.stringify(
        this.userEditHandler.info.reduce((prev, { title, items }) => {
          return [
            ...prev,
            {
              title,
              items: [
                ...items.map(({ field, title, value, type, options }) => {
                  if (field == "login" || field == "password") {
                    updateData[field] = value;
                  }
                  return {
                    field,
                    title,
                    value,
                    type,
                    options,
                  };
                }),
              ],
            },
          ];
        }, [])
      );
      this.UPDATE_USER_DATA(updateData);
    },
  },
};
</script>