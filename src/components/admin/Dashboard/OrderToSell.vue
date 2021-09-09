<template>
  <div>
    <template>
      <v-row class="my-2 mx-1" align="center">
        <h4 class="mb-3 mt-5">{{ title }}</h4>
        <v-spacer />
        <v-btn small icon @click="addToSellForm">
          <v-icon> mdi-text-box-plus-outline </v-icon>
        </v-btn>
      </v-row>
    </template>
    <template>
      <v-expansion-panels elevation="0" focusable>
        <v-expansion-panel v-for="(order, i) in orderstosell" :key="i">
          <v-expansion-panel-header v-slot="{ open }">
            <v-row no-gutters>
              <v-col cols="4">
                {{ order.product_name }}
              </v-col>
              <v-col cols="8" class="text--secondary">
                <v-fade-transition leave-absolute>
                  <v-row v-if="!open" no-gutters style="width: 100%">
                    <v-col cols="6"> Статус: В ожидании </v-col>
                    <v-col cols="6"> Дата: 12.09.2021 </v-col>
                  </v-row>
                </v-fade-transition>
              </v-col>
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <order-to-sell-item />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <AddToSell
          :orderToSell="isOrderToSell"
          @closeAddToSellDialog="addToSellForm"
        />
      </v-expansion-panels>
    </template>
  </div>
</template>

<script>
import AddToSell from "@/components/admin/Dashboard/AddOrderToSell.vue";
import OrderToSellItem from "./OrderToSellItem.vue";
export default {
  data: () => ({
    isOrderToSell: false,
    title: "Заявки на продажу",
    orderstosell: [
      {
        price: 10000,
        product_name: "Концентрированная томатная паста",
      },
    ],
  }),
  components: {
    AddToSell,
    OrderToSellItem,
  },
  methods: {
    addToSellForm() {
      this.isOrderToSell = !this.isOrderToSell;
    },
  },
};
</script>

<style>
</style>
 