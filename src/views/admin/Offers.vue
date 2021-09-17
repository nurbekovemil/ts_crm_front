<template>
  <v-simple-table>
      <tbody>
        <tr
            v-for="(offer, i) in GET_OFFERS"
            :key="i"
            :class="offer.own ? 'teal accent-3': 'lime lighten-3'"
        > 
          <td>{{ offer.own ? 'Вы' : 'Мне' }}</td>
          <td>{{ offer.title_order_from }}</td>
          <td>{{ offer.title_order_to }}</td>
          <td>status: {{ offer.status }}</td>
          <td>date: {{ offer.created_at }}</td>
          <td>own: {{ offer.own }}</td>

          
        </tr>
      </tbody>
  </v-simple-table>
</template>
<script>
   import {mapActions, mapGetters} from 'vuex'
   export default {
      computed: {
         ...mapGetters(['GET_OFFERS'])
      },
      methods: {
         ...mapActions(['GET_OFFERS_LIST']),
         getOffersList(){
            this.GET_OFFERS_LIST()
         }
      },
      mounted(){
         this.getOffersList()
      }
   }
</script>