<template>
  <v-container>
    <deal :deal="deal_view" :comments="deal_comments" />
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
  },
  mounted() {
    this.GET_TRADE_BY_ID(this.$route.params.id);
  },
};
</script>

<style>
</style>