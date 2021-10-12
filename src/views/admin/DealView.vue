<template lang="">
   <div>
      <v-row>
         <template v-if="deal_view">
            <v-col cols="6" class="d-flex align-stretch" v-for="order in deal_view.orders" :key="order.id">
               <v-card>
                  <v-card-title>
                     <span 
                        class="primary--text"
                        v-if="order.own">
                        Ваша • {{order.order_type}}
                     </span>
                     <span
                        v-else>
                        {{order.order_type}}
                     </span>
                  </v-card-title>
                  <v-card-text>
                     <views :order="order" cols="6" shadow="0"/>
                  </v-card-text>
               </v-card>
            </v-col>
            
            <v-col cols="12">
               <v-card>
                  <v-card-actions>
                     <v-chip
                        :color="deal_view.deal.status_color && deal_view.deal.status_color"
                        text-color="white"
                     >
                        Статус: {{deal_view.deal.status_title}}
                     </v-chip>
                     <v-spacer/>
                     
                     <template v-if="!deal_view.deal.own">
                        <v-btn
                           v-if="deal_view.deal.status == 2 || deal_view.deal.status == 1"
                           text 
                           color="orange"
                           small
                           @click="updateDealStatus(3)">
                           Отклонить
                        </v-btn>
                        
                        <v-btn 
                           v-if="deal_view.deal.status == 1"
                           color="success"
                           small
                           @click="updateDealStatus(2)">
                           Принять
                        </v-btn>
                     </template>
                     <template v-if="deal_view.deal.own && deal_view.deal.status == 3">
                        <v-btn
                           color="success"
                           small
                           @click="updateDealStatus(1)"
                        >
                        Повторно отправить
                        </v-btn>
                     </template>
                     <v-btn v-if="deal_view.deal.status == 2"
                        color="success"
                        small
                     >
                        Печать
                     </v-btn>
                  </v-card-actions>
               </v-card>
            </v-col>   
         </template>         
      </v-row>
   </div>
</template>
<script>

import {mapState, mapActions} from 'vuex'
import Views from '@/components/admin/Orders/Views'
export default {
   components: {
      Views
   },
   computed:{
      ...mapState('deal',['deal_view']),
      orders(){
         let arr = [...this.deal_view.order_from_arr, ...this.deal_view.order_to_arr ]
         return arr
      }
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