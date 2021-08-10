`
         <template>
   <v-row justify="center">
      <v-dialog
         v-model="dialog"
         persistent
         max-width="600px"
      >
         <template >
         </template>
         <v-card>
         <v-card-title>
            <span class="text-h5">Add User</span>
         </v-card-title>
         <v-card-text>
            <v-container>
               <v-row>
               <v-col
                  cols="12"
                  sm="6"
                  md="4"
               >
               </v-col>
               <v-col
                  cols="12"
                  sm="6"
                  md="4"
               >
               </v-col>
               <v-col
                  cols="12"
                  sm="6"
                  md="4"
               >
               </v-col>
               <v-col cols="12">
                  <v-text-field
                     label="Email"
                     required
                  ></v-text-field>
               </v-col>
               <v-col cols="12">
                  <v-text-field
                     label="Password"
                     type="password"
                     required
                  ></v-text-field>
               </v-col>
               <v-col
                  cols="12"
                  sm="6"
               >
                  <v-select
                     :items="['1', '2']"
                     label="Role"
                     required
                  ></v-select>
               </v-col>
               <v-col
                  cols="12"
                  sm="6"
               >
               </v-col>
               </v-row>
            </v-container>
         </v-card-text>
         <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
               color="blue darken-1"
               text
               @click="closeAddUserDialog"
            >
               Close
            </v-btn>
            <v-btn
               color="blue darken-1"
               text
               @click="closeAddUserDialog"
            >
               Add
            </v-btn>
         </v-card-actions>
         </v-card>
      </v-dialog>
   </v-row>
   </template>


   <script>
   export default {
      props:['dialog'],
      data: () => ({
        
      }),
      methods: {
         closeAddUserDialog(){
            this.$emit('closeAddUserDialog')
         }
      }
   }
   </script>

   <style lang="">
   </style>`