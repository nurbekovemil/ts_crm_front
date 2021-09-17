<template lang="">
   <div>
      <!-- тип 1 заявка на продажу -->
      <order type="1"/>
      <!-- тип 2 заявка на покупку -->
      <order type="2"/>
      <add/>
   </div>
</template>
<script>


import Order from "../../components/admin/Orders/Order.vue";
import Add from '@/components/admin/Orders/Add.vue'
export default {
   components: {
      Order,
      Add
   },

};
</script>
<style lang="">
</style>