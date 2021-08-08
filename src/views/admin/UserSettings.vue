<template>
  <v-card class="overflow-hidden" color="light-blue lighten-3" dark>
    <v-toolbar flat color="light-blue">
      <v-icon>mdi-wrench</v-icon>
      <v-toolbar-title class="font-weight-light">
        Сменить пароль
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        color="light-blue lighten-3"
        fab
        small
        @click="isEditing = !isEditing"
      >
        <v-icon v-if="isEditing"> mdi-close </v-icon>
        <v-icon v-else> mdi-pencil </v-icon>
      </v-btn>
    </v-toolbar>

    <v-col cols="12" sm="6">
      <v-text-field
        :disabled="!isEditing"
        label="Новый пароль"
        hint=""
      ></v-text-field>
    </v-col>

    <v-col cols="12" sm="6">
      <v-text-field
        :disabled="!isEditing"
        label="Подтверждение пароля"
        hint=""
        persistent-hint
      ></v-text-field>
    </v-col>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :disabled="!isEditing" color="success" @click="save"> Save </v-btn>
    </v-card-actions>
    <v-snackbar v-model="hasSaved" :timeout="2000" absolute bottom left>
      Your profile has been updated
    </v-snackbar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
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