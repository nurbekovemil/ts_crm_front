<template lang="">
   <div>
      <v-row>
         <v-col cols="6" v-for="order in getDealById">
            <v-card>
               <v-card-title>{{order.title}}</v-card-title>
               <v-card-subtitle>order type</v-card-subtitle>
               <v-card-text>
                  <v-row cols="12">
                     <v-col>Цена: {{order.price}}</v-col>
                     <v-col>Количество: {{order.amount}}</v-col>
                     <v-col>Стоимость: {{order.cost}}</v-col>
                  </v-row>
               </v-card-text>
            </v-card>
         </v-col>
         <v-col cols="12">
            <v-card>
               <v-card-actions>
                  <v-btn @click="updateOfferStatus(3)">Отклонить</v-btn>
                  <v-btn @click="updateOfferStatus(2)">Принять</v-btn>
               </v-card-actions>
            </v-card>
         </v-col>
      </v-row>
   </div>
</template>
<script>

import {mapGetters, mapActions} from 'vuex'

export default {
   computed:{
      ...mapGetters(['getDealById'])
   },
   methods: {
      ...mapActions(['GET_DEAL_BY_ID']),
      updateOfferStatus(status){
         
      }
   },
   mounted(){
      this.GET_DEAL_BY_ID(this.$route.params.id)
   }
}
</script>
<style lang="">
   
</style>