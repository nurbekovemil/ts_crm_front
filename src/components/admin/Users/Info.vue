<template>
  <v-card class="my-3">                   
    <v-row>
      <v-col>
        <v-row justify="center" class="py-3">
          <v-avatar size="120">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        </v-row>
      </v-col>
    </v-row>
    <v-card-title class="d-flex justify-center">Антон Антонов</v-card-title>

    <v-card-actions> </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
};
</script>