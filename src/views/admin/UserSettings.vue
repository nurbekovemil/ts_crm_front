<template>
  <v-card class="overflow-hidden">
    <v-toolbar flat>
      <v-icon>mdi-cog-outline</v-icon>
      <v-toolbar-title class="font-weight-light ma-4">
        Сменить пароль
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-row class="pa-3">
      <v-col cols="6" sm="6">
        <v-text-field
          label="Новый пароль"
          :append-icon="newPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="newPassword ? 'text' : 'password'"
          @click:append="newPassword = !newPassword"
          outlined
          dense
          prepend-inner-icon="mdi-lock"
        ></v-text-field>
      </v-col>

      <v-col cols="6" sm="6">
        <v-text-field
          label="Подтверждение пароля"
          :append-icon="confirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="confirmPassword ? 'text' : 'password'"
          @click:append="confirmPassword = !confirmPassword"
          outlined
          dense
          prepend-inner-icon="mdi-lock"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="success" @click="save"> Сохранить </v-btn>
    </v-card-actions>
    <v-snackbar v-model="hasSaved" :timeout="2000" absolute bottom left>
      Ваш профиль был обновлен
    </v-snackbar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      confirmPassword: false,
      newPassword: false,
      hasSaved: false,
      isEditing: null,
      model: null,
    };
  },

  methods: {
    customFilter(item, queryText, itemText) {
      const textOne = item.name.toLowerCase();
      const textTwo = item.abbr.toLowerCase();
      const searchText = queryText.toLowerCase();

      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },
    save() {
      this.isEditing = !this.isEditing;
      this.hasSaved = true;
    },
  },
};
</script>

<style>
</style>