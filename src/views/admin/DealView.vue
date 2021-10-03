<template lang="">
   <div>
      <v-row>
         <template v-if="deal_view.orders">
            <v-col cols="6" v-for="(order, i) in deal_view.orders" :key="i">
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
         </template>
         <template v-if="deal_view.deal">
            <v-col cols="12">
               <v-card>
                  <v-card-text>
                     Статус: 
                     <v-chip
                     small
                     :color="deal_view.deal.status_color"
                     text-color="white"
                     >
                     {{deal_view.deal.status_title}}
                     </v-chip>
                     
                  </v-card-text>
                  <v-card-actions>
                     <v-spacer/>
                     
                     <template v-if="!deal_view.deal.own">
                        <v-btn
                           v-if="deal_view.deal.status == 2 || deal_view.deal.status == 1"
                           text 
                           color="orange"
                           @click="updateDealStatus(3)">
                           Отклонить
                        </v-btn>
                        <v-btn 
                           v-if="deal_view.deal.status == 1"
                           color="success"
                           @click="updateDealStatus(2)">
                           Принять
                        </v-btn>
                     </template>
                     <template v-if="deal_view.deal.own && deal_view.deal.status == 3">
                        
                        <v-btn
                        color="success"
                        @click="updateDealStatus(1)"
                        >
                        Повторно отправить
                        </v-btn>
                     </template>
                  </v-card-actions>
               </v-card>
            </v-col>   
         </template>         
               
      </v-row>
   </div>
</template>
<script>

import {mapState, mapActions} from 'vuex'

export default {
   computed:{
      ...mapState('deal',['deal_view'])
   },
   methods: {
      ...mapActions('deal',['GET_DEAL_BY_ID', 'UPDATE_DEAL_STATUS']),
      updateDealStatus(status){

         this.UPDATE_DEAL_STATUS({status, deal_id: this.$route.params.id})
      }
   },
   mounted(){
      this.GET_DEAL_BY_ID(this.$route.params.id)
   }
}
</script>
<style lang="">
   
</style>