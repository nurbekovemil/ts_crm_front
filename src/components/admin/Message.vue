<template>
  <div class="text-center ma-2">
    <v-snackbar
      v-model="GET_MESSAGE.isAlert"
      :timeout="timeout"
      :color="GET_MESSAGE.color"
    >
        <template>
        <v-icon>{{GET_MESSAGE.icon}}</v-icon>
        </template>
        {{ GET_MESSAGE.text }}
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    timeout: 4000,
  }),
  computed: {
    ...mapGetters(["GET_MESSAGE"]),
  },
};
</script>