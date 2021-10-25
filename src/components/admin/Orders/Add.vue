<template>
  <div>
    <template>
      <v-row justify="center">
        <v-dialog v-model="isAddDialog" persistent max-width="60%">

          <v-card>
            <v-card-title>
              <span class="text-h5">Добавить заявку</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row class="pa-3" cols="12">
                  <!-- fields -->
                  <v-col v-for="(field, i) in templates.orderAdd" :key="i" :sm="field.type === 'textarea'?'12':'4'">
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
                        v-model="field.value"
                        auto-grow
                        outlined
                        rows="1"
                        :label="field.title"
                      ></v-textarea>
                    </template>
                    <template v-if="field.type === 'select'">
                      <v-select
                        :items="options[field.item]"
                        v-model="field.value"
                        item-text="title"
                        item-value="id"
                        :label="field.title"
                        dense
                        outlined
                        @click="GET_OPTIONS(field.item)"
                      >
                      </v-select>
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
  computed: {
    ...mapState('order',['isAddDialog', 'options','templates'])
  },
  methods: {
    ...mapMutations('order',['SET_IS_ADD_DIALOG']),
    ...mapActions('order',['CREATE_ORDER','GET_OPTIONS']),
    
    closeIsAddDialog() {
      this.SET_IS_ADD_DIALOG();
    },
    saveNewOrder(){
    let order = this.orderAddTemplate.reduce((prev, {field, value}) => (prev[field] = value, prev), {})
    this.CREATE_ORDER(order)
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
