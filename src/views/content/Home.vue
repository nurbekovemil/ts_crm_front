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
            Товарный сырьевой сектор
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
                  :dark="active ? true : false"
                  @click="toggle"
                >
                  <v-card-title>title</v-card-title>
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
      </v-col>
      <v-col>
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
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  data: () => ({
    model: null
  }),
  computed:{
    ...mapGetters(['GET_IS_AUTH', 'GET_USER'])
  },
  methods: {
    toggleMarker(){
      console.log('text')
    }
  }
}
</script>
