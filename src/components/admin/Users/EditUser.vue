<template>
  <v-row justify="center">
    <v-dialog v-model="editDialog" persistent max-width="600px">
      <template> </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Редактировать пользователя</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-tooltip right>
                <template v-slot:activator="{ on: tooltip }">
                  <v-btn color="success" v-on="{ ...tooltip, ...menu }">
                    <v-icon> mdi-refresh </v-icon>
                  </v-btn>
                </template>
                <span>Сбросить пароль</span>
              </v-tooltip>
            </v-row>
          </v-container>
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
  props: ["editDialog"],
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
</style>`