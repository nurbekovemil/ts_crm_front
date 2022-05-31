<template>
  <div>
    <v-card>
      <v-card-title>
        Все продукты
        <v-spacer />
      </v-card-title>
      <v-card-text> Находиться в разработке! </v-card-text>
    </v-card>
    <add />
  </div>
</template>

<script>
import Add from "./Add.vue";
import { mapMutations, mapState } from "vuex";
export default {
  components: {
    Add,
  },
  computed: {
    ...mapState("catalog", ["isAddProduct"]),
  },
  methods: {
    ...mapMutations("catalog", ["SET_IS_DIALOG"]),
    openIsAddDialog() {
      this.SET_IS_DIALOG("isAddProduct");
    },
  },
};
</script>

<style></style>
