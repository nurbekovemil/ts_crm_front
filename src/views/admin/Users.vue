<template lang="">
  <v-row>
    <v-col :cols="isViewUser ? '8' : '12'">
      <v-card>
        <v-simple-table>
          <template>
            <thead>
              <tr>
                <th width="5%">
                </th>
                  <th class="text-left">
                    Пользователь
                  </th>
                  <th class="text-left">
                    Роль
                  </th>
                  <th class="text-right">
                    <v-btn
                      icon
                      @click="toggleAddUserDialog"
                    >
                      <v-icon>mdi-account-plus</v-icon>
                    </v-btn>
                  </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="user in GET_USER_LIST"
                :key="user.id"
                :class="isViewUser && isViewUser.id == user.id && 'grey lighten-3'"
              >
              <td>
                  <v-avatar size="36">
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" />
                  </v-avatar>
              </td>
              
                <td>{{ user.username }}</td>
                <td>{{ user.role }}</td>
                <td class="text-right">

                <v-menu
                  bottom
                  left
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon 
                      >mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>

                  <v-list>
                    <v-list-item
                      link
                      dense
                      @click="viewUser(user)"
                    >
                    <v-list-item-icon>
                      <v-icon>mdi-eye</v-icon>
                    </v-list-item-icon>
                      <v-list-item-title>
                        Информация
                      </v-list-item-title>
                    </v-list-item>

                    <v-list-item
                      link
                      dense
                      @click="toggleEditUserDialog(user)"
                    >
                    <v-list-item-icon>
                      <v-icon>mdi-pencil</v-icon>
                    </v-list-item-icon>
                      <v-list-item-title>
                        Редактировать
                      </v-list-item-title>
                    </v-list-item>

                    <v-list-item
                      link
                      dense
                      @click="deleteUser(user.id)"
                    >
                    <v-list-item-icon>
                      <v-icon>mdi-delete</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                      Удалить
                    </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
                </td>
              </tr>
            </tbody>
          </template>
          <AddUser 
            :isAddDialog="isAddDialog" 
            @toggleAddUserDialog="toggleAddUserDialog"
          />
          <EditUser 
            :isEditDialog="isEditDialog" 
            :updateUser="updateUser" 
            @toggleEditUserDialog="toggleEditUserDialog" 
          />
        </v-simple-table>
      </v-card>
    </v-col>
    <v-col cols="4" v-if="isViewUser">
      <v-expand-x-transition>
<info :user="isViewUser" @viewUser="viewUser"/>
      </v-expand-x-transition>
      
    </v-col>
  </v-row>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import AddUser from "@/components/admin/Users/Add.vue";
import EditUser from "@/components/admin/Users/Edit.vue";
import Info from "@/components/admin/Users/Info.vue";
export default {
    data: () => ({
        isAddDialog: false,
        isEditDialog: false,
        isViewUser: null,
        updateUser: null,
    }),
    components: {
        AddUser,
        EditUser,
        Info,
    },
    computed: {
        ...mapGetters(["GET_USER_LIST"]),
    },
    mounted() {
        this.get_User_Lists();
    },
    methods: {
        ...mapActions(["USERLIST", "DELETEUSER"]),
        get_User_Lists() {
          this.USERLIST();
        },
        toggleAddUserDialog() {
          this.isAddDialog = !this.isAddDialog;
        },
        toggleEditUserDialog(user){
          if(user){
            this.updateUser = JSON.parse(JSON.stringify(user));
          }
          this.isEditDialog = !this.isEditDialog;
        },
        viewUser(user){
          if(user){
            return this.isViewUser = user
          }
          this.isViewUser = null
        },
        deleteUser(id) {
            this.DELETEUSER(id);
        },
    },
};
</script>

<style lang="">
</style>