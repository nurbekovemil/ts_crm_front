<template lang="">
   <div class="md-layout">
     <div class="md-layout-item">
      <md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>manage_accounts</md-icon>
          </div>
          <h4 class="title">Пользователи</h4>
        </md-card-header>
        <md-card-content>
            <md-table-row slot="md-table-row" slot-scope="{item}">
              <md-table-cell md-label="Логин" md-sort-by="login">
                {{ item.login }}
              </md-table-cell>
              <md-table-cell md-label="Компания">
                {{ item.name }}
              </md-table-cell>
            </md-table-row>
          
      </md-card-content>
    </md-card>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      login: "",
    };
  },
  methods: {
    ...mapActions(["getUserList"]),
    getUser() {
      this.getUserList(this.login);
    },
  },
  computed: {
    ...mapGetters(["getAllUsersList"]),
  },
};
</script>
<style lang="">
</style>