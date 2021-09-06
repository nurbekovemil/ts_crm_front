<template>
  <div>
    <template>
      <v-row justify="center">
        <v-dialog v-model="orderToSell" persistent max-width="55%">
          <template> </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Добавить заявку на продажу</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row class="pa-3">
                  <v-col cols="12" sm="6">
                    <v-text-field
                      dense
                      label="Группа товаров/услуг"
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      dense
                      label="Код товара/услуги (ТН ВЭД)"
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      dense
                      label="Описание"
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      dense
                      label="Страна-производитель"
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      dense
                      label="Фирма-производитель"
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      dense
                      label="Качественные показатели товара"
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      dense
                      label="Сведения об упаковке товара"
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      dense
                      label="Сведения о маркировке товара"
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field dense label="Цена" outlined></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      dense
                      label="Ставка НДС"
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      dense
                      label="Колличество"
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      dense
                      label="Стоимость"
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      dense
                      label="Местонахождение"
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      dense
                      label="Условия оплаты"
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      dense
                      label="Сроки поставки"
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      dense
                      label="Условия поставки"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" text @click="closeAddToSellDialog">
                Закрыть
              </v-btn>
              <v-btn color="success" text @click="closeAddToSellDialog">
                Сохранить
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
  </div>
</template>

<script>
export default {
  props: ["orderToSell"],

  methods: {
    closeAddToSellDialog() {
      this.$emit("closeAddToSellDialog");
    },
  },
};
</script>
<style>
</style>
