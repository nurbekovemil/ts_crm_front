<template>
  <div>
    <v-row>
      <v-col class="pa-0">
        
        <v-img
              src="../../assets/banner.jpg"
              height="450"
<<<<<<< HEAD
              cover
              class="grey darken-4 white--text align-center text-center"
=======
              class="grey darken-4 white--text align-center text-left"
              
>>>>>>> 476414b81a856c1bc34030cd4004f4bf1f0f77ba
              gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
            >
            <v-container>
            <p class="text-h4 font-weight-bold text-sm-h4 text-md-h3">
              Развивайте свой бизнес с нами!
              <br/>

              <span class="text-h5 text-md-h5">
              Находите новые сделки, новых партнёров!
              </span>
            </p>
<<<<<<< HEAD
             </v-container>
            </v-img>
       
=======
        </v-img>
>>>>>>> 476414b81a856c1bc34030cd4004f4bf1f0f77ba
      </v-col>
    </v-row>
    <category/>

    <order-list type="1"/>
    <order-list type="2"/>
  </div>
</template>

<script>
import OrderList from '@/components/content/Home/OrderList.vue'
import Category from '@/components/content/Home/Category.vue'
export default {
  components: {
    OrderList,
    Category
  
  },
};
</script>
