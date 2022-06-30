<template>
  <v-card>
    <v-card-actions>
      <div class="body-2">
        Статус сделки:
        <v-chip small dark :color="deal.status_color">
          {{ deal.status_title }}
        </v-chip>
      </div>

      <v-spacer />
      <template v-if="deal.own && deal.status == 1">
        <v-btn text color="orange" small @click="updateDealStatus(3)">
          <v-icon left>mdi-cancel</v-icon>
          Отклонить
        </v-btn>
      </template>
      <template v-if="!deal.own && deal.status == 1">
        <v-btn text color="orange" small @click="updateDealStatus(3)">
          <v-icon left>mdi-cancel</v-icon>
          Отклонить
        </v-btn>
        <v-btn
          color="success"
          small
          elevation="0"
          @click="updateDealStatus(deal.cd ? 5 : 2)"
        >
          <v-icon left>mdi-check</v-icon>
          Принять
        </v-btn>
      </template>
      <template v-if="!deal.own && deal.status == 5">
        <v-btn
          color="orange"
          small
          text
          elevation="0"
          @click="updateDealStatus(4)"
        >
          <v-icon left>mdi-cancel</v-icon>
          Отменить
        </v-btn>
        <v-btn color="success" small elevation="0" @click="updateDealStatus(2)">
          <v-icon left>mdi-check</v-icon>
          Исполнить
        </v-btn>
      </template>

      <template v-if="deal.own && deal.status == 3">
        <v-btn color="success" small @click="updateDealStatus(1)">
          <v-icon left>mdi-repeat</v-icon>
          Отправить повторно
        </v-btn>
      </template>
      <v-btn @click="print" v-if="deal.status == 2" color="success" small>
        <v-icon left>mdi-printer</v-icon>
        Печать
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["deal"],
  methods: {
    ...mapActions("deal", ["GET_DEAL_BY_ID", "UPDATE_DEAL_STATUS"]),
    updateDealStatus(status) {
      this.UPDATE_DEAL_STATUS({ status, deal_id: this.deal.id });
    },
    async print() {
      // Pass the element id here
      const cssOptions = {
        styles: ["../../Print.css"],
      };
      await this.$htmlToPaper("printDeal", cssOptions);
    },
  },
};
</script>

<style></style>
