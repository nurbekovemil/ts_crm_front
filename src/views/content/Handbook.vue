<template>
   <v-row>

      <v-col cols="3">
         <v-card
            class="mx-auto"
            width="100%"
            tile
         >
            <v-list
               nav
               dense
            >
               <v-list-item-group
                  color="primary"
               >
                  <v-list-item
                     v-for="(item, i) in items2"
                     :key="i"
                  >
                     <v-list-item-icon>
                     <v-icon v-text="item.icon"></v-icon>
                     </v-list-item-icon>

                     <v-list-item-content>
                     <v-list-item-title v-text="item.text"></v-list-item-title>
                     </v-list-item-content>
                  </v-list-item>
               </v-list-item-group>
            </v-list>
         </v-card>
      </v-col>

      <v-col cols="9">
         <v-card
            class="mx-auto"
            max-width="100%"
         >  
          
            <v-sheet class="pa-4 primary lighten-1">
               <v-text-field
               v-model="search"
               label="Поиск товаров"
               dark
               flat
               solo-inverted
               hide-details
               clearable
               clear-icon="mdi-close-circle-outline"
               ></v-text-field>

            </v-sheet>
            <v-row>
              <v-col cols="6">
                <v-card-text>
                  <v-treeview
                  :active.sync="active"
                  :items="items"
                  :search="search"
                  :open.sync="open"
                  activatable
                  return-object
                  selected-color="indigo"
                  open-on-click
                  >
                    <template v-slot:prepend="{ item }">
                        <v-icon
                          v-if="item.children"
                          v-text="`mdi-${item.id === 1 ? 'home-variant' : 'folder-network'}`"
                        ></v-icon>
                    </template>
                  </v-treeview>
                </v-card-text>
              </v-col>
              <v-divider 
                vertical 
                v-if="active.length"
                class="my-6"
                ></v-divider>
              <v-col cols="6">
                <v-scroll-y-transition mode="out-in">
                  <v-card flat>
                    <v-card-title v-if="active.length">{{active[0].name}}</v-card-title>
                  </v-card>
                </v-scroll-y-transition>
              </v-col>
            </v-row>
         </v-card>
      </v-col>

   </v-row>
</template>
<script>
  export default {
    data: () => ({
      active:[],
      selectedItem: null,
      items2: [
        { text: 'My Files', icon: 'mdi-folder' },
        { text: 'Shared with me', icon: 'mdi-account-multiple' },
        { text: 'Starred', icon: 'mdi-star' },
        { text: 'Recent', icon: 'mdi-history' },
        { text: 'Offline', icon: 'mdi-check-circle' },
        { text: 'Uploads', icon: 'mdi-upload' },
        { text: 'Backups', icon: 'mdi-cloud-upload' },
      ],
      items: [
        {
          id: 1,
          name: 'Vuetify Human Resources',
          children: [
            {
              id: 2,
              name: 'Core team',
              children: [
                {
                  id: 201,
                  name: 'John',
                },
                {
                  id: 202,
                  name: 'Kael',
                },
                {
                  id: 203,
                  name: 'Nekosaur',
                },
                {
                  id: 204,
                  name: 'Jacek',
                },
                {
                  id: 205,
                  name: 'Andrew',
                },
              ],
            },
            {
              id: 3,
              name: 'Administrators',
              children: [
                {
                  id: 301,
                  name: 'Mike',
                },
                {
                  id: 302,
                  name: 'Hunt',
                },
              ],
            },
            {
              id: 4,
              name: 'Contributors',
              children: [
                {
                  id: 401,
                  name: 'Phlow',
                },
                {
                  id: 402,
                  name: 'Brandon',
                },
                {
                  id: 403,
                  name: 'Sean',
                },
              ],
            },
          ],
        },
      ],
      open: [1, 2],
      search: null,
    })
  }
</script>