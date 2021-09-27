<template>
  <v-simple-table>
     <thead>
        <tr>
           <th width="5%"></th>
           <th>Заявка 1</th>
           <th>Заявка 2</th>
           <th width="6%">Статус</th>
           <th width="6%">Дата</th>
           <th width="8%"></th>
        </tr>
     </thead>
      <tbody>
        <tr
            v-for="(offer, i) in getDeals"
            :key="i"
        > 
          <td>
             <v-chip
               small
               :color="offer.own ? 'green': 'orange'"
               text-color="white"
            >
               {{ offer.own ? 'Вы' : 'Вам' }}
            </v-chip>
         </td>
          <td>
            <v-btn
               rounded
               plain
               small
               color="primary"
               class="px-0"
               @click="viewOrder(offer.order_from)"
               >
               {{ offer.title_order_from }}
               </v-btn>
         </td>
          <td>
            <v-btn
               rounded
               plain
               small
               color="primary"
               class="px-0"
               @click="viewOrder(offer.order_to)"
               >
            {{ offer.title_order_to }}
            </v-btn>
            </td>
          <td>{{ offer.status_title }}</td>
          <td>{{ offer.created_at }}</td>
          <td>
             <v-btn
               rounded
               plain
               small
               color="primary"
               @click="viewOffer(offer.id)"
               >
               Посмотреть
            </v-btn>
         </td>
        </tr>
      </tbody>
  </v-simple-table>
</template>
<script>
   import {mapActions, mapGetters} from 'vuex'
   export default {
      computed: {
         ...mapGetters(['getDeals'])
      },
      methods: {
         ...mapActions(['GET_DEAL_LIST']),
         viewOrder(id){
            this.$router.push('/dashboard/order/'+id)
         },
         viewOffer(id){
            this.$router.push('/dashboard/offer/'+id)
         }
      },
      mounted(){
         this.GET_DEAL_LIST()
      }
   }
</script>