<template>
  <v-row>
    <v-col>
      <h3 class="py-3">Заявки на продажу</h3>
      <v-sheet class="mx-auto" elevation="0" max-width="100%">
        <v-slide-group v-model="model" class="pa-4" show-arrows center-active>
          <v-slide-item
            v-for="order in order_list"
            :key="order.id"
          >
            <v-card
              
            >
              <v-card-title>{{ order.title }}</v-card-title>
            </v-card>
          </v-slide-item>
        </v-slide-group>

        <!-- <v-expand-transition>
          <v-sheet v-if="model != null" height="250" tile>
            <v-card class="mx-auto" flat max-height="250" max-width="800">
              <v-card-title>
                <span class="text-h6 font-weight-light">{{
                  purchaseOrders[model].product
                }}</span>
              </v-card-title>

              <v-card-text class="text-h5 font-weight-bold">
                {{ purchaseOrders[model].description }}
              </v-card-text>

              <v-card-actions>
                <v-list-item class="grow">
                  <v-list-item-avatar color="grey darken-3">
                    <v-img
                      class="elevation-6"
                      alt=""
                      src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>{{
                      purchaseOrders[model].user
                    }}</v-list-item-title>
                  </v-list-item-content>

                  <v-row align="center" justify="end">
                    <v-btn outlined rounded small> Купить </v-btn>
                  </v-row>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </v-sheet>
        </v-expand-transition> -->
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  data: () => ({
    model: null
  }),
  computed: {
    ...mapState("order",['order_list'])
  },
  methods: {
    ...mapActions("order",['ALL_ORDER_LIST_HOME_PAGE'])
  },
  mounted(){
    this.ALL_ORDER_LIST_HOME_PAGE()
  }
};
</script>

<style></style>
