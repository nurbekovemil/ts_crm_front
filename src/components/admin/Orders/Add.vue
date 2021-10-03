<template>
  <div>
    <template>
      <v-row justify="center">
        <v-dialog v-model="isAddDialog" persistent max-width="55%">
          <v-card>
            <v-card-title>
              <span class="text-h5">Добавить заявку</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row class="pa-3">

                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="newOrder.title"
                      dense
                      label="Название продукта"
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-select
                      :items="types"
                      v-model="newOrder.order_type"
                      item-text="title"
                      item-value="type"
                      label="Выберите тип заявки"
                      dense
                      outlined
                    ></v-select>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="newOrder.price"
                      dense
                      label="Цена"
                      outlined
                      @change="priceAndAmountHandler"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="newOrder.amount"
                      dense
                      label="Количество"
                      outlined
                      @change="priceAndAmountHandler"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="newOrder.cost"
                      dense
                      label="Стоимость"
                      outlined
                      @change="costHandler"
                    ></v-text-field>
                  </v-col>
                
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" text @click="closeIsAddDialog">
                Закрыть
              </v-btn>
              <v-btn color="success" @click="saveNewOrder">
                Сохранить
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'

export default {
  data: () => ({
    types: [
      {type: 1, title: 'Заявка на продажу'},
      {type: 2, title: 'Заявка на покупку'}
    ],
    newOrder: {
      order_type: null,
      title: '',
      price: 0,
      amount: 0,
      cost: 0
    }
  }),
  computed: {
    ...mapState('order',['isAddDialog'])
  },
  methods: {
    ...mapMutations('order',['SET_IS_ADD_DIALOG']),
    ...mapActions('order',['CREATE_ORDER']),
    
    closeIsAddDialog() {
      this.SET_IS_ADD_DIALOG();
    },
    saveNewOrder(){
      this.CREATE_ORDER(this.newOrder)
    },
    priceAndAmountHandler(){
      this.newOrder.cost = this.newOrder.price * this.newOrder.amount
    },
    costHandler(){
      this.newOrder.price = Math.round(this.newOrder.cost / this.newOrder.amount)
    },
  },
};
</script>
<style>
</style>
