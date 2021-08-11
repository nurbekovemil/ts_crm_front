<template>
  <v-card class="overflow-hidden">
    <v-toolbar flat>
      <v-icon>mdi-account</v-icon>
      <v-toolbar-title class="font-weight-light ma-4">
        Профиль компании
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field 
        dense
        class="mx-4" label="Имя компании" outlined></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          class="mx-4"
          dense
          label="Организационно-правовая форма"
          outlined
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          class="mx-4"
          dense
          label="Основной вид деятельности"
          outlined
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          class="mx-4"
          dense
          label="Юридический и почтовый адрес"
          outlined
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field 
        dense
        class="mx-4" label="Телефон" outlined></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field 
        dense
        class="mx-4" label="E-mail" outlined></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          class="mx-4"
          dense
          label="ФИО руководителя"
          outlined
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          class="mx-4 pb-0"
          dense
          label="ФИО главного бухгалтера"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="success" @click="save"> Сохранить </v-btn>
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
