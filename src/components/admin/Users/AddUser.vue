
            <template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template> </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Добавить пользователя</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4"> </v-col>
              <v-col cols="12" sm="6" md="4"> </v-col>
              <v-col cols="12" sm="6" md="4"> </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Логин"
                  required
                  outlined
                  dense
                  prepend-inner-icon="mdi-account"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Пароль"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  @click:append="showPassword = !showPassword"
                  required
                  outlined
                  dense
                  prepend-inner-icon="mdi-lock"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select :items="['1', '2']" label="Роль" required></v-select>
              </v-col>
              <v-col cols="12" sm="6"> </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeAddUserDialog">
            Закрыть
          </v-btn>
          <v-btn color="blue darken-1" text @click="closeAddUserDialog">
            Добавить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>


      <script>
export default {
  props: ["dialog"],
  data: () => ({
     showPassword: false,
  }),
  methods: {
    closeAddUserDialog() {
      this.$emit("closeAddUserDialog");
    },
  },
};
</script>

      <style lang="">
</style>`