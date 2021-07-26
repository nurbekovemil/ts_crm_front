<template lang="">
   <v-card 
      :loading="loading" 
      class="mx-xs-5 mx-auto my-12 py-5 px-10"
      max-width="430" 
   > 
   <v-card-subtitle 
      class="text-center"
   > 
      Авторизация
   </v-card-subtitle> 
   <v-text-field
      v-model="loginFields.username" 
      outlined 
      label="Логин"
      prepend-inner-icon="mdi-account" 
      dense 
   ></v-text-field> 
   <v-text-field
      v-model="loginFields.password" 
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :type="showPassword ? 'text':'password'"
      @click:append="showPassword = !showPassword"
      outlined
      label="Пароль" 
      prepend-inner-icon="mdi-lock" 
      dense 
   ></v-text-field> 
   <p class="request" slot="text" v-if="loading">
          {{ request }}
        </p>
   <v-btn
      dark 
      color="blue-grey darken-2" 
      elevation="1" 
      @click="handleSubmit"
   > 
   Войти 
   </v-btn> 
   </v-card>
</template>
<script>
import {mapActions} from 'vuex'
export default {
   data: () => ({
      loading: false,
      showPassword: false,
      loginFields:{
         username:'test',
         password:'123456'
      }
   }),
   
//    components:{
//     Admin
//   },

   methods: {
      ...mapActions(['LOGIN']),
      handleSubmit () {
      this.LOGIN(this.loginFields)
      },
      
}
};
</script>
<style lang="">
</style>