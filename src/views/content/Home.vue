<template>
  <div>
    <v-parallax
      height="400"
      src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="5">
          <h1 class="text-h4 font-weight-thin mb-4">Товарно сырьевой сектор</h1>
        </v-col>
      </v-row>
    </v-parallax>
    <order-list type="1"/>
    <order-list type="2"/>
  </div>
</template>

<script>
import OrderList from '@/components/content/Home/OrderList.vue'
export default {
  components: {
    OrderList
  },
};
</script>
