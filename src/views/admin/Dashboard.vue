<template>
  <div>
    <template v-if="user.role == 'ADMIN'">
      <table-rows />
    </template>
  </div>
</template>
<script>
import TableRows from "../../components/admin/Dashboard/TableRows.vue";
import { mapState } from "vuex";
export default {
  components: {
    TableRows,
  },
  computed: {
    ...mapState("user", ["user"]),
  },
};
</script>
<style>
</style>