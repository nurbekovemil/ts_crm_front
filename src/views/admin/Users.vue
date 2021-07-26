<template lang="">
<<<<<<< HEAD
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
=======
   <v-simple-table>
    <template>
      <thead>
        <tr>
           <th width="5%">
           </th>
            <th class="text-left">
               Name
            </th>
            <th class="text-left">
               Role
            </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in 10"
          :key="item"
        >
         <td>
            <v-avatar
               color="grey darken-1"
               size="36"
            ></v-avatar>
         </td>
          <td>User {{ item }}</td>
          <td>Role {{ item }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
>>>>>>> 5fd0f5694a1850c052ec46ec4bbc97e9d70f55ce
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
<<<<<<< HEAD
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
=======
   data: () => ({
      selectedItem: 1,
      items: [
        { text: 'Admin', icon: 'mdi-account' },
        { text: 'Emil', icon: 'mdi-account' },
        { text: 'Marsel', icon: 'mdi-account' },
      ],
   }),
}
>>>>>>> 5fd0f5694a1850c052ec46ec4bbc97e9d70f55ce
</script>
<style lang="">
</style>