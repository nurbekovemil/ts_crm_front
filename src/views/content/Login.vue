<template>
  <v-card
    :loading="loading"
    class="mx-xs-5 mx-auto my-12 py-5 px-10"
    max-width="500"
    max-height="1000"
    flat
    color="rgb(255, 255, 255)"
    
  >
    <!-- <v-card-subtitle 
      class="text-center"
   > 
      Авторизация
   </v-card-subtitle>  -->

    <v-text-field
    class="pb-3"
      v-model="loginFields.username"
      label="Логин"
      prepend-inner-icon="mdi-account"
      dense
      outlined
      flat
    ></v-text-field>
    <v-text-field
      v-model="loginFields.password"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :type="showPassword ? 'text' : 'password'"
      @click:append="showPassword = !showPassword"
      label="Пароль"
      prepend-inner-icon="mdi-lock"
      dense
      outlined
      flat
    ></v-text-field>
    <p class="request" slot="text" v-if="loading">
      {{ request }}
    </p>
    <v-btn color="primary lighten-1" elevation="1" @click="handleSubmit" block>
      Войти
    </v-btn>
  </v-card>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    loading: false,
    showPassword: false,
    loginFields: {
      username: "emil",
      password: "123456",
    },
  }),

  methods: {
    ...mapActions(["LOGIN"]),
    handleSubmit() {
      this.LOGIN(this.loginFields);
    },
  },
};
</script>
<style lang="">
</style>