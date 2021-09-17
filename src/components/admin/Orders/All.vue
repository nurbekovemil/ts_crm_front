<template lang="">
   <div>
      <v-row >
         <v-col cols="4" v-for="order of GET_ALL_ORDERS " :key="order.id">
            <v-card>
               <v-card-title>
                  {{order.title}}
                  <v-spacer></v-spacer>
                  <v-chip
                     small
                     :color="order.status_color"
                     text-color="white"
                  >
                     {{order.status}}
                  </v-chip> 
               </v-card-title>
               <v-card-subtitle>
                  <span 
                     class="primary--text"
                     v-if="order.own">
                     Ваша • {{order.order_type}}
                  </span>
                  <span
                     v-else>
                     {{order.order_type}}
                  </span>
               </v-card-subtitle>
               <v-card-text>
                  Цена:{{order.price}} </br>
                  Количество:{{order.amount}}</br> 
                  Стоимость:{{order.cost}}
               </v-card-text>
               <v-card-actions>
               <v-btn
                  text
                  color="teal accent-4"
                  @click="viewOrder(order.id)"
                  >
                  Подробнее
               </v-btn>
               <v-spacer/>
               <span class="caption grey--text">{{order.created_at}}</span>
               </v-card-actions>
            </v-card>
         </v-col>
      </v-row>
   </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
    props: ['status'],
    mounted() {
        this.getAllOrderList();
    },
    computed: {
        ...mapGetters(["GET_ALL_ORDERS"]),
    },
    methods: {
        ...mapActions(["ALL_ORDER_LIST"]),
        getAllOrderList() {
            this.ALL_ORDER_LIST();
        },
        viewOrder(id) {
            this.$router.push({ path: `/dashboard/order/${id}` });
        },
    },
};
</script>
<style lang="">
</style>