<template>
  <div>
      <v-card>
        <v-card-title>
          {{GET_ORDER_VIEW.title}}
        </v-card-title>
        <v-card-subtitle> {{GET_ORDER_VIEW.order_type_title}}</v-card-subtitle>
        <v-row no-gutters>
          <v-col cols="4">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>Описания</v-list-item-title>
                <v-list-item-subtitle>{{GET_ORDER_VIEW.description}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
                <v-col cols="4">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>Статус</v-list-item-title>
                <v-list-item-subtitle>{{GET_ORDER_VIEW.status}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="4">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>Дата</v-list-item-title>
                <v-list-item-subtitle>{{GET_ORDER_VIEW.created_at}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="4">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>Цена</v-list-item-title>
                <v-list-item-subtitle>{{GET_ORDER_VIEW.price}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="4">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>Количество</v-list-item-title>
                <v-list-item-subtitle>{{GET_ORDER_VIEW.amount}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="4">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>Стоимость</v-list-item-title>
                <v-list-item-subtitle>{{GET_ORDER_VIEW.cost}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-btn plain small color="grey" router :to="prevRoute || '/dashboard/all-orders'">
            <v-icon class="mr-2">mdi-arrow-left</v-icon>Назад</v-btn>
          <v-spacer></v-spacer>
          <v-btn v-if="!GET_ORDER_VIEW.own" small color="success" @click="openIsAddOfferDialog">Предложить</v-btn>
        </v-card-actions>
      </v-card>
      <offer/>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
import Offer from '../../components/admin/Orders/Offer.vue'
export default {
  data: () => ({
    prevRoute: null
  }),
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.prevRoute = from
    })
  },
  mounted(){
    this.GET_ORDER_BY_ID(this.$route.params.id)
  },
  computed: {
    ...mapGetters(['GET_ORDER_VIEW'])
  },
  components: {
    Offer
  },
  methods: {
    ...mapActions(['GET_ORDER_BY_ID']),
    ...mapMutations(['SET_IS_ADD_OFFER_DIALOG']),
    openIsAddOfferDialog(){
      this.SET_IS_ADD_OFFER_DIALOG()
    }
  }

};
</script>