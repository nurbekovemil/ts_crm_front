<template>
  <div>
    <v-tabs v-model="tab">
      <v-tab>Сделки</v-tab>
      <!-- <v-tab>Пользователи</v-tab> -->
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <deal-reports />
      </v-tab-item>
      <!-- <v-tab-item> Отчеты по пользователям </v-tab-item> -->
    </v-tabs-items>
  </div>
</template>

<script>
import DealReports from "../../components/admin/Reports/DealReports.vue";
export default {
  data: () => ({
    tab: 0,
  }),
  components: { DealReports },
};
</script>

<style>
</style>