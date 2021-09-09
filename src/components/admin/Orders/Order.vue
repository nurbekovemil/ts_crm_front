<template>
  <div>
    <template>
      <v-row  class="my-2 mx-1" align="center">
        <h4 class="mb-3 mt-5">{{ this.type == 1 ? 'Заявки на продажу' : 'Заявки на покупку' }}</h4>
        <v-spacer />
        <v-btn v-if="type == 1" small icon @click="openIsAddDialog">
          <v-icon> mdi-text-box-plus-outline </v-icon>
        </v-btn>
      </v-row>
    </template>
    <template v-if="GET_ORDERS(type).length != 0">
      <v-expansion-panels>
          <v-expansion-panel v-for="(order, i) in GET_ORDERS(type)" :key="i">
            <v-expansion-panel-header>
              <v-row no-gutters>
                <v-col cols="4">
                  {{ order.title }}
                </v-col>
                <v-col cols="8" class="text--secondary">
                  <v-fade-transition leave-absolute>
                    <v-row  no-gutters style="width: 100%">
                      <v-col cols="6"> Статус: {{order.status}} </v-col>
                      <v-col cols="6"> Дата: 12.09.2021 </v-col>
                    </v-row>
                  </v-fade-transition>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="primary"
                    small
                    @click="viewOrder(order.id)"
                  >
                    Подробнее
                  </v-btn>
              </v-card-actions>
            </v-expansion-panel-content>
          </v-expansion-panel>        
      </v-expansion-panels>
    </template>
    <template v-else>
      <p class="font-weight-light text--disabled text-center">
        {{ this.type == 1 ? 'Заявки на продажу' : 'Заявки на покупку' }} пусто.
      </p>
    </template>
  </div>
</template>

<script>

import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  props: ["type"],
  data: () => ({
    
  }),
  mounted(){
    this.getAllOrderList()
  },
  methods: {
    ...mapMutations(["SET_IS_ADD_DIALOG"]),
    ...mapActions(["ORDER_LIST"]),
    
    getAllOrderList(){
      this.ORDER_LIST(this.type)
    },
    openIsAddDialog(){
      this.SET_IS_ADD_DIALOG()
    },
    viewOrder(id){
      this.$router.push({path: `/dashboard/order/${id}`})
    }
  },
  computed: {
    ...mapGetters(["GET_ORDERS"]),
    
  },

};
</script>

<style>
</style>
