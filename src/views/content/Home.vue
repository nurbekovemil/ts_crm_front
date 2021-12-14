<template>
  <div >
    <v-row>
      <v-col>
        <v-img
              src="../../assets/banner.jpg"
              height="450"
              class="grey darken-4 white--text align-center text-center"
              
              gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
            >
            <p class="text-h3 font-weight-bold">
              Развивайте свой бизнес с нами!
              Находите новые сделки, новых партнёров!
            </p>
            </v-img>
      </v-col>
    </v-row>
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
