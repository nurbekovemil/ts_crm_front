<template>
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
            <v-list-item-subtitle>{{GET_ORDER_VIEW.date}}</v-list-item-subtitle>
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
      <v-btn plain small color="grey" router to="/dashboard/orders"
        ><v-icon class="mr-2">mdi-arrow-left</v-icon>Назад</v-btn
      >
      <v-spacer></v-spacer>
      <v-btn v-if="!GET_ORDER_VIEW.own" small color="success">Купить</v-btn>
    </v-card-actions>
  </v-card>
  
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  mounted(){
    this.GET_ORDER_BY_ID(this.$route.params.id)
  },
  computed: {
    ...mapGetters(['GET_ORDER_VIEW'])
  },
  methods: {
    ...mapActions(['GET_ORDER_BY_ID']),
  }

};
</script>