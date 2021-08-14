<template>
  <div>
    <template v-if="!isEditing">
      <v-card class="mx-auto" width="100%" tile>
        <v-img
          height="100%"
          src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
        >
          <v-row align="end" class="fill-height">
            <v-col align-self="center" cols="12" class="d-flex justify-center">
              <v-avatar class="profile" color="grey" size="164">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                ></v-img>
              </v-avatar>
            </v-col>
            <v-col class="py-0" align="center" align-self="center">
              <v-list-item color="rgba(0, 0, 0, .4)" dark>
                <v-list-item-content>
                  <v-list-item-title class="text-h6">
                    Marcus Obrien
                  </v-list-item-title>
                  <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-img>
      </v-card>
    </template>

    <template v-else>
      <v-card class="overflow-hidden">
        <v-toolbar flat>
          <v-icon>mdi-account</v-icon>
          <v-toolbar-title class="font-weight-light ma-4">
            Профиль компании
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-row class="pa-3">
          <v-col cols="12" sm="6">
            <v-text-field dense label="Имя компании" outlined></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              dense
              label="Организационно-правовая форма"
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              dense
              label="Основной вид деятельности"
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              dense
              label="Юридический и почтовый адрес"
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field dense label="Телефон" outlined></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field dense label="E-mail" outlined></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              dense
              label="ФИО руководителя"
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
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
  </div>
</template>



<script>
export default {
  data() {
    return {
      hasSaved: false,
      model: null,
      isEditing: false,
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
    isEdit() {},
  },
};
</script>
<style>
</style>
