<template lang="">
   <div>
      <h1>Панель управления</h1>
   </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
   data: () => ({
      cards: ['Заявку на продажу', 'Заявки на покупку'],
      drawer: null,
   }),
}
</script>
<style lang="">
   
</style>