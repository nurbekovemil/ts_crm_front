<template>
  <div>
    <template>
      <v-row justify="center">
        <v-dialog v-model="isAddDialog" persistent max-width="60%">

          <v-card>
            <v-card-title>
              <span class="text-h5">{{template.title}}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row class="pa-3" cols="12">
                  <v-col v-for="(field, i) in template.fields" :key="i" :sm="field.type === 'textarea'?'12':'4'">
                    <template v-if="field.type === 'input'">
                      <v-text-field
                        v-model="field.value"
                        dense
                        :label="field.title"
                        outlined
                      ></v-text-field>
                    </template>
                    <template v-if="field.type === 'textarea'">
                      <v-textarea
                        auto-grow
                        outlined
                        rows="1"
                        :label="field.title"
                        :value="field.value"
                      ></v-textarea>
                    </template>
                    <template v-if="field.type === 'select'">
                      <v-select
                        :items="loadItems(field.item)"
                        v-model="field.value"
                        item-text="title"
                        item-value="id"
                        :label="field.title"
                        dense
                        outlined
                      ></v-select>
                    </template>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" text @click="closeIsAddDialog">
                Отменить
              </v-btn>
              <v-btn color="success" @click="saveNewOrder">
                Добавить
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
    orderAddTemplate:[
      {field: 'category',title:'Категория', value: null, type: 'select', item:'order_categories'},
      {field: 'type',title:'Тип заявки', value: null, type: 'select', item: 'order_types'},
      {field: 'delivery',title:'Условия доставки', value: null, type: 'select', item: 'order_deliveries'},
      {field: 'payment',title:'Условие оплаты', value: null, type: 'select', item: 'order_payments'},
      {field: 'weight',title:'Единицы измерения', value: null, type: 'select', item: 'order_weights'},
      {field: 'title', title:'Название продукта', value: '', type:'input'},
      {field: 'description', title:'Описание', value: '', type:'textarea'},
      {field: 'price', title:'Цена', value: 0, type: 'input'},
      {field: 'amount', title:'Количество', value: 0, type: 'input'},
      {field: 'cost', title:'Стоимость', value: 0, type: 'input'},
    ]
  }),
  computed: {
    ...mapState('order',['isAddDialog','types', 'template'])
  },
  mounted(){
    this.GET_TEMPLATE(1)
  },
  methods: {
    ...mapMutations('order',['SET_IS_ADD_DIALOG']),
    ...mapActions('order',['CREATE_ORDER','GET_TEMPLATE']),
    
    closeIsAddDialog() {
      this.SET_IS_ADD_DIALOG();
    },
    saveNewOrder(){
    let order = this.template.fields.reduce((prev, {field, value}) => (prev[field] = value, prev), {})
    this.CREATE_ORDER(order)
    // console.log(order)

    // let o = JSON.stringify(this.orderAddTemplate)
    // console.log(o)
    },
    priceAndAmountHandler(){
      this.newOrder.cost = this.newOrder.price * this.newOrder.amount
    },
    costHandler(){
      this.newOrder.price = Math.round(this.newOrder.cost / this.newOrder.amount)
    },
    loadItems(item){
      return this.template[item]
    }
  },
};
</script>
<style>
</style>
