<template>
  <v-row justify="center">
    <v-dialog v-model="isEditDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Редактировать пользователя</span>
        </v-card-title>
        <v-card-text v-if="updateUser">
          <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="updateUser.username"
                  label="Логин пользователя"
                  required
                  outlined
                  dense
                  prepend-inner-icon="mdi-account"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="password"
                  label="Новый пароль"
                  required
                  outlined
                  dense
                  prepend-inner-icon="mdi-account"
                ></v-text-field>
              </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="closeEditUserDialog"> Закрыть </v-btn>
          <v-btn color="success" text @click="update">
            Сохранить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import {mapActions, mapState, mapMutations} from 'vuex'
export default {
  props: ["updateUser"],
  data: () => ({
    password: null,
  }),
  computed: {
    ...mapState("user", ["isEditDialog"])
  },
  methods: {
    ...mapActions("user",["UPDATEUSER"]),
    ...mapMutations("user", ["TOGGLE_EDIT_DIALOG"]),
    closeEditUserDialog() {
      this.TOGGLE_EDIT_DIALOG()
    },
    update(){
      if(this.password){
        return this.UPDATEUSER({...this.updateUser, ...{password: this.password}})
      }
      this.UPDATEUSER(this.updateUser)
    }
  },
};
</script>