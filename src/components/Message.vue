<template>
  <div class="text-center ma-2">
    <v-snackbar
      v-model="message.isAlert"
      :timeout="timeout"
      :color="message.color"
    >
        <template>
        <v-icon>{{message.icon}}</v-icon>
        </template>
        {{ message.text }}
    </v-snackbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    timeout: 4000,
  }),
  computed: {
    ...mapState('message',['message']),
  },
};
</script>