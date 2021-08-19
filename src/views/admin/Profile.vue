<template>
  <v-card class="mx-auto" width="100%" tile>
    <v-img
      height="100%"
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
    >
      <v-btn color="red" icon @click="toggleEditForm">
        <v-icon> mdi-pencil </v-icon>
      </v-btn>
      <v-row align="end" class="fill-height">
        <v-col align-self="center" cols="12" class="d-flex justify-center">
          <v-avatar class="profile" color="grey" size="164">
            <v-img
              src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
            ></v-img>
          </v-avatar>
        </v-col>
        <v-col class="py-0" align="center" align-self="center">
          <v-list-item color="rgba(0, 0, 0, .4)" dark>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Marcus Obrien
              </v-list-item-title>
              <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
    <EditProfile
      :isEditing="isEditing"
      @toggleEditProfileDialog="toggleEditForm"
    />
  </v-card>
</template>


<script>
import EditProfile from "@/components/admin/Profile/Edit.vue";
export default {
  data: () => ({
    isEditing: false,
  }),
  components: {
    EditProfile,
  },
  methods: {
    toggleEditForm() {
      this.isEditing = !this.isEditing;
    },
  },
};
</script>

<style>
</style>