<template>
  <div>
    <v-parallax
      height="300"
      src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="5"
        >
          <h1 class="text-h4 font-weight-thin mb-4">
            Товарно сырьевой сектор
          </h1>
          <v-text-field
            solo
            append-icon="mdi-magnify"
            label="Введите описание товара"
            @click:append="toggleMarker"
          ></v-text-field>   
        </v-col>
      </v-row>
    </v-parallax>
    <v-row>
      <v-col>
        <h3 class="py-3">Заявки на продажу</h3>
        <v-sheet
            class="mx-auto"
            elevation="0"
            max-width="100%"
          >
            <v-slide-group
              v-model="model"
              class="pa-4"
              show-arrows
                    center-active

              
            >
              <v-slide-item
                v-for="order in purchaseOrders"
                :key="order.id"
                v-slot="{ active, toggle }"
                
              >
                <v-card
                  :color="active ? 'primary' : 'grey lighten-1'"
                  class="ma-4"
                  height="100"
                  width="250"
                  :dark="active ? true : false"
                  @click="toggle"
                >
                  <v-img 
                    :src="order.img"
                    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                    height="100"
                    dark
                  >
                      <v-card-title>{{order.product}}</v-card-title>
                    
                  </v-img>
                </v-card>
              </v-slide-item>
            </v-slide-group>

            <v-expand-transition>
              <v-sheet
                v-if="model != null"
                height="250"
                tile
              >
                    <v-card
                      class="mx-auto"
                      flat
                      max-height="250"
                      max-width="800"
                    >
                      <v-card-title>
                        <span class="text-h6 font-weight-light">{{purchaseOrders[model].product}}</span>
                      </v-card-title>

                      <v-card-text class="text-h5 font-weight-bold">
                        {{purchaseOrders[model].description}}
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
                            <v-list-item-title>{{purchaseOrders[model].user}}</v-list-item-title>
                          </v-list-item-content>

                          <v-row
                            align="center"
                            justify="end"
                          >
                            <v-btn
                              outlined
                              rounded
                              small
                            >
                              Купить
                            </v-btn>
                          </v-row>
                        </v-list-item>
                      </v-card-actions>
                    </v-card>
               
              </v-sheet>
            </v-expand-transition>
        </v-sheet>
      </v-col>
      <!-- <v-col>
        <h3 class="py-3">Заявки на покупку</h3>
        <v-sheet
            class="mx-auto"
            elevation="0"
            max-width="100%"
          >
            <v-slide-group
              v-model="model"
              class="pa-4"
              show-arrows
            >
              <v-slide-item
                v-for="n in 15"
                :key="n"
                v-slot="{ active, toggle }"
              >
                <v-card
                  :color="active ? 'primary' : 'grey lighten-1'"
                  class="ma-4"
                  height="100"
                  width="250"
                  @click="toggle"
                >
                  <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                  >
                    <v-scale-transition>
                      <v-icon
                        v-if="active"
                        color="white"
                        size="48"
                        v-text="'mdi-close-circle-outline'"
                      ></v-icon>
                    </v-scale-transition>
                  </v-row>
                </v-card>
              </v-slide-item>
            </v-slide-group>

            <v-expand-transition>
              <v-sheet
                v-if="model != null"
                height="200"
                tile
              >
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <h3 class="text-h6">
                    Selected {{ model }}
                  </h3>
                </v-row>
              </v-sheet>
            </v-expand-transition>
        </v-sheet>
      </v-col> -->
    </v-row>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  data: () => ({
    model: null,
    purchaseOrders:[
      {
        id:1,
        product: 'Товар 1',
        user:'Бакай',
        description:'Greyhound divisively hello coldly wonderfully marginally far upon excluding.',
        img:'https://cdn.vuetifyjs.com/images/cards/foster.jpg'
      },
      {
        id:2,
        product: 'Товар 2',
        user:'Эмил',
        description:'Greyhound divisively hello coldly wonderfully marginally far upon excluding.',
        img:'https://cdn.vuetifyjs.com/images/cards/plane.jpg'
      },
      {
        id:3,
        product: 'Товар 3',
        user:'Нур',
        description:'Greyhound divisively hello coldly wonderfully marginally far upon excluding.',
        img:'https://cdn.vuetifyjs.com/images/cards/foster.jpg'
      },
      {
        id:4,
        product: 'Товар 4',
        user:'Атай',
        description:'Greyhound divisively hello coldly wonderfully marginally far upon excluding.',

        img:'https://cdn.vuetifyjs.com/images/cards/road.jpg'
      },
      {
        id:5,
        product: 'Товар 5',
        user:'Марсел',
        description:'Greyhound divisively hello coldly wonderfully marginally far upon excluding.',
        img:'https://cdn.vuetifyjs.com/images/cards/plane.jpg'
      },
    ]
  }),
  computed:{
    ...mapGetters(['GET_IS_AUTH', 'GET_USER'])
  },
  methods: {
    toggleMarker(){
      console.log('text')
    },
    getProd(order, toggle){
      toggle()
      this.model = order
    }
  }
}
</script>
