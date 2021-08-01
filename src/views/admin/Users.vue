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
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
   data: () => ({
      selectedItem: 1,
      items: [
        { text: 'Admin', icon: 'mdi-account' },
        { text: 'Emil', icon: 'mdi-account' },
        { text: 'Marsel', icon: 'mdi-account' },
      ],
   }),
}
</script>
<style lang="">
</style>