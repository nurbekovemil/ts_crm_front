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
                <v-list-item-subtitle>
                  <v-chip
                    small
                    :color="GET_ORDER_VIEW.status_color"
                    text-color="white"
                  >
                    {{GET_ORDER_VIEW.status_title}}
                  </v-chip>
                </v-list-item-subtitle>
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
  mounted(){
    this.GET_ORDER_BY_ID(this.$route.params.id)
  },
  components: {
    Tools,
    Offer
  },
  computed: {
    ...mapGetters(['GET_ORDER_VIEW'])
  },
  methods: {
    ...mapActions(['GET_ORDER_BY_ID']),
  }

};
</script>