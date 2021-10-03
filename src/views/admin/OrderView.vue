<template>
  <div>
      <v-card>
        <v-card-title>
          {{order_view.title}}
        </v-card-title>
        
        <v-card-subtitle> {{order_view.order_type_title}}</v-card-subtitle>
        <v-row no-gutters>
          <v-col cols="4">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>Описания</v-list-item-title>
                <v-list-item-subtitle>{{order_view.description}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="4">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>Статус</v-list-item-title>
                <v-list-item-subtitle>
                  <v-chip
                    small
                    :color="order_view.status_color"
                    text-color="white"
                  >
                    {{order_view.status_title}}
                  </v-chip>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="4">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>Дата</v-list-item-title>
                <v-list-item-subtitle>{{order_view.created_at}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="4">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>Цена</v-list-item-title>
                <v-list-item-subtitle>{{order_view.price}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="4">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>Количество</v-list-item-title>
                <v-list-item-subtitle>{{order_view.amount}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="4">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>Стоимость</v-list-item-title>
                <v-list-item-subtitle>{{order_view.cost}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>

        <tools/>
      </v-card>
      <offer/>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Tools from '../../components/admin/Orders/Tools.vue';
import Offer from "../../components/admin/Orders/Offer.vue";

export default {
  data: () => ({
    titles: [
      {proper: 'cost', title: 'Стоимость'},
      {proper: 'price', title: 'Цена'},
      {proper: 'amount', title: 'Количество'},
    ]
  }),
  mounted(){
    this.GET_ORDER_BY_ID(this.$route.params.id)
  },
  components: {
    Tools,
    Offer
  },
  computed: {
    ...mapState('order',['order_view'])
  },
  methods: {
    ...mapActions('order',['GET_ORDER_BY_ID'])
  }

};
</script>