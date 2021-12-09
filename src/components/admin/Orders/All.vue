<template lang="">
   <div>
   

    <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left" width="40%">
                Название
              </th>
              <th class="text-left">
                Статус
              </th>
              <th class="text-left">
                Дата
              </th>
               <th class="text-left">
                Цена
              </th>
              <th class="text-left">
                Количество
              </th>
              <th class="text-left">
                Стоимость
              </th>
              <th>
                
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="order of order_list"
              :key="i"
            >
              <td>{{ order.title }}</td>
              <td>
                <template>
                  <v-chip
                    small
                    :color="order.status_color"
                    text-color="white"
                  >
                    {{order.status}}
                  </v-chip>
                </template>
              </td>
              <td>{{ order.created_at }}</td>
              <td>{{ order.price }}</td>
              <td>{{ order.amount }}</td>
              <td>{{ order.cost }}</td>


              <td class="text-right">
                <v-btn
                    rounded
                    plain
                    small
                    color="primary"
                    @click="viewOrder(order.id)"
                    >
                    Посмотреть
                  </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>








   
   </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
    props: ['status'],
    mounted() {
      this.ALL_ORDER_LIST()
    },
    computed: {
       ...mapState('order', ['order_list'])
    },
    methods: {
        ...mapActions('order',['ALL_ORDER_LIST']),
        viewOrder(id) {
            this.$router.push({ path: `/dashboard/order/${id}` });
        },
    },
};
</script>
<style lang="">
</style>