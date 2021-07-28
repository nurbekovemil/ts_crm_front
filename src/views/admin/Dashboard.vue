<template lang="">
   <div>
      <!-- <h1>Панель управления</h1> -->
      <v-list nav dense>
            <v-list-item v-for="card in cards">
               <v-list-item-content>
                  <v-list-item-title>{{ card}}</v-list-item-title>
               </v-list-item-content>
            </v-list-item>
            </v-list>
   </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
   data: () => ({
      cards: ['Заявку на продажу', 'Заявки на покупку'],
   }),
}
</script>
<style lang="">
   
</style>