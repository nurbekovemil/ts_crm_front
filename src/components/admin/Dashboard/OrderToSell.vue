<template>
  <div>
    <h4 class="mb-3 mt-5">Заявки на покупку</h4>
    <template>
      <v-expansion-panels elevation="0">
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
            Username: {{ order.username }}
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            Price: {{ order.price }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>
  </div>
</template>

<script>
export default {
  data: () => ({
    orderstosell: [
      {
        username: "John",
        price: 10000,
        product_name: 'Gucci',
      },
      {
        username: "Mike",
        price: 12000,
        product_name: 'Louis Vuitton',
      },
      {
        username: "Will",
        price: 2391,
        product_name: 'Nike',
      },
      {
        username: "Mattew",
        price: 1231,
        product_name: 'Adidas',
      },
      {
        username: "Joe",
        price: 1534,
        product_name: 'Saint Loran',
      },
      {
        username: "Donald",
        price: 1279,
        product_name: 'Durex',
      },
    ],
  }),
};
</script>

<style>
</style>