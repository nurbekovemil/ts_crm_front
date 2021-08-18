<template>
  <v-row justify="center">
    <v-dialog v-model="editDialog" persistent max-width="600px">
      <template> </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Редактировать пользователя</span>
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-if="user"
            v-model="user.username"
            label="Логин пользователя"
            required
            outlined
            dense
            prepend-inner-icon="mdi-account"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="closeEditUserDialog"> Закрыть </v-btn>
          <v-btn color="success" text @click="closeEditUserDialog">
            Сохранить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ["editDialog", "user"],
  data: () => ({
    showPassword: false,
  }),
  methods: {
    closeEditUserDialog() {
      this.$emit("closeEditUserDialog");
    },
  },
};
</script>

<style lang="">
</style>