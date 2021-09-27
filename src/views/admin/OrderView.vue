<template>
  <div>
      <v-card>
        <v-card-title>
          {{getOrderView.title}}
        </v-card-title>
        
        <v-card-subtitle> {{getOrderView.order_type_title}}</v-card-subtitle>
        <v-row no-gutters>
          <v-col cols="4">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>Описания</v-list-item-title>
                <v-list-item-subtitle>{{getOrderView.description}}</v-list-item-subtitle>
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
                    :color="getOrderView.status_color"
                    text-color="white"
                  >
                    {{getOrderView.status_title}}
                  </v-chip>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="4">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>Дата</v-list-item-title>
                <v-list-item-subtitle>{{getOrderView.created_at}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="4">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>Цена</v-list-item-title>
                <v-list-item-subtitle>{{getOrderView.price}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="4">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>Количество</v-list-item-title>
                <v-list-item-subtitle>{{getOrderView.amount}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="4">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>Стоимость</v-list-item-title>
                <v-list-item-subtitle>{{getOrderView.cost}}</v-list-item-subtitle>
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
import {mapActions, mapGetters} from 'vuex'
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
    ...mapGetters(['getOrderView'])
  },
  methods: {
    ...mapActions(['GET_ORDER_BY_ID'])
  }

};
</script>