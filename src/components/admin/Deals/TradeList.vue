<template>
  <div>
    <v-simple-table>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Заявка</th>
          <th>Цена</th>
          <th>Количество</th>
          <th>Сумма</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(trade, i) in trade_list" :key="i">
          <td>{{ trade.created_at }}</td>
          <td>{{ trade.title }}</td>
          <td>{{ trade.price }}</td>
          <td>{{ trade.amount }}</td>
          <td>{{ trade.cost }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("deal", ["trade_list"]),
  },
  methods: {
    ...mapActions("deal", ["GET_TRADE_LIST"]),
  },
  mounted() {
    this.GET_TRADE_LIST();
  },
};
</script>
