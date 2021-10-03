<template>
  <div>
    <template>
      <v-row  class="my-2 mx-1" align="center">
        <h4 class="mb-3 mt-5">{{ this.type == 1 ? 'Заявки на продажу' : 'Заявки на покупку' }}</h4>
        <v-spacer />
            <v-chip
              v-if="type == 1"
              class="ma-2"
              color="primary"
              outlined
              pill
              @click="openIsAddDialog"
            >
              
              <v-icon left>
                mdi-plus
              </v-icon>
              Добавить
            </v-chip>
      </v-row>
    </template>
    <template v-if="getMyOrders(type).length != 0">
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
              <th>
                
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(order, i) in getMyOrders(type)"
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
     </template>
    <template v-else>
      <p class="font-weight-light text--disabled text-center">
        {{ this.type == 1 ? 'Заявки на продажу' : 'Заявки на покупку' }} пусто.
      </p>
    </template>
  </div>
</template>

<script>

import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  props: ["type"],
  mounted(){
    this.MY_ORDER_LIST(this.type)
  },
  methods: {
    ...mapMutations("order",["SET_IS_ADD_DIALOG"]),
    ...mapActions("order",["MY_ORDER_LIST"]),
    openIsAddDialog(){
      this.SET_IS_ADD_DIALOG()
    },
    viewOrder(id){
      this.$router.push({path: `/dashboard/order/${id}`})
    }
  },
  computed: {
    ...mapGetters('order',['getMyOrders']),
  },

};
</script>

<style>
</style>
