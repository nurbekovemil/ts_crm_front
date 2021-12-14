<template>
  <div>
    <template v-if="deals.length > 0">
      <v-simple-table>
        <thead>
          <tr>
            <th width="5%"></th>
            <th>Заявка 1</th>
            <th>Заявка 2</th>
            <th width="10%">Статус</th>
            <th width="6%">Дата</th>
            <th width="8%"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(offer, i) in deals" :key="i">
            <td>
              <v-chip
                small
                :color="offer.own ? 'green' : 'orange'"
                text-color="white"
              >
                {{ offer.own ? "Вы" : "Вам" }}
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
            <td>
              <v-chip
                small
                :color="offer.status_color"
                text-color="white"
              >
                {{ offer.status_title }}
              </v-chip>
            </td>
            <td>{{ offer.created_at }}</td>
            <td>
              <v-btn
                rounded
                plain
                small
                color="primary"
                @click="offer.status == 1 ? viewOffer(offer.id) : viewDeal(offer.id)"
              >
                Посмотреть
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </template>
    <template v-else>
      <p class="font-weight-light text--disabled text-center">
        {{ this.status == 2 ? 'Вы еще не совершали сделок!':'Предложений нет!'}}
      </p>
    </template>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ['status'],
  computed: {
    ...mapState('deal',['deals'])
  },
  methods: {
    ...mapActions('deal',['GET_DEAL_LIST']),
    viewOrder(id) {
      this.$router.push("/dashboard/order/" + id);
    },
    viewOffer(id){
      this.$router.push("/dashboard/offer/" + id);
    },
    viewDeal(id) {
      this.$router.push("/dashboard/deal/" + id);
    },
  },
  mounted() {
    this.GET_DEAL_LIST(this.status);
  },
};
</script>
