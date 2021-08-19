<template>
  <div>
    <template>
      <v-row justify="center">
        <v-dialog v-model="orderToBuy" persistent max-width="55%">
          <template> </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Добавить заявку на покупку</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" text @click="closeAddToBuyDialog">
                Закрыть
              </v-btn>
              <v-btn color="success" text @click="closeAddToBuyDialog">
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
  props: ["orderToBuy"],

  methods: {
    closeAddToBuyDialog() {
      this.$emit("closeAddToBuyDialog");
    },
  },
};
</script>
<style>
</style>
