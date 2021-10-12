<template lang="">
   <div>
      <!-- тип 1 заявка на продажу -->
      <order-list type="1"/>
      <!-- тип 2 заявка на покупку -->
      <order-list type="2"/>
      <add/>
   </div>
</template>
<script>


import OrderList from "@/components/admin/Orders/OrderList.vue";
import Add from '@/components/admin/Orders/Add.vue'
export default {
   components: {
      OrderList,
      Add
   },

};
</script>
<style lang="">
</style>