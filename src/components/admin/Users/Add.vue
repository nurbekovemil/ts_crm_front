<template>
  <v-row justify="center">
    <v-dialog v-model="isAddDialog" persistent max-width="600px">
      
      <v-card>
        <v-card-title>
          <span class="text-h5">Добавить пользователя</span>
        </v-card-title>
        <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="newUser.username"
                  label="Логин пользователя"
                  required
                  outlined
                  dense
                  prepend-inner-icon="mdi-account"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="newUser.password"
                  label="Пароль пользователя"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  @click:append="showPassword = !showPassword"
                  required
                  outlined
                  dense
                  prepend-inner-icon="mdi-lock"
                ></v-text-field>
              </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="closeAddUserDialog"> Закрыть </v-btn>
          <v-btn color="success" text @click="create"> Добавить </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["isAddDialog"],
  data: () => ({
    newUser: {
      username: "",
      password: "",
    },
    showPassword: false,
  }),
  methods: {
    ...mapActions(["CREATEUSER"]),
    closeAddUserDialog() {
      this.$emit("toggleAddUserDialog");
    },
    create() {
      this.CREATEUSER(this.newUser);
    },
  },
};
</script>

<style lang="">
</style>`