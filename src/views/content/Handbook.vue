<template>
  <v-row>
    <v-col cols="12">
      <v-card class="mx-auto mt-2" max-width="100%">
        <v-sheet app dark elevation="0" color="cyan" class="pa-4 ">
          <v-text-field
            v-model="search"
            label="Поиск товаров"
            dark
            flat
            dense
            solo-inverted
            hide-details
            clearable
            clear-icon="mdi-close-circle-outline"
          ></v-text-field>
        </v-sheet>
        <v-row>
          <v-col cols="12">
            <v-card-text>
              <v-treeview
                :items="tnved_categories"
                :search="search != null && search.length > 3 && search"
                activatable
                return-object
                selected-color="indigo"
                open-on-click
                dense
              >
                <template v-slot:prepend="{ item }">
                  {{item.id}}
                </template>
              </v-treeview>
            </v-card-text>
          </v-col>
          <v-col>
            <div class="text-center">
              <v-pagination
                v-model="page"
                :length="10"
                app  elevation="0" color="cyan"
              ></v-pagination>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import {mapActions, mapState} from 'vuex'
export default {
  data: () => ({
    page:1,
    search: null,
  }),
  computed: {
    ...mapState('catalog', ['tnved_categories'])
  },
  methods: {
    ...mapActions('catalog', ['GET_TNVED_CATEGORIES'])
  },
  mounted(){
    console.log(this.page)
    this.GET_TNVED_CATEGORIES(this.page)
  },
  watch: {
    page(v){
      this.GET_TNVED_CATEGORIES(v)
    }
  }
};
</script>