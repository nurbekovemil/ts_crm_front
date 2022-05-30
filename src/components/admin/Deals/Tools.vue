<template>
  <v-card>
    <v-card-actions>
      <v-spacer />

      <template v-if="!deal.own">
        <v-btn
          v-if="deal.status == 1"
          text
          color="orange"
          small
          @click="updateDealStatus(3)"
        >
          Отклонить
        </v-btn>

        <v-btn
          v-if="deal.status == 1"
          color="success"
          small
          elevation="0"
          @click="updateDealStatus(2)"
        >
          Принять
        </v-btn>
      </template>
      <template v-if="deal.own && deal.status == 3">
        <v-btn color="success" small @click="updateDealStatus(1)">
          Повторно отправить
        </v-btn>
      </template>
      <v-btn @click="print" v-if="deal.status == 2" color="success" small>
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
      await this.$htmlToPaper("printDeal");
    },
  },
};
</script>

<style></style>
