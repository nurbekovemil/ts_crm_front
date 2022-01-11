<template>
  <div>
    <template>
      <v-row  class="my-2 mx-1" align="center">
        <h4 class="mb-3 mt-5 text-body-2">
          {{ this.type == 1 ? 'Заявки на продажу' : 'Заявки на покупку' }}
        </h4>
        <v-spacer />
        <v-btn
          v-if="type == 1"
          
          text
          elevation="0"
          @click="openIsAddDialog"
          small
          color="grey"
        >
          <v-icon>
            mdi-plus
          </v-icon>
          Добавить
        </v-btn>
      </v-row>
    </template>
    <template v-if="getOrderByType(type).length != 0">
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
              v-for="(order, i) in getOrderByType(type)"
              :key="i"
            >
              <td>
                <v-btn
                    rounded
                    plain
                    small
                    color="primary"
                    @click="viewOrder(order.id)"
                    >
                    {{ order.title }}
                  </v-btn>
                </td>
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

                <v-menu offset-y transition="slide-x-transition" bottom left>
										<template v-slot:activator="{ on, attrs }">
											<v-btn icon v-bind="attrs" v-on="on">
												<v-icon>mdi-dots-vertical</v-icon>
											</v-btn>
										</template>

										<v-list nav dense>

                      <v-hover v-slot="{ hover }">
											<v-list-item
												link
												dense
												@click="openIsEditDialog(order.id)"
											>
												<v-list-item-icon>
													<v-icon :color="`${hover && 'cyan'}`">mdi-pencil</v-icon>
												</v-list-item-icon>
												<v-list-item-title>
													Изменить
												</v-list-item-title>
                        
											</v-list-item>
                      </v-hover>
                      <v-hover v-slot="{ hover }">
											<v-list-item 
                        link 
                        dense 
                        
                      >
												<v-list-item-icon>
													<v-icon :color="`${hover && 'red lighten-1'}`">mdi-delete</v-icon>
												</v-list-item-icon>
												<v-list-item-title>
													Удалить
												</v-list-item-title>
                        
											</v-list-item>
                      </v-hover>
										</v-list>
									</v-menu>

              
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
     </template>
    <template v-else>
      <p class="font-weight-light text--disabled text-center">
        Заявок не добавлено.
      </p>
    </template>
  </div>
</template>

<script>

import {mapGetters, mapActions, mapMutations, mapState} from 'vuex'
export default {
  props: ["type"],
  computed: {
    ...mapState('user', ['isAuth']),
    ...mapGetters('order',['getOrderByType']),
  },
  mounted(){
    this.MY_ORDER_LIST(this.type)
  },
  methods: {
    ...mapMutations("order",["SET_IS_ADD_DIALOG","SET_IS_EDIT_DIALOG"]),
    ...mapActions("order",["MY_ORDER_LIST","GET_ORDER_BY_ID"]),
    openIsAddDialog(){
      this.SET_IS_ADD_DIALOG()
    },
    openIsEditDialog(id){
      this.SET_IS_EDIT_DIALOG()
      this.GET_ORDER_BY_ID({id, isAuth: this.isAuth})
    },
    viewOrder(id){
      this.$router.push({path: `/dashboard/order/${id}`})
    }
  },


};
</script>

<style>
</style>
