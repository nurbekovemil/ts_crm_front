<template>
  <v-card class="overflow-hidden" color="purple lighten-1" dark>
    <v-toolbar flat color="purple">
      <v-icon>mdi-account</v-icon>
      <v-toolbar-title class="font-weight-light">
        User Profile
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="purple darken-3" fab small @click="isEditing = !isEditing">
        <v-icon v-if="isEditing"> mdi-close </v-icon>
        <v-icon v-else> mdi-pencil </v-icon>
      </v-btn>
    </v-toolbar>
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field
          :disabled="!isEditing"
          label="Имя компании"
          hint="For example, flowers or used cars"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          :disabled="!isEditing"
          label="Организационно-правовая форма"
          hint="ОАО, ЗАО"
          persistent-hint
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          :disabled="!isEditing"
          label="Основной вид деятельности"
          hint="For example, flowers or used cars"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          :disabled="!isEditing"
          label="Юридический и почтовый адрес"
          hint="www.example.com/page"
          persistent-hint
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          :disabled="!isEditing"
          label="Телефон"
          hint="For example, flowers or used cars"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          :disabled="!isEditing"
          label="E-mail"
          hint="example@gmail.com"
          persistent-hint
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          :disabled="!isEditing"
          label="ФИО руководителя"
          hint="For example, flowers or used cars"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          :disabled="!isEditing"
          label="ФИО главного бухгалтера"
          hint="example@gmail.com"
          persistent-hint
        ></v-text-field>
      </v-col>
    </v-row>
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
