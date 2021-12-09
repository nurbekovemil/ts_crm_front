<template>
  <div >
    <v-parallax
      height="300"
      src="https://st.depositphotos.com/1625616/4555/i/950/depositphotos_45554431-stock-photo-light-blue-background.jpg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="5">
          <h1 class="text-h4 font-weight-thin mb-4">Товарно сырьевой сектор</h1>
          <v-text-field
            solo
            append-icon="mdi-magnify"
            label="Введите описание товара"
          ></v-text-field>
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
