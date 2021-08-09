<template lang="">
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
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in GET_USER_LIST"
          :key="user.id"
        >
         <td>
            <v-avatar
               color="grey darken-1"
               size="36"
            ></v-avatar>
         </td>
          <td>{{ user.username }}</td>
          <td>{{ user.role }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
   data: () => ({
      selectedItem: 1,
      
   }),
   computed:{
      ...mapGetters(['GET_USER_LIST']),
   },
   mounted(){
      this.get_User_Lists()
   },
   methods:{
      ...mapActions(['USERLIST']),
      get_User_Lists(){
         this.USERLIST()
      }
   }
}
</script>
<style lang="">
</style>