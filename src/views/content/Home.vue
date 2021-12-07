<template>
  <div >
    <v-parallax
      height="300"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFGJtA9d4TUuFqkneimQ8y_iTYLuEm3sDI7Q&usqp=CAU"
        app  elevation="0" color="cyan"
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
