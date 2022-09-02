<template>
  <v-container>
    <template>
      <v-row class="mb-3">
        <v-col>
          <v-card>
            <v-card-subtitle
              >Заявка -
              <v-btn
                text
                small
                class="blue--text"
                router
                :to="'/order/' + deal_view.order_from"
                >{{ sortOrderUser(deal_view.order_type_from) }}</v-btn
              >
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <v-card-subtitle
              >Заявка -
              <v-btn
                text
                small
                class="blue--text"
                router
                :to="'/order/' + deal_view.order_to"
                >{{ sortOrderUser(deal_view.order_type_to) }}</v-btn
              >
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </template>
    <!-- <deal :deal="deal_view" :comments="deal_comments" /> -->
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Deal from "../../components/admin/Deals/Deal.vue";

export default {
  components: {
    Deal,
  },
  computed: {
    ...mapState("deal", ["deal_view", "deal_comments"]),
  },
  methods: {
    ...mapActions("deal", ["GET_TRADE_BY_ID"]),
    sortOrderUser: (type) => (type == 1 ? "Продавца" : "Покупателя"),
  },
  mounted() {
    this.GET_TRADE_BY_ID(this.$route.params.id);
  },
};
</script>

<style>
</style>